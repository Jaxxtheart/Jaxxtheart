import React, { useState, useRef, useEffect } from 'react';
import { Play, Square, Radio, BarChart3, Clock, AlertCircle, Download, Zap, Trash2 } from 'lucide-react';

const TorqueAnalytics = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedStation, setSelectedStation] = useState('99.2');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [detectedAds, setDetectedAds] = useState([]);
  const [systemLogs, setSystemLogs] = useState([]);
  const [audioLevel, setAudioLevel] = useState(0);
  const [companyStats, setCompanyStats] = useState({});
  const [campaignStats, setCampaignStats] = useState({});
  const monitoringIntervalRef = useRef(null);
  const audioIntervalRef = useRef(null);

  const stations = [
    { freq: '99.2', name: 'YFM', color: 'bg-purple-500' },
    { freq: '94.7', name: '94.7 Highveld Stereo', color: 'bg-blue-500' },
    { freq: '702', name: 'Talk Radio 702', color: 'bg-green-500' }
  ];

  const advertisers = [
    { company: 'Coca-Cola', campaign: 'Summer Refresh 2024', category: 'Beverages' },
    { company: 'MTN', campaign: '5G Launch', category: 'Telecommunications' },
    { company: 'Woolworths', campaign: 'Winter Collection', category: 'Retail' },
    { company: 'Standard Bank', campaign: 'Home Loans', category: 'Finance' },
    { company: 'Nandos', campaign: 'Peri-Peri Special', category: 'Food & Restaurants' },
    { company: 'BMW', campaign: 'X5 Launch', category: 'Automotive' },
    { company: 'Checkers', campaign: 'Price Slash', category: 'Retail' },
    { company: 'Vodacom', campaign: 'Unlimited Data', category: 'Telecommunications' },
    { company: 'Pick n Pay', campaign: 'Smart Shopper', category: 'Retail' },
    { company: 'FNB', campaign: 'eBucks Rewards', category: 'Finance' }
  ];

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Add system log
  const addLog = (message, type = 'info') => {
    const logEntry = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      message,
      type
    };
    setSystemLogs(prev => [logEntry, ...prev].slice(0, 50)); // Keep last 50 logs
  };

  // Simulate audio level monitoring
  const simulateAudioLevel = () => {
    audioIntervalRef.current = setInterval(() => {
      const newLevel = Math.random() * 100;
      setAudioLevel(newLevel);
    }, 100);
  };

  // Simulate ad detection
  const simulateAdDetection = () => {
    monitoringIntervalRef.current = setInterval(() => {
      // Random ad detection (30% chance every 10 seconds)
      if (Math.random() > 0.7) {
        const randomAd = advertisers[Math.floor(Math.random() * advertisers.length)];
        const station = stations.find(s => s.freq === selectedStation);
        const duration = Math.floor(Math.random() * 30) + 15; // 15-45 seconds

        const newAd = {
          id: Date.now(),
          timestamp: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          station: `${station.freq} ${station.name}`,
          company: randomAd.company,
          campaign: randomAd.campaign,
          category: randomAd.category,
          duration: duration,
          confidence: (Math.random() * 15 + 85).toFixed(1) // 85-100% confidence
        };

        setDetectedAds(prev => [newAd, ...prev]);

        // Update company stats
        setCompanyStats(prev => ({
          ...prev,
          [randomAd.company]: (prev[randomAd.company] || 0) + 1
        }));

        // Update campaign stats
        const campaignKey = `${randomAd.company} - ${randomAd.campaign}`;
        setCampaignStats(prev => ({
          ...prev,
          [campaignKey]: {
            count: (prev[campaignKey]?.count || 0) + 1,
            totalDuration: (prev[campaignKey]?.totalDuration || 0) + duration,
            category: randomAd.category
          }
        }));

        addLog(`Ad detected: ${randomAd.company} - ${randomAd.campaign} (${duration}s)`, 'success');
      }
    }, 10000); // Check every 10 seconds
  };

  const startMonitoring = () => {
    setIsMonitoring(true);
    const station = stations.find(s => s.freq === selectedStation);
    addLog(`Started monitoring ${station.freq} ${station.name}`, 'info');
    simulateAudioLevel();
    simulateAdDetection();
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    if (monitoringIntervalRef.current) {
      clearInterval(monitoringIntervalRef.current);
    }
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
    }
    setAudioLevel(0);
    addLog('Monitoring stopped', 'warning');
  };

  const exportData = () => {
    const exportObject = {
      exportDate: new Date().toISOString(),
      station: selectedStation,
      detectedAds,
      companyStats,
      campaignStats,
      totalAds: detectedAds.length
    };

    const dataStr = JSON.stringify(exportObject, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `torque-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);

    addLog('Data exported successfully', 'success');
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      setDetectedAds([]);
      setCompanyStats({});
      setCampaignStats({});
      setSystemLogs([]);
      addLog('All data cleared', 'warning');
    }
  };

  const formatDuration = (seconds) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  const topCompanies = Object.entries(companyStats)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const topCampaigns = Object.entries(campaignStats)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5);

  const totalAirtime = Object.values(campaignStats)
    .reduce((sum, campaign) => sum + campaign.totalDuration, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg shadow-2xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-3 rounded-lg">
                <Radio className="w-8 h-8 text-teal-500" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Torque Analytics</h1>
                <p className="text-teal-50">Professional Radio Advertisement Monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/20 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-mono text-lg">
                {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Control Panel */}
          <div className="lg:col-span-1 space-y-6">

            {/* Station Selection */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Radio className="w-5 h-5 text-teal-400" />
                Station Selection
              </h2>
              <div className="space-y-3">
                {stations.map(station => (
                  <button
                    key={station.freq}
                    onClick={() => !isMonitoring && setSelectedStation(station.freq)}
                    disabled={isMonitoring}
                    className={`w-full p-4 rounded-lg font-semibold transition-all ${
                      selectedStation === station.freq
                        ? `${station.color} text-white shadow-lg scale-105`
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    } ${isMonitoring ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div className="text-2xl">{station.freq}</div>
                    <div className="text-sm opacity-90">{station.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Monitoring Controls */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4">Controls</h2>
              <div className="space-y-3">
                {!isMonitoring ? (
                  <button
                    onClick={startMonitoring}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Play className="w-6 h-6" />
                    Start Monitoring
                  </button>
                ) : (
                  <button
                    onClick={stopMonitoring}
                    className="w-full bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Square className="w-6 h-6" />
                    Stop Monitoring
                  </button>
                )}

                <button
                  onClick={exportData}
                  disabled={detectedAds.length === 0}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Download className="w-5 h-5" />
                  Export Data
                </button>

                <button
                  onClick={clearData}
                  disabled={detectedAds.length === 0}
                  className="w-full bg-rose-600 hover:bg-rose-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Trash2 className="w-5 h-5" />
                  Clear Data
                </button>
              </div>
            </div>

            {/* Audio Level Meter */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Audio Level
              </h2>
              <div className="space-y-2">
                <div className="h-8 bg-slate-700 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 transition-all duration-100"
                    style={{ width: `${audioLevel}%` }}
                  />
                </div>
                <div className="text-center text-sm text-slate-400">
                  {audioLevel.toFixed(0)}%
                </div>
              </div>
              {isMonitoring && (
                <div className="mt-3 flex items-center justify-center gap-2 text-green-400 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Monitoring Active
                </div>
              )}
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                Quick Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                  <span className="text-slate-300">Total Ads</span>
                  <span className="text-2xl font-bold text-teal-400">{detectedAds.length}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                  <span className="text-slate-300">Total Airtime</span>
                  <span className="text-2xl font-bold text-cyan-400">
                    {formatDuration(totalAirtime)}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-700 rounded-lg">
                  <span className="text-slate-300">Companies</span>
                  <span className="text-2xl font-bold text-purple-400">
                    {Object.keys(companyStats).length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Data Display */}
          <div className="lg:col-span-2 space-y-6">

            {/* Detected Advertisements */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-teal-400" />
                Detected Advertisements ({detectedAds.length})
              </h2>
              <div className="max-h-96 overflow-y-auto space-y-3">
                {detectedAds.length === 0 ? (
                  <div className="text-center py-8 text-slate-400">
                    <Radio className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No advertisements detected yet</p>
                    <p className="text-sm">Start monitoring to detect ads</p>
                  </div>
                ) : (
                  detectedAds.map(ad => (
                    <div key={ad.id} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-650 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <div className="font-bold text-lg text-teal-300">{ad.company}</div>
                          <div className="text-sm text-slate-300">{ad.campaign}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-slate-400">{ad.timestamp}</div>
                          <div className="text-xs text-slate-500">{ad.date}</div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                        <div>
                          <span className="text-slate-400">Station:</span>
                          <div className="font-semibold">{ad.station}</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Duration:</span>
                          <div className="font-semibold">{ad.duration}s</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Category:</span>
                          <div className="font-semibold">{ad.category}</div>
                        </div>
                        <div>
                          <span className="text-slate-400">Confidence:</span>
                          <div className="font-semibold text-green-400">{ad.confidence}%</div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Analytics Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Top Companies */}
              <div className="bg-slate-800 rounded-lg shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-400" />
                  Top Companies
                </h2>
                <div className="space-y-3">
                  {topCompanies.length === 0 ? (
                    <div className="text-center py-4 text-slate-400 text-sm">
                      No data available
                    </div>
                  ) : (
                    topCompanies.map(([company, count], index) => (
                      <div key={company} className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-teal-400 w-8">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold">{company}</span>
                            <span className="text-teal-400 font-bold">{count}</span>
                          </div>
                          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-teal-500 to-cyan-500"
                              style={{
                                width: `${(count / Math.max(...Object.values(companyStats))) * 100}%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Top Campaigns */}
              <div className="bg-slate-800 rounded-lg shadow-xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  Top Campaigns
                </h2>
                <div className="space-y-3">
                  {topCampaigns.length === 0 ? (
                    <div className="text-center py-4 text-slate-400 text-sm">
                      No data available
                    </div>
                  ) : (
                    topCampaigns.map(([campaign, data], index) => (
                      <div key={campaign} className="bg-slate-700 rounded-lg p-3">
                        <div className="flex items-start gap-2 mb-2">
                          <div className="text-xl font-bold text-cyan-400">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm">{campaign}</div>
                            <div className="text-xs text-slate-400">{data.category}</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-slate-400">Spots:</span>
                            <span className="ml-1 font-bold text-cyan-400">{data.count}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Airtime:</span>
                            <span className="ml-1 font-bold text-cyan-400">
                              {formatDuration(data.totalDuration)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* System Logs */}
            <div className="bg-slate-800 rounded-lg shadow-xl p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                System Logs
              </h2>
              <div className="max-h-64 overflow-y-auto space-y-2 font-mono text-sm">
                {systemLogs.length === 0 ? (
                  <div className="text-center py-4 text-slate-400">
                    No system logs yet
                  </div>
                ) : (
                  systemLogs.map(log => (
                    <div
                      key={log.id}
                      className={`p-2 rounded ${
                        log.type === 'success'
                          ? 'bg-green-900/30 text-green-300'
                          : log.type === 'warning'
                          ? 'bg-yellow-900/30 text-yellow-300'
                          : log.type === 'error'
                          ? 'bg-red-900/30 text-red-300'
                          : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      <span className="text-slate-400">[{log.timestamp}]</span> {log.message}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-slate-400 text-sm">
          <p>© 2024 Torque Analytics. Professional Radio Advertisement Monitoring Platform.</p>
          <p className="mt-1">Real-time ad detection and analytics for radio broadcasting.</p>
        </div>
      </div>
    </div>
  );
};

export default TorqueAnalytics;

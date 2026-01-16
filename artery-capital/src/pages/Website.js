import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Shield, Target, Users, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Website = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">Artery Capital</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-300 hover:text-emerald-400 transition-colors">About</a>
            <a href="#services" className="text-slate-300 hover:text-emerald-400 transition-colors">Services</a>
            <a href="#why-us" className="text-slate-300 hover:text-emerald-400 transition-colors">Why Us</a>
            <a href="#contact" className="text-slate-300 hover:text-emerald-400 transition-colors">Contact</a>
          </div>
          <Link
            to="/apply"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Grow Your Wealth with
                <span className="text-emerald-500"> Smart Investments</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Expert investment solutions tailored to your financial goals. Join thousands of investors who trust Artery Capital for their financial future.
              </p>
              <Link
                to="/apply"
                className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="mt-8 flex items-center space-x-6 text-slate-400">
                <div>
                  <div className="text-3xl font-bold text-white">$2.5B+</div>
                  <div className="text-sm">Assets Managed</div>
                </div>
                <div className="h-12 w-px bg-slate-700"></div>
                <div>
                  <div className="text-3xl font-bold text-white">15K+</div>
                  <div className="text-sm">Active Investors</div>
                </div>
                <div className="h-12 w-px bg-slate-700"></div>
                <div>
                  <div className="text-3xl font-bold text-white">12%</div>
                  <div className="text-sm">Avg. Returns</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-emerald-500/30">
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-300">Portfolio Growth</span>
                      <TrendingUp className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">+24.8%</div>
                    <div className="text-sm text-emerald-500">Last 12 months</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-300">Risk Score</span>
                      <Shield className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="text-3xl font-bold text-white">Low-Medium</div>
                    <div className="text-sm text-slate-400">Balanced portfolio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Investment Services</h2>
            <p className="text-xl text-slate-300">Comprehensive solutions for every investor</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all">
              <Target className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Portfolio Management</h3>
              <p className="text-slate-300">
                Expert management of diversified portfolios tailored to your risk tolerance and financial objectives.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all">
              <TrendingUp className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Wealth Planning</h3>
              <p className="text-slate-300">
                Strategic planning to help you achieve long-term financial goals and build generational wealth.
              </p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 hover:border-emerald-500/50 transition-all">
              <Shield className="h-12 w-12 text-emerald-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Risk Management</h3>
              <p className="text-slate-300">
                Comprehensive risk assessment and mitigation strategies to protect your investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Artery Capital?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 rounded-lg p-3">
                    <Users className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                    <p className="text-slate-300">Over 50 years of combined experience in financial markets</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 rounded-lg p-3">
                    <Shield className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Secure Platform</h3>
                    <p className="text-slate-300">Bank-level security with full regulatory compliance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 rounded-lg p-3">
                    <Target className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Personalized Approach</h3>
                    <p className="text-slate-300">Custom investment strategies aligned with your unique goals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-500/20 rounded-lg p-3">
                    <TrendingUp className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                    <p className="text-slate-300">Consistent returns and transparent performance reporting</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-emerald-500/30">
              <blockquote className="text-xl text-slate-300 italic mb-6">
                "Artery Capital transformed my investment strategy. Their personalized approach and expert guidance helped me achieve returns I never thought possible."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                  JD
                </div>
                <div>
                  <div className="text-white font-semibold">John Doe</div>
                  <div className="text-slate-400 text-sm">Investor since 2020</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-500 to-blue-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of investors building their financial future with Artery Capital
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-xl text-slate-300">Have questions? We're here to help</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 text-center">
              <Mail className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-slate-300">info@arterycapital.com</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 text-center">
              <Phone className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-slate-300">+1 (555) 123-4567</p>
            </div>
            <div className="bg-slate-900/50 rounded-xl p-8 border border-slate-700 text-center">
              <MapPin className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-slate-300">123 Financial District, New York</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp className="h-6 w-6 text-emerald-500" />
                <span className="text-xl font-bold text-white">Artery Capital</span>
              </div>
              <p className="text-slate-400">
                Building wealth through strategic investments
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Market Insights</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Disclosures</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Artery Capital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Website;

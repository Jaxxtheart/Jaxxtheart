import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, ArrowLeft, User, Mail, Phone, DollarSign, Briefcase, CheckCircle } from 'lucide-react';

const ApplicationPortal = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    investmentAmount: '',
    investmentGoal: '',
    riskTolerance: '',
    employmentStatus: '',
    annualIncome: '',
    investmentExperience: '',
    additionalInfo: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, this would send data to your backend
    console.log('Application submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full bg-slate-800/50 rounded-2xl p-12 border border-emerald-500/30 text-center">
          <div className="bg-emerald-500/20 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-16 w-16 text-emerald-500" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Application Submitted!</h2>
          <p className="text-xl text-slate-300 mb-8">
            Thank you for your interest in Artery Capital. Our team will review your application and contact you within 2-3 business days.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-8 w-8 text-emerald-500" />
            <span className="text-2xl font-bold text-white">Artery Capital</span>
          </Link>
          <Link
            to="/"
            className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Application Form */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Investment Application</h1>
            <p className="text-xl text-slate-300">
              Take the first step towards your financial goals
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700">
            {/* Personal Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="mr-3 h-6 w-6 text-emerald-500" />
                Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Mail className="mr-3 h-6 w-6 text-emerald-500" />
                Contact Information
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>

            {/* Investment Details */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <DollarSign className="mr-3 h-6 w-6 text-emerald-500" />
                Investment Details
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Initial Investment Amount *</label>
                  <select
                    name="investmentAmount"
                    value={formData.investmentAmount}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select amount range</option>
                    <option value="10k-50k">$10,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Investment Goal *</label>
                  <select
                    name="investmentGoal"
                    value={formData.investmentGoal}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your primary goal</option>
                    <option value="wealth-growth">Wealth Growth</option>
                    <option value="retirement">Retirement Planning</option>
                    <option value="income">Generate Income</option>
                    <option value="preservation">Capital Preservation</option>
                    <option value="education">Education Funding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Risk Tolerance *</label>
                  <select
                    name="riskTolerance"
                    value={formData.riskTolerance}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your risk tolerance</option>
                    <option value="conservative">Conservative - Preserve capital, minimize risk</option>
                    <option value="moderate">Moderate - Balance growth and stability</option>
                    <option value="aggressive">Aggressive - Maximize growth potential</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Financial Background */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-emerald-500" />
                Financial Background
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Employment Status *</label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select employment status</option>
                    <option value="employed">Employed Full-Time</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="retired">Retired</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Annual Income *</label>
                  <select
                    name="annualIncome"
                    value={formData.annualIncome}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select income range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="500k+">$500,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-semibold">Investment Experience *</label>
                  <select
                    name="investmentExperience"
                    value={formData.investmentExperience}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner - New to investing</option>
                    <option value="intermediate">Intermediate - Some investment experience</option>
                    <option value="advanced">Advanced - Experienced investor</option>
                    <option value="professional">Professional - Financial background</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-10">
              <label className="block text-slate-300 mb-2 font-semibold">Additional Information (Optional)</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows="4"
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us more about your financial goals or any specific questions you have..."
              />
            </div>

            {/* Terms and Submit */}
            <div className="border-t border-slate-700 pt-8">
              <div className="mb-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-5 h-5 rounded border-slate-700 bg-slate-900/50 text-emerald-500 focus:ring-emerald-500"
                  />
                  <span className="text-slate-300">
                    I agree to the terms and conditions and understand that this application does not guarantee investment services. Artery Capital will review my application and contact me with next steps. *
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-emerald-500/50"
              >
                Submit Application
              </button>
              <p className="text-center text-slate-400 text-sm mt-4">
                * Required fields
              </p>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">What happens next?</h3>
            <ul className="text-slate-300 space-y-2">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">1.</span>
                Our team will review your application within 2-3 business days
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">2.</span>
                We'll schedule a consultation to discuss your investment goals
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">3.</span>
                We'll create a personalized investment strategy tailored to your needs
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">4.</span>
                Start your journey towards financial growth with Artery Capital
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPortal;

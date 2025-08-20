import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCrown, FaRocket, FaClock, FaCheckCircle, FaEye, FaDownload, FaShare, FaPlus, FaChartLine, FaTrophy, FaStar } from 'react-icons/fa';
import UserLayout from '../layouts/UserLayout';
import CredentialCard from '../components/CredentialCard';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  const credentials = [
    { 
      id: 1,
      title: 'Smart Contract Audit', 
      status: 'Minted', 
      date: '2025-01-14',
      type: 'Security',
      reviewScore: 95,
      views: 234,
      downloads: 45
    },
    { 
      id: 2,
      title: 'DeFi Protocol Development', 
      status: 'Pending', 
      date: '2025-01-10',
      type: 'Development',
      reviewScore: null,
      views: 0,
      downloads: 0
    },
    { 
      id: 3,
      title: 'NFT Marketplace Frontend', 
      status: 'Under Review', 
      date: '2025-01-08',
      type: 'Frontend',
      reviewScore: null,
      views: 12,
      downloads: 0
    },
    { 
      id: 4,
      title: 'Blockchain Integration', 
      status: 'Minted', 
      date: '2025-01-05',
      type: 'Integration',
      reviewScore: 88,
      views: 156,
      downloads: 23
    }
  ];

  const stats = [
    { label: 'Total Credentials', value: '4', icon: FaTrophy, color: 'from-yellow-500 to-orange-500' },
    { label: 'Minted NFTs', value: '2', icon: FaCrown, color: 'from-purple-500 to-pink-500' },
    { label: 'Average Score', value: '91.5', icon: FaStar, color: 'from-green-500 to-emerald-500' },
    { label: 'Total Views', value: '402', icon: FaEye, color: 'from-blue-500 to-indigo-500' }
  ];

  const tabs = [
    { id: 'all', label: 'All Credentials', count: credentials.length },
    { id: 'minted', label: 'Minted', count: credentials.filter(c => c.status === 'Minted').length },
    { id: 'pending', label: 'Pending', count: credentials.filter(c => c.status === 'Pending' || c.status === 'Under Review').length }
  ];

  const filteredCredentials = activeTab === 'all' 
    ? credentials 
    : activeTab === 'minted'
    ? credentials.filter(c => c.status === 'Minted')
    : credentials.filter(c => c.status === 'Pending' || c.status === 'Under Review');

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Minted': return FaCheckCircle;
      case 'Pending': return FaClock;
      case 'Under Review': return FaEye;
      default: return FaClock;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Minted': return 'from-green-500 to-emerald-500';
      case 'Pending': return 'from-yellow-500 to-orange-500';
      case 'Under Review': return 'from-blue-500 to-indigo-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <UserLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
        >
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
              My <span className="text-gradient-primary">Dashboard</span>
            </h1>
            <p className="text-xl text-gray-300">
              Track your credential journey and showcase your verified skills
            </p>
          </div>
          
          <motion.a
            href="/submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary self-start lg:self-auto"
          >
            <FaPlus className="mr-2" />
            Submit New Credential
          </motion.a>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="card-modern p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="text-xl text-white" />
                </div>
                <FaChartLine className="text-gray-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-2 bg-gray-900/50 p-2 rounded-xl backdrop-blur-sm"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeTab === tab.id ? 'bg-white/20' : 'bg-gray-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Credentials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredCredentials.map((credential, index) => {
            const StatusIcon = getStatusIcon(credential.status);
            const statusColor = getStatusColor(credential.status);
            
            return (
              <motion.div
                key={credential.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                className="card-modern group cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${statusColor} rounded-lg flex items-center justify-center`}>
                    <StatusIcon className="text-white text-sm" />
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                    {credential.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {credential.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Status</span>
                    <span className={`font-medium ${
                      credential.status === 'Minted' ? 'text-green-400' :
                      credential.status === 'Pending' ? 'text-yellow-400' :
                      'text-blue-400'
                    }`}>
                      {credential.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Submitted</span>
                    <span className="text-white">{new Date(credential.date).toLocaleDateString()}</span>
                  </div>

                  {credential.reviewScore && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Score</span>
                      <span className="text-green-400 font-bold">{credential.reviewScore}/100</span>
                    </div>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FaEye />
                    <span>{credential.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaDownload />
                    <span>{credential.downloads}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors text-sm font-medium">
                    <FaEye className="inline mr-1" />
                    View
                  </button>
                  {credential.status === 'Minted' && (
                    <>
                      <button className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                        <FaDownload />
                      </button>
                      <button className="px-3 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors">
                        <FaShare />
                      </button>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredCredentials.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaRocket className="text-3xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">No credentials found</h3>
            <p className="text-gray-400 mb-6">Start building your reputation by submitting your first credential</p>
            <a href="/submit" className="btn-primary">
              <FaPlus className="mr-2" />
              Submit Credential
            </a>
          </motion.div>
        )}
      </motion.div>
    </UserLayout>
  );
};

export default Dashboard;

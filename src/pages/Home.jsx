import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWallet, FaCheck, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../components/NavBar';
import { useWallet } from '../hooks/useWallet';

const Home = () => {
  const { account, connectWallet, disconnectWallet } = useWallet();

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const steps = [
    { 
      step: "1", 
      title: "Submit", 
      desc: "Upload your project, GitHub link, or writeup for review.",
      icon: FaRocket,
      bgColor: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      stepBg: "from-blue-500 to-blue-600"
    },
    { 
      step: "2", 
      title: "Get Reviewed", 
      desc: "Verified reviewers assess your work and approve it.",
      icon: FaShieldAlt,
      bgColor: "from-green-100 to-green-200",
      iconColor: "text-green-600",
      stepBg: "from-green-500 to-green-600"
    },
    { 
      step: "3", 
      title: "Mint NFT", 
      desc: "Your credential is minted on-chain and added to your profile.",
      icon: FaUsers,
      bgColor: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      stepBg: "from-purple-500 to-purple-600"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <Navbar />
      
      {/* Wallet Status Banner */}
      {account && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200 py-4 shadow-sm"
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3 text-green-800">
              <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
              <span className="font-semibold">Wallet Connected: {formatAddress(account)}</span>
            </div>
            <button
              onClick={disconnectWallet}
              className="text-green-600 hover:text-green-800 text-sm font-medium transition-colors duration-200 hover:bg-green-100 px-3 py-1 rounded-lg"
            >
              Disconnect
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium border border-blue-200">
              <FaRocket className="text-blue-600" />
              Web3 Credential Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                Submit. Verify. Mint.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Own Your Skills.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              CREDPROOF is your Web3 credentialing platform. Verified by peers. Minted on-chain. 
              Build your professional reputation with blockchain-verified credentials.
            </p>
            
            {/* Wallet Connection CTA */}
            {!account ? (
              <div className="space-y-4">
                <p className="text-gray-500 text-sm">Connect your wallet to get started</p>
                <button
                  onClick={connectWallet}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
                >
                  <FaWallet />
                  <span>Connect Wallet</span>
                </button>
              </div>
            ) : (
              <Link
                to="/submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 hover:from-green-700 hover:to-emerald-700"
              >
                Get Verified <FaArrowRight />
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your credentials verified and minted on the blockchain in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ step, title, desc, icon: Icon, bgColor, iconColor, stepBg }, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r ${stepBg} text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                    {step}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-2xl ${iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Step {step}: {title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "10K+", label: "Credentials Minted", icon: FaRocket },
              { number: "5K+", label: "Active Users", icon: FaUsers },
              { number: "99.9%", label: "Uptime", icon: FaShieldAlt }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto">
                  <stat.icon className="text-2xl text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600">
            &copy; {new Date().getFullYear()} CREDPROOF — Built on Web3
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

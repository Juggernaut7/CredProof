// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaCheck, FaSpinner } from 'react-icons/fa';
import Illustration from './Illustration';
import { useWallet } from '../hooks/useWallet';

export default function HeroSection() {
  const { account, connectWallet, disconnectWallet, isConnecting } = useWallet();

  const handleWalletAction = () => {
    if (account) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };

  const formatAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-[#00bfff]/10 border border-[#00bfff]/20 text-[#00bfff] px-4 py-2 rounded-full text-sm font-medium"
            >
              <div className="w-2 h-2 bg-[#00bfff] rounded-full animate-pulse"></div>
              Web3 Credential Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                On-chain
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00bfff] via-[#0099cc] to-[#0077aa] bg-clip-text text-transparent">
                Credential Verification
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Mint verifiable proof of your work as NFTs, signed by trusted reviewers on the blockchain. 
              Build your professional reputation with on-chain credentials.
            </motion.p>

            {/* Wallet Connection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="space-y-4"
            >
              {account ? (
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <div className="flex items-center gap-3 bg-green-600/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-xl backdrop-blur-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Connected: {formatAddress(account)}</span>
                  </div>
                  <button
                    onClick={handleWalletAction}
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                  >
                    <FaWallet />
                    <span>Disconnect</span>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <button
                    onClick={handleWalletAction}
                    disabled={isConnecting}
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 ${
                      isConnecting 
                        ? 'bg-gray-600 cursor-not-allowed shadow-none' 
                        : 'bg-gradient-to-r from-[#00bfff] to-[#0099cc] text-white hover:from-[#0099cc] hover:to-[#0077aa] hover:shadow-xl'
                    }`}
                  >
                    {isConnecting ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        <span>Connecting...</span>
                      </>
                    ) : (
                      <>
                        <FaWallet className="text-lg" />
                        <span>Connect Wallet</span>
                      </>
                    )}
                  </button>
                  <p className="text-gray-400 text-sm">Secure connection with MetaMask</p>
                </div>
              )}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8"
            >
              {[
                { number: "10K+", label: "Credentials Minted" },
                { number: "5K+", label: "Active Users" },
                { number: "99.9%", label: "Uptime" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[#00bfff]">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00bfff]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative">
                <Illustration />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}

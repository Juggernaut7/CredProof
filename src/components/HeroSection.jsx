// src/components/HeroSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet } from 'react-icons/fa';
import Illustration from './Illustration';
import { useWallet } from '../hooks/useWallet';

export default function HeroSection() {
  const { connectWallet } = useWallet();

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="bg-[#0a0a0a] text-white py-24 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between"
      id="hero"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          On-chain Credential Verification
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg max-w-xl mb-8 text-gray-300"
        >
          Mint verifiable proof of your work as NFTs, signed by trusted reviewers on the blockchain.
        </motion.p>

        <motion.button
          onClick={connectWallet}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-[#00bfff] text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition"
        >
          <FaWallet />
          <span>Connect Wallet</span>
        </motion.button>
      </div>

      {/* Illustration Section */}
      <motion.div
        className="flex-1 mb-10 md:mb-0"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, type: 'spring' }}
      >
        <Illustration />
      </motion.div>
    </motion.section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <motion.section
      id="how-it-works"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 px-6 flex flex-col items-center bg-[#0f0f0f]"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold mb-6"
      >
        Get Started in 3 Steps
      </motion.h2>
      <motion.ol
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="list-decimal list-inside space-y-4 text-lg max-w-xl"
      >
        <li>Connect your wallet</li>
        <li>Submit your project details</li>
        <li>Mint your proof NFT</li>
      </motion.ol>
    </motion.section>
  );
}
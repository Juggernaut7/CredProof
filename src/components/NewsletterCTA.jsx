// src/components/NewsletterCTA.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function NewsletterCTA() {
  return (
    <section id="subscribe" className="py-20 bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-gray-400 mb-8">Get updates on new features, drops & open source contributions. No spam.</p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-3 rounded-lg text-black focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#00bfff] text-black px-6 py-3 rounded-lg transition hover:opacity-90"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}

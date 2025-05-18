// src/components/TrustSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaGlobe } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt className="text-[#00bfff] text-3xl" />,
    title: 'Immutable Proof',
    desc: 'Credentials are minted to IPFS & blockchain—tamper-proof forever.',
  },
  {
    icon: <FaLock className="text-[#00bfff] text-3xl" />,
    title: 'Privacy by Design',
    desc: 'Only you control what’s shown. No third-party access.',
  },
  {
    icon: <FaGlobe className="text-[#00bfff] text-3xl" />,
    title: 'Global Verification',
    desc: 'Accessible by employers, DAOs & clients anywhere in the world.',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-[#090909] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Trust & Transparency</h2>
        <p className="text-gray-400 mb-12">Every credential on CredProof is verifiable, secure, and permanent</p>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-xl p-6 text-left shadow-xl"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

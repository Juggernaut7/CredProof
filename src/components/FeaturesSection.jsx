import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaShieldAlt, FaPalette } from 'react-icons/fa';

const features = [
  { icon: <FaCheckCircle />, title: 'Verified Proof', desc: 'Immutable on-chain credentials.' },
  { icon: <FaShieldAlt />, title: 'Secure Reviews', desc: 'Signed by trusted experts.' },
  { icon: <FaPalette />, title: 'Brandable NFTs', desc: 'Customizable metadata & visuals.' },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6 bg-[#111111]">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: 'spring' }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl mb-4 text-[#8b5cf6]">{f.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-300">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
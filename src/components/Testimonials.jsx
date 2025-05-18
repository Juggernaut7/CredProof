// src/components/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'DAO Contributor',
    feedback: 'CredProof made it super easy to verify my work on multiple DAOs. No more screenshots!',
  },
  {
    name: 'Frontend Dev @ChainLink',
    feedback: 'Love the flow and how the credentials are minted directly to my wallet!',
  },
  {
    name: 'Freelancer, Upwork',
    feedback: 'Clients trust me more now that I show them blockchain-verified history.',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-[#0f0f0f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What People Are Saying</h2>
        <p className="text-gray-400 mb-12">Early users and communities share their experience with CredProof</p>

        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#181818] p-6 rounded-xl shadow-lg"
            >
              <p className="text-lg italic mb-4 text-gray-300">“{item.feedback}”</p>
              <span className="block text-sm text-[#00bfff] font-semibold">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

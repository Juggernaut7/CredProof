// src/components/UseCases.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaCertificate } from 'react-icons/fa';

const useCases = [
  {
    icon: <FaCode className="text-[#00bfff] text-3xl" />,
    title: 'Developers',
    description: 'Showcase your project contributions with verifiable credentials stored on the blockchain.',
  },
  {
    icon: <FaUsers className="text-[#00bfff] text-3xl" />,
    title: 'Freelancers',
    description: 'Prove completed gigs and boost your credibility in web3 job markets.',
  },
  {
    icon: <FaCertificate className="text-[#00bfff] text-3xl" />,
    title: 'Students & Interns',
    description: 'Mint certificates for completed programs, bootcamps, or internships.',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-[#0a0a0a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Can Use CredProof?</h2>
        <p className="text-gray-400 mb-12">Empowering individuals & communities across the digital ecosystem</p>

        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] rounded-xl p-6 text-left shadow-xl"
            >
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-gray-400">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

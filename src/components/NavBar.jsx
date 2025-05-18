// src/components/Navbar.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useWallet } from '../hooks/useWallet';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { address, connectWallet } = useWallet();
  const navLinks = ['Features', 'Trust', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 w-full z-50 bg-[#0a0a0a]/70 backdrop-blur-md border-b border-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
          <div className="p-1 bg-[#111]/60 rounded-md h-12 md:h-14 flex items-center">
            <img
              src={logo}
              alt="CredProof Logo"
              className="h-full w-auto object-contain 
                         drop-shadow-[0_0_6px_rgba(0,191,255,0.9)] 
                         drop-shadow-[0_0_12px_rgba(0,191,255,0.5)]"
            />
          </div>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(item => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ y: -2 }}
              className="relative text-white transition after:absolute after:bottom-0 after:left-0 
                         after:h-0.5 after:w-0 after:bg-[#00bfff] after:transition-all 
                         after:duration-300 hover:after:w-full"
            >
              {item}
            </motion.a>
          ))}

          <button
            onClick={connectWallet}
            className="ml-6 px-4 py-2 bg-[#00bfff] text-black rounded-lg transition 
                       hover:opacity-90 focus:outline-none"
          >
            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl p-2"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="md:hidden bg-[#0f0f0f] overflow-hidden"
        >
          <ul className="flex flex-col p-4 space-y-4">
            {navLinks.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block text-white py-2"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  connectWallet();
                  setOpen(false);
                }}
                className="w-full px-4 py-2 bg-[#00bfff] text-black rounded-lg"
              >
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}

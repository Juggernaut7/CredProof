// src/components/Navbar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWallet, FaCheck } from "react-icons/fa";
import { useWallet } from "../hooks/useWallet";
import { useAuth } from "../context/AuthContext";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { connectWallet, account, disconnectWallet } = useWallet();
  const { user, logout } = useAuth();

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Features", href: "#features" },
    { label: "Trust", href: "#trust" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Submit", href: "/submit" },
  ];

  const isLoggedIn = !!user;
  const isWalletConnected = !!account;

  const formatAddress = (address) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#1f1f1f]/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            className="flex-shrink-0"
          >
            <div className="p-2 bg-[#111]/60 rounded-xl h-12 lg:h-14 flex items-center backdrop-blur-sm border border-[#1f1f1f]/30">
              <img
                src={logo}
                alt="CredProof Logo"
                className="h-full w-auto object-contain drop-shadow-[0_0_12px_rgba(0,191,255,0.5)]"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative px-4 py-2 text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {link.label}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#00bfff] to-[#0099cc] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Wallet Connection Status */}
            {isWalletConnected ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 bg-green-600/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-xl backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">{formatAddress(account)}</span>
                <button
                  onClick={disconnectWallet}
                  className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-200"
                  title="Disconnect Wallet"
                >
                  ×
                </button>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={connectWallet}
                className="inline-flex items-center gap-2 px-4 py-2 text-white border border-[#00bfff]/50 rounded-xl hover:bg-[#00bfff]/10 hover:border-[#00bfff] transition-all duration-200 font-medium text-sm"
              >
                <FaWallet className="text-[#00bfff]" />
                <span>Connect Wallet</span>
              </motion.button>
            )}

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={logout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors duration-200 font-medium text-sm shadow-lg hover:shadow-xl"
              >
                Logout ({user.firstName})
              </motion.button>
            ) : (
              <div className="flex items-center space-x-3">
                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  href="/login"
                  className="px-4 py-2 text-white border border-[#00bfff]/50 rounded-xl hover:bg-[#00bfff]/10 hover:border-[#00bfff] transition-all duration-200 font-medium text-sm"
                >
                  Login
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  href="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-[#00bfff] to-[#0099cc] text-white rounded-xl transition-all duration-200 font-medium text-sm shadow-lg hover:shadow-xl hover:from-[#0099cc] hover:to-[#0077aa]"
                >
                  Signup
                </motion.a>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-[#1f1f1f]/50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="text-xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="text-xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden bg-[#0f0f0f]/95 backdrop-blur-xl border-t border-[#1f1f1f]/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="block text-white/90 hover:text-white py-3 px-4 rounded-lg hover:bg-[#1f1f1f]/50 transition-all duration-200 font-medium"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Mobile Wallet Status */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.3 }}
                className="pt-4 border-t border-[#1f1f1f]/50"
              >
                {isWalletConnected ? (
                  <div className="flex items-center justify-between p-4 bg-green-600/20 border border-green-500/50 rounded-xl">
                    <div className="flex items-center gap-3 text-green-400">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-medium">{formatAddress(account)}</span>
                    </div>
                    <button
                      onClick={() => {
                        disconnectWallet();
                        setOpen(false);
                      }}
                      className="text-red-400 hover:text-red-300 text-xl font-bold transition-colors duration-200"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      connectWallet();
                      setOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 px-4 py-4 border border-[#00bfff]/50 text-white rounded-xl hover:bg-[#00bfff]/10 hover:border-[#00bfff] transition-all duration-200 font-medium"
                  >
                    <FaWallet className="text-[#00bfff]" />
                    <span>Connect Wallet</span>
                  </button>
                )}
              </motion.div>

              {/* Mobile Auth */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                className="pt-4 border-t border-[#1f1f1f]/50"
              >
                {isLoggedIn ? (
                  <button
                    onClick={() => {
                      logout();
                      setOpen(false);
                    }}
                    className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl transition-colors duration-200 font-medium"
                  >
                    Logout ({user.firstName})
                  </button>
                ) : (
                  <div className="space-y-3">
                    <a
                      href="/login"
                      className="block w-full text-center px-4 py-3 border border-[#00bfff]/50 text-white rounded-xl hover:bg-[#00bfff]/10 hover:border-[#00bfff] transition-all duration-200 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Login
                    </a>
                    <a
                      href="/signup"
                      className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#00bfff] to-[#0099cc] text-white rounded-xl transition-all duration-200 font-medium"
                      onClick={() => setOpen(false)}
                    >
                      Signup
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

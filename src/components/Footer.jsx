// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaDiscord, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../assets/logo.png';

export default function Footer() {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/yourprofile' },
    { icon: <FaDiscord />, url: 'https://discord.com/invite/yourserver' },
    { icon: <FaTwitter />, url: 'https://twitter.com/yourprofile' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/yourprofile' },
    { icon: <FaFacebook />, url: 'https://facebook.com/yourpage' },
  ];

  return (
    <footer className="py-8 px-6 bg-[#0f0f0f] flex flex-col md:flex-row items-center justify-between text-gray-400">
      <div className="flex items-center mb-4 md:mb-0">
        <img
          src={logo}
          alt="CredProof Logo"
          className="h-8 w-auto object-contain filter
                     drop-shadow-[0_0_4px_rgba(0,191,255,0.75)]
                     drop-shadow-[0_0_8px_rgba(0,191,255,0.5)]"
        />
        <span className="ml-3 text-sm">
          © {new Date().getFullYear()} credProof. All rights reserved.
        </span>
      </div>

      {/* Footer Links (optional) */}
      <div className="space-x-4 mb-4 md:mb-0">
        <a href="/terms" className="text-sm hover:text-white">Terms</a>
        <a href="/privacy" className="text-sm hover:text-white">Privacy</a>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        {socialLinks.map(({ icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-xl transition-colors"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

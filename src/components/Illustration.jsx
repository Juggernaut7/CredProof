// src/components/Illustration.jsx
import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/Illustrations/credproof.json';

export default function Illustration() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Lottie options={defaultOptions} />
    </div>
  );
}

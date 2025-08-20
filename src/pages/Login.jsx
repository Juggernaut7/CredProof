// src/pages/Login.jsx
import React from 'react';
import { motion } from 'framer-motion';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    // Simulated auth — replace with backend call
    const fakeUser = { email, firstName: email.split('@')[0] };
    login(fakeUser);
    navigate('/dashboard');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <AuthForm onSubmit={handleLogin} isLogin />
    </motion.div>
  );
}

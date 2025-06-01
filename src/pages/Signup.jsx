// src/pages/Signup.jsx
import React from 'react';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = ({ email, password }) => {
    // Simulated signup — replace with backend call
    const newUser = { email };
    login(newUser);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] p-6">
      <AuthForm onSubmit={handleSignup} isLogin={false} />
    </div>
  );
}

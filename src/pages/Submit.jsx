import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { FaRocket, FaFileAlt, FaGithub, FaPaperclip, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import UserLayout from '../layouts/UserLayout';

const Submit = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    console.log('Submitted Credential:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <UserLayout>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-8 mx-auto shadow-2xl"
          >
            <FaCheckCircle className="text-4xl text-white" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Submission Successful! 🎉
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-300 mb-8"
          >
            Your credential has been submitted for review. You'll be notified once it's verified!
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex justify-center space-x-2"
          >
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </motion.div>
        </motion.div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 mx-auto shadow-lg">
            <FaRocket className="text-2xl text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Submit New <span className="text-gradient-primary">Credential</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your project, provide details, and get it verified by our trusted reviewers on the blockchain.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                <FaFileAlt className="text-blue-400" />
                Project Title
              </label>
              <input
                {...register('title', { required: 'Project title is required' })}
                type="text"
                className="input-modern"
                placeholder="e.g. Fullstack dApp with NFT Marketplace"
              />
              {errors.title && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.title.message}
                </motion.p>
              )}
            </motion.div>

            {/* GitHub Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-2"
            >
              <label className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
                <FaGithub className="text-blue-400" />
                GitHub Repository
              </label>
              <input
                {...register('github', { 
                  required: 'GitHub link is required',
                  pattern: {
                    value: /^https:\/\/github\.com\/.+/,
                    message: 'Please enter a valid GitHub URL'
                  }
                })}
                type="url"
                className="input-modern"
                placeholder="https://github.com/username/repository"
              />
              {errors.github && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-400 text-sm mt-1"
                >
                  {errors.github.message}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
              <FaFileAlt className="text-blue-400" />
              Project Description
            </label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              className="input-modern min-h-[120px] resize-none"
              rows="6"
              placeholder="Provide a detailed description of your project, technologies used, challenges overcome, and what makes it unique..."
            />
            {errors.description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-1"
              >
                {errors.description.message}
              </motion.p>
            )}
          </motion.div>

          {/* File Upload */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-2"
          >
            <label className="flex items-center gap-2 text-lg font-semibold text-white mb-3">
              <FaPaperclip className="text-blue-400" />
              Additional Files (Optional)
            </label>
            <div className="relative">
              <input
                {...register('attachment')}
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.txt,.md,.zip"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center w-full px-6 py-12 border-2 border-dashed border-gray-600 rounded-xl cursor-pointer hover:border-blue-400 transition-colors duration-200 bg-gray-900/30 hover:bg-gray-900/50"
              >
                <div className="text-center">
                  <FaPaperclip className="text-4xl text-gray-400 mb-4 mx-auto" />
                  <p className="text-gray-300 text-lg mb-2">Drop files here or click to browse</p>
                  <p className="text-gray-500 text-sm">Supports: PDF, DOC, TXT, MD, ZIP (Max 10MB)</p>
                </div>
              </label>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex justify-center pt-8"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary min-w-[200px] ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-3">
                  <FaSpinner className="animate-spin" />
                  <span>Submitting...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  <FaRocket />
                  <span>Submit for Review</span>
                </div>
              )}
            </button>
          </motion.div>
        </motion.form>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: FaCheckCircle,
              title: "Quality Review",
              description: "Expert reviewers assess your work quality and innovation"
            },
            {
              icon: FaRocket,
              title: "Fast Processing",
              description: "Most submissions reviewed within 24-48 hours"
            },
            {
              icon: FaFileAlt,
              title: "NFT Certificate",
              description: "Verified credentials minted as blockchain NFTs"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="card-modern text-center p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 mx-auto">
                <item.icon className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </UserLayout>
  );
};

export default Submit;

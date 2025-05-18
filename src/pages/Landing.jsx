import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import TrustSection from '../components/TrustSection';
import NewsletterCTA from '../components/NewsletterCTA';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function Landing() {
  return (
    <div className="bg-[#0f0f0f] text-white flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCases />
      <Testimonials />
      <TrustSection />
      <NewsletterCTA />
      <FaqSection />
      <Footer />
    </div>
  );
}


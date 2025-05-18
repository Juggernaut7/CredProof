import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '../components/NavBar';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold leading-tight mb-4">
          Submit. Verify. Mint.  
          <span className="text-blue-600"> Own Your Skills.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          CREDPROOF is your Web3 credentialing platform. Verified by peers. Minted on-chain.
        </p>
        <Link
          to="/submit"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Get Verified <FaArrowRight />
        </Link>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { step: "1", title: "Submit", desc: "Upload your project, GitHub link, or writeup for review." },
              { step: "2", title: "Get Reviewed", desc: "Verified reviewers assess your work and approve it." },
              { step: "3", title: "Mint NFT", desc: "Your credential is minted on-chain and added to your profile." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="bg-gray-100 p-6 rounded shadow-sm">
                <h3 className="text-xl font-bold mb-2">Step {step}: {title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-center text-sm py-4 mt-20 text-gray-500">
        &copy; {new Date().getFullYear()} CREDPROOF — Built on Web3
      </footer>
    </div>
  );
};

export default Home;

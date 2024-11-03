import React from 'react';
import { Github, Linkedin, Instagram, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import SocialLink from './components/SocialLink';
import MusicSection from './components/MusicSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Acender
          </h1>
          <h2 className="text-3xl mb-8 text-gray-300">Pulipaka Srujith</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Singer-Songwriter | Developer | Creator
          </p>
          <div className="flex gap-6">
            <SocialLink href="https://github.com/srujith2k" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/srujith-pulipaka-507aaa256" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/srujith_official" icon={<Instagram />} label="Instagram" />
            <SocialLink href="https://linktr.ee/psrujith" icon={<ExternalLink />} label="Links" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />
      </header>

      <MusicSection />

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p className="text-lg">
              I'm a passionate singer-songwriter and developer. I create music that connects with people's hearts while building digital experiences that enhance lives. My recent release "Think About You" marks my journey in the music industry.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center gap-6">
            <SocialLink href="https://github.com/srujith2k" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/srujith-pulipaka-507aaa256" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="https://www.instagram.com/srujith_official" icon={<Instagram />} label="Instagram" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
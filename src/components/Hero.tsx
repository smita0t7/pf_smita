
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
            Hi, I'm Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8 animate-fade-in">
            I craft beautiful, functional websites and applications that make a difference. 
            Passionate about clean code, user experience, and bringing ideas to life.
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Github className="w-6 h-6 text-gray-700" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Linkedin className="w-6 h-6 text-blue-600" />
          </a>
          <a 
            href="mailto:your.email@example.com"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6 text-green-600" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;


import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Your Name. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

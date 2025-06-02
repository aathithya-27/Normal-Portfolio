import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a [Your Role/Title]";
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!typingComplete) {
      setTypingComplete(true);
    }
  }, [typedText, typingComplete]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6 text-center">
        <img
          src={profileImg}
          alt="Your Name"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg border-4 border-white dark:border-gray-700"
        />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="text-gray-800 dark:text-white">Hello, I'm </span>
          <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-medium mb-8 h-12">
          <span className="text-gray-700 dark:text-gray-300">{typedText}</span>
          <span className={`border-r-4 border-blue-600 dark:border-blue-400 ml-1 ${typingComplete ? 'animate-pulse' : ''}`}>&nbsp;</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
          A passionate developer ready to build amazing things. Replace this with your own exciting bio!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      </a>
    </section>
  );
};

export default Hero;
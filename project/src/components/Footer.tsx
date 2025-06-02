import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6"
          >
            <Code2 className="h-8 w-8" />
            <span>Portfolio</span>
          </a>
          
          <div className="flex gap-8 mb-8">
            <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="w-full max-w-md h-px bg-gray-800 mb-8"></div>
          
          <p className="text-gray-400 flex items-center gap-1">
            &copy; {currentYear} Portfolio. Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Alex Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
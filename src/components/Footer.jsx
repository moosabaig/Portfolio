import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-bold text-white text-lg">
          Moosa<span className="text-blue-500">.</span>
        </div>

        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Moosa Baig. All rights reserved.
        </p>

        <div className="flex gap-4">
          <a href="https://github.com/moosabaig" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-gray-600 hover:text-white transition-colors duration-200">
            <FaGithub size={18} />
          </a>
          <a href="https://in.linkedin.com/in/moosa-baig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-200">
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

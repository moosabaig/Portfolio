import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Home = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      {/* Blue glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-700/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        {/* Status badge */}
        <span className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/40 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Open to opportunities
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Moosa Baig
          </span>
        </h1>

        <div className="text-lg md:text-xl text-gray-400 min-h-[2rem] mb-10">
          <TypeAnimation
            sequence={[
              'Cybersecurity Professional & Vulnerability Assessment Expert',
              1500,
              'Penetration Tester & Ethical Hacker',
              1500,
              'Cloud Security Specialist',
              1500,
              'Protecting Systems. Securing Futures.',
              1500,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/30"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-3 border border-white/20 hover:border-white/50 rounded-lg font-semibold text-gray-300 hover:text-white transition-all duration-200"
          >
            About Me
          </a>
        </div>

        <div className="flex items-center gap-5 mt-10">
          <a
            href="https://github.com/moosabaig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-200"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://in.linkedin.com/in/moosa-baig"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
};

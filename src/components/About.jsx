import React from 'react';
import { FaShieldAlt, FaCode, FaCloud } from 'react-icons/fa';

const skills = [
  {
    category: 'Offensive Security',
    icon: <FaShieldAlt />,
    items: ['Penetration Testing', 'Vulnerability Assessment', 'Exploit Development', 'Red Teaming', 'Social Engineering'],
  },
  {
    category: 'Tools & Frameworks',
    icon: <FaCode />,
    items: ['Kali Linux', 'Metasploit', 'Burp Suite', 'Nmap', 'Wireshark', 'OWASP ZAP'],
  },
  {
    category: 'Cloud & Compliance',
    icon: <FaCloud />,
    items: ['AWS Security', 'Azure Security', 'Splunk / SIEM', 'ISO 27001', 'Zero Trust', 'Docker'],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">About</span>
          <h2 className="text-4xl font-bold mt-2">Who I Am</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
          {/* Avatar */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-52 h-52 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center text-6xl font-bold text-white shadow-2xl shadow-blue-900/40">
              MB
            </div>
          </div>

          {/* Bio */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Cybersecurity Analyst</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Dedicated Cyber Security Analyst with a proven track record of protecting enterprise systems and networks.
              My expertise spans threat detection, vulnerability assessment, and incident response.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Passionate about staying ahead of the latest security trends and technologies to ensure the confidentiality,
              integrity, and availability of critical data. Detail-oriented and committed to maintaining a robust security posture.
            </p>
            <div className="flex gap-4">
              <a
                href="#Contact"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors duration-200"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-white/20 hover:border-white/50 rounded-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200"
              >
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ category, icon, items }) => (
            <div
              key={category}
              className="bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-blue-500 text-xl">{icon}</span>
                <h4 className="font-semibold text-white">{category}</h4>
              </div>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Network Vulnerability Scanner',
    description:
      'Automated scanner that identifies open ports, services, and CVEs across enterprise network ranges using Nmap and Python.',
    tags: ['Python', 'Nmap', 'CVE', 'Network Security'],
    github: '#',
    live: null,
  },
  {
    title: 'Web App Pentest Toolkit',
    description:
      'Custom toolkit integrating Burp Suite extensions and OWASP ZAP for automated web application security testing pipelines.',
    tags: ['Burp Suite', 'OWASP', 'Python', 'REST API'],
    github: '#',
    live: null,
  },
  {
    title: 'SIEM Dashboard & Alert System',
    description:
      'Built custom Splunk dashboards and correlation rules to detect anomalous behaviour and automate incident response alerts.',
    tags: ['Splunk', 'SIEM', 'Incident Response', 'SOC'],
    github: '#',
    live: null,
  },
  {
    title: 'CTF Write-ups Repository',
    description:
      'Documented solutions to 50+ CTF challenges spanning web exploitation, reverse engineering, cryptography, and forensics.',
    tags: ['CTF', 'Reverse Engineering', 'Cryptography', 'Web'],
    github: '#',
    live: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">Work</span>
          <h2 className="text-4xl font-bold mt-2">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <div className="flex gap-3 ml-4 flex-shrink-0">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-white transition-colors duration-200"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-md font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

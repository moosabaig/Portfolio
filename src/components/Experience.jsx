import React from 'react';

const experiences = [
  {
    role: 'Cybersecurity Analyst',
    company: 'Trinity Mobility',
    duration: '2024 – Present',
    location: 'Bangalore, India',
    points: [
      'Conduct vulnerability assessments and penetration testing across enterprise systems.',
      'Monitor SIEM dashboards and lead incident response for security events.',
      'Implement and maintain security policies aligned with ISO 27001.',
    ],
  },
  {
    role: 'Security Intern',
    company: 'Previous Company',
    duration: '2023 – 2024',
    location: 'Bangalore, India',
    points: [
      'Performed network traffic analysis using Wireshark and Nmap.',
      'Supported red team exercises and documented findings in detail.',
      'Researched emerging threats and maintained threat intelligence feeds.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">Career</span>
          <h2 className="text-4xl font-bold mt-2">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="relative bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-blue-500 font-medium text-sm">{exp.company}</p>
                  <p className="text-gray-600 text-xs mt-0.5">{exp.location}</p>
                </div>
                <span className="inline-block text-xs text-blue-400 font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full h-fit">
                  {exp.duration}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                    {pt}
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

export default Experience;

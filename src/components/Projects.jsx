import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'SBOM Security Dashboard',
    featured: true,
    description:
      'Self-hosted Software Composition Analysis (SCA) tool that scans projects for dependency manifests, generates a CycloneDX 1.5 SBOM, matches components against known vulnerabilities and classifies license risk in an interactive security dashboard.',
    highlights: [
      'Multi-ecosystem scanning: npm, Maven/Gradle, PyPI, NuGet and Go, including transitive dependencies',
      'OSV.dev vulnerability matching with NVD CVSS/CWE enrichment and deps.dev license data',
      'A–F risk grade per scan, severity trends and minimum fix-version upgrade guidance',
      'Imports CycloneDX / SPDX SBOMs (Black Duck, Syft, Trivy, cdxgen) and OWASP Dependency-Check reports',
      'CI/CD gate via --fail-on <severity> for GitHub Actions, Azure DevOps and Jenkins',
      'Secure by design: localhost-only binding, DNS-rebinding protection and CSRF-safe API',
      'Implemented three times (Node.js, Python, Java) using only the standard library',
    ],
    tags: ['SCA', 'SBOM', 'CycloneDX', 'OSV.dev', 'NVD', 'Node.js', 'Python', 'Java'],
    image:
      'https://raw.githubusercontent.com/moosabaig/sbom-security-dashboard/main/docs/screenshots/dashboard.png',
    github: 'https://github.com/moosabaig/sbom-security-dashboard',
    live: null,
  },
  {
    title: 'Cybersecurity Portfolio',
    description:
      'This site: a responsive, dark-themed single-page portfolio with an animated hero and loading screen, built and deployed to GitHub Pages automatically via GitHub Actions.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'GitHub Actions', 'GitHub Pages'],
    github: 'https://github.com/moosabaig/Portfolio',
    live: 'https://moosabaig.github.io/Portfolio/',
  },
];

const ProjectLinks = ({ project }) => (
  <div className="flex gap-3 ml-4 flex-shrink-0">
    {project.github && (
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.title} source on GitHub`}
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
        aria-label={`${project.title} live site`}
        className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
      >
        <FaExternalLinkAlt size={16} />
      </a>
    )}
  </div>
);

const Tags = ({ tags }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs rounded-md font-medium"
      >
        {tag}
      </span>
    ))}
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest">Work</span>
          <h2 className="text-4xl font-bold mt-2">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group bg-[#0d0d0d] border border-white/5 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 flex flex-col ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {project.featured && (
                <span className="self-start mb-4 text-xs text-blue-400 font-semibold uppercase tracking-wider bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
                  Latest Project
                </span>
              )}

              <div className={project.image ? 'flex flex-col lg:flex-row gap-6' : 'flex flex-col flex-1'}>
                {project.image && (
                  <a
                    href={project.github ?? project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lg:w-1/2 flex-shrink-0 block overflow-hidden rounded-xl border border-white/10"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                )}

                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <ProjectLinks project={project} />
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  {project.highlights && (
                    <ul className="space-y-2 mb-5">
                      {project.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0 mt-1.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto">
                    <Tags tags={project.tags} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

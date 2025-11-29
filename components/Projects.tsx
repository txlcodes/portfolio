import React from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-baseline mb-8 border-b border-gray-300 pb-2">
        <h3 className="font-serif italic text-3xl">Featured Works</h3>
        <a href="https://github.com/txlcodes" target="_blank" rel="noreferrer" className="font-mono text-xs uppercase hover:underline">View Github ↗</a>
      </div>

      {PROJECTS.map((project, idx) => (
        <article key={idx} className="group mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-bold text-4xl font-serif group-hover:underline decoration-accent decoration-2 underline-offset-4">
                  {project.name}
                </h4>
                <span className={`text-[10px] font-mono px-2 py-0.5 border uppercase tracking-wide ${project.status === 'Live' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-gray-100 text-gray-600 border-gray-200'}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">
                Centre for Sustainability & Management Research
              </p>
              
              <p className="text-gray-800 mb-6 font-serif text-lg leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="border border-gray-400 px-3 py-1 font-mono text-xs rounded-full hover:bg-ink hover:text-white transition cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="font-mono text-xs uppercase font-bold flex gap-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                  Visit Site
                </a>
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accent transition">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            {/* Decorative Project Details Side */}
            <div className="md:col-span-4 border-l border-gray-300 pl-4 hidden md:block">
              <div className="mb-4">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Deployment</div>
                <div className="text-sm font-serif">{project.meta.deployment}</div>
              </div>
              <div className="mb-4">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Year</div>
                <div className="text-sm font-serif">{project.meta.year}</div>
              </div>
              <div className="mb-4">
                <div className="text-[10px] font-mono text-gray-400 uppercase">Role</div>
                <div className="text-sm font-serif">{project.meta.role}</div>
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* Placeholders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-60">
        <article className="border border-gray-300 p-6 bg-white/50">
          <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center border border-dashed border-gray-400">
            <span className="font-mono text-xs uppercase text-gray-500">Project 02 Preview</span>
          </div>
          <h4 className="font-bold text-xl mb-2 font-serif">Coming Soon</h4>
          <p className="text-sm text-gray-600 font-serif">Working on something exciting in the React ecosystem.</p>
        </article>
        <article className="border border-gray-300 p-6 bg-white/50">
          <div className="h-40 bg-gray-200 mb-4 flex items-center justify-center border border-dashed border-gray-400">
            <span className="font-mono text-xs uppercase text-gray-500">Project 03 Preview</span>
          </div>
          <h4 className="font-bold text-xl mb-2 font-serif">Coming Soon</h4>
          <p className="text-sm text-gray-600 font-serif">A new tool for developer productivity.</p>
        </article>
      </div>
    </div>
  );
};

export default Projects;
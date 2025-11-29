import React from 'react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="mb-16">
      <div className="flex justify-between items-baseline mb-8 border-b border-gray-300 pb-2">
        <h3 className="font-serif italic text-3xl">Professional Experience</h3>
      </div>

      {EXPERIENCES.map((exp, idx) => (
        <article key={idx} className="group mb-12 last:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-bold text-4xl font-serif group-hover:underline decoration-accent decoration-2 underline-offset-4">
                  {exp.company}
                </h4>
              </div>
              
              <p className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-2">
                {exp.role} 
                {/* Conditionally add 'Backend-Focused' only for Atlassian if desired, or relying on description */}
                {exp.company === 'Atlassian' && <i className="italic normal-case text-gray-400 ml-2">(Backend-Focused)</i>}
              </p>
              <p className="font-mono text-xs text-gray-600 mb-6">{exp.location} • {exp.period}</p>
              
              <p className="text-gray-800 mb-6 font-serif text-lg leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <ul className="space-y-3 mb-6 text-gray-800 font-serif">
                {exp.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.techStack.map((tech, index) => (
                  <span key={index} className="border border-gray-400 px-3 py-1 font-mono text-xs rounded-full hover:bg-ink hover:text-white transition cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Decorative Experience Details Side */}
            <div className="md:col-span-4 border-l border-gray-300 pl-4 hidden md:block">
              {exp.stats.map((stat, index) => (
                <div key={index} className="mb-4">
                  <div className="text-[10px] font-mono text-gray-400 uppercase">{stat.label}</div>
                  <div className="text-sm font-serif">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Divider between experiences, not after the last one */}
          {idx < EXPERIENCES.length - 1 && <div className="w-full h-px bg-gray-200 my-12 md:mr-12"></div>}
        </article>
      ))}
    </div>
  );
};

export default Experience;
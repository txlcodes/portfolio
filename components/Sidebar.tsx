import React from 'react';
import { TECH_STACK } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="md:col-span-4 p-6 md:p-12 bg-[#ebe7de] h-full border-l border-gray-400">
      {/* NOW BUILDING */}
      <div className="mb-12">
        <h3 className="font-mono text-xs uppercase tracking-widest text-gray-500 mb-4">Now Building</h3>
        <div className="bg-paper p-5 border border-gray-400 shadow-sm relative group">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="font-mono text-[10px] text-ink font-bold tracking-wider uppercase">Freelance</span>
            </div>
            <span className="text-[9px] font-mono border border-gray-400 px-1 py-px text-gray-500 bg-white">CONFIDENTIAL</span>
          </div>
          
          <h4 className="font-bold text-lg font-serif mb-2 leading-tight">Stealth SaaS Platform</h4>
          <p className="text-sm font-serif italic text-gray-700 mb-4 leading-relaxed">
            Architecting a scalable multi-tenant dashboard for a logistics client.
          </p>
          
          <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
            <span>DEVELOPMENT PHASE</span>
            <span>75%</span>
          </div>
          <div className="w-full bg-gray-200 h-1.5 border border-gray-300">
            <div className="bg-ink h-full w-[75%]"></div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 mb-12"></div>

      {/* TECH STACK */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl italic mb-6 border-b border-gray-300 pb-2">Technical Arsenal</h3>
        
        <div className="mb-6">
          <h4 className="font-mono text-xs font-bold uppercase mb-2 text-gray-500">Frontend</h4>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.frontend.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-paper border border-gray-400 text-xs font-mono">{tech}</span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-mono text-xs font-bold uppercase mb-2 text-gray-500">Backend</h4>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.backend.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-paper border border-gray-400 text-xs font-mono">{tech}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-xs font-bold uppercase mb-2 text-gray-500">Tools</h4>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.tools.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-paper border border-gray-400 text-xs font-mono">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 mb-12"></div>

      {/* BRIEF EXPERIENCE SUMMARY */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl italic mb-6 border-b border-gray-300 pb-2">Experience</h3>
        <div className="mb-4">
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="font-bold uppercase tracking-wide text-sm">Atlassian</h4>
            <span className="font-mono text-[10px] bg-gray-200 px-1">PAST</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-600 font-serif">Software Engineer (Full Stack)</p>
        </div>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="font-bold uppercase tracking-wide text-sm">PeakAI</h4>
            <span className="font-mono text-[10px] bg-gray-200 px-1">INTERN</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-600 font-serif">Full Stack Developer Intern</p>
        </div>
      </div>

      <div className="w-full h-px bg-gray-300 mb-12"></div>

      {/* EDUCATION */}
      <div className="mb-12">
        <h3 className="font-serif text-2xl italic mb-6 border-b border-gray-300 pb-2">Education</h3>
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h4 className="font-bold uppercase tracking-wide text-sm">DIT University</h4>
            <span className="font-mono text-[10px]">2023</span>
          </div>
          <p className="text-xs leading-relaxed text-gray-600 font-serif">B.Tech in Computer Science & Engineering</p>
        </div>
      </div>
      
      <div className="text-center mt-20">
        <div className="font-serif italic text-2xl">Vol. 01 • End</div>
        <div className="text-[10px] font-mono mt-2 text-gray-500 uppercase">Printed in the Digital Realm</div>
      </div>
    </aside>
  );
};

export default Sidebar;
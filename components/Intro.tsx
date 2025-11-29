import React from 'react';

const Intro: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16 items-start">
      <div className="flex-1">
        <h2 className="text-4xl md:text-6xl font-serif leading-none mb-6">
          FULL STACK <br /> <i className="italic font-light">ENGINEER</i>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8 font-serif border-l-2 border-accent pl-4">
          I build robust web applications using Node.js and modern frontend frameworks. I specialize in creating academic platforms, management systems, and sustainable digital solutions.
        </p>
        <div className="flex gap-4">
          <a href="#" className="bg-ink text-paper px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-gray-700 transition duration-300">Read Resume</a>
          <a href="mailto:talha@example.com" className="border border-ink px-8 py-3 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-ink transition duration-300">Contact</a>
        </div>
      </div>
      
      {/* Profile Image / Graphic */}
      <div className="w-full md:w-64 h-64 border-2 border-ink flex flex-col items-center justify-center bg-white shadow-[8px_8px_0px_0px_rgba(26,26,26,1)] overflow-hidden relative group">
        <div className="absolute top-2 right-2 z-10 text-ink">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </div>
        <img 
          src="https://api.dicebear.com/7.x/notionists/svg?seed=Talha&backgroundColor=e5e2d9" 
          alt="Talha Avatar" 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
        />
      </div>
    </div>
  );
};

export default Intro;
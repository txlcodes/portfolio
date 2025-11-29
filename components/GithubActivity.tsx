import React from 'react';

const GithubActivity: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="font-serif italic text-lg">Github Activity</div>
        <a href="https://github.com/txlcodes" target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase hover:text-accent transition">
          @txlcodes ↗
        </a>
      </div>
      <a href="https://github.com/txlcodes" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition block w-full overflow-hidden border border-gray-300 bg-white p-2">
        {/* Using the specific graph generator style requested */}
        <img 
          src="https://github-readme-activity-graph.vercel.app/graph?username=txlcodes&theme=minimal&hide_border=true&area=true&color=1a1a1a" 
          alt="GitHub Activity Graph" 
          className="w-full h-auto min-h-[120px] object-cover md:object-contain"
        />
      </a>
      <div className="text-[10px] font-mono text-gray-500 text-right">
        Recent contributions in the last year
      </div>
    </div>
  );
};

export default GithubActivity;
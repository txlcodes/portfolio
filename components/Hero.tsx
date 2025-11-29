import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="border-b-2 border-ink py-16 px-4 md:px-12 relative overflow-hidden bg-noise">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-center font-bold tracking-tighter z-10 relative leading-[0.85] selection:bg-accent selection:text-white">
        TALHA NAWAZ
      </h1>
      
      {/* Stamp positioned absolutely */}
      <div className="absolute top-8 right-8 md:top-12 md:right-32 hidden md:block z-20">
        <div className="stamp-texture border-[3px] border-accent text-accent transform -rotate-6 px-6 py-2 text-md font-bold font-mono tracking-widest uppercase bg-transparent opacity-80 pointer-events-none select-none">
          Open To Work
        </div>
      </div>
    </div>
  );
};

export default Hero;
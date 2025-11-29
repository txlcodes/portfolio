import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased min-h-screen border-t-8 border-ink selection:bg-accent selection:text-white bg-noise">
      <Header />
      <Hero />
      
      {/* MAIN GRID LAYOUT */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 min-h-screen">
        
        {/* LEFT COLUMN (Main Content) */}
        <main className="md:col-span-8 p-6 md:p-12 md:border-r border-gray-400">
          <Intro />
          
          <div className="w-full h-px bg-gray-400 mb-12"></div>
          
          <Experience />
          
          <div className="w-full h-px bg-gray-400 mb-12"></div>
          
          <Projects />
        </main>

        {/* RIGHT COLUMN (Sidebar) */}
        <Sidebar />
        
      </div>
    </div>
  );
};

export default App;
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [dateString, setDateString] = useState<string>('');

  useEffect(() => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    setDateString(new Date().toLocaleDateString('en-US', options).toUpperCase());
  }, []);

  return (
    <header className="border-b border-gray-400 py-2 px-4 md:px-12 text-[10px] md:text-xs font-mono uppercase flex justify-between tracking-widest text-gray-600 bg-paper sticky top-0 z-50">
      <div className="flex gap-4">
        <span>Vol. 01</span>
        <span className="hidden md:inline">Print Edition</span>
      </div>
      <div className="flex gap-4">
        <span>New Delhi, IN</span>
        <span>{dateString}</span>
      </div>
    </header>
  );
};

export default Header;
import React from 'react';

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500" />
          <span className="font-semibold text-gray-800 tracking-tight">Hello World</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <a href="#get-started" className="ml-4 inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800">
          Get Started
        </a>
      </div>
    </header>
  );
}

export default Header;

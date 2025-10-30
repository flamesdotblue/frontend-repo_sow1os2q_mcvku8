import React from 'react';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <p className="inline-block rounded-full border border-gray-200 bg-white/60 px-3 py-1 text-xs font-medium text-gray-600 backdrop-blur-md">
          A minimal, beautiful starter
        </p>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Hello, World!
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Kickstart your next idea with a clean, modern template powered by React and Tailwind. No clutter—just the essentials.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-800 font-medium shadow-sm hover:bg-gray-50">
            Explore Features
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

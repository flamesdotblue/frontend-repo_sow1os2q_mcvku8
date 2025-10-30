import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p className="text-center sm:text-left">© {year} Hello World. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#privacy" className="hover:text-gray-900">Privacy</a>
          <a href="#terms" className="hover:text-gray-900">Terms</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

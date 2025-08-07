'use client';

import { useState } from 'react';
import { Menu, X, Mail, Download } from 'lucide-react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Navigation Header */}
      <nav className="fixed top-0 left-0 w-full z-50 lg:hidden flex items-center justify-between px-4 py-3 bg-transparent backdrop-blur-md border-b border-white/10">
        <div className="flex items-center">
          <span className="text-lg font-bold text-white">Uzii</span>
        </div>
        
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 lg:hidden"
          onClick={closeMenu}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } bg-[#1a1a1d] border-l border-white/10`}
      >
        <div className="p-6 pt-20">
          {/* Navigation Links */}
          <nav className="space-y-6">
            <a
              href="#about"
              onClick={closeMenu}
              className="block text-lg font-medium text-white hover:text-[#f87171] transition-colors py-2 border-b border-white/10"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="block text-lg font-medium text-white hover:text-[#f87171] transition-colors py-2 border-b border-white/10"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={closeMenu}
              className="block text-lg font-medium text-white hover:text-[#f87171] transition-colors py-2 border-b border-white/10"
            >
              Experience
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="space-y-4 mt-8">
            <a
              href="#contact"
              onClick={closeMenu}
              className="flex items-center gap-3 w-full border border-gray-200 rounded-lg px-4 py-3 text-black hover:bg-gray-100 transition bg-white/90 shadow-sm text-base font-semibold"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
            
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="flex items-center gap-3 w-full bg-[#18181b] text-white rounded-lg px-4 py-3 font-semibold shadow-md hover:bg-[#23232a] transition border border-white/20"
            >
              <Download className="w-5 h-5" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
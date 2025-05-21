import React, { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
export function Navbar({
  theme,
  toggleTheme
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="text-xl font-bold">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Imansha
          </a>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a onClick={() => scrollToSection('about')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            About
          </a>
          <a onClick={() => scrollToSection('education')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Education
          </a>
          <a onClick={() => scrollToSection('skills')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Skills
          </a>
          <a onClick={() => scrollToSection('projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Projects
          </a>
          <a onClick={() => scrollToSection('blog')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Blog
          </a>
          <a onClick={() => scrollToSection('contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
            Contact
          </a>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>
        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <button onClick={toggleTheme} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && <div className="md:hidden bg-background border-t">
          <nav className="flex flex-col p-4">
            <a onClick={() => scrollToSection('about')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              About
            </a>
            <a onClick={() => scrollToSection('education')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Education
            </a>
            <a onClick={() => scrollToSection('skills')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Skills
            </a>
            <a onClick={() => scrollToSection('projects')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Projects
            </a>
            <a onClick={() => scrollToSection('blog')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Blog
            </a>
            <a onClick={() => scrollToSection('contact')} className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Contact
            </a>
          </nav>
        </div>}
    </header>;
}
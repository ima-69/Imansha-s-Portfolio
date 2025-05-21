import React from 'react';
import { Mail, Download, ArrowDown } from 'lucide-react';
import heroImage from '../assets/hero.jpg';


export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-background flex items-center justify-center px-4 py-20 pb-32">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Imansha Dilshan</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Software Engineering Undergraduate | Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-md">
            I build accessible, user-friendly websites and applications with
            modern technologies.
          </p>
          <div className="flex gap-4 pt-4">
            {/* Get in touch button with smooth scroll */}
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Get in touch
            </button>

            {/* Download Resume link styled as button */}
            <a
              href="https://drive.google.com/uc?export=download&id=11OinkBLLRELMvEGWMS2SifIjNy1hckSq"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Download Resume (PDF)
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <img
              src={heroImage}
              alt="Imansha Dilshan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hidden md:flex"
        aria-label="Scroll down"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
        <ArrowDown className="text-primary" size={24} />
      </button>
    </section>
  );
}

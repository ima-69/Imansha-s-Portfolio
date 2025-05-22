import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 py-10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Imansha Dilshan</h3>
            <p className="text-muted-foreground">Software Engineering Undergraduate</p>
          </div>

          {/* Social icons + back to top arrow */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ima-69"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/imansha-dilshan-6768662a0/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com/DilshanImansha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/imadil_69/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:imansha.idr@gmail.com"
              className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

            {/* Back to top arrow button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-6 p-3 rounded-full bg-primary hover:bg-primary-dark transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <ArrowUp size={20} className="text-white dark:text-black" />
            </button>
          </div>
        </div>

        <div className="border-t border-border/40 mt-6 pt-6 flex flex-col items-center">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Imansha Dilshan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

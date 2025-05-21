import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
export function Footer() {
  return <footer className="bg-secondary/20 py-10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Alex Chen</h3>
            <p className="text-muted-foreground">
              Software Engineering Student
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:alex@example.com" className="p-2 rounded-full bg-background hover:bg-primary/10 transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="border-t border-border/40 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>;
}
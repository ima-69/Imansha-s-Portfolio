import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
export function Projects() {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment integration using Stripe.',
    image: 'https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
    github: '#',
    demo: '#'
  }, {
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality, user collaboration, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'DnD Kit'],
    github: '#',
    demo: '#'
  }, {
    title: 'Weather Dashboard',
    description: 'A weather application that provides current conditions and forecasts for any location using the OpenWeatherMap API.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['JavaScript', 'HTML/CSS', 'OpenWeatherMap API'],
    github: '#',
    demo: '#'
  }, {
    title: 'Social Media Analytics',
    description: 'A data visualization dashboard for social media metrics, featuring interactive charts and exportable reports.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['React', 'D3.js', 'Node.js', 'Express', 'PostgreSQL'],
    github: '#',
    demo: '#'
  }];
  return <section id="projects" className="py-20 bg-secondary/10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Check out some of my recent work
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-full">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <Github size={16} className="mr-1" />
                    GitHub
                  </a>
                  <a href={project.demo} className="flex items-center text-sm font-medium hover:text-primary transition-colors">
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
            <Github size={18} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>;
}
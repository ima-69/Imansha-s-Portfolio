import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
export function Blog() {
  const blogPosts = [{
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to simplify your components and manage state more efficiently.',
    date: 'October 15, 2023',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  }, {
    title: 'Building a REST API with Node.js and Express',
    excerpt: 'A step-by-step guide to creating a RESTful API using Node.js, Express, and MongoDB.',
    date: 'September 22, 2023',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  }, {
    title: 'Mastering CSS Grid Layout',
    excerpt: 'Deep dive into CSS Grid Layout and learn how to create complex layouts with ease.',
    date: 'August 10, 2023',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: '#'
  }];
  return <section id="blog" className="py-20 bg-secondary/10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Thoughts, tutorials, and insights on web development
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => <article key={index} className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="h-40 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="flex items-center text-xs text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>
                <a href={post.link} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  Read more
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </article>)}
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors">
            View All Posts
          </a>
        </div>
      </div>
    </section>;
}
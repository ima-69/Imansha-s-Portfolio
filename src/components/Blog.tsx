import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
export function Blog() {
  const blogPosts = [{
    title: 'Mastering React: A Complete Roadmap for Aspiring Developers',
    excerpt: 'React is a popular JavaScript library for building web apps. This roadmap guides beginners and pros through learning it fully.',
    date: 'Apr 16, 2025',
    readTime: '5 min read',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*A5iZ1FiU0tfZkUJxf36YKw.jpeg',
    link: 'https://medium.com/@imansha.idr/mastering-react-a-complete-roadmap-for-aspiring-developers-224f2305dd67'
  }, {
    title: 'A Cheerful Guide to Software Licences and Copyright Law',
    excerpt: 'Learn open source licenses and copyright basics in a fun, simple guide to help developers write great code with confidence.',
    date: 'Jun 24, 2024',
    readTime: '8 min read',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*4N6UXotiPCnna73mKSPV7A.jpeg',
    link: 'https://medium.com/@imansha.idr/a-cheerful-guide-to-software-licences-and-copyright-law-71a185aad9cc'
  }, {
    title: 'Stored Procedures in MySQL',
    excerpt: 'A quick guide to MySQL stored procedures: what they are, pros and cons, and how to write and use them effectively.',
    date: 'Feb 24, 2024',
    readTime: '7 min read',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*sVCK49TncOwTXsOojRBOIg.png',
    link: 'https://medium.com/@imansha.idr/stored-procedures-in-mysql-e507b77e29b4'
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
                <a href={post.link} 
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  target='_blank'
                  >
                  Read more
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </article>)}
        </div>
        <div className="mt-12 text-center">
          <a href="https://medium.com/@imansha.idr" 
            className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
            target='_blank'
            >
            View All Posts
          </a>
        </div>
      </div>
    </section>;
}
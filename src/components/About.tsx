import React from 'react';
export function About() {
  return <section id="about" className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I'm Alex, a passionate software engineering student with a
              focus on web development and a knack for solving complex problems.
              My journey in tech began when I built my first website at 15, and
              I've been hooked ever since.
            </p>
            <p className="text-lg">
              Currently pursuing my Computer Science degree, I'm constantly
              exploring new technologies and methodologies to expand my
              skillset. I believe in writing clean, maintainable code and
              creating intuitive user experiences.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me contributing to open-source
              projects, participating in hackathons, or exploring the latest
              developments in AI and machine learning.
            </p>
          </div>
          <div className="bg-secondary/30 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium mr-2">🎓</span>
                <span>Computer Science major with a minor in Data Science</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">💻</span>
                <span>
                  Full-stack developer with a preference for frontend
                  technologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">🌱</span>
                <span>
                  Currently learning cloud architecture and serverless
                  technologies
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">🚀</span>
                <span>
                  Aspiring to become a senior software engineer within 5 years
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">🌍</span>
                <span>Fluent in English and Mandarin; learning Spanish</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium mr-2">🎮</span>
                <span>
                  Enjoys strategy games and building game mods in spare time
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>;
}
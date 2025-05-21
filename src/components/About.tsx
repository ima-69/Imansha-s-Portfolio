import React from "react";
import aboutMe from '../assets/aboutme.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image hidden on mobile, larger max width on desktop */}
          <div className="hidden md:flex justify-center">
            <img
              src={aboutMe}
              alt="Imansha Dilshan"
              className="rounded-lg shadow-lg max-w-[400px] w-full h-auto object-cover"
            />
          </div>
          {/* Text content with padding and max width */}
          <div className="bg-secondary/30 p-8 rounded-lg max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed">
              Hello! I’m Imansha, currently a 3rd-year Software Engineering
              undergraduate at the University of Kelaniya. My studies have given
              me a strong foundation in software development principles and a keen
              interest in building technology that makes an impact.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              As a Full Stack Developer, I enjoy working across both frontend and
              backend development. This passion enables me to design seamless,
              interactive user interfaces while also creating efficient and scalable
              server-side systems that power modern web applications.
            </p>
            <p className="text-lg leading-relaxed mt-6">
              When I'm not coding, you can find me participating in hackathons.
              Also I am volunteering as a designer for several university clubs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

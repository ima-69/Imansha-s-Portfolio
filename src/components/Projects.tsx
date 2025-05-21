import React from "react";
import Slider from "react-slick";
import { Github } from "lucide-react";

import shoppingSquadImg from "../assets/shopping-squad.png";
import fuelqImg from "../assets/fuelq.png";
import stayfinderImg from "../assets/stayfinder.png";
import livelinkImg from "../assets/livelink.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    aria-label="Next Slide"
    className={`
      absolute z-20 -translate-y-1/2 bg-transparent rounded-full p-3
      hover:bg-primary/20 transition dark:hover:bg-white/20
      right-4 sm:right-[-100px] focus:outline-none
    `}
    style={{ top: "42%" }} // shifted up from 50%
  >
    <svg
      className="w-6 h-6 text-primary dark:text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    aria-label="Previous Slide"
    className={`
      absolute z-20 -translate-y-1/2 bg-transparent rounded-full p-3
      hover:bg-primary/20 transition dark:hover:bg-white/20
      left-4 sm:left-[-100px] focus:outline-none
    `}
    style={{ top: "42%" }} // shifted up from 50%
  >
    <svg
      className="w-6 h-6 text-primary dark:text-white"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export function Projects() {
  const projects = [
    {
      title: "Shopping Squad",
      description:
        "Built a MERN apparel store with Tailwind CSS, JWT auth, Redux, Cloudinary, and PayPal. Includes product catalog, user accounts, orders, and admin panel.",
      image: shoppingSquadImg,
      technologies: ["React", "Node.js", "MongoDB", "Express", "PayPal API"],
      github: "https://github.com/ima-69/Shopping-Squad-MERN",
    },
    {
      title: "FuelQ - Fuel Quota Management System",
      description:
        "Full-stack Spring Boot API with React web and React Native mobile apps. Features JWT auth, real-time notifications, and QR code fuel allocation.",
      image: fuelqImg,
      technologies: ["React", "Springboot", "React-Native", "MySQL"],
      github: "https://github.com/software-architecture-project-kln/fuel-project",
    },
    {
      title: "Stayfinder - Accommodation Rental Platform ",
      description:
        "Built with HTML, CSS, JS, PHP & MySQL. Users search accommodation ads; advertisers post via subscriptions; admins approve ads.",
      image: stayfinderImg,
      technologies: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
      github: "https://github.com/ima-69/Stayfinder",
    },
    {
      title: "LiveLink - Figma Mobile App design",
      description: "Design a mobile app for managing smart home devices, showing status, history, and supporting device registration.",
      image: livelinkImg,
      technologies: ["Figma", "Adobe Photoshop"],
      github: "https://github.com/ima-69/LiveLink---Figma",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section id="projects" className="py-20 bg-secondary/10 relative">
      <div className="text-center mb-12 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto rounded"></div>
        <p className="mt-4 text-muted-foreground">Check out some of my recent work</p>
      </div>

      <div className="w-full flex justify-center relative px-4 sm:px-28">
        <div className="relative w-full max-w-md mx-auto">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="px-2">
                <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-5">
                      <a
                        href={project.github}
                        className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} className="mr-1" />
                        GitHub Repo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-secondary/10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-6">
          {/* Left column: School and university details */}
          <div className="space-y-4">
            <div className="bg-background p-5 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">
                  Bachelor of Science in Software Engineering
                </h3>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  2023 - Present
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div className="text-lg">University of Kelaniya</div>
                <div className="text-primary font-medium">CGPA: 3.84/4.0</div>
              </div>
              <p className="text-muted-foreground mb-3">
                Specializing in Net-Centric Web Application Development, Data
                Science and Engineering Application, Health Informatic Engineering domains.
              </p>
            </div>

            <div className="bg-background p-5 rounded-lg shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">GCE Advanced Level</h3>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  2019 - 2022
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                <div className="text-lg">Bandarawela Central College</div>
                <div className="text-primary font-medium">Z-Score: 1.6086</div>
              </div>
              <p className="text-muted-foreground">
                Completed coursework in Mathematics, Chemistry, and Physics
              </p>
            </div>
          </div>

          {/* Right column: Certifications */}
          <div className="mt-10 md:mt-0">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="grid md:grid-cols-1 gap-2">
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <a
                  href="https://coursera.org/share/c85eb3a3e9a9c4edddd4ba9945bdeae0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  React Basics
                </a>
                <p className="text-sm text-muted-foreground">
                  Meta • 2025
                </p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <a
                  href="https://coursera.org/share/f22f5f84669833e01d1cdcb2836d51f5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Programming with JavaScript
                </a>
                <p className="text-sm text-muted-foreground">Meta • 2024</p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <a
                  href="https://coursera.org/share/fe97f8f02aef851988e0bb9f30172cfb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Version Control
                </a>
                <p className="text-sm text-muted-foreground">Meta • 2024</p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <a
                  href="https://coursera.org/share/5db7e0b7a6ad596101ac285c4a31cc6e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Introduction to Front-End Development
                </a>
                <p className="text-sm text-muted-foreground">
                  Meta • 2024
                </p>
              </div>
              <div className="bg-background p-3 rounded-lg shadow-sm">
                <a
                  href="https://alison.com/certification/check/2y10A0tLqGhwtPFhgtYHYhOF3eUnYu0S59Pj4GsqzGAMzeZK0QTjYkhK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary hover:underline"
                >
                  Diploma in C Programming
                </a>
                <p className="text-sm text-muted-foreground">
                  Alison • 2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

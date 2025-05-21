import React from 'react';
export function Education() {
  return <section id="education" className="py-20 bg-secondary/10">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-8">
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">
                Bachelor of Science in Computer Science
              </h3>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                2020 - 2024 (Expected)
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="text-lg">Stanford University</div>
              <div className="text-primary font-medium">GPA: 3.8/4.0</div>
            </div>
            <p className="text-muted-foreground mb-4">
              Focusing on Software Engineering, Data Structures, and Web
              Development
            </p>
            <div>
              <h4 className="font-medium mb-2">Relevant Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Data Structures & Algorithms
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Web Development
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Database Systems
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Machine Learning
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Software Engineering
                </span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  Computer Networks
                </span>
              </div>
            </div>
          </div>
          <div className="bg-background p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">High School Diploma</h3>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                2016 - 2020
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div className="text-lg">Westlake High School</div>
              <div className="text-primary font-medium">GPA: 4.0/4.0</div>
            </div>
            <p className="text-muted-foreground">
              Advanced Placement in Computer Science, Mathematics, and Physics
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">
                  AWS Certified Developer Associate
                </h4>
                <p className="text-sm text-muted-foreground">
                  Amazon Web Services • 2023
                </p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">
                  Meta Front-End Developer Professional Certificate
                </h4>
                <p className="text-sm text-muted-foreground">Meta • 2022</p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">
                  Google Data Analytics Professional Certificate
                </h4>
                <p className="text-sm text-muted-foreground">Google • 2022</p>
              </div>
              <div className="bg-background p-4 rounded-lg shadow-sm">
                <h4 className="font-medium">
                  Scrum Foundation Professional Certificate
                </h4>
                <p className="text-sm text-muted-foreground">
                  CertiProf • 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
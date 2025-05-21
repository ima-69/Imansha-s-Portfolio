import React from 'react';
import { FileText, Download } from 'lucide-react';
export function Resume() {
  return <section id="resume" className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Resume</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-secondary/30 p-8 rounded-lg max-w-lg w-full text-center">
            <FileText size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">My Resume</h3>
            <p className="text-muted-foreground mb-6">
              Download my resume to learn more about my experience, skills, and
              qualifications.
            </p>
            <a href="https://drive.google.com/uc?export=download&id=1gNHD5iJcyBRN_l1bT9L768rp2e50kM_Z" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              <Download size={18} className="mr-2" />
              Download Resume (PDF)
            </a>
          </div>
          {/* <div className="mt-12 grid md:grid-cols-2 gap-8 w-full">
            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
                Work Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-medium">Software Engineering Intern</h4>
                    <span className="text-sm text-muted-foreground">
                      Jun 2023 - Aug 2023
                    </span>
                  </div>
                  <div className="text-primary">Tech Innovations Inc.</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Developed and maintained features for a React-based web
                    application. Collaborated with the team using Agile
                    methodologies. Reduced page load time by 30%.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-medium">Web Development Intern</h4>
                    <span className="text-sm text-muted-foreground">
                      Jun 2022 - Aug 2022
                    </span>
                  </div>
                  <div className="text-primary">Digital Solutions LLC</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Assisted in developing responsive websites for clients.
                    Created and maintained documentation for internal tools.
                    Participated in code reviews and team meetings.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 pb-2 border-b">
                Volunteer Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-medium">Code Mentor</h4>
                    <span className="text-sm text-muted-foreground">
                      Sep 2022 - Present
                    </span>
                  </div>
                  <div className="text-primary">CodePath.org</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Mentor students in web development fundamentals. Hold weekly
                    office hours and review assignments. Organize coding
                    workshops for beginners.
                  </p>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <h4 className="font-medium">Hackathon Organizer</h4>
                    <span className="text-sm text-muted-foreground">
                      Jan 2021 - Present
                    </span>
                  </div>
                  <div className="text-primary">University Tech Club</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Help organize annual hackathons with 200+ participants.
                    Secure sponsorships and coordinate with industry speakers.
                    Manage technical infrastructure during events.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>;
}
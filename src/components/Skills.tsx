import React from 'react';
import { Code2, Globe, Database, Server, Cloud, Flame, TestTube, Workflow, BoxIcon } from 'lucide-react';
export function Skills() {
  const programmingLanguages = [{
    name: 'JavaScript',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'TypeScript',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Python',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Java',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'C++',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'SQL',
    icon: <Database className="w-8 h-8" />
  }];
  const frontendSkills = [{
    name: 'HTML/CSS',
    icon: <Globe className="w-8 h-8" />
  }, {
    name: 'React',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Angular',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Vue.js',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Tailwind CSS',
    icon: <Code2 className="w-8 h-8" />
  }, {
    name: 'Responsive Design',
    icon: <Globe className="w-8 h-8" />
  }];
  const backendSkills = [{
    name: 'Node.js',
    icon: <Server className="w-8 h-8" />
  }, {
    name: 'Express',
    icon: <Server className="w-8 h-8" />
  }, {
    name: 'Django',
    icon: <Server className="w-8 h-8" />
  }, {
    name: 'Flask',
    icon: <Server className="w-8 h-8" />
  }, {
    name: 'MongoDB',
    icon: <Database className="w-8 h-8" />
  }, {
    name: 'PostgreSQL',
    icon: <Database className="w-8 h-8" />
  }];
  const tools = [{
    name: 'BoxIcon',
    icon: <div className="w-8 h-8" />
  }, {
    name: 'Docker',
    icon: <div className="w-8 h-8" />
  }, {
    name: 'AWS',
    icon: <Cloud className="w-8 h-8" />
  }, {
    name: 'Firebase',
    icon: <Flame className="w-8 h-8" />
  }, {
    name: 'Jest',
    icon: <TestTube className="w-8 h-8" />
  }, {
    name: 'CI/CD',
    icon: <Workflow className="w-8 h-8" />
  }];
  const SkillCard = ({
    skill
  }: {
    skill: {
      name: string;
      icon: React.ReactNode;
    };
  }) => <div className="flex flex-col items-center p-4 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
      <div className="mb-2 text-primary">{skill.icon}</div>
      <span className="text-sm font-medium">{skill.name}</span>
    </div>;
  return <section id="skills" className="py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">
            Here are the technologies and tools I work with
          </p>
        </div>
        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {programmingLanguages.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Frontend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {frontendSkills.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Backend Development</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {backendSkills.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((skill, index) => <SkillCard key={index} skill={skill} />)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}
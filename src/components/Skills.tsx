import React from 'react';

type Skill = {
  name: string;
  imageUrl: string;
};

export function Skills() {
  const frontendSkills: Skill[] = [
    { name: 'HTML', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://avatars.githubusercontent.com/u/30317862?s=200&v=4' },
    { name: 'Bootstrap', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
    { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
  ];

  const backendSkills: Skill[] = [
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'PHP', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Spring Boot Framework', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltfc7kHXJWyA9xfFNj5mSSk4ReOJ8GncRifmvIDtrA-FlxkdAQTA6MA8vN8aPOc4bl1Q&usqp=CAU' },
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express.js', imageUrl: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' }
  ];

  const otherSkills: Skill[] = [
    { name: 'MySQL', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Figma', imageUrl: 'https://static.vecteezy.com/system/resources/previews/042/165/847/non_2x/figma-3d-logo-black-background-free-png.png' },
    { name: 'Adobe Photoshop', imageUrl: 'https://cdn.worldvectorlogo.com/logos/adobe-photoshop-2.svg' },
  ];

  const SkillCard = ({ skill }: { skill: Skill }) => (
    <div className="flex flex-col items-center p-2 bg-secondary/10 rounded-md hover:bg-secondary/20 transition-colors cursor-pointer max-w-[100px] mx-auto">
      <img
        src={skill.imageUrl}
        alt={skill.name}
        className="w-10 h-10 object-contain mb-1"
        loading="lazy"
      />
      <span className="text-xs font-medium text-center">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded"></div>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

          {/* Left Column */}
          <div className="space-y-10">
            <h3 className="text-lg font-semibold mb-4 text-primary">Frontend Development</h3>
            <div className="grid grid-cols-3 gap-4">
              {frontendSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </div>

          {/* Middle Column */}
          <div className="space-y-10">
            <h3 className="text-lg font-semibold mb-4 text-primary">Backend Development</h3>
            <div className="grid grid-cols-3 gap-4">
              {backendSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            <h3 className="text-lg font-semibold mb-4 text-primary">Other Development Tools</h3>
            <div className="grid grid-cols-3 gap-4">
              {otherSkills.map((skill, idx) => (
                <SkillCard key={idx} skill={skill} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

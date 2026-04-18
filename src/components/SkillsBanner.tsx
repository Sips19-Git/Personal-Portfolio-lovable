const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js",
  "Java", "Python", "Tailwind CSS", "Git", "MySQL", "REST APIs",
  "Responsive Design", "Figma", "Next.js",
];

const SkillsBanner = () => {
  return (
    <div className="py-6 border-y border-border/60 bg-secondary/40 backdrop-blur-sm">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="marquee-track" aria-hidden={k === 1}>
            {skills.map((s, i) => (
              <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                <span className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  {s}
                </span>
                <span className="text-accent text-2xl">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBanner;

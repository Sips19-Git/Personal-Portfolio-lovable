const skills = [
  { name: "HTML", level: 95, desc: "Semantic markup and accessible structure." },
  { name: "CSS", level: 90, desc: "Responsive layouts and visually appealing interfaces." },
  { name: "JavaScript", level: 85, desc: "Interactive and dynamic web functionality." },
  { name: "Java", level: 80, desc: "Backend systems with clean, efficient, secure code." },
  { name: "React", level: 82, desc: "Modern component-based UIs at scale." },
  { name: "TypeScript", level: 78, desc: "Type-safe, maintainable applications." },
];

const Skills = () => (
  <section id="skills" className="py-24 px-6">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-widest text-sm uppercase mb-3">
          My Skills
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Technical <span className="gradient-text">Expertise</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div
            key={s.name}
            className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:-translate-y-1 transition-smooth shadow-card"
          >
            <div className="flex items-baseline justify-between mb-2">
              <h3 className="font-display text-2xl font-bold">{s.name}</h3>
              <span className="text-accent font-mono text-sm">{s.level}%</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 min-h-[40px]">{s.desc}</p>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full gradient-warm rounded-full transition-all duration-1000"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

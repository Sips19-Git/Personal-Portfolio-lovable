const skills = [
  { name: "HTML", desc: "Semantic markup and accessible structure." },
  { name: "CSS", desc: "Responsive layouts and visually appealing interfaces." },
  { name: "JavaScript", desc: "Interactive and dynamic web functionality." },
  { name: "Java", desc: "Backend systems with clean, efficient, secure code." },
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
            <h3 className="font-display text-2xl font-bold mb-2">{s.name}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

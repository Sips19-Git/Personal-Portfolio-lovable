import portrait from "@/assets/portrait.jpg";

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center">
        <div className="absolute inset-0 gradient-warm rounded-3xl blur-3xl opacity-30" />
        <img
          src={portrait}
          alt="Siphiwe"
          loading="lazy"
          width={500}
          height={500}
          className="relative w-full max-w-md rounded-3xl object-cover shadow-elegant border border-border"
        />
      </div>

      <div>
        <p className="text-accent font-medium tracking-widest text-sm uppercase mb-3">
          About Me
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Full Stack <span className="gradient-text">Developer</span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I am a passionate full stack developer who enjoys turning ideas into real, functional
            web applications. I have a strong interest in both front-end and back-end development,
            allowing me to build complete and seamless user experiences.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills, as I believe growth
            is an important part of becoming a great developer. I enjoy solving problems, writing
            clean and efficient code, and creating projects that are both practical and visually
            appealing.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8">
          {[
            { n: "20+", l: "Projects" },
            { n: "2+", l: "Years Coding" },
            { n: "10+", l: "Technologies" },
          ].map((s) => (
            <div key={s.l} className="text-center p-4 rounded-2xl bg-card border border-border">
              <div className="font-display text-3xl font-bold gradient-text">{s.n}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;

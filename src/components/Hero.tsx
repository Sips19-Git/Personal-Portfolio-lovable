import { useEffect, useRef } from "react";
import { Facebook, Twitter, Linkedin, Github, Instagram, ArrowDown } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const roles = ["Frontend Developer", "Backend Developer", "Problem Solver", "Lifelong Learner"];

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = roles[roleIdx];
      if (textRef.current) {
        textRef.current.textContent = current.slice(0, charIdx);
      }
      if (!deleting && charIdx < current.length) {
        charIdx++;
        timeout = setTimeout(tick, 90);
      } else if (!deleting && charIdx === current.length) {
        deleting = true;
        timeout = setTimeout(tick, 1400);
      } else if (deleting && charIdx > 0) {
        charIdx--;
        timeout = setTimeout(tick, 50);
      } else {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        timeout = setTimeout(tick, 300);
      }
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  const socials = [
    { Icon: Github, href: "https://github.com/yourusername" },
    { Icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
    { Icon: Twitter, href: "https://twitter.com/yourprofile" },
    { Icon: Facebook, href: "https://facebook.com/yourprofile" },
    { Icon: Instagram, href: "https://instagram.com/yourprofile" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-24 pb-16"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full gradient-warm blur-3xl" />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-up">
          <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
            Hello, it's
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4 leading-none">
            <span className="gradient-text">Siphiwe</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-6 text-foreground/90">
            I'm a <span ref={textRef} className="text-accent font-medium" />
            <span className="text-accent animate-pulse">|</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
            A passionate full-stack developer who turns ideas into clean, functional, and beautiful
            web experiences — always learning, always building.
          </p>

          <div className="flex items-center gap-3 mb-8">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground hover:text-accent hover:border-accent hover:shadow-glow transition-smooth"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="px-6 py-3 gradient-warm text-primary-foreground font-medium rounded-full hover:shadow-glow transition-smooth inline-flex items-center gap-2"
            >
              More About Me <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-smooth"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end animate-fade-up">
          <div className="relative animate-float">
            <div className="absolute inset-0 gradient-warm rounded-full blur-2xl opacity-60 scale-110" />
            <img
              src={portrait}
              alt="Siphiwe portrait"
              width={420}
              height={420}
              className="relative w-72 h-72 md:w-[420px] md:h-[420px] rounded-full object-cover border-4 border-accent/40 shadow-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

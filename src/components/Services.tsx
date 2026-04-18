import { Code2, Server, Smartphone } from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "I build responsive, modern websites using HTML, CSS, and JavaScript. Focused on clean code and user-friendly design.",
  },
  {
    Icon: Server,
    title: "Backend Development",
    desc: "I develop backend systems using Java, creating secure, scalable, and efficient applications.",
  },
  {
    Icon: Smartphone,
    title: "Responsive Design",
    desc: "I ensure websites work perfectly on all devices — phones, tablets, and desktops, with delightful UX.",
  },
];

const Services = () => (
  <section id="services" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          My <span className="gradient-text">Services</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map(({ Icon, title, desc }) => (
          <div
            key={title}
            className="group p-8 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow hover:-translate-y-2 transition-smooth"
          >
            <div className="w-14 h-14 rounded-xl gradient-warm flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
              <Icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
            <p className="text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

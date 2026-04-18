import { Phone, Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-secondary/30">
    <div className="container mx-auto max-w-5xl">
      <div className="text-center mb-14">
        <p className="text-accent font-medium tracking-widest text-sm uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Contact <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          { Icon: Phone, title: "Phone", v: "+27 60 974 1314" },
          { Icon: Mail, title: "Email", v: "smalindi19@gmail.com" },
          { Icon: MapPin, title: "Location", v: "Potchefstroom, North West, SA" },
        ].map(({ Icon, title, v }) => (
          <div
            key={title}
            className="p-6 rounded-2xl bg-card border border-border text-center hover:-translate-y-1 hover:shadow-glow transition-smooth"
          >
            <div className="w-12 h-12 mx-auto rounded-xl gradient-warm flex items-center justify-center mb-3">
              <Icon className="text-primary-foreground" size={22} />
            </div>
            <h3 className="font-display text-lg font-bold mb-1">{title}</h3>
            <p className="text-muted-foreground text-sm">{v}</p>
          </div>
        ))}
      </div>

      <form
        action="https://formspree.io/f/xlgangyl"
        method="POST"
        className="max-w-2xl mx-auto space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-5 py-3 rounded-xl bg-input border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-smooth"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-5 py-3 rounded-xl bg-input border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-smooth"
          />
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full px-5 py-3 rounded-xl bg-input border border-border focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30 transition-smooth resize-none"
        />
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 gradient-warm text-primary-foreground font-medium rounded-full hover:shadow-glow transition-smooth"
        >
          Send Message
        </button>
      </form>
    </div>

    <footer className="mt-20 pt-8 border-t border-border/60 text-center">
      <div className="flex justify-center gap-4 mb-4">
        {[Github, Linkedin, Instagram].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent transition-smooth"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
      <p className="text-muted-foreground text-sm">© 2026 Siphiwe. All rights reserved.</p>
    </footer>
  </section>
);

export default Contact;

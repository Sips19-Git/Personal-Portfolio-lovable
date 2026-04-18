import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[min(95%,900px)] transition-smooth ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border border-border/60 shadow-elegant"
          : "bg-background/40 backdrop-blur-md border border-border/30"
      } rounded-full`}
    >
      <div className="flex items-center justify-between px-5 py-2">
        <a href="#home" className="font-display text-lg font-bold gradient-text tracking-tight">
          Siphiwe.
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth rounded-full hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-1.5 text-sm font-medium gradient-warm text-primary-foreground rounded-full hover:shadow-glow transition-smooth"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-1.5 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-4 pb-4 pt-2 border-t border-border/40">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-4 py-2 text-sm font-medium gradient-warm text-primary-foreground rounded-full"
          >
            Hire Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

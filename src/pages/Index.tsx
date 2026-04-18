import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsBanner from "@/components/SkillsBanner";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => (
  <main className="min-h-screen bg-background text-foreground">
    <Header />
    <Hero />
    <SkillsBanner />
    <About />
    <Services />
    <Skills />
    <Contact />
  </main>
);

export default Index;

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background text-foreground border-t border-foreground/5 pt-20 pb-12 overflow-hidden relative">

      {/* Giant Decorative text background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 text-[20vw] font-black text-foreground/[0.02] uppercase pointer-events-none select-none tracking-tighter whitespace-nowrap leading-none z-0">
        Kriti Kumari
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16 pb-16 border-b border-foreground/5">
          <div className="max-w-md">
            <h3 className="text-3xl font-bold tracking-tight mb-4 lowercase opacity-80 underline underline-offset-8 decoration-primary/30 decoration-2">
              kriti.dev
            </h3>
            <p className="text-foreground/50 text-lg font-light leading-relaxed">
              Engineering intelligent systems and building human-centric software with deep logic and athletic focus. Based in India, open to the world.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">Navigation</p>
              <ul className="space-y-2">
                {['Journey', 'Skills', 'Projects', 'Certificates', 'GitHub'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-foreground/40 font-bold">Presence</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/Kriti-kumari221" target="_blank" className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kritikumari01/" target="_blank" className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:kriticse005@gmail.com" className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
                    <Mail size={14} /> Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-xs font-mono text-foreground/40 uppercase tracking-widest">
              © {new Date().getFullYear()} Kriti Kumari
            </p>
            <div className="w-[1px] h-3 bg-foreground/10"></div>
            <p className="text-[10px] font-mono text-foreground/30 uppercase tracking-widest">
              Built with React & GSAP
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-mono uppercase tracking-[0.3em] font-bold text-foreground/40 hover:text-foreground transition-colors"
          >
            Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

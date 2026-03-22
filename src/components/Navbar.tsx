import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Zap } from "lucide-react";

const navItems = [
  { label: "Journey", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Intelligence", href: "#code-footprint" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("portfolio-theme") || "classic";
    }
    return "classic";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme === "quantum" ? "quantum" : "");
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "classic" ? "quantum" : "classic");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-foreground/[0.06] shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-4"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className={`text-2xl font-black tracking-tighter uppercase transition-all duration-500 ${
            scrolled
              ? "bg-clip-text text-transparent"
              : "text-white"
          }`}
          style={scrolled ? {
            backgroundImage: "linear-gradient(135deg, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.5) 50%, hsl(var(--foreground)) 100%)",
            backgroundSize: "200% 100%",
          } : {}}
        >
          Kriti
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[11px] font-mono uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group ${scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/60 hover:text-white"}`}
            >
              {item.label}
              <span className={`absolute -bottom-1.5 left-0 w-0 h-[1.5px] rounded-full transition-all duration-300 group-hover:w-full ${
                scrolled
                  ? "bg-gradient-to-r from-foreground to-foreground/40"
                  : "bg-gradient-to-r from-white to-white/40"
              }`} />
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl border transition-all duration-500 flex items-center gap-2 group hover:scale-105 ${scrolled
                ? "border-foreground/10 bg-foreground/5 text-foreground"
                : "border-white/10 bg-white/5 text-white"
              }`}
            title="Switch Theme"
          >
            {theme === "classic" ? (
              <Sparkles size={16} className="text-orange-500 group-hover:rotate-12 transition-transform" />
            ) : (
              <Zap size={16} className="text-cyan-400 group-hover:scale-110 transition-transform" />
            )}
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest hidden lg:block">
              {theme === "classic" ? "Classic" : "Quantum"}
            </span>
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden transition-colors duration-500 ${scrolled ? "text-foreground" : "text-white"}`}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-[11px] font-mono uppercase tracking-[0.3em] font-bold text-foreground/70 hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-[11px] font-mono font-bold uppercase tracking-widest text-foreground"
              >
                {theme === "classic" ? <Sparkles size={14} /> : <Zap size={14} />}
                Theme: {theme}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

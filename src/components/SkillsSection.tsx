import { useEffect, useRef } from "react";
import { BrainCircuit, Code, Server, AppWindow, Cpu, Network, Database, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Intelligence & Data",
    icon: BrainCircuit,
    color: "text-purple-500",
    bgAccent: "bg-purple-500/10",
    borderAccent: "group-hover:border-purple-500/30",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Scikit-Learn"]
  },
  {
    title: "Core Languages",
    icon: Code,
    color: "text-blue-500",
    bgAccent: "bg-blue-500/10",
    borderAccent: "group-hover:border-blue-500/30",
    skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript"]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    color: "text-emerald-500",
    bgAccent: "bg-emerald-500/10",
    borderAccent: "group-hover:border-emerald-500/30",
    skills: ["Node.js", "Express", "FastAPI", "Flask", "MySQL", "Pandas"]
  },
  {
    title: "Tools & Ecosystem",
    icon: AppWindow,
    color: "text-orange-500",
    bgAccent: "bg-orange-500/10",
    borderAccent: "group-hover:border-orange-500/30",
    skills: ["React", "Jupyter Notebook", "Docker", "Git", "GitHub", "System Design"]
  }
];

const marqueeSkills = [
  "TensorFlow", "PyTorch", "Neural Networks", "FastAPI", "Python",
  "Deep Learning", "Computer Vision", "React", "Node.js", "MySQL",
  "Docker", "Machine Learning", "NLP", "System Design", "Cloud Computing"
];

const SkillsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance
      gsap.fromTo(".skills-header-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );

      // Staggered Cards Entrance
      gsap.fromTo(".skill-card-premium",
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".skills-grid-new",
            start: "top 80%",
          }
        }
      );

      // Infinitely repeating marquee
      gsap.to(".skill-marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="bg-background text-foreground relative py-16 md:py-24 overflow-hidden" ref={containerRef}>

      {/* Background Decorative Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/[0.03] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-foreground/[0.02] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="skills-header-content mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="relative">
            <p className="text-foreground/50 font-mono text-sm tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
              <Sparkles size={16} className="text-primary/60" /> Core Expertise
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
              Skills & <span className="text-foreground/60 italic font-medium">Domain</span>
            </h2>
          </div>
          <p className="text-foreground/60 text-base md:text-lg max-w-lg tracking-tight leading-relaxed font-light border-l-2 border-primary/20 pl-6">
            Bridging the gap between complex Machine Learning research and production-grade Software Engineering.
          </p>
        </div>

        {/* Dynamic Skills Marquee */}
        <div className="relative w-full overflow-hidden py-8 mb-12 md:mb-16 bg-foreground/[0.01] border-y border-foreground/[0.05] -mx-4 md:-mx-12 px-4 md:px-12">
          <div className="skill-marquee-track flex whitespace-nowrap gap-12 text-3xl md:text-5xl font-bold text-foreground/[0.08] uppercase tracking-tighter">
            {[...marqueeSkills, ...marqueeSkills].map((skill, i) => (
              <span key={i} className="flex items-center gap-8">
                {skill} <div className="w-2 h-2 rounded-full bg-primary/20"></div>
              </span>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid-new grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div
                key={idx}
                className={`skill-card-premium group relative p-6 md:p-8 rounded-[2rem] border border-foreground/10 bg-foreground/[0.02] backdrop-blur-3xl transition-all duration-500 hover:bg-foreground/[0.04] scroll-mt-24 ${category.borderAccent}`}
              >
                {/* Visual Accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${category.bgAccent} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-5 mb-6">
                    <div className={`p-3.5 rounded-2xl bg-background border border-foreground/5 shadow-xl`}>
                      <Icon size={24} className={`${category.color}`} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-4 py-1.5 rounded-full border border-foreground/10 text-sm md:text-base font-medium text-foreground/70 bg-background/30 backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-foreground cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative Number */}
                <span className="absolute bottom-4 right-6 text-2xl font-mono font-black text-foreground/[0.03] pointer-events-none select-none">
                  0{idx + 1}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

import { useEffect, useRef } from "react";
import { Github, Code2, ChefHat, BookOpen, GitCommit, Activity, ExternalLink, Trophy, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GitHubSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(".gh-header-premium",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".gh-header-premium", start: "top 85%" }
        }
      );

      // Graph reveal with sweep
      const graphTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".gh-graph-card",
          start: "top 80%",
        }
      });

      graphTl
        .fromTo(".gh-sweep-shimmer",
          { scaleX: 1, transformOrigin: "right" },
          { scaleX: 0, duration: 1.2, ease: "power4.inOut" }
        )
        .fromTo(".gh-graph-img-premium",
          { scale: 1.02, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        );

      // Bento Cards stagger
      gsap.fromTo(".premium-profile-card",
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".profiles-bento-grid",
            start: "top 85%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="code-footprint" className="bg-background text-foreground relative py-16 md:py-24" ref={containerRef}>

      {/* Absolute Ambient Background dots */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-[1300px] mx-auto px-4 md:px-12 relative z-10">

        <div className="gh-header-premium mb-12 md:mb-16">
          <p className="text-foreground/50 font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
            <Activity size={16} className="text-primary/60" /> Digital Presence
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Code <span className="italic font-medium text-foreground/60">Intelligence</span>
          </h2>
        </div>

        <div className="profiles-bento-grid grid grid-cols-1 md:grid-cols-12 gap-5 mb-12">

          {/* LeetCode Card */}
          <a href="https://leetcode.com/u/tfhBBoaMI2/" target="_blank" rel="noopener noreferrer" className="premium-profile-card md:col-span-12 lg:col-span-7 group relative overflow-hidden rounded-[2.5rem] border border-orange-500/10 bg-orange-500/[0.02] backdrop-blur-3xl p-8 hover:bg-orange-500/[0.05] transition-all duration-500 hover:border-orange-500/40 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={18} className="text-orange-500" />
            </div>
            <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
              <Code2 size={240} className="text-orange-500 -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-orange-500/5">
                  <Code2 size={28} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">LeetCode</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500/70 mt-1">@tfhBBoaMI2</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-auto pt-8 border-t border-foreground/5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Total Solved</p>
                  <p className="text-4xl font-bold text-foreground">234</p>
                  <div className="flex gap-2 mt-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-green-500">86</span>
                    <span className="text-yellow-500">132</span>
                    <span className="text-red-500">16</span>
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Rating</p>
                  <p className="text-4xl font-bold text-foreground">1,519</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Achievements</p>
                  <div className="flex items-center gap-2">
                    <p className="text-4xl font-bold text-foreground">2</p>
                    <Trophy size={18} className="text-yellow-500 mb-1" />
                  </div>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Global Rank</p>
                  <p className="text-4xl font-bold text-orange-500/80 tracking-tighter">Top 15%</p>
                </div>
              </div>
            </div>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/Kriti-kumari221" target="_blank" rel="noopener noreferrer" className="premium-profile-card md:col-span-12 lg:col-span-5 group relative overflow-hidden rounded-[2.5rem] border border-foreground/10 bg-foreground/[0.02] backdrop-blur-3xl p-8 hover:bg-foreground/[0.05] transition-all duration-500 hover:border-foreground/30 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={18} className="text-foreground" />
            </div>
            <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
              <Github size={240} className="text-foreground -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/10 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-black/5">
                  <Github size={28} className="text-foreground opacity-90" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">GitHub</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-50 mt-1">@Kriti-kumari221</p>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-foreground/5">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40 mb-3">Yearly Contributions</p>
                <div className="flex items-baseline gap-4">
                  <p className="text-6xl font-bold tracking-tighter">879</p>
                  <div className="flex items-center gap-2 text-green-500 font-mono text-sm font-bold">
                    <Activity size={14} className="animate-pulse" /> Consistent
                  </div>
                </div>
              </div>
            </div>
          </a>

          {/* CodeChef Card */}
          <a href="https://www.codechef.com/users/kettle_reef_20" target="_blank" rel="noopener noreferrer" className="premium-profile-card md:col-span-12 lg:col-span-4 group relative overflow-hidden rounded-[2.5rem] border border-yellow-600/10 bg-yellow-600/[0.02] backdrop-blur-3xl p-8 hover:bg-yellow-600/[0.05] transition-all duration-500 hover:border-yellow-600/40 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={18} className="text-yellow-600" />
            </div>
            <div className="absolute -bottom-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
              <ChefHat size={200} className="text-yellow-600 -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 rounded-2xl bg-yellow-600/10 border border-yellow-600/20 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-yellow-600/5">
                  <ChefHat size={28} className="text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">CodeChef</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-yellow-600/70 mt-1">@kettle_reef_20</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-auto pt-8 border-t border-foreground/5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Current Rating</p>
                  <p className="text-4xl font-bold">1200<span className="text-yellow-600">+</span></p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Division</p>
                  <p className="text-4xl font-bold opacity-80">Div 4</p>
                </div>
              </div>
            </div>
          </a>

          {/* GFG Card */}
          <a href="https://auth.geeksforgeeks.org/user/kritikumari221/" target="_blank" rel="noopener noreferrer" className="premium-profile-card md:col-span-12 lg:col-span-8 group relative overflow-hidden rounded-[2.5rem] border border-emerald-500/10 bg-emerald-500/[0.02] backdrop-blur-3xl p-8 hover:bg-emerald-500/[0.05] transition-all duration-500 hover:border-emerald-500/40 flex flex-col justify-between hover:-translate-y-1">
            <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={18} className="text-emerald-500" />
            </div>
            <div className="absolute -top-10 -right-10 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500">
              <BookOpen size={280} className="text-emerald-500 -rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-emerald-500/5">
                  <BookOpen size={28} className="text-emerald-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">GeeksforGeeks</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-500/70 mt-1">@kritikumari221</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-auto pt-8 border-t border-foreground/5">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Institutional Rank</p>
                  <p className="text-4xl font-bold text-foreground">Top <span className="text-emerald-500">%</span></p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Coding Score</p>
                  <p className="text-4xl font-bold text-foreground">150<span className="text-emerald-500">+</span></p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-foreground/40 mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <p className="text-3xl font-bold text-emerald-500/80">Advanced</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        {/* GitHub Graph Component - Fully Cinematic */}
        <div className="gh-graph-card relative w-full rounded-[3rem] bg-foreground/[0.02] border border-foreground/[0.08] backdrop-blur-xl p-8 md:p-14 mb-12 overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 bg-background gh-sweep-shimmer z-20"></div>

          <div className="flex items-center gap-4 mb-10 text-foreground/50 justify-center">
            <span className="w-8 h-[1px] bg-foreground/20"></span>
            <h3 className="font-mono text-[10px] tracking-[0.4em] uppercase">Contribution Topology</h3>
            <span className="w-8 h-[1px] bg-foreground/20"></span>
          </div>

          <div className="w-full overflow-x-auto pb-6 custom-scrollbar-premium flex justify-center">
            <img
              src="https://ghchart.rshah.org/555555/Kriti-kumari221"
              alt="GitHub Contributions"
              className="gh-graph-img-premium mix-blend-difference hover:brightness-125 transition-all w-full max-w-4xl"
              style={{ filter: "invert(1) saturate(0.5) contrast(1.2)" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default GitHubSection;

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, FileText, GraduationCap, Award, Code2, Sparkles, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const resumeData = {
  education: [
    {
      degree: "B.Tech CSE (AI & ML)",
      institution: "Lovely Professional University • Phagwara, Punjab",
      date: "Since Aug '23",
      score: "CGPA: 7.74",
    },
    {
      degree: "Intermediate (PCM)",
      institution: "Quazi Ahamad Inter College Jaley • Darbhanga, Bihar",
      date: "Mar '21 – May '23",
      score: "Percentage: 75%",
    },
    {
      degree: "Matriculation",
      institution: "Krishan Dhari Kedarnath High School • Sitamarhi, Bihar",
      date: "Mar '20 – May '21",
      score: "Percentage: 73.6%",
    }
  ],
  achievements: [
    {
      title: "Educational Pioneer",
      desc: "Recognized as the first woman in my village to pursue higher education, overcoming socio-cultural barriers."
    },
    {
      title: "Patent Accepted",
      desc: "Contributed to a patented research project on a Fuzzy Logic-Based Multi-Layered Intelligent Fireproof Fabric."
    },
    {
      title: "Grammar Contest Winner",
      desc: "Secured first prize in an English grammar contest among 200+ participants at LPU."
    }
  ],
  skills: {
    languages: "Java, Python, C++, C",
    tools: "Jupyter Notebook, MySQL, Pandas, Seaborn, Matplotlib, Scikit-learn, MS Excel, Git, GitHub",
  }
};

const ResumeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'education' | 'achievements'>('education');

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // General staggered entrance
      gsap.fromTo(
        ".blueprint-element",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          }
        }
      );

      // Card entrance
      gsap.fromTo(
        ".resume-card-stagger",
        { y: 30, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".resume-content-grid",
            start: "top 80%",
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]); // re-run some card anims when tab changes if we wanted, but keeping it simple

  return (
    <section id="resume" className="bg-background text-foreground relative py-16 md:py-24" ref={containerRef}>

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="w-full md:w-2/3">
            <p className="blueprint-element text-foreground/50 font-mono text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <FileText size={16} /> Documentation
            </p>
            <h2 className="blueprint-element text-4xl md:text-6xl font-medium tracking-tight mb-6">
              The <span className="italic text-foreground/60">Blueprint</span>
            </h2>
            <p className="blueprint-element text-lg md:text-xl font-light leading-relaxed text-foreground/70 max-w-2xl">
              A comprehensive overview of my academic foundation, technical proficiencies, and unique professional journey in AI/ML engineering.
            </p>
          </div>

          <div className="blueprint-element w-full md:w-auto">
            <a
              href="/Kriti_Kumari_Resume.pdf"
              download="Kriti_Kumari_Resume.pdf"
              className="group inline-flex items-center justify-center w-full md:w-auto gap-4 bg-foreground text-background px-8 py-5 rounded-full font-medium text-base transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-foreground/20 hover:bg-foreground/90"
            >
              <Download size={20} className="animate-bounce-slight" />
              Download Full Resume
              <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>

        {/* Content Layout */}
        <div className="resume-content-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left Column: Fixed Card / Summary */}
          <div className="lg:col-span-5 space-y-6">

            {/* Skills Mini-Bento */}
            <div className="resume-card-stagger bg-foreground/[0.02] border border-foreground/10 rounded-[2rem] p-8 backdrop-blur-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <Code2 size={120} className="-rotate-12" />
              </div>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <Sparkles size={20} className="text-foreground/70" /> Technical Arsenal
              </h3>

              <div className="space-y-6 relative z-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">Languages</p>
                  <p className="text-foreground/90 leading-relaxed font-medium">
                    {resumeData.skills.languages}
                  </p>
                </div>
                <div className="w-full h-[1px] bg-foreground/10"></div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-foreground/50 mb-3">Tools & Libraries</p>
                  <p className="text-foreground/80 leading-relaxed">
                    {resumeData.skills.tools}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact or Status */}
            <div className="resume-card-stagger bg-blue-500/5 border border-blue-500/20 rounded-[2rem] p-8 backdrop-blur-xl flex flex-col justify-center">
              <p className="font-mono text-xs uppercase tracking-widest text-blue-500/80 mb-2">Current Status</p>
              <p className="text-2xl font-light text-foreground">3rd Year B.Tech Student</p>
              <p className="text-foreground/60 mt-1 flex items-center gap-2 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Open for opportunities
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Tabs */}
          <div className="lg:col-span-7">

            {/* Tab Toggles */}
            <div className="blueprint-element flex gap-4 mb-8 bg-foreground/[0.02] p-2 rounded-full border border-foreground/5 w-fit">
              <button
                onClick={() => setActiveTab('education')}
                className={`px-6 py-3 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300 ${activeTab === 'education' ? 'bg-foreground text-background shadow-lg' : 'hover:bg-foreground/5 text-foreground/60'}`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('achievements')}
                className={`px-6 py-3 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300 ${activeTab === 'achievements' ? 'bg-foreground text-background shadow-lg' : 'hover:bg-foreground/5 text-foreground/60'}`}
              >
                Achievements
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-4">
              {activeTab === 'education' && (
                <div className="space-y-4">
                  {resumeData.education.map((item, idx) => (
                    <div key={idx} className="resume-card-stagger group flex gap-6 p-6 md:p-8 rounded-[2rem] border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors duration-500">
                      <div className="hidden sm:flex items-start pt-1">
                        <div className="p-3 rounded-2xl bg-foreground/5 text-foreground/70 group-hover:bg-foreground/10 transition-colors">
                          <GraduationCap size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                          <h4 className="text-xl md:text-2xl font-semibold tracking-tight">{item.degree}</h4>
                          <span className="font-mono text-xs tracking-widest text-foreground/50 bg-foreground/5 px-3 py-1 rounded-full w-fit whitespace-nowrap">{item.date}</span>
                        </div>
                        <p className="text-foreground/70 text-sm md:text-base leading-relaxed mb-4">{item.institution}</p>
                        <p className="font-mono text-sm text-foreground/90 font-medium flex items-center gap-2">
                          <ChevronRight size={14} className="text-blue-500" /> {item.score}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'achievements' && (
                <div className="space-y-4">
                  {resumeData.achievements.map((item, idx) => (
                    <div key={idx} className="resume-card-stagger group flex gap-6 p-6 md:p-8 rounded-[2rem] border border-foreground/5 bg-foreground/[0.01] hover:bg-foreground/[0.03] transition-colors duration-500">
                      <div className="hidden sm:flex items-start pt-1">
                        <div className="p-3 rounded-2xl bg-yellow-500/10 text-yellow-600 group-hover:bg-yellow-500/20 transition-colors">
                          <Award size={24} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl md:text-2xl font-semibold tracking-tight mb-3">{item.title}</h4>
                        <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeSection;

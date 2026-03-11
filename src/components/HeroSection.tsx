import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profilePhoto from "@/assets/profile-photo.jpg";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const backgroundTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial State Setup
      // Use set to establish clear baseline before any animation
      gsap.set([leftTextRef.current, rightTextRef.current, subtitleRef.current], {
        opacity: 0,
        y: 40,
        x: 0,
        scale: 1,
        filter: "blur(0px)"
      });
      gsap.set(imageContainerRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: -10,
        filter: "blur(0px)"
      });
      gsap.set(backgroundTextRef.current, {
        opacity: 0,
        scale: 1.1,
        filter: "blur(0px)"
      });

      // 2. Entrance Animation (Non-Scrubbed)
      const entranceTl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 1.2 }
      });

      entranceTl
        .to(backgroundTextRef.current, { opacity: 0.02, scale: 1, duration: 2 }, 0)
        .to(leftTextRef.current, { opacity: 1, y: 0 }, 0.3)
        .to(rightTextRef.current, { opacity: 1, y: 0 }, 0.3)
        .to(imageContainerRef.current, { opacity: 1, scale: 1, rotation: 0, ease: "expo.out", duration: 1.8 }, 0.5)
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.8);

      // 3. Scroll Controlled Animation (Scrubbed)
      // We use a separate ScrollTrigger to handle the "Jesko Jet" zoom/fade
      // CRITICAL: We use 'fromTo' to ensure bidirectional reliability
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%", // Shortened to avoid the "blank gap" issue
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      scrollTl
        .fromTo(leftTextRef.current,
          { x: 0, opacity: 1, filter: "blur(0px)" },
          { x: "-20vw", opacity: 0, filter: "blur(20px)", ease: "none" }, 0)
        .fromTo(rightTextRef.current,
          { x: 0, opacity: 1, filter: "blur(0px)" },
          { x: "20vw", opacity: 0, filter: "blur(20px)", ease: "none" }, 0)
        .fromTo(subtitleRef.current,
          { y: 0, opacity: 1 },
          { y: -100, opacity: 0, ease: "none" }, 0)
        .fromTo(imageContainerRef.current,
          { scale: 1, opacity: 1, filter: "blur(0px)" },
          { scale: 4, opacity: 0, filter: "blur(30px)", ease: "power1.in" }, 0)
        .fromTo(backgroundTextRef.current,
          { scale: 1, opacity: 0.02 },
          { scale: 1.5, opacity: 0, filter: "blur(10px)", ease: "none" }, 0);

      // Refresh ScrollTrigger to catch any layout changes
      ScrollTrigger.refresh();

    }, containerRef);

    return () => ctx.revert(); // Proper cleanup
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-[hsl(var(--dark-section))] text-white overflow-hidden flex items-center justify-center m-0 p-0"
    >

      {/* Background Signature Text */}
      <div
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
        <span className="text-[35vw] font-black text-white leading-none tracking-tighter uppercase">
          KRITI
        </span>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-[1700px] flex flex-col items-center justify-center px-4 md:px-20 pointer-events-none">

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 w-full">

          <div ref={leftTextRef} className="will-change-transform">
            <h1 className="text-[18vw] md:text-[11vw] lg:text-[10vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              KRITI
            </h1>
          </div>

          <div
            ref={imageContainerRef}
            className="w-[50vw] h-[50vw] sm:w-[40vw] sm:h-[40vw] md:w-[24vw] md:h-[24vw] lg:w-[19vw] lg:h-[19vw] rounded-full overflow-hidden flex-shrink-0 relative border-[10px] md:border-[15px] border-[hsl(var(--dark-section))] shadow-[0_40px_100px_rgba(0,0,0,0.8)] bg-card/20 will-change-transform"
          >
            <div className="absolute inset-0 z-10 pointer-events-none border-[1px] border-white/10 rounded-full" />
            <img
              src={profilePhoto}
              alt="Kriti Kumari"
              className="w-full h-full object-cover"
            />
          </div>

          <div ref={rightTextRef} className="will-change-transform">
            <h1 className="text-[18vw] md:text-[11vw] lg:text-[10vw] font-bold leading-none tracking-tighter text-white whitespace-nowrap drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              KUMARI
            </h1>
          </div>

        </div>

      </div>

      {/* Floating Subtitles */}
      <div
        ref={subtitleRef}
        className="absolute bottom-[20%] md:bottom-[12%] w-full flex flex-col md:flex-row justify-between max-w-[1500px] px-10 md:px-20 text-white/90 font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] pointer-events-auto items-center gap-10 will-change-transform"
      >
        <div className="flex items-center gap-5 group cursor-default">
          <div className="w-10 h-px bg-white/20"></div>
          <p className="font-bold tracking-[0.3em]">Machine Learning Engineer</p>
        </div>

        <div className="text-center md:text-right flex items-center gap-5 flex-row-reverse group cursor-default">
          <div className="w-10 h-px bg-white/20"></div>
          <div>
            <p className="font-bold tracking-[0.3em] mb-1">Engineering Intelligence</p>
            <p className="text-white/30 text-[9px] tracking-[0.2em]">Deep Learning • Scalable Systems</p>
          </div>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 z-20 pointer-events-none">
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-40">
          <ArrowDown size={14} className="text-white" />
        </div>
        <div className="w-px h-16 bg-gradient-to-b from-white/40 via-white/10 to-transparent"></div>
      </div>

    </section>
  );
};

export default HeroSection;

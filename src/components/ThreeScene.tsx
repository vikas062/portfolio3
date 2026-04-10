const ThreeScene = () => {
  const orbitItems = [
    { label: "Neural Net", color: "#3b82f6", delay: "0s", duration: "8s" },
    { label: "Deep Learning", color: "#a855f7", delay: "2.5s", duration: "10s" },
    { label: "Data Eng", color: "#06b6d4", delay: "5s", duration: "12s" },
  ];

  return (
    <section className="section-padding relative min-h-screen flex items-center justify-center bg-black overflow-hidden border-y border-white/5">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gradient-shift 8s ease infinite",
        }}
      />

      {/* Scan line effect */}
      <div className="scan-line" />

      {/* Gradient nebula blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, #a855f7 50%, transparent 70%)", filter: "blur(80px)", animation: "float-updown 8s ease-in-out infinite" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4 0%, #3b82f6 50%, transparent 70%)", filter: "blur(60px)", animation: "float-updown 10s ease-in-out infinite reverse" }} />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* Left: Text content */}
          <div className="flex-1 text-left">
            <p className="text-blue-400 font-mono text-xs tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-blue-400/50" />
              Neural Nexus
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-none">
              Interactive{" "}
              <br />
              <span style={{
                background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb, #4facfe)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradient-shift 4s ease infinite",
              }}>
                3D Multiverse
              </span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl font-light leading-relaxed mb-10">
              A spatial interpretation of my digital footprint. Explore the intersection of Artificial Intelligence and Creative Computing.
            </p>

            {/* Animated stat bars */}
            {[
              { label: "Machine Learning", val: 92, color: "#3b82f6" },
              { label: "Deep Learning", val: 87, color: "#a855f7" },
              { label: "Full Stack", val: 80, color: "#06b6d4" },
            ].map((stat) => (
              <div key={stat.label} className="mb-4">
                <div className="flex justify-between text-xs font-mono text-white/40 mb-1">
                  <span>{stat.label}</span>
                  <span>{stat.val}%</span>
                </div>
                <div className="h-[2px] bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${stat.val}%`,
                      background: `linear-gradient(90deg, ${stat.color}, ${stat.color}80)`,
                      boxShadow: `0 0 10px ${stat.color}60`,
                      animation: "shimmer 3s infinite",
                      backgroundSize: "200% 100%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Holographic orb visualization */}
          <div className="w-full lg:w-[500px] h-[500px] relative flex items-center justify-center">

            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full opacity-20 glow-pulse"
              style={{ background: "radial-gradient(circle, #3b82f620, transparent 70%)" }} />

            {/* Main holographic orb */}
            <div className="relative w-64 h-64 flex items-center justify-center">

              {/* Rotating rings */}
              {[
                { size: 260, dur: "8s", color: "#3b82f6", opacity: 0.3 },
                { size: 220, dur: "12s", color: "#a855f7", opacity: 0.25, reverse: true },
                { size: 180, dur: "6s", color: "#06b6d4", opacity: 0.2 },
                { size: 140, dur: "16s", color: "#f59e0b", opacity: 0.15, reverse: true },
              ].map((ring, i) => (
                <div
                  key={i}
                  className="absolute rounded-full border"
                  style={{
                    width: ring.size,
                    height: ring.size,
                    borderColor: ring.color,
                    opacity: ring.opacity,
                    animation: `spin ${ring.dur} linear infinite ${ring.reverse ? "reverse" : ""}`,
                    boxShadow: `0 0 15px ${ring.color}40, inset 0 0 15px ${ring.color}20`,
                  }}
                />
              ))}

              {/* Center orb */}
              <div
                className="relative w-24 h-24 rounded-full z-10 flex items-center justify-center"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #667eea, #764ba2)",
                  boxShadow: "0 0 40px #667eea60, 0 0 80px #764ba240, inset 0 0 30px rgba(255,255,255,0.1)",
                  animation: "glow-pulse 3s ease-in-out infinite",
                }}
              >
                <div className="text-white font-mono text-xs font-bold text-center leading-tight">
                  AI<br />CORE
                </div>
              </div>

              {/* Orbiting dots */}
              {orbitItems.map((item, i) => (
                <div
                  key={i}
                  className="absolute w-full h-full"
                  style={{ animation: `spin ${item.duration} linear infinite`, animationDelay: item.delay }}
                >
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[9px] font-mono font-bold border whitespace-nowrap"
                    style={{
                      background: `${item.color}15`,
                      borderColor: `${item.color}50`,
                      color: item.color,
                      boxShadow: `0 0 10px ${item.color}30`,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              ))}

              {/* Data stream lines */}
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px"
                  style={{
                    width: `${80 + i * 20}px`,
                    background: `linear-gradient(90deg, transparent, rgba(59,130,246,0.4), transparent)`,
                    top: `${20 + i * 14}%`,
                    left: "50%",
                    transform: `translateX(-50%) rotate(${i * 30}deg)`,
                    animation: `shimmer ${2 + i * 0.5}s infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-blue-500/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-purple-500/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-blue-500/30 rounded-br-lg" />

            {/* Floating data cards */}
            {[
              { top: "5%", right: "0%", label: "Accuracy", value: "98.2%", color: "#10b981" },
              { bottom: "10%", left: "0%", label: "Models", value: "12+", color: "#3b82f6" },
            ].map((card, i) => (
              <div
                key={i}
                className="absolute px-4 py-2 rounded-xl border text-xs font-mono backdrop-blur-md"
                style={{
                  top: card.top,
                  bottom: card.bottom,
                  left: card.left,
                  right: card.right,
                  background: "rgba(0,0,0,0.6)",
                  borderColor: `${card.color}30`,
                  animation: `float-updown ${4 + i}s ease-in-out infinite`,
                  animationDelay: `${i}s`,
                }}
              >
                <div style={{ color: `${card.color}99` }}>{card.label}</div>
                <div className="text-white font-bold text-sm">{card.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene;

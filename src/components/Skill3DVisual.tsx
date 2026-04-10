const colors = [
  { main: "#a855f7", glow: "#7c3aed", sec: "#ec4899" },
  { main: "#3b82f6", glow: "#2563eb", sec: "#06b6d4" },
  { main: "#10b981", glow: "#059669", sec: "#3b82f6" },
  { main: "#f97316", glow: "#ea580c", sec: "#f59e0b" },
];

const Skill3DVisual = ({ index }: { index: number }) => {
  const c = colors[index % colors.length];
  return (
    <div className="absolute top-0 right-0 w-44 h-44 z-0 pointer-events-none">
      {/* Outer glow ring */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${c.main}40 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      {/* Morphing blob */}
      <div
        className="absolute inset-4"
        style={{
          background: `radial-gradient(circle at 40% 40%, ${c.main}30, ${c.sec}15, transparent 70%)`,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          animation: `morph ${6 + index}s ease-in-out infinite`,
          opacity: 0.5,
          filter: "blur(8px)",
          transition: "opacity 0.7s",
        }}
      />
      {/* Spinning ring */}
      <div
        className="absolute inset-6 rounded-full border opacity-20 group-hover:opacity-50 transition-opacity duration-700"
        style={{
          borderColor: c.main,
          borderStyle: "dashed",
          animation: `spin ${8 + index * 2}s linear infinite`,
          boxShadow: `0 0 15px ${c.main}30`,
        }}
      />
      {/* Centered dot */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: c.main,
            boxShadow: `0 0 12px ${c.glow}, 0 0 24px ${c.main}60`,
            animation: "glow-pulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
};

export default Skill3DVisual;

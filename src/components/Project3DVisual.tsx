const gradients = [
  { from: "#3b82f6", to: "#06b6d4", mid: "#8b5cf6" },
  { from: "#a855f7", to: "#ec4899", mid: "#8b5cf6" },
  { from: "#06b6d4", to: "#3b82f6", mid: "#0ea5e9" },
  { from: "#f59e0b", to: "#f97316", mid: "#fbbf24" },
];

const Project3DVisual = ({ index }: { index: number }) => {
  const g = gradients[index % gradients.length];
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-inherit">
      {/* Base gradient */}
      <div
        className="absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity duration-700"
        style={{
          background: `linear-gradient(135deg, ${g.from}40, ${g.mid}20, ${g.to}40)`,
          backgroundSize: "200% 200%",
          animation: "gradient-shift 6s ease infinite",
        }}
      />
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer"
        style={{ borderRadius: "inherit" }}
      />
      {/* Corner glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle, ${g.from}, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      {/* Diagonal accent line */}
      <div
        className="absolute bottom-0 left-0 w-full h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `linear-gradient(90deg, transparent, ${g.from}80, ${g.to}80, transparent)`,
        }}
      />
    </div>
  );
};

export default Project3DVisual;

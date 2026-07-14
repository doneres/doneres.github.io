export default function GradientMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -left-32 w-[28rem] h-[28rem] rounded-full opacity-25 blur-[80px]"
        style={{
          background: "var(--color-navy)",
          animation: "float-slow 24s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[26rem] h-[26rem] rounded-full opacity-20 blur-[80px]"
        style={{
          background: "var(--color-navy-light)",
          animation: "float-slower 28s ease-in-out infinite",
        }}
      />
    </div>
  );
}

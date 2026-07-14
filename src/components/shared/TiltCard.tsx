import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transformPerspective: 800,
      }}
      className={className}
    >
      <Spotlight mouseX={mouseX} mouseY={mouseY} />
      {children}
    </motion.div>
  );
}

function Spotlight({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const background = useTransform([mouseX, mouseY], ([x, y]: number[]) => {
    const px = (x + 0.5) * 100;
    const py = (y + 0.5) * 100;
    return `radial-gradient(300px circle at ${px}% ${py}%, rgba(52,255,179,0.12), transparent 70%)`;
  });

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10"
      style={{ background }}
    />
  );
}

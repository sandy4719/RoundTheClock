import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 30, suffix: "+", label: "Services Offered" },
  { value: 4.9, suffix: "", label: "Average Rating", isDecimal: true },
  { value: 24, suffix: "/7", label: "Availability" },
];

function useCountUp(target: number, duration: number, start: boolean, isDecimal?: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(isDecimal ? parseFloat((eased * target).toFixed(1)) : Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration, isDecimal]);

  return count;
}

function StatItem({ stat, animate }: { stat: typeof stats[0]; animate: boolean }) {
  const count = useCountUp(stat.value, 1800, animate, (stat as any).isDecimal);
  return (
    <div className="text-center">
      <div className="text-5xl sm:text-6xl font-bold text-amber-400 mb-2">
        {(stat as any).isDecimal ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white/70 text-base">{stat.label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#1a2456] py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} animate={animate} />
        ))}
      </div>
    </section>
  );
}

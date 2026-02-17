import { useEffect, useState, useRef } from "react";

const StatItem = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setHasStarted(true);
    }, { threshold: 0.5 });

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <div ref={countRef} className="text-center p-6 border-r border-white/10 last:border-0">
      <div className="text-4xl md:text-5xl font-black text-nistGold mb-2">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm font-bold text-white/70 uppercase tracking-widest leading-tight">
        {label}
      </div>
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="bg-nistBlue py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <StatItem target={28} suffix=" LPA" label="Highest Package (Amazon)" />
          <StatItem target={8200} suffix="+" label="Students Placed Successfully" />
          <StatItem target={280} suffix="+" label="Companies Visited Campus" />
          <StatItem target={19000} suffix="+" label="Global Alumni Network" />
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
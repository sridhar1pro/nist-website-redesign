import { Link } from "react-router-dom";

const ResearchSection = () => {
  const domains = [
    {
      title: "VLSI & Embedded Systems",
      tags: ["CADENCE", "Synopsys", "FPGA"],
      icon: "⚡",
      stats: "150+ Papers"
    },
    {
      title: "Renewable Energy (CRE)",
      tags: ["Solar Grid", "Hybrid Tech", "Smart City"],
      icon: "☀️",
      stats: "₹2Cr Grants"
    },
    {
      title: "Data Science & AI",
      tags: ["Machine Learning", "IoT", "Big Data"],
      icon: "🤖",
      stats: "Industry 4.0"
    }
  ];

  return (
    <section className="py-24 bg-nistBlue text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-nistGold font-black uppercase tracking-[0.2em] text-sm mb-4">Innovation Hub</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
              Pushing the Boundaries of <br /> <span className="text-nistGold">Scientific Discovery.</span>
            </h3>
          </div>
          <Link to="/research" className="bg-white text-nistBlue px-8 py-4 rounded-full font-bold hover:bg-nistGold transition-all shadow-xl whitespace-nowrap">
            View All Publications
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {domains.map((d, i) => (
            <div key={i} className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="text-4xl mb-6 bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-nistGold group-hover:text-nistBlue transition-all">
                {d.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{d.title}</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {d.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-nistGold font-bold">{d.stats}</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Learn More →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10">
          <div className="text-center">
            <p className="text-4xl font-black text-nistGold">500+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-70">Journal Papers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-nistGold">25+</p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-70">Patents Filed</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-nistGold">12</p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-70">Research Centers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-nistGold">₹15Cr</p>
            <p className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-70">Funded Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
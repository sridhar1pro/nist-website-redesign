import React, { useRef } from "react";
import AdmissionForm from "../components/AdmissionForm";

const Admissions = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const rankings = [
    { rank: "5th", title: "Engineering Institutes in Eastern India" },
    { rank: "26th", title: "Private Engineering Institutes in India" },
    { rank: "16th", title: "Top Institutes by Research Capability" },
    { rank: "37th", title: "Top Institutes by Placement Performance" },
  ];

  const courses = [
    { title: "B.Tech (Undergraduate)", duration: "4 Years", eligibility: "JEE Main / OJEE Score" },
    { title: "M.Tech (Postgraduate)", duration: "2 Years", eligibility: "Valid GATE Score" },
    { title: "MBA", duration: "2 Years", eligibility: "CAT / MAT / XAT Score" },
    { title: "MCA", duration: "2 Years", eligibility: "NIMCET / OJEE Score" },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200">
      
      {/* 1. PREMIUM HERO SECTION */}
      <section 
        className="relative min-h-[90vh] pt-48 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden"
        style={{
          background: `radial-gradient(circle at top right, rgba(30, 58, 138, 0.3), transparent), 
                       radial-gradient(circle at bottom left, rgba(15, 23, 42, 1), rgba(15, 23, 42, 0.8)), 
                       url('https://nist.edu/images/campus/campus1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Side: Classy Typography */}
          <div className="space-y-8 animate-fadeIn">
            <div className="space-y-2">
                <h3 className="text-2xl font-light tracking-[0.3em] text-nistGold uppercase">
                  NIST <span className="text-white font-serif italic lowercase tracking-normal px-2">leads</span>
                </h3>
                <h1 className="text-6xl md:text-8xl font-serif text-white leading-tight">
                  National <br />
                  <span className="font-sans font-black tracking-tighter">Excellence</span>
                </h1>
            </div>
            
            <p className="text-xl text-slate-400 font-light max-w-md leading-relaxed border-l border-nistGold/50 pl-6">
              Innovating for the future through rigorous research and academic brilliance.
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
               <button 
                 onClick={scrollToForm} 
                 className="bg-nistGold text-black px-10 py-4 rounded-full font-bold hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] hover:-translate-y-1"
               >
                 Apply Now 2026-27
               </button>
               <a 
                 href="/nist-brochure-2026.pdf" 
                 download 
                 className="backdrop-blur-xl bg-white/5 border border-white/10 px-10 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-3"
               >
                 <span>Download Brochure</span>
                 <span className="text-nistGold">↓</span>
               </a>
            </div>
          </div>

          {/* Right Side: The Fascinating Ranking Rectangle */}
          <div className="relative group">
            {/* Decorative Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-nistGold to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-[#1e293b]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
               <div className="mb-10 border-b border-white/5 pb-8">
                  <span className="text-sm uppercase tracking-[0.4em] text-nistGold font-bold">Ranked</span>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-8xl font-black text-white tracking-tighter">28</h2>
                    <span className="text-3xl font-serif italic text-nistGold">th</span>
                  </div>
                  <p className="text-xl font-light text-slate-300 mt-2 tracking-wide uppercase">Top Engineering Institutes in India</p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {rankings.map((item, idx) => (
                   <div key={idx} className="bg-slate-900/50 border border-white/5 p-5 rounded-2xl hover:border-nistGold/50 transition-all group/item">
                      <span className="text-3xl font-serif italic text-nistGold block mb-1 group-hover/item:scale-110 transition-transform">{item.rank}</span>
                      <p className="text-[11px] leading-relaxed uppercase font-medium tracking-[0.1em] text-slate-400">{item.title}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>

        {/* Minimalist Dot Navigation */}
        <div className="flex gap-4 mt-20 relative z-10">
          <div className="w-12 h-1 bg-nistGold rounded-full"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-6 h-1 bg-white/10 rounded-full"></div>
          ))}
        </div>
      </section>

      {/* 2. ADMISSION PROCESS: DARK GLASS CARDS */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-5xl font-serif italic text-white mb-4 text-center">Admission Process</h2>
          <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-nistGold to-transparent"></div>
        </div>
        <div className="grid md:grid-cols-4 gap-10">
          {[
            { step: "01", title: "Apply Online", desc: "Start your journey by registering through our digital portal." },
            { step: "02", title: "Verification", desc: "Academic credentials are reviewed by our expert committee." },
            { step: "03", title: "Counseling", desc: "Interactive sessions to align your goals with our programs." },
            { step: "04", title: "Enrolment", desc: "Finalize your seat and join the elite NIST community." },
          ].map((item, idx) => (
            <div key={idx} className="relative p-10 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 transition-all">
              <span className="text-6xl font-black text-white/5 absolute top-4 right-6">{item.step}</span>
              <h3 className="text-xl font-bold text-nistGold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ELIGIBILITY TABLE: CLASSY DARK DESIGN */}
      <section className="py-32 bg-[#0a0f1c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900/50 backdrop-blur-xl rounded-[3rem] shadow-3xl overflow-hidden border border-white/5">
            <div className="bg-gradient-to-b from-white/5 to-transparent py-10 text-center">
              <h2 className="text-3xl font-serif italic text-white tracking-wide">Programs & Eligibility</h2>
            </div>
            <div className="overflow-x-auto px-8 pb-8">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-8 text-xs font-bold text-nistGold uppercase tracking-[0.3em]">Course</th>
                    <th className="p-8 text-xs font-bold text-nistGold uppercase tracking-[0.3em]">Duration</th>
                    <th className="p-8 text-xs font-bold text-nistGold uppercase tracking-[0.3em]">Entrance Requirement</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {courses.map((course, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="p-8 font-medium text-lg text-white">{course.title}</td>
                      <td className="p-8 font-light italic">{course.duration}</td>
                      <td className="p-8">
                        <span className="border border-nistGold/30 text-nistGold px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest">
                          {course.eligibility}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE FORM SECTION: CLEAN & FOCUSED */}
      <section ref={formRef} className="py-32 bg-[#0f172a] relative overflow-hidden">
        {/* Abstract background shape */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif italic text-white mb-4">Secure Your Future</h2>
            <p className="text-slate-500 font-light tracking-widest uppercase text-xs">Submit an inquiry for the 2026-27 session</p>
          </div>
          <div className="bg-[#1e293b] rounded-[3.5rem] p-12 border border-white/10 shadow-inner">
            <AdmissionForm />
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Admissions;
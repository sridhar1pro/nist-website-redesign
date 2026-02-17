import React from "react";
import octagon from "../assets/Infrastructure/octagon.jpg";
import library from "../assets/Infrastructure/Library.jpg";
import computerLab from "../assets/Infrastructure/computer-lab.jpeg";

const infrastructureData = [
  {
    title: "The Octagon",
    image: octagon,
    description: "The iconic Octagon building is the administrative and academic center of the NIST campus, representing architectural excellence."
  },
  {
    title: "Central Library",
    image: library,
    description: "A state-of-the-art digital and physical repository providing 24/7 access to global academic resources."
  },
  {
    title: "Computing Laboratories",
    image: computerLab,
    description: "Advanced high-performance computing labs supporting cutting-edge engineering and research activities."
  }
];

function Infrastructure() {
  return (
    <div className="min-h-screen bg-[#0f172a] py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-serif italic text-white mb-4">Campus Infrastructure</h1>
        <div className="h-[2px] w-40 bg-gradient-to-r from-transparent via-nistGold to-transparent mx-auto"></div>
        <p className="text-slate-400 mt-6 tracking-widest uppercase text-xs font-light">World-class facilities for future leaders</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {infrastructureData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white/5 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-nistGold/50 transition-all duration-500 shadow-2xl"
          >
            <div className="h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-10">
              <h2 className="text-2xl font-bold text-nistGold mb-4 tracking-tight">
                {item.title}
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Infrastructure;
import React from "react";
import { Link } from "react-router-dom";

const Research = () => {
  const researchCenters = [
    {
      title: "Electric Vehicle (EV) Lab",
      description: "Driving the future of Green Mobility. We focus on custom EV prototyping, motor control systems, and renewable energy integration.",
      tools: ["CREO", "ANSYS", "Fast Charging Tech"],
      icon: "⚡",
      color: "border-emerald-500",
      link: "/department/Mechanical Engineering" // Links to existing department route
    },
    {
      title: "Drone & Aeronautics Lab",
      description: "Advancing autonomous navigation and surveillance technology through intelligent flight systems and AI-powered image processing.",
      tools: ["Flight Controllers", "AI Vision", "3D Printing"],
      icon: "🚁",
      color: "border-blue-500",
      link: "/department/Electronics and Communication Engineering"
    },
    {
      title: "AR/VR & Multimedia Lab",
      description: "Creating immersive 3D environments for education and industrial simulation using cutting-edge virtual reality frameworks.",
      tools: ["Unity 3D", "Oculus SDK", "Blender"],
      icon: "🥽",
      color: "border-purple-500",
      link: "/department/Computer Science and Engineering"
    },
    {
      title: "AI/ML & Data Analytics",
      description: "Harnessing Big Data and Deep Learning to solve complex industrial problems, from predictive maintenance to smart city infrastructure.",
      tools: ["TensorFlow", "Python", "Big Data Clusters"],
      icon: "🧠",
      color: "border-nistGold",
      link: "/department/Computer Science and Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-40 pb-20">
      {/* 1. Page Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="border-l-8 border-nistGold pl-6">
          <h1 className="text-5xl font-black text-nistBlue tracking-tight mb-4">
            Research & <span className="text-nistGold">Innovation</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed italic">
            "Promoting a culture of interdisciplinary research and product prototype development."
          </p>
        </div>
      </div>

      {/* 2. Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-nistBlue text-white p-10 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Applied Research Excellence</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              At NIST, we bridge the gap between theory and industry. Our 15 Global Innovation Centers are hubs for patents, funded projects, and real-world technology solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-nistGold font-bold text-2xl">15+</span>
                <p className="text-[10px] uppercase tracking-widest font-bold">Innovation Centers</p>
              </div>
              <div className="bg-white/10 p-4 rounded-xl border border-white/20">
                <span className="text-nistGold font-bold text-2xl">CRE</span>
                <p className="text-[10px] uppercase tracking-widest font-bold">Centers of Excellence</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 text-6xl opacity-20 hidden md:block text-right">
            🔬📡🔋
          </div>
        </div>
      </section>

      {/* 3. Global Innovation Centers Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h3 className="text-2xl font-black text-nistBlue uppercase tracking-widest text-center">
            Global Innovation Centers (GIC)
          </h3>
          <div className="h-1 w-20 bg-nistGold mt-2"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {researchCenters.map((center, index) => (
            <div key={index} className={`bg-white p-8 rounded-2xl border-t-4 ${center.color} shadow-sm hover:shadow-xl transition-all group flex flex-col justify-between`}>
              <div>
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform">{center.icon}</div>
                  <div className="flex flex-wrap justify-end gap-2 max-w-[50%]">
                    {center.tools.map((tool, i) => (
                      <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded font-bold uppercase whitespace-nowrap">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-nistBlue mb-3">{center.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-8">
                  {center.description}
                </p>
              </div>
              
              {/* Functional Explore Button */}
              <Link 
                to={center.link}
                className="inline-flex items-center gap-2 text-nistBlue font-black text-sm uppercase tracking-wider group-hover:text-nistGold transition-colors no-underline"
              >
                Explore Projects <span className="transition-transform group-hover:translate-x-2">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Research;
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// High-Prestige Components
import HeroSlider from "../components/HeroSlider"; 
import StatsCounter from "../components/StatsCounter";
import ResearchSection from "../components/ResearchSection";
import Infrastructure from "../components/Infrastructure";
import CampusGallery from "../components/CampusGallery";
import PlacementMarquee from "../components/PlacementMarquee";
import AdmissionForm from "../components/AdmissionForm";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/api/news`);
      // Top 3 news items for the home page
      setNews(res.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 overflow-x-hidden">
      
      {/* 1. Hero Experience */}
      <HeroSlider />

      {/* 2. Institutional Proof (The Numbers) */}
      <StatsCounter />

      {/* 3. Academic Excellence (Refined) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-nistGold font-black uppercase tracking-widest text-xs">Learn with the best</span>
            <h3 className="text-4xl md:text-5xl font-black text-nistBlue mt-2 uppercase tracking-tighter">Academic Programs</h3>
            <div className="h-1.5 w-20 bg-nistGold mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Computer Science", icon: "💻", path: "/department/Computer%20Science%20%26%20Engineering", desc: "AI, Machine Learning, and Cybersecurity specializations." },
              { title: "Electronics & Comm.", icon: "📡", path: "/department/Electronics%20%26%20Communication", desc: "Advanced VLSI Design and Embedded Systems labs." },
              { title: "Mechanical Eng.", icon: "⚙️", path: "/department/Mechanical%20Engineering", desc: "Robotics, Automation, and Smart Manufacturing." },
            ].map((program, idx) => (
              <Link to={program.path} key={idx} className="group bg-white p-10 rounded-3xl shadow-nist-card hover:-translate-y-2 transition-all duration-300 border border-gray-100">
                <div className="text-5xl mb-6 bg-nistGray-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-nistGold transition-colors">
                  {program.icon}
                </div>
                <h4 className="text-xl font-bold text-nistBlue mb-3">{program.title}</h4>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">{program.desc}</p>
                <div className="flex items-center text-nistBlue font-black text-xs uppercase tracking-widest group-hover:text-nistGold transition-colors">
                  Explore Curriculum <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Research Hub */}
      <ResearchSection />

      {/* 5. Physical Infrastructure */}
      <Infrastructure />

      {/* 6. Campus Buzz (News Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h3 className="text-4xl font-black text-nistBlue uppercase tracking-tighter">Latest @ NIST</h3>
              <p className="text-gray-500 mt-2">Breaking news and campus achievements.</p>
            </div>
            <Link to="/news" className="text-nistBlue font-bold border-b-2 border-nistGold hover:text-nistGold transition-all">
              View Media Gallery
            </Link>
          </div>

          {loading ? (
            <div className="flex justify-center py-20"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-nistBlue"></div></div>
          ) : (
            <div className="grid gap-10 md:grid-cols-3">
              {news.map((item) => (
                <article key={item._id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-3xl mb-6 h-64">
                    <img 
                      src={`${API_URL}${item.image}`} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-nistGold text-nistBlue text-[10px] font-black px-3 py-1 rounded-full uppercase">Update</div>
                  </div>
                  <h4 className="text-xl font-bold text-nistBlue mb-3 line-clamp-2 leading-tight group-hover:text-nistGold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{item.description}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 7. Corporate Partnerships */}
      <PlacementMarquee />

      {/* 8. Campus Experience */}
      <CampusGallery />

      {/* 9. Final Action - Admission Lead Gen */}
      <AdmissionForm />

    </div>
  );
}

export default Home;
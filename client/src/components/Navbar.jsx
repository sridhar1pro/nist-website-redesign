import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 shadow-2xl">
      {/* 1. Announcement Top Bar (Institutional Authority) */}
      <div className="bg-nistGold text-nistBlue py-1.5 px-6 text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
        Admissions Open for 2026-27 • NAAC A+ Accredited University • Research Excellence
      </div>

      {/* 2. Main Navigation Bar */}
      <nav className="bg-nistBlue text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo Section */}
          <Link to="/" className="flex items-center group">
            <div className="bg-white p-1.5 rounded mr-3 transition-transform group-hover:scale-105">
              <span className="text-nistBlue font-black text-2xl tracking-tighter">NIST</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-nistGold transition-colors">UNIVERSITY</span>
              <span className="text-[10px] text-nistGold-light font-medium tracking-[0.22em] uppercase">Berhampur</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-7 items-center">
            <Link to="/" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">Home</Link>
            <Link to="/about" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">About</Link>

            {/* Academics Mega Menu */}
            <div className="relative group py-2">
              <span className="text-sm font-semibold uppercase tracking-wider cursor-pointer group-hover:text-nistGold transition flex items-center">
                Academics <span className="ml-1.5 text-[10px]">▼</span>
              </span>

              {/* Dropdown Container */}
              <div className="
                absolute left-1/2 -translate-x-1/2 top-full mt-2
                w-[700px] bg-white text-nistBlue shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                rounded-xl overflow-hidden grid grid-cols-3
                opacity-0 invisible scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100
                transition-all duration-300 origin-top z-50 border-t-4 border-nistGold
              ">
                {/* Undergraduate */}
                <div className="p-8 bg-gray-50/50">
                  <h4 className="font-black text-nistBlue text-xs uppercase tracking-widest mb-4 border-b pb-2 border-nistGold/30">
                    Undergraduate
                  </h4>
                  <ul className="space-y-3">
                    <li><Link to="/department/Computer%20Science%20%26%20Engineering" className="text-sm hover:text-nistGold hover:translate-x-1 transition-all inline-block">B.Tech CSE</Link></li>
                    <li><Link to="/department/Electronics%20%26%20Communication" className="text-sm hover:text-nistGold hover:translate-x-1 transition-all inline-block">B.Tech ECE</Link></li>
                    <li><Link to="/department/Mechanical%20Engineering" className="text-sm hover:text-nistGold hover:translate-x-1 transition-all inline-block">B.Tech ME</Link></li>
                    <li><Link to="/academics" className="text-sm font-bold text-nistBlue/60 mt-2 inline-block">View All Programs</Link></li>
                  </ul>
                </div>

                {/* Postgraduate */}
                <div className="p-8">
                  <h4 className="font-black text-nistBlue text-xs uppercase tracking-widest mb-4 border-b pb-2 border-nistGold/30">
                    Postgraduate
                  </h4>
                  <ul className="space-y-3">
                    <li><Link to="/academics" className="text-sm hover:text-nistGold transition">M.Tech Research</Link></li>
                    <li><Link to="/academics" className="text-sm hover:text-nistGold transition">MBA Professional</Link></li>
                    <li><Link to="/academics" className="text-sm hover:text-nistGold transition">MCA Applications</Link></li>
                  </ul>
                </div>

                {/* Excellence */}
                <div className="p-8 bg-nistBlue text-white">
                  <h4 className="font-black text-nistGold text-xs uppercase tracking-widest mb-4 border-b pb-2 border-white/10">
                    Excellence
                  </h4>
                  <ul className="space-y-3">
                    <li><Link to="/research" className="text-sm hover:text-nistGold transition">PhD Programs</Link></li>
                    <li><Link to="/research" className="text-sm hover:text-nistGold transition">Research Centers</Link></li>
                    <li><Link to="/research" className="text-sm hover:text-nistGold transition">Innovation Lab</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link to="/research" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">Research</Link>

            {/* --- NEW CLASSY LINKS START --- */}
            <Link to="/infrastructure" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">Infrastructure</Link>
            <Link to="/gallery" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">Gallery</Link>
            {/* --- NEW CLASSY LINKS END --- */}

            <Link to="/admissions" className="text-sm font-semibold uppercase tracking-wider hover:text-nistGold transition">Admissions</Link>

            {/* CTA Button */}
            <Link
              to="/admin/login"
              className="bg-nistGold text-nistBlue px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-lg active:scale-95"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
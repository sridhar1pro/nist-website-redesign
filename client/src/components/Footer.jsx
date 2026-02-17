import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nistBlue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Recognition */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center group">
              <div className="bg-white p-1 rounded mr-3">
                <span className="text-nistBlue font-black text-xl tracking-tighter">NIST</span>
              </div>
              <span className="text-xl font-bold tracking-tight group-hover:text-nistGold transition">UNIVERSITY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Established in 1996, NIST University is a premier research institution 
              dedicated to academic excellence and global innovation in Berhampur, Odisha.
            </p>
            {/* Accreditation Logos Placeholder */}
            <div className="flex space-x-4 pt-2">
              <div className="bg-white/10 p-2 rounded grayscale hover:grayscale-0 transition cursor-help" title="NAAC A+ Accredited">
                <img src="/assets/naac-logo.png" alt="NAAC" className="h-10 w-auto" />
              </div>
              <div className="bg-white/10 p-2 rounded grayscale hover:grayscale-0 transition cursor-help" title="NBA Accredited Programs">
                <img src="/assets/nba-logo.png" alt="NBA" className="h-10 w-auto" />
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation (Sitemap) */}
          <div>
            <h4 className="text-nistGold font-bold uppercase tracking-widest text-xs mb-6">University Links</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white hover:translate-x-1 transition-all inline-block">Institutional Profile</Link></li>
              <li><Link to="/academics" className="hover:text-white hover:translate-x-1 transition-all inline-block">Academic Programs</Link></li>
              <li><Link to="/research" className="hover:text-white hover:translate-x-1 transition-all inline-block">Research Centers (CRE)</Link></li>
              <li><Link to="/admissions" className="hover:text-white hover:translate-x-1 transition-all inline-block">Admission Portal</Link></li>
              <li><Link to="/faculty" className="hover:text-white hover:translate-x-1 transition-all inline-block">Faculty Directory</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-nistGold font-bold uppercase tracking-widest text-xs mb-6">Student Resources</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition">Examination Cell</a></li>
              <li><a href="#" className="hover:text-white transition">Placements & Career</a></li>
              <li><a href="#" className="hover:text-white transition">Alumni Association</a></li>
              <li><a href="#" className="hover:text-white transition">Mandatory Disclosures</a></li>
              <li><Link to="/contact" className="hover:text-white transition">Grievance Redressal</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-6">
            <h4 className="text-nistGold font-bold uppercase tracking-widest text-xs mb-2">Campus Address</h4>
            <div className="text-sm text-gray-300 leading-relaxed">
              <p className="font-bold text-white mb-1 font-serif">NIST University Campus</p>
              <p>Institute Park, Pallur Hills,</p>
              <p>Berhampur, Odisha 761008, India</p>
            </div>
            <div className="pt-2 text-sm">
              <p className="flex items-center space-x-2 text-gray-300">
                <span className="text-nistGold font-bold">P:</span> <span>+91 0680 2492421</span>
              </p>
              <p className="flex items-center space-x-2 text-gray-300">
                <span className="text-nistGold font-bold">E:</span> <span>admission@nist.edu</span>
              </p>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-nistGold hover:text-nistBlue transition"><FaFacebookF size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-nistGold hover:text-nistBlue transition"><FaTwitter size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-nistGold hover:text-nistBlue transition"><FaLinkedinIn size={14}/></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-nistGold hover:text-nistBlue transition"><FaInstagram size={14}/></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.15em]">
          <p>© {currentYear} NIST University. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Use</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
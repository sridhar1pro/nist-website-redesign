import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import AnnouncementBar from "./components/AnnouncementBar"; 
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop"; 

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Faculty from "./pages/Faculty";
import Research from "./pages/Research";
import Admissions from "./pages/Admissions";
import Contact from "./pages/Contact";
import DepartmentDetail from "./pages/DepartmentDetail";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

// --- NEW PAGES ADDED HERE ---
import Infrastructure from "./pages/Infrastructure";
import CampusGallery from "./pages/CampusGallery";

function App() {
  return (
    <Router>
      <ScrollToTop /> 

      <div className="flex flex-col min-h-screen font-sans antialiased text-nistBlue">
        
        <AnnouncementBar />
        <Navbar /> 

        <main className="flex-grow pt-[110px]">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/research" element={<Research />} />
            
            {/* --- NEW ROUTES ADDED HERE --- */}
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/gallery" element={<CampusGallery />} />
            
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Dynamic Academic Routes */}
            <Route path="/department/:deptName" element={<DepartmentDetail />} />

            {/* Admin Access */}
            <Route path="/admin/login" element={<Login />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* 404 */}
            <Route path="*" element={<div className="py-20 text-center">Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { Outlet } from "react-router-dom"; // 1. Must import Outlet
import Navbar from "./Navbar";
import AnnouncementBar from "./AnnouncementBar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* These stay at the top on every page */}
      <AnnouncementBar />
      <Navbar />

      {/* The main area where different pages (Home, About, etc.) will load */}
      <main className="flex-grow">
        <Outlet /> 
      </main>

      {/* Footer stays at the bottom on every page */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>© 2026 NIST University. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
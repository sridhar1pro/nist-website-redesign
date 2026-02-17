import React from "react";

// 🔥 Dynamically import images from assets
const images = import.meta.glob(
  "../assets/CampusGallery/*.{jpg,jpeg,png}",
  { eager: true }
);

const galleryImages = Object.values(images).map((img) => img.default);

function CampusGallery() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif italic text-white mb-4">
          Visual Legacy
        </h1>
        <div className="h-[2px] w-40 bg-nistGold mx-auto"></div>
        <p className="text-slate-500 mt-6 tracking-widest uppercase text-[10px] font-bold">
          A glimpse into life at NIST University
        </p>
      </div>

      {/* Masonry Columns Layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl border border-white/10 group cursor-pointer shadow-xl transition-all hover:shadow-nistGold/10"
          >
            {/* Removed grayscale and group-hover:grayscale-0 to show natural colors */}
            <img
              src={img}
              alt={`Campus View ${index + 1}`}
              className="w-full transition-all duration-700 ease-in-out transform group-hover:scale-105"
            />
            
            {/* Classy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
               <div>
                  <div className="w-10 h-0.5 bg-nistGold mb-2"></div>
                  <p className="text-white font-bold tracking-widest text-xs uppercase">
                    NIST Excellence
                  </p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusGallery;
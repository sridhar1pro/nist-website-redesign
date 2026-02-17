import React from "react";

// 🔥 Automatically import all images from the folder
const images = import.meta.glob(
  "../assets/CampusGallery/*.{jpg,jpeg,png}",
  { eager: true }
);

// Convert imported images into array
const galleryImages = Object.values(images).map((img) => img.default);

function CampusGallery() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Campus Gallery
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md hover:scale-105 transition duration-300"
          >
            <img
              src={img}
              alt={`Campus ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CampusGallery;

import React from "react";

// ✅ Import images from src/assets
import octagon from "../assets/Infrastructure/octagon.jpg";
import library from "../assets/Infrastructure/Library.jpg";
import computerLab from "../assets/Infrastructure/computer-lab.jpeg";

const infrastructureData = [
  {
    title: "The Octagon",
    image: octagon,
    description:
      "The iconic Octagon building is the administrative and academic center of NIST campus."
  },
  {
    title: "Central Library",
    image: library,
    description:
      "Well-equipped digital and physical library with extensive academic resources."
  },
  {
    title: "Computer Laboratories",
    image: computerLab,
    description:
      "Advanced computing labs supporting engineering and research activities."
  }
];

function Infrastructure() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Campus Infrastructure
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {infrastructureData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-3">
                {item.title}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
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


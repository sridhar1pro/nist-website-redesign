import Marquee from "react-fast-marquee";

const recruiters = [
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Cognizant", logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg" },
  { name: "Capgemini", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg" },
];

const PlacementMarquee = () => {
  return (
    <div className="bg-white py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
        <h2 className="text-nistBlue font-black text-2xl uppercase tracking-widest">
          Our Top <span className="text-nistGold">Recruiters</span>
        </h2>
        <p className="text-gray-500 text-sm mt-2">NISTians are leading the global workforce in top Fortune 500 companies.</p>
      </div>

      <Marquee gradient={true} gradientWidth={100} speed={40} pauseOnHover={true}>
        {recruiters.map((company, index) => (
          <div key={index} className="mx-12 flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300">
            <img 
              src={company.logo} 
              alt={company.name} 
              className="max-h-full w-auto object-contain opacity-70 hover:opacity-100" 
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default PlacementMarquee;
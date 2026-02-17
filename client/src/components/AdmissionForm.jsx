import { useState } from "react";

const AdmissionForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", course: "B.Tech", message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    console.log("Enquiry Sent:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // Reset after 5s
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Success Popup */}
      {submitted && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-nistBlue/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 transform animate-bounce-short">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-nistBlue mb-2">Thank You!</h3>
            <p className="text-gray-600">Your enquiry has been received. Our admission counselor will contact you shortly.</p>
            <button onClick={() => setSubmitted(false)} className="mt-6 bg-nistGold text-nistBlue px-6 py-2 rounded-full font-bold">Close</button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-black text-nistBlue mb-4 uppercase tracking-tighter">
              Ready to join <span className="text-nistGold">NIST?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Get detailed information about eligibility, scholarships, and the admission process for the 2026-27 academic session.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-nistGold">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Call Counselor</p>
                <p className="text-nistBlue font-bold">+91 0680 2492421</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm border-l-4 border-nistBlue">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Visit Campus</p>
                <p className="text-nistBlue font-bold">Pallur Hills, Berhampur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white p-10 rounded-3xl shadow-nist-card border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input 
                type="text" required placeholder="Full Name"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nistGold outline-none transition"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="email" required placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nistGold outline-none transition"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <input 
                type="tel" required placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nistGold outline-none transition"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
              <select 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nistGold outline-none transition"
                onChange={(e) => setFormData({...formData, course: e.target.value})}
              >
                <option>B.Tech CSE</option>
                <option>B.Tech ECE</option>
                <option>MBA</option>
                <option>MCA</option>
              </select>
            </div>
            <textarea 
              rows="4" placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nistGold outline-none transition"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
            <button 
              type="submit"
              className="w-full bg-nistBlue text-white font-bold py-4 rounded-xl hover:bg-nistBlue/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Request Call Back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
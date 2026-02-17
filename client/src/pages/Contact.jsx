// 1. Removed Navbar import

function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="py-16 px-6 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-900">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900 font-bold text-xl">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      NIST University, Institute Park<br />
                      Berhampur, Odisha – 761008
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900 font-bold text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+91-0680-2492421 / 422</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-900 font-bold text-xl">📧</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@nist.edu</p>
                  </div>
                </div>
              </div>

              {/* Simple Map Placeholder */}
              <div className="mt-10 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 border border-dashed border-gray-400">
                [Google Maps Integration: Berhampur, Odisha]
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="How can we help you?" 
                    className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  onClick={(e) => { e.preventDefault(); alert("Message sent successfully!"); }}
                  className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-6">
        <p>© 2026 NIST University. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
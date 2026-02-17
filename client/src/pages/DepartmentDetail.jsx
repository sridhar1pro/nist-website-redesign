import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function DepartmentDetail() {
  const { deptName } = useParams();
  const decodedDept = decodeURIComponent(deptName);

  const [faculty, setFaculty] = useState([]);
  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        setLoading(true);
        
        const [facultyRes, labRes] = await Promise.allSettled([
          axios.get(`${API_URL}/api/faculty`),
          axios.get(`${API_URL}/api/labs`)
        ]);

        // Helper function to make department matching "bulletproof"
        // It removes spaces and converts "&" to "and" for comparison
        const normalize = (str) => 
          str ? str.toLowerCase().trim().replace(/&/g, 'and').replace(/\s+/g, '') : "";

        const normalizedUrlDept = normalize(decodedDept);

        // 1. Process Faculty
        if (facultyRes.status === "fulfilled") {
          const filteredFaculty = facultyRes.value.data.filter((f) => 
            normalize(f.department) === normalizedUrlDept
          );
          setFaculty(filteredFaculty);
        }

        // 2. Process Labs with the same robust normalization
        if (labRes.status === "fulfilled") {
          const filteredLabs = labRes.value.data.filter((lab) => 
            normalize(lab.department) === normalizedUrlDept
          );
          setLabs(filteredLabs);
        } else {
          console.warn("Labs API failed or returned 404.");
          setLabs([]); 
        }

      } catch (error) {
        console.error("Critical error fetching department data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartmentData();
    window.scrollTo(0, 0); 
  }, [decodedDept]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <Link 
            to="/academics" 
            className="inline-flex items-center text-blue-200 hover:text-white transition mb-6 text-sm font-medium"
          >
            <span className="mr-2">←</span> Back to Academics
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize tracking-tight">
            {decodedDept}
          </h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light">
            Advancing knowledge through research, innovation, and academic excellence.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-900"></div>
            <p className="mt-6 text-gray-500 font-medium italic">Gathering department resources...</p>
          </div>
        ) : (
          <div className="space-y-20">
            
            {/* Faculty Section */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Our Faculty</h2>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {faculty.length} Members
                </span>
              </div>
              
              {faculty.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center shadow-sm border border-dashed border-gray-300">
                  <p className="text-gray-500 italic">No faculty members found for this department.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {faculty.map((f) => (
                    <div key={f._id} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 overflow-hidden">
                      <div className="h-48 overflow-hidden bg-gray-200">
                        {f.image ? (
                          <img
                            src={`${API_URL}${f.image}`}
                            alt={f.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">👤</div>
                        )}
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-blue-950 text-lg leading-tight mb-1 capitalize">{f.name}</h3>
                        <p className="text-blue-600 text-sm font-semibold mb-3 uppercase tracking-wider">{f.designation}</p>
                        <div className="pt-3 border-t border-gray-50">
                          <p className="text-xs text-gray-500 italic leading-snug">
                            <span className="font-bold text-gray-700 not-italic">Focus:</span> {f.research}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Labs & Infrastructure Section */}
            <section>
              <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
                <h2 className="text-3xl font-bold text-gray-800">Labs & Facilities</h2>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {labs.length} Facilities
                </span>
              </div>

              {labs.length === 0 ? (
                <div className="bg-white rounded-xl p-10 text-center shadow-sm border border-dashed border-gray-300">
                  <p className="text-gray-500">Facility documentation is currently being updated for this department.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {labs.map((lab) => (
                    <div key={lab._id} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:border-blue-400 transition-colors duration-300">
                      <div className="h-56 overflow-hidden">
                        {lab.image ? (
                          <img
                            src={`${API_URL}${lab.image}`}
                            alt={lab.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-56 bg-gray-100 flex items-center justify-center text-gray-400 italic">No Image</div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-blue-900 text-xl mb-3 tracking-tight">
                          {lab.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {lab.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default DepartmentDetail;
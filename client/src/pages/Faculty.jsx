import { useState, useEffect } from "react";
import API from "../utils/api";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

function Faculty() {
  const [facultyData, setFacultyData] = useState([]);
  const [selectedDept, setSelectedDept] = useState("All");
  const [loading, setLoading] = useState(true);

  /* ===========================
        FETCH FACULTY
  =========================== */
  const fetchFaculty = async () => {
    try {
      setLoading(true);
      const res = await API.get(`${API_URL}/api/faculty`);
      setFacultyData(res.data);
    } catch (error) {
      console.error("Error fetching faculty:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  /* ===========================
        DYNAMIC DEPARTMENTS
  =========================== */
  const departments = [
    "All",
    ...new Set(facultyData.map((f) => f.department)),
  ];

  const filteredFaculty =
    selectedDept === "All"
      ? facultyData
      : facultyData.filter(
          (f) => f.department === selectedDept
        );

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Faculty & Research Scholars
        </h1>
        <p className="text-lg opacity-90">
          Meet our experienced and research-driven academic leaders
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* DEPARTMENT FILTER */}
        {!loading && (
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {departments.map((dept, index) => (
              <button
                key={index}
                onClick={() => setSelectedDept(dept)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition 
                  ${
                    selectedDept === dept
                      ? "bg-blue-900 text-white"
                      : "bg-white text-blue-900 border border-blue-900 hover:bg-blue-100"
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        )}

        {/* LOADING */}
        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
            <p>Loading faculty members...</p>
          </div>
        )}

        {/* FACULTY GRID */}
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {filteredFaculty.length === 0 && (
              <p className="text-center col-span-3 text-gray-500">
                No faculty found in this department.
              </p>
            )}

            {filteredFaculty.map((faculty) => (
              <div
                key={faculty._id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
              >
                {faculty.image && (
                  <img
                    src={`${API_URL}${faculty.image}`}
                    alt={faculty.name}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900">
                    {faculty.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-2">
                    {faculty.designation}
                  </p>

                  <p className="text-sm text-gray-500 mb-3">
                    {faculty.department}
                  </p>

                  <p className="text-xs text-gray-600">
                    Research: {faculty.research}
                  </p>

                  <button className="mt-4 bg-blue-900 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition">
                    View Profile
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Faculty;

import { Link } from "react-router-dom";

const departments = [
  "Computer Science",
  "Mechanical Engineering",
  "Electronics",
  "Electrical Engineering",
  "Civil Engineering"
];

function Departments() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Header */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">
          Academic Departments
        </h1>
        <p className="text-lg opacity-90">
          Explore our diverse academic divisions
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {departments.map((dept, index) => (
            <Link
              key={index}
              to={`/departments/${encodeURIComponent(dept)}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-bold text-blue-900 mb-3">
                {dept}
              </h2>
              <p className="text-gray-600 text-sm">
                Click to explore faculty, programs and research.
              </p>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Departments;

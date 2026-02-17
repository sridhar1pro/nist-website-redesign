import { Link } from "react-router-dom";

function Academics() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HEADER SECTION */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Academic Programs</h1>
        <p className="text-lg opacity-90">
          Excellence in Engineering, Science & Management Education
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        
        {/* Undergraduate */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-200 pb-2">
            Undergraduate Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Computer Science & Engineering",
              "Electronics & Communication",
              "Mechanical Engineering",
              "Electrical Engineering",
            ].map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    B.Tech in {dept}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    4 Year Full-Time Undergraduate Program
                  </p>
                </div>
                {/* FIXED: Changed button to Link and added dynamic path */}
                <Link
                  to={`/department/${encodeURIComponent(dept)}`}
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center font-medium shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Postgraduate */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-200 pb-2">
            Postgraduate Programs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "M.Tech Programs", slug: "M.Tech" },
              { title: "MBA", slug: "MBA" },
              { title: "MCA", slug: "MCA" },
              { title: "M.Sc Programs", slug: "M.Sc" },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced specialization & research-focused curriculum
                  </p>
                </div>
                <Link
                  to={`/department/${encodeURIComponent(program.slug)}`}
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center font-medium shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Doctoral */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 mb-8 border-b-2 border-blue-200 pb-2">
            Doctoral Programs
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "PhD in Engineering", slug: "PhD Engineering" },
              { title: "PhD in Sciences", slug: "PhD Science" },
            ].map((doc, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Advanced research in specialized and interdisciplinary fields.
                  </p>
                </div>
                <Link
                  to={`/department/${encodeURIComponent(doc.slug)}`}
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-sm text-center font-medium shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Academics;
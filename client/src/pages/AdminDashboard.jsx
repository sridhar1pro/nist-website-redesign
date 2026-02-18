import { useState, useEffect } from "react";
import API from "../utils/api";

function AdminDashboard() {
  const token = localStorage.getItem("token");

  // API Endpoints
  const NEWS_API = "http://localhost:5000/api/news";
  const FACULTY_API = "http://localhost:5000/api/faculty";
  const LAB_API = "http://localhost:5000/api/labs";

  /* ===============================
        NEWS STATE
  =============================== */
  const [news, setNews] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ===============================
        FACULTY STATE
  =============================== */
  const [facultyList, setFacultyList] = useState([]);
  const [facultyEditingId, setFacultyEditingId] = useState(null);
  const [facultyForm, setFacultyForm] = useState({
    name: "",
    department: "",
    designation: "",
    research: "",
    image: null,
  });

  /* ===============================
        LAB STATE
  =============================== */
  const [labs, setLabs] = useState([]);
  const [labEditingId, setLabEditingId] = useState(null);
  const [labForm, setLabForm] = useState({
    title: "",
    department: "",
    description: "",
    image: null,
  });

  /* ===============================
        AUTH CHECK & INITIAL FETCH
  =============================== */
  useEffect(() => {
    if (!token) {
      window.location.href = "/admin/login";
    }
    fetchNews();
    fetchFaculty();
    fetchLabs();
  }, []);

  /* ===============================
        FETCH FUNCTIONS
  =============================== */
  const fetchNews = async () => {
    try {
      const res = await API.get(NEWS_API);
      setNews(res.data);
    } catch (err) { console.error("Error fetching news", err); }
  };

  const fetchFaculty = async () => {
    try {
      const res = await API.get(FACULTY_API);
      setFacultyList(res.data);
    } catch (err) { console.error("Error fetching faculty", err); }
  };

  const fetchLabs = async () => {
    try {
      const res = await API.get(LAB_API);
      setLabs(res.data);
    } catch (err) { console.error("Error fetching labs", err); }
  };

  /* ===============================
        NEWS FUNCTIONS
  =============================== */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) formData.append("image", image);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    if (editingId) {
      await API.put(`${NEWS_API}/${editingId}`, formData, config);
    } else {
      await API.post(NEWS_API, formData, config);
    }

    resetNewsForm();
    fetchNews();
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news?")) return;
    await API.delete(`${NEWS_API}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchNews();
  };

  const resetNewsForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setEditingId(null);
  };

  /* ===============================
        FACULTY FUNCTIONS
  =============================== */
  const handleFacultySubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", facultyForm.name);
    formData.append("department", facultyForm.department);
    formData.append("designation", facultyForm.designation);
    formData.append("research", facultyForm.research);
    if (facultyForm.image) formData.append("image", facultyForm.image);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    if (facultyEditingId) {
      await API.put(`${FACULTY_API}/${facultyEditingId}`, formData, config);
    } else {
      await API.post(FACULTY_API, formData, config);
    }

    setFacultyForm({ name: "", department: "", designation: "", research: "", image: null });
    setFacultyEditingId(null);
    fetchFaculty();
  };

  const editFaculty = (f) => {
    setFacultyEditingId(f._id);
    setFacultyForm({
      name: f.name,
      department: f.department,
      designation: f.designation,
      research: f.research,
      image: null
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteFaculty = async (id) => {
    if (!window.confirm("Delete this faculty?")) return;
    await API.delete(`${FACULTY_API}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchFaculty();
  };

  /* ===============================
        LAB FUNCTIONS
  =============================== */
  const handleLabSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", labForm.title);
    formData.append("department", labForm.department);
    formData.append("description", labForm.description);
    if (labForm.image) formData.append("image", labForm.image);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    if (labEditingId) {
      await API.put(`${LAB_API}/${labEditingId}`, formData, config);
    } else {
      await API.post(LAB_API, formData, config);
    }

    setLabForm({ title: "", department: "", description: "", image: null });
    setLabEditingId(null);
    fetchLabs();
  };

  const editLab = (lab) => {
    setLabEditingId(lab._id);
    setLabForm({
      title: lab.title,
      department: lab.department,
      description: lab.description,
      image: null
    });
  };

  const deleteLab = async (id) => {
    if (!window.confirm("Delete this lab/infrastructure?")) return;
    await API.delete(`${LAB_API}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLabs();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/admin/login";
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 flex justify-end mb-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition shadow-md font-bold"
        >
          Logout
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        
        {/* NEWS SECTION */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            {editingId ? "Edit News" : "Post News"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 rounded h-24"
              required
            />
            <input type="file" onChange={(e) => setImage(e.target.files[0])} className="block w-full text-sm" />
            <button className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              {loading ? "Processing..." : "Submit News"}
            </button>
          </form>
        </div>

        {/* FACULTY SECTION */}
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-800">
            {facultyEditingId ? "Edit Faculty" : "Add Faculty"}
          </h2>
          <form onSubmit={handleFacultySubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Faculty Name" value={facultyForm.name} onChange={(e) => setFacultyForm({...facultyForm, name: e.target.value})} className="border p-2 rounded" required />
            <input type="text" placeholder="Department" value={facultyForm.department} onChange={(e) => setFacultyForm({...facultyForm, department: e.target.value})} className="border p-2 rounded" required />
            <input type="text" placeholder="Designation" value={facultyForm.designation} onChange={(e) => setFacultyForm({...facultyForm, designation: e.target.value})} className="border p-2 rounded" required />
            <input type="text" placeholder="Research Area" value={facultyForm.research} onChange={(e) => setFacultyForm({...facultyForm, research: e.target.value})} className="border p-2 rounded" />
            <div className="md:col-span-2">
               <input type="file" onChange={(e) => setFacultyForm({...facultyForm, image: e.target.files[0]})} />
            </div>
            <button className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition md:w-max">
              {facultyEditingId ? "Update Faculty" : "Add Faculty"}
            </button>
          </form>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {facultyList.map((f) => (
              <div key={f._id} className="bg-gray-50 p-3 rounded border text-center">
                <h3 className="font-bold text-sm">{f.name}</h3>
                <div className="flex justify-center gap-3 mt-2">
                  <button onClick={() => editFaculty(f)} className="text-blue-600 text-xs font-semibold underline">Edit</button>
                  <button onClick={() => deleteFaculty(f._id)} className="text-red-500 text-xs font-semibold underline">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LAB SECTION */}
        <div className="bg-white p-6 rounded shadow-lg border-t-4 border-purple-700">
          <h2 className="text-2xl font-bold mb-4 text-purple-900">
             {labEditingId ? "Edit Lab / Infrastructure" : "Add Lab / Infrastructure"}
          </h2>
          <form onSubmit={handleLabSubmit} className="space-y-4">
            <input type="text" placeholder="Lab Title" className="border p-2 w-full rounded" required
              onChange={(e) => setLabForm({ ...labForm, title: e.target.value })} value={labForm.title} />
            <input type="text" placeholder="Department" className="border p-2 w-full rounded" required
              onChange={(e) => setLabForm({ ...labForm, department: e.target.value })} value={labForm.department} />
            <textarea placeholder="Description" className="border p-2 w-full rounded h-24" required
              onChange={(e) => setLabForm({ ...labForm, description: e.target.value })} value={labForm.description} />
            <input type="file" onChange={(e) => setLabForm({ ...labForm, image: e.target.files[0] })} />
            <button className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-800 transition">
              {labEditingId ? "Update Lab" : "Add Lab"}
            </button>
          </form>

          {/* Labs List */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {labs.map((lab) => (
              <div key={lab._id} className="bg-gray-50 p-4 rounded shadow border">
                {lab.image && (
                  <img src={`http://localhost:5000${lab.image}`} alt={lab.title} className="w-full h-32 object-cover rounded mb-3" />
                )}
                <h3 className="font-bold text-purple-900">{lab.title}</h3>
                <p className="text-xs text-gray-500 uppercase font-semibold">{lab.department}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => editLab(lab)} className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs hover:bg-blue-200 transition">
                    Edit
                  </button>
                  <button onClick={() => deleteLab(lab._id)} className="bg-red-100 text-red-600 px-3 py-1 rounded text-xs hover:bg-red-200 transition">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
import { useState } from "react";

import API from "../utils/api";

import { useNavigate } from "react-router-dom";




// Use environment variable or fallback to localhost

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";



function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();



  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);



    try {

      const res = await API.post(`${API_URL}/api/admin/login`, {

        email,

        password,

      });



      localStorage.setItem("token", res.data.token);

      navigate("/admin/dashboard");

    } catch (error) {

      alert(error.response?.data?.message || "Invalid credentials");

    } finally {

      setLoading(false);

    }

  };



  return (

   


      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* Login Header */}

          <div className="bg-blue-900 py-8 text-center">

            <h2 className="text-3xl font-bold text-white">Admin Portal</h2>

            <p className="text-blue-200 text-sm mt-2">Please sign in to continue</p>

          </div>



          {/* Form Section */}

          <form onSubmit={handleLogin} className="p-8 space-y-6">

            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Email Address

              </label>

              <input

                type="email"

                placeholder="admin@nist.edu"

                value={email}

                onChange={(e) => setEmail(e.target.value)}

                required

                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"

              />

            </div>



            <div>

              <label className="block text-sm font-semibold text-gray-700 mb-2">

                Password

              </label>

              <input

                type="password"

                placeholder="••••••••"

                value={password}

                onChange={(e) => setPassword(e.target.value)}

                required

                className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500 transition"

              />

            </div>



            <button

              type="submit"

              disabled={loading}

              className="w-full bg-blue-900 text-white font-bold py-3 rounded-lg hover:bg-blue-800 transition duration-300 disabled:bg-gray-400"

            >

              {loading ? "Authenticating..." : "Login"}

            </button>

          </form>



          {/* Help Footer */}

          <div className="bg-gray-50 py-4 text-center border-t border-gray-100">

            <p className="text-xs text-gray-500">

              Authorized Personnel Only • NIST University

            </p>

          </div>

        </div>

      </div>

    

  );

}



export default Login;
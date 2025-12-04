import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const role = location.state?.role || "Student";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login:", { role, email, password });

    // Navigate to dashboard
    navigate("/dashboard", {
      state: {
        role,
        userName: email,
      },
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex items-center justify-center px-6 py-10">
      <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">
              {role === "Student" ? "🎓" : "🏆"}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">{role} Login</h1>
          <p className="text-gray-500">Welcome back to Quest Learning!</p>
        </div>

        {/* Form */}
        <div className="space-y-5">
          
          {/* Email Field */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3 bg-white">
            <span className="text-xl mr-3">✉️</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700 text-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3 bg-white">
            <span className="text-xl mr-3">🔒</span>
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 text-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition"
          >
            Start Your Quest
          </button>

          {/* Create Account */}
          <button
            className="w-full text-blue-600 font-semibold text-lg mt-2"
            onClick={() => navigate("/signup", { state: { role } })}
          >
            Create New Account
          </button>

        </div>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-gray-500 text-sm mt-6 mx-auto block hover:text-gray-700"
        >
          ← Back to role selection
        </button>
      </div>
    </div>
  );
}

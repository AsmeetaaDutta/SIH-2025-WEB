import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const location = useLocation();
  const role = location.state?.role || "Student";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    class: "",
    hobby: "",
    phone: "",
    address: "",
    schoolName: "",
    board: "",
    domain: "",
    qualification: "",
    education: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = () => {
    console.log("Signup:", { role, formData });

    navigate("/student-dashboard", {
      state: { role, userName: formData.name },
    });
  };

  return (
    <div className="min-h-screen bg-blue-500 flex justify-center px-6 py-10">
      <div className="bg-white rounded-3xl p-8 w-full max-w-3xl shadow-2xl">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">
              {role === "Student" ? "🎓" : "🏆"}
            </span>
          </div>

          <h1 className="text-3xl font-bold text-gray-800">Join as {role}</h1>
          <p className="text-gray-500">Start your learning adventure today!</p>
        </div>

        {/* Form */}
        <div className="space-y-4">

          {/* Full Name */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3">👤</span>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3">✉️</span>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3">📱</span>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3">🔒</span>
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.password}
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3">🔒</span>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.confirmPassword}
              onChange={(e) => handleChange("confirmPassword", e.target.value)}
            />
          </div>

          {/* Address */}
          <div className="flex items-start border-2 border-gray-200 rounded-xl px-4 py-3">
            <span className="text-xl mr-3 mt-1">📍</span>
            <textarea
              placeholder="Address"
              rows="2"
              className="w-full outline-none text-gray-700 text-lg"
              value={formData.address}
              onChange={(e) => handleChange("address", e.target.value)}
            ></textarea>
          </div>

          {/* Student Fields */}
          {role === "Student" && (
            <>
              {/* Age */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">📅</span>
                <input
                  type="number"
                  placeholder="Age"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                />
              </div>

              {/* Class */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">📚</span>
                <input
                  type="text"
                  placeholder="Class (e.g., 10th, 12th)"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.class}
                  onChange={(e) => handleChange("class", e.target.value)}
                />
              </div>

              {/* Hobby */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">❤️</span>
                <input
                  type="text"
                  placeholder="Hobbies"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.hobby}
                  onChange={(e) => handleChange("hobby", e.target.value)}
                />
              </div>

              {/* School Name */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">🏫</span>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                />
              </div>

              {/* Board Picker */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">🏆</span>
                <select
                  className="w-full text-gray-700 text-lg outline-none"
                  value={formData.board}
                  onChange={(e) => handleChange("board", e.target.value)}
                >
                  <option value="">Select Board</option>
                  <option value="CBSE">CBSE</option>
                  <option value="ICSE">ICSE</option>
                  <option value="State Board">State Board</option>
                  <option value="IB">IB</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          )}

          {/* Teacher Fields */}
          {role === "Teacher" && (
            <>
              {/* Domain */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">📚</span>
                <input
                  type="text"
                  placeholder="Teaching Domain"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.domain}
                  onChange={(e) => handleChange("domain", e.target.value)}
                />
              </div>

              {/* Qualification */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">🏆</span>
                <input
                  type="text"
                  placeholder="Qualification"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.qualification}
                  onChange={(e) => handleChange("qualification", e.target.value)}
                />
              </div>

              {/* Education */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">🎓</span>
                <input
                  type="text"
                  placeholder="Education Background"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.education}
                  onChange={(e) => handleChange("education", e.target.value)}
                />
              </div>

              {/* School Name */}
              <div className="flex items-center border-2 border-gray-200 rounded-xl px-4 py-3">
                <span className="text-xl mr-3">🏫</span>
                <input
                  type="text"
                  placeholder="School/Institution Name"
                  className="w-full outline-none text-gray-700 text-lg"
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                />
              </div>
            </>
          )}

          {/* Signup Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition mt-6"
          >
            Begin Your Journey
          </button>

          {/* Login Link */}
          <button
            className="w-full text-blue-600 font-semibold text-lg mt-3"
            onClick={() => navigate("/login", { state: { role } })}
          >
            Already have an account? Login
          </button>

          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 text-sm mt-6 mx-auto block hover:text-gray-700"
          >
            ← Back to role selection
          </button>
        </div>
      </div>
    </div>
  );
}

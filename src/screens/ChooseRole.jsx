import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ChooseRole() {
  const navigate = useNavigate();

  const pulseAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
      },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-blue-500 overflow-hidden px-6">

      {/* Floating Bubbles */}
      <motion.div
        className="absolute w-20 h-20 bg-yellow-400 opacity-20 rounded-full top-[15%] left-8"
        {...pulseAnimation}
      />
      <motion.div
        className="absolute w-16 h-16 bg-pink-500 opacity-20 rounded-full top-[25%] right-12"
        {...pulseAnimation}
        transition={{ delay: 0.5, duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-green-500 opacity-20 rounded-full bottom-[20%] left-20"
        {...pulseAnimation}
        transition={{ delay: 1, duration: 4, repeat: Infinity }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full">

        {/* Logo */}
        <div className="mb-6">
          <img src="/logo.png" alt="logo" className="w-32 h-32 object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-white drop-shadow-lg">
          ShikshaPlay
        </h1>

        <p className="text-white/90 text-lg mb-10">
          Choose Your Adventure
        </p>

        {/* Buttons */}
        <div className="w-full space-y-5">

          {/* Student Button */}
          <button
            onClick={() => navigate("/login", { state: { role: "Student" } })}
            className="w-full bg-white p-5 rounded-2xl flex justify-between items-center shadow-lg hover:scale-[1.02] transition"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
                🎓
              </div>
              <span className="text-xl font-semibold text-gray-700">
                Student
              </span>
            </div>
            <span className="text-2xl text-gray-500">→</span>
          </button>

          {/* Teacher Button */}
          <button
            onClick={() => navigate("/login", { state: { role: "Teacher" } })}
            className="w-full bg-white p-5 rounded-2xl flex justify-between items-center shadow-lg hover:scale-[1.02] transition"
          >
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-2xl">
                🏆
              </div>
              <span className="text-xl font-semibold text-gray-700">
                Teacher
              </span>
            </div>
            <span className="text-2xl text-gray-500">→</span>
          </button>

        </div>
      </div>
    </div>
  );
}

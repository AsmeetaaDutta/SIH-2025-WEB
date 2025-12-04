import React, { useState } from "react";
import { BookOpen, Atom, FlaskConical, Calculator, Leaf } from "lucide-react";

const SUBJECTS = [
  { id: "physics", name: "Physics", icon: <Atom />, grade: "6-12" },
  { id: "chemistry", name: "Chemistry", icon: <FlaskConical />, grade: "6-12" },
  { id: "math", name: "Mathematics", icon: <Calculator />, grade: "6-12" },
  { id: "biology", name: "Biology", icon: <Leaf />, grade: "6-12" },
];

const CHAPTERS = {
  physics: [
    {
      title: "Mechanics & Motion",
      info: "Study of motion, forces, and energy",
      level: "Intermediate",
      time: "50 min",
    },
    {
      title: "Electricity & Magnetism",
      info: "Explore electrical circuits and magnetic fields",
      level: "Advanced",
      time: "55 min",
    },
    {
      title: "Optics & Light",
      info: "Reflection, refraction, and lenses",
      level: "Beginner",
      time: "40 min",
    },
    {
      title: "Sound & Waves",
      info: "Vibrations, frequency, and resonance",
      level: "Beginner",
      time: "35 min",
    },
  ],

  chemistry: [
    { title: "Atoms & Molecules", info: "Basic structure of matter", level: "Beginner", time: "45 min" },
  ],

  math: [
    { title: "Algebra Basics", info: "Expressions & equations", level: "Beginner", time: "40 min" },
  ],

  biology: [
    { title: "Cells & Tissues", info: "Fundamentals of living organisms", level: "Beginner", time: "50 min" },
  ],
};

export default function Stem() {
  const [selected, setSelected] = useState("physics");

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">📘 STEM Subjects</h1>
      <p className="text-gray-600 mb-8">
        Master STEM concepts through interactive lessons, quizzes, and virtual experiments.
      </p>

      <div className="flex gap-6">
        {/* ---------------- LEFT: CHOOSE SUBJECT ---------------- */}
        <div className="w-1/3 bg-white shadow-lg rounded-2xl p-4">
          <h2 className="text-xl font-semibold mb-4">Choose Subject</h2>

          <div className="flex flex-col gap-4">
            {SUBJECTS.map((s) => (
              <div
                key={s.id}
                onClick={() => setSelected(s.id)}
                className={`p-4 cursor-pointer rounded-xl border flex items-center gap-4 transition
                 ${selected === s.id ? "border-blue-500 bg-blue-50" : "border-gray-200"}`}
              >
                <div className="text-blue-600">{s.icon}</div>
                <div>
                  <h3 className="font-semibold">{s.name}</h3>
                  <p className="text-sm text-gray-500">Grade {s.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT: CHAPTER LIST ---------------- */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <BookOpen /> {SUBJECTS.find((s) => s.id === selected)?.name}
          </h2>
          <p className="text-gray-500 mb-6">
            {CHAPTERS[selected].length} chapters • Grade 6–12
          </p>

          <div className="flex flex-col gap-6">
            {CHAPTERS[selected].map((ch, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-lg font-semibold">{ch.title}</h3>
                <p className="text-gray-500">{ch.info}</p>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        ch.level === "Beginner"
                          ? "bg-green-200 text-green-700"
                          : ch.level === "Intermediate"
                          ? "bg-yellow-200 text-yellow-700"
                          : "bg-red-200 text-red-700"
                      }`}
                    >
                      {ch.level}
                    </span>
                    <span className="text-sm text-gray-500">⏱ {ch.time}</span>
                  </div>

                  <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                    Open Chapter
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

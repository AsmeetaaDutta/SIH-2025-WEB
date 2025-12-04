import React, { useState } from "react";
import {
  Atom,
  Beaker,
  Calculator,
  Microscope,
  Cog,
  BookOpen,
} from "lucide-react";

const SUBJECTS = [
  {
    id: "physics",
    name: "Physics",
    grade: "Grade 6–12",
    icon: <Atom className="w-8 h-8 text-purple-600" />,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    grade: "Grade 6–12",
    icon: <Beaker className="w-8 h-8 text-green-600" />,
  },
  {
    id: "maths",
    name: "Mathematics",
    grade: "Grade 6–12",
    icon: <Calculator className="w-8 h-8 text-blue-600" />,
  },
  {
    id: "biology",
    name: "Biology",
    grade: "Grade 6–12",
    icon: <Microscope className="w-8 h-8 text-red-600" />,
  },
  {
    id: "technology",
    name: "Technology",
    grade: "Grade 6–12",
    icon: <Cog className="w-8 h-8 text-indigo-600" />,
  },
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
    {
      title: "Atoms & Elements",
      info: "Fundamentals of matter",
      level: "Beginner",
      time: "40 min",
    },
  ],

  maths: [
    {
      title: "Algebra Basics",
      info: "Understanding equations and variables",
      level: "Beginner",
      time: "50 min",
    },
  ],

  biology: [
    {
      title: "Cell Structure",
      info: "Basics of living organisms",
      level: "Beginner",
      time: "45 min",
    },
  ],

  technology: [
    {
      title: "Introduction to Robotics",
      info: "Understanding automation",
      level: "Beginner",
      time: "55 min",
    },
  ],
};

export default function Stem() {
  const [selected, setSelected] = useState("physics");

  const subject = SUBJECTS.find((s) => s.id === selected);

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen flex gap-6">

      {/* ---------------- LEFT: Choose Subject ---------------- */}
      <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold mb-4">Choose Subject</h1>

        <div className="space-y-4">
          {SUBJECTS.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelected(s.id)}
              className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition 
                ${selected === s.id ? "bg-blue-100 border-blue-500" : "bg-white border-gray-200 hover:bg-gray-100"}`}
            >
              {s.icon}

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{s.name}</h2>
                <p className="text-sm text-gray-500">{s.grade}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- RIGHT: Subject Details ---------------- */}
      <div className="flex-1 bg-white shadow-xl p-8 rounded-2xl">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-blue-600" />
          <h1 className="text-3xl font-bold">{subject.name}</h1>
        </div>

        <p className="text-gray-500 mb-6">
          Chapters, games, quizzes and learning materials for {subject.name}
        </p>

        {/* Chapters List */}
        <div className="space-y-6">
          {CHAPTERS[selected].map((ch, index) => (
            <div key={index} className="border-b pb-4">
              <h2 className="text-xl font-semibold">{ch.title}</h2>
              <p className="text-gray-500">{ch.info}</p>

              <div className="flex justify-between items-center mt-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    ch.level === "Beginner"
                      ? "bg-green-200 text-green-700"
                      : ch.level === "Intermediate"
                      ? "bg-yellow-200 text-yellow-700"
                      : "bg-red-200 text-red-700"
                  }`}
                >
                  {ch.level}
                </span>

                <span className="text-sm text-gray-600">⏱ {ch.time}</span>

                <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                  Open Chapter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

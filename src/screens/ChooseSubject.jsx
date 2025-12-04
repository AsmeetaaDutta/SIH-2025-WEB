import React from "react";
import { useNavigate } from "react-router-dom";
import { Atom, Beaker, Calculator, Microscope, Cog } from "lucide-react";

const subjects = [
  {
    id: "physics",
    name: "Physics",
    grade: "Grade 6–12",
    progress: 0,
    icon: <Atom className="w-8 h-8 text-purple-600" />,
  },
  {
    id: "chemistry",
    name: "Chemistry",
    grade: "Grade 6–12",
    progress: 0,
    icon: <Beaker className="w-8 h-8 text-green-600" />,
  },
  {
    id: "maths",
    name: "Mathematics",
    grade: "Grade 6–12",
    progress: 0,
    icon: <Calculator className="w-8 h-8 text-blue-600" />,
  },
  {
    id: "biology",
    name: "Biology",
    grade: "Grade 6–12",
    progress: 0,
    icon: <Microscope className="w-8 h-8 text-red-600" />,
  },
  {
    id: "technology",
    name: "Technology",
    grade: "Grade 6–12",
    progress: 0,
    icon: <Cog className="w-8 h-8 text-indigo-600" />,
  },
];

const ChooseSubject = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">Choose Subject</h1>

      <div className="space-y-4">
        {subjects.map((sub) => (
          <div
            key={sub.id}
            onClick={() => navigate(`/subject/${sub.id}`)}
            className="flex items-center gap-4 border p-4 rounded-xl cursor-pointer bg-white hover:bg-gray-100 transition"
          >
            <div>{sub.icon}</div>

            <div className="flex-1">
              <h2 className="font-semibold text-xl">{sub.name}</h2>
              <p className="text-sm text-gray-500">{sub.grade}</p>

              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${sub.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseSubject;

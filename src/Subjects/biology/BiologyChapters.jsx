import React, { useState } from "react";
import { biologyChaptersData } from "../../ChaptersData/BiologyData";

const BiologyChapters = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade 6");
  const [selectedBoard, setSelectedBoard] = useState("CBSE");

  const grades = Object.keys(biologyChaptersData);
  const boards = Object.keys(biologyChaptersData[selectedGrade] || {});

  const chapters = biologyChaptersData[selectedGrade]?.[selectedBoard] || [];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-6">Biology Chapters</h1>

      {/* Grade Selector */}
      <div className="flex gap-3 overflow-x-auto pb-3">
        {grades.map((grade) => (
          <button
            key={grade}
            onClick={() => setSelectedGrade(grade)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap ${
              selectedGrade === grade
                ? "bg-blue-600 text-white"
                : "bg-white text-black border"
            }`}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Board Selector */}
      <div className="flex gap-3 overflow-x-auto py-4">
        {boards.map((board) => (
          <button
            key={board}
            onClick={() => setSelectedBoard(board)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap ${
              selectedBoard === board
                ? "bg-green-600 text-white"
                : "bg-white border text-black"
            }`}
          >
            {board}
          </button>
        ))}
      </div>

      {/* Chapter Cards */}
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {chapters.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>

            <div className="mt-3 text-sm">
              <p>
                <strong>Difficulty:</strong> {item.difficulty}
              </p>
              <p>
                <strong>Duration:</strong> {item.duration}
              </p>
              <p>
                <strong>Total Topics:</strong> {item.topics}
              </p>
            </div>

            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
              Start Chapter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiologyChapters;

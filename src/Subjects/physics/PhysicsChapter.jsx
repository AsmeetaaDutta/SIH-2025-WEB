import React, { useState } from "react";
import { physicsChaptersData } from "../../ChaptersData/PhysicsData";

const PhysicsChapter = () => {
  const [selectedClass, setSelectedClass] = useState("Grade 9");
  const [selectedBoard, setSelectedBoard] = useState("CBSE");

  const classes = ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"];
  const boards = ["CBSE", "ICSE", "State Board", "WBSE"];

  const chapters = physicsChaptersData[selectedClass]?.[selectedBoard] || [];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "green";
      case "Intermediate": return "orange";
      case "Advanced": return "red";
      default: return "gray";
    }
  };

  const handleChapterClick = (chapter) => {
    alert(`Open Chapter: ${chapter.title}`); 
    // Replace with navigation logic if using React Router
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-purple-600 p-4 rounded-xl mb-6">
        <button className="text-white text-2xl font-bold">←</button>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center text-xl">⚛️</div>
          <div>
            <h1 className="text-2xl font-bold">Physics</h1>
            <p className="text-gray-200 text-sm">{chapters.length} chapters • {selectedClass}</p>
          </div>
        </div>
        <div className="w-10" />
      </div>

      {/* Filters */}
      <div className="bg-gray-800 p-4 rounded-xl mb-6">
        {/* Class Filter */}
        <div className="mb-4">
          <p className="mb-2 font-semibold">📚 Select Class</p>
          <div className="flex gap-2 overflow-x-auto">
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-4 py-2 rounded-full border whitespace-nowrap ${
                  selectedClass === cls
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-700 text-gray-300 border-gray-600"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>
        </div>

        {/* Board Filter */}
        <div>
          <p className="mb-2 font-semibold">🎓 Select Board</p>
          <div className="flex gap-2 overflow-x-auto">
            {boards.map((board) => (
              <button
                key={board}
                onClick={() => setSelectedBoard(board)}
                className={`px-4 py-2 rounded-full border whitespace-nowrap ${
                  selectedBoard === board
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-gray-700 text-gray-300 border-gray-600"
                }`}
              >
                {board}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chapters */}
      <div className="grid md:grid-cols-2 gap-4">
        {chapters.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-6xl mb-4">📖</p>
            <h2 className="text-xl font-bold mb-2">No Chapters Available</h2>
            <p className="text-gray-400">Chapters for {selectedClass} - {selectedBoard} are coming soon!</p>
          </div>
        ) : (
          chapters.map((chapter) => (
            <div key={chapter.id} className="bg-gray-800 p-4 rounded-xl border border-gray-700">
              {/* Progress Bar */}
              <div className="h-2 bg-gray-700 rounded-full mb-4">
                <div 
                  className="h-2 rounded-full bg-green-500"
                  style={{ width: `${chapter.progress}%` }}
                />
              </div>

              {/* Chapter Content */}
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold">{chapter.title}</h3>
                  <span className="text-sm font-semibold">{chapter.progress}%</span>
                </div>
                <p className="text-gray-400 mb-4">{chapter.description}</p>

                <div className="flex items-center gap-4 text-sm mb-4">
                  <span className={`px-2 py-1 rounded-full font-semibold`} style={{ backgroundColor: `${getDifficultyColor(chapter.difficulty)}33`, color: getDifficultyColor(chapter.difficulty) }}>
                    {chapter.difficulty}
                  </span>
                  <span>⏱️ {chapter.duration}</span>
                  <span>📑 {chapter.topics} topics</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleChapterClick(chapter)}
                    className="flex-1 bg-white text-gray-900 py-2 rounded-xl font-semibold hover:bg-gray-200"
                  >
                    Open Chapter
                  </button>
                  <button className="w-12 bg-gray-700 py-2 rounded-xl hover:bg-gray-600">⌄</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PhysicsChapter;

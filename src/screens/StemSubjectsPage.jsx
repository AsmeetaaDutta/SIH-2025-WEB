import React from "react";
import { useParams } from "react-router-dom";

const StemSubjectsPage = () => {
  const { subjectId } = useParams();

  const formatTitle = (id) => {
    if (!id) return "";
    return id.charAt(0).toUpperCase() + id.slice(1);
  };

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold">{formatTitle(subjectId)}</h1>
      <p className="text-gray-500 mt-2">
        Chapters, games, quizzes and learning materials for {formatTitle(subjectId)} will appear here.
      </p>
    </div>
  );
};

export default StemSubjectsPage;

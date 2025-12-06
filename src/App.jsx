import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import ChooseRole from "./screens/ChooseRole";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import StudentDashboard from "./screens/StudentDashboard";
import Stem from "./screens/Stem";
import TeacherDashboard from "./screens/TeacherDashboard";

// Subjects
import PhysicsChapter from "./Subjects/physics/PhysicsChapter";
import BiologyChapters from "./Subjects/biology/BiologyChapters";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<ChooseRole />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboards */}
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />

        {/* Stem Route */}
        <Route path="/stem" element={<Stem />} />

        {/* Subjects */}
        <Route path="/physics" element={<PhysicsChapter />} />
        <Route path="/biology" element={<BiologyChapters />} />
      </Routes>
    </Router>
  );
};

export default App;

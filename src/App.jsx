import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Screens
import ChooseRole from "./screens/ChooseRole";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import StudentDashboard from "./screens/StudentDashboard";
import Stem from "./screens/Stem";

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

        {/* Dashboard */}
        <Route path="/dashboard" element={<StudentDashboard />} />

       <Route path="/stem" element={<Stem />} />

        {/* Direct subject chapter routes */}
        <Route path="/physics" element={<PhysicsChapter />} />
        <Route path="/biology" element={<BiologyChapters />} />
      </Routes>
    </Router>
  );
};

export default App;

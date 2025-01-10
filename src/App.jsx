import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter (or Router) for React Router v6
import Footer from "./components/base/Footer";
import Header from "./components/base/Header";
import Daily from "./components/dua/Daily";
import DuaCard from "./components/dua/DuaCard";
import Favorite from "./components/dua/Favorite";
import Reminder from "./components/dua/Reminder";

import "./index.css"; // Ensure index.css exists in the src folder
import Dashboard from "./components/base/Dashboard";
import { sampleDua } from "./components/utility/Contant";

const App = () => {
  return (
    <Router basename="/qalb-connect">
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Header />

        {/* Routes setup */}
        <Routes>
          <Route path="/" element={<Dashboard sampleDua={sampleDua} />} />
          <Route path="/daily" element={<Daily />} />{" "}
          {/* Adjust the path to match the basename */}
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/reminder" element={<Reminder />} />
        </Routes>

        {/* Main content area */}
        

        <Footer />
      </div>
    </Router>
  );
};

export default App;

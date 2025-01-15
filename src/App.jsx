import React, { useEffect } from "react";
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
import { DailyDua } from "./components/utility/Contant";
import Page1 from "./components/more/path1/Page11";
import Page2 from "./components/more/path2/Page21";
import Page3 from "./components/more/Page4";
import Page4 from "./components/more/Page4";
import Page31 from "./components/more/path3/Page31";
import Page32 from "./components/more/path3/Page32";
import Page33 from "./components/more/path3/Page33";
import Page21 from "./components/more/path2/Page21";
import Page22 from "./components/more/path2/Page22";
import Page11 from "./components/more/path1/Page11";
import ScrollToTop from "./components/base/ScrollToTop";
import Qibla from "./components/qibla/Qibla";
import ZakatCalculator from "./components/zakat/ZakatCalculator";

const App = () => {
  return (
    <Router basename="/qalb-connect">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Header />
        {/* Routes setup */}
        <Routes>
          <Route path="/" element={<Dashboard data={DailyDua} />} />
          <Route path="/daily" element={<Daily />} />{" "}
          {/* Adjust the path to match the basename */}
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/path1/page11" element={<Page11 />} />
          <Route path="/path2/page21" element={<Page21 />} />
          <Route path="/path2/page22" element={<Page22 />} />
          <Route path="/path3/page31" element={<Page31 />} />
          <Route path="/path3/page32" element={<Page32 />} />
          <Route path="/path3/page33" element={<Page33 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/find-qibla" element={<Qibla />} />
          <Route path="/zakat" element={<ZakatCalculator />} />
        </Routes>

        {/* Main content area */}

        <Footer />
      </div>
    </Router>
  );
};

export default App;

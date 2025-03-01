import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter (or Router) for React Router v6
import Footer from "./components/base/Footer";
import Header from "./components/base/Header";
import Daily from "./components/dua/Daily";
import Favorite from "./components/dua/Favorite";
import Reminder from "./components/dua/Reminder";

import { useState } from "react";
import Bismillah from "./components/base/Bismillah";
import Dashboard from "./components/base/Dashboard";
import NotFound from "./components/base/NotFound";
import ScrollToTop from "./components/base/ScrollToTop";
import AllDua from "./components/dua/AllDua";
import Toast from "./components/extras/Toast";
import Page4 from "./components/more/Page4";
import Page11 from "./components/more/path1/Page11";
import Page21 from "./components/more/path2/Page21";
import Page22 from "./components/more/path2/Page22";
import Page31 from "./components/more/path3/Page31";
import Page32 from "./components/more/path3/Page32";
import Page33 from "./components/more/path3/Page33";
import Qibla from "./components/qibla/Qibla";
import AyahCard from "./components/quran/AyahCard";
import SurahList from "./components/quran/in-depth/SurahList";
import SurahPage from "./components/quran/in-depth/SurahPage";
import JuzComponent from "./components/quran/JuzComponent";
import SurahCard from "./components/quran/SurahCard";
import RamadhanDashboard from "./components/ramadhan/RamadhanDashboard";
import { DailyDua, DashboardCardData } from "./components/utility/Contant";
import ZakatCalculator from "./components/zakat/ZakatCalculator";
import "./index.css"; // Ensure index.css exists in the src folder
import DuaDashboard from "./components/dua/DuaDashboard";
import QuranDashboard from "./components/quran/QuranDashboard";
import HajjDashboard from "./components/hajj/HajjDashboard";
import MiscellaneousDashboard from "./components/miscellaneous/MiscellaneousDashboard";
import SupportUs from "./components/support/SupportUs";

const App = () => {
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "success") => {
    setTimeout(() => {
      setToast({ message, type });
    }, 0); // Defers the state update to avoid conflicts
  };

  const hideToast = () => {
    setToast({ message: "", type: "" });
  };

  return (
    <Router basename="/qalb-connect">
      <ScrollToTop />
      <div className="min-h-screen flex flex-col dark:bg-gray-900">
        <Header />
        <Bismillah
          size="lg"
          showArabic={true}
          showEnglish={true}
          showHindi={true}
        />
        {/* Routes setup */}
        <Routes>
          <Route
            path="/"
            element={<Dashboard dashboardData={DashboardCardData} />}
          />
          <Route
            path="/quran-dashboard"
            element={<QuranDashboard showToast={showToast} />}
          />
          <Route path="/ramadhan-dashboard" element={<RamadhanDashboard />} />
          <Route
            path="/dua-dashboard"
            element={<DuaDashboard duaData={DailyDua} />}
          />
          <Route path="/hajj-dashboard" element={<HajjDashboard />} />
          <Route
            path="/miscellaneous-dashboard"
            element={<MiscellaneousDashboard />}
          />
          <Route path="/all-dua" element={<AllDua data={DailyDua} />} />
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
          <Route path="/surah-details" element={<SurahCard />} />
          <Route
            path="/ayah-details"
            element={<AyahCard showToast={showToast} />}
          />
          <Route
            path="/juz-details"
            element={<JuzComponent showToast={showToast} />}
          />
          <Route path="/surah-list" element={<SurahList />} />
          <Route
            path="/surah/:id"
            element={<SurahPage showToast={showToast} />}
          />
          <Route path="*" element={<NotFound />} />
          {/* Ramadhaan Starts*/}
          <Route
            path="/ramadhan"
            element={<RamadhanDashboard showToast={showToast} />}
          />
          {/* Ramadhaan Ends*/}
          <Route path="/support-us" element={<SupportUs />} />
        </Routes>

        {/* Main content area */}

        <Toast
          message={toast.message}
          type={toast.type || "success"} // Default to "success" if type is invalid
          onClose={hideToast}
          duration={3000}
        />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

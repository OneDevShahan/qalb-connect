import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; // Import BrowserRouter (or Router) for React Router v6
import Footer from "./components/base/Footer";
import Header from "./components/base/Header";
import Daily from "./components/dua/Daily";
import Favorite from "./components/dua/Favorite";
import Reminder from "./components/dua/Reminder";

import Dashboard from "./components/base/Dashboard";
import { DailyDua } from "./components/utility/Contant";
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
import Quran from "./components/quran/Quran";
import SurahCard from "./components/quran/SurahCard";
import AyahCard from "./components/quran/AyahCard";
import Bismillah from "./components/base/Bismillah";
import AllDua from "./components/dua/AllDua";
import "./index.css"; // Ensure index.css exists in the src folder
import NotFound from "./components/base/NotFound";
import JuzComponent from "./components/quran/JuzComponent";
import { useState } from "react";
import Toast from "./components/extras/Toast";
import SurahList from "./components/quran/in-depth/SurahList";
import SurahPage from "./components/quran/in-depth/SurahPage";
import CountdownTimer from "./components/ramadhan/CountdownTimer";
import PrayerTimes from "./components/ramadhan/PrayerTimes";
import DailyAyah from "./components/ramadhan/DailyAyah";
import TasbeehCounter from "./components/ramadhan/TasbeehCounter";
import RamadhanDashboard from "./components/ramadhan/RamadhanDashboard";

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
          <Route path="/" element={<Dashboard data={DailyDua} />} />
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
          <Route path="/quran" element={<Quran showToast={showToast} />} />
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

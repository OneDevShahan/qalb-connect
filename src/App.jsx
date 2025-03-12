import { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { DailyDua, DashboardCardData } from "./components/utility/Contant";

const Header = lazy(() => import("./components/base/Header"));
const Footer = lazy(() => import("./components/base/Footer"));
const Bismillah = lazy(() => import("./components/base/Bismillah"));
const Dashboard = lazy(() => import("./components/base/Dashboard"));
const NotFound = lazy(() => import("./components/base/NotFound"));
const ScrollToTop = lazy(() => import("./components/base/ScrollToTop"));
const Daily = lazy(() => import("./components/dua/Daily"));
const Favorite = lazy(() => import("./components/dua/Favorite"));
const Reminder = lazy(() => import("./components/dua/Reminder"));
const AllDua = lazy(() => import("./components/dua/AllDua"));
const DuaDashboard = lazy(() => import("./components/dua/DuaDashboard"));
const Toast = lazy(() => import("./components/extras/Toast"));
const HajjDashboard = lazy(() => import("./components/hajj/HajjDashboard"));
const MiscellaneousDashboard = lazy(() =>
  import("./components/miscellaneous/MiscellaneousDashboard")
);
const Page4 = lazy(() => import("./components/more/Page4"));
const Page11 = lazy(() => import("./components/more/path1/Page11"));
const Page21 = lazy(() => import("./components/more/path2/Page21"));
const Page22 = lazy(() => import("./components/more/path2/Page22"));
const Page31 = lazy(() => import("./components/more/path3/Page31"));
const Page32 = lazy(() => import("./components/more/path3/Page32"));
const Page33 = lazy(() => import("./components/more/path3/Page33"));
const Qibla = lazy(() => import("./components/qibla/Qibla"));
const AyahCard = lazy(() => import("./components/quran/AyahCard"));
const SurahList = lazy(() => import("./components/quran/in-depth/SurahList"));
const SurahPage = lazy(() => import("./components/quran/in-depth/SurahPage"));
const JuzComponent = lazy(() => import("./components/quran/JuzComponent"));
const QuranDashboard = lazy(() => import("./components/quran/QuranDashboard"));
const SurahCard = lazy(() => import("./components/quran/SurahCard"));
const RamadhanDashboard = lazy(() =>
  import("./components/ramadhan/RamadhanDashboard")
);
const SupportUs = lazy(() => import("./components/support/SupportUs"));
const CityDashbaord = lazy(() =>
  import("./components/users/city/CityDashbaord")
);
const ChecklistProgress = lazy(() =>
  import("./components/ramadhan/checklist/ChecklistProgress")
);
const ZakatCalculator = lazy(() =>
  import("./components/zakat/ZakatCalculator")
);

const App = () => {
  const [toast, setToast] = useState({ message: "", type: "" });

  const showToast = (message, type = "success") => {
    setTimeout(() => {
      setToast({ message, type });
    }, 0);
  };

  const hideToast = () => {
    setToast({ message: "", type: "" });
  };

  return (
    <Router basename="/qalb-connect">
      <Suspense fallback={<div>Loading...</div>}>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col dark:bg-gray-900">
          <Header />
          <Bismillah
            size="lg"
            showArabic={true}
            showEnglish={true}
            showHindi={true}
          />
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
            <Route path="/daily" element={<Daily />} />
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
            <Route
              path="/ramadhan"
              element={<RamadhanDashboard showToast={showToast} />}
            />
            <Route path="/checklist-progress" element={<ChecklistProgress />} />
            <Route path="/support-us" element={<SupportUs />} />
            <Route path="/city-visitors" element={<CityDashbaord />} />
          </Routes>
          <Toast
            message={toast.message}
            type={toast.type || "success"}
            onClose={hideToast}
            duration={3000}
          />
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
};

export default App;

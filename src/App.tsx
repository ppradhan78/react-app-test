import { Routes, Route } from "react-router-dom";
import Header from "./app/components/layout/Header";

import Footer from "./app/components/layout/Footer";

import Home from "./app/pages/Home";
import Reports from "./app/pages/Reports";
import Settings from "./app/pages/Settings";
import Profile from "./app/pages/Profile";

import "./app/components/layout/Layout.css";
import Banner from "./app/components/layout/banner";
import CategoryListPage from "./app/pages/Category/CategoryListPage";
import { CategoryProvider } from "./app/context/CategoryContext";
import RegionListPage from "./app/pages/Region/RegionListPage";
import RegionFormPage from "./app/pages/Region/RegionFormPage";
import RegionDetailsPage from "./app/pages/Region/RegionDetailsPage";

export default function App() {
  return (
    <div className="app-layout">
      <Header />
      <Banner
        title={"Northwind"}
        subtitle={"TRADERS"}
        imageUrl={"../../../public/images/north-wind.jpg"}
        buttonText={"North wind banner"}
      ></Banner>
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/regions" element={<RegionListPage />} />
          <Route path="/regions/new" element={<RegionFormPage />} />
          <Route path="/regions/edit/:id" element={<RegionFormPage />} />
          <Route path="/regions/:id" element={<RegionDetailsPage />} />

          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

import { Routes, Route } from "react-router-dom";
import Header from "./app/components/layout/Header";

import Footer from "./app/components/layout/Footer";

import Home from "./app/pages/Home";
import Reports from "./app/pages/Reports";
import Settings from "./app/pages/Settings";
import Profile from "./app/pages/Profile";

import "./app/components/layout/Layout.css";
import Banner from "./app/components/layout/banner";

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
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

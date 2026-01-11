// import { Routes, Route, Navigate } from "react-router-dom";
// import CategoryListPage from "../pages/Category/CategoryListPage";
// import CategoryDetailsPage from "../pages/Category/CategoryDetailsPage";
// import CategoryFormPage from "../pages/Category/CategoryFormPage";

// import RegionListPage from "../pages/Region/RegionListPage";
// import RegionFormPage from "../pages/Region/RegionFormPage";
// import RegionDetailsPage from "../pages/Region/RegionDetailsPage";

// import OrderPage from "../pages/Orders/OrderPage";
// import NotFoundPage from "../pages/NotFoundPage";
// //import UserForm from "../components/Sample/UserForm";
// import UserPage from "../pages/User/UserPage";
// import Home from "../pages/Home";
// import Reports from "../pages/Reports";
// import Settings from "../pages/Settings";
// import Profile from "../pages/Profile";

// export default function AppRoutes() {
//   return (
//     <main className="content">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reports" element={<Reports />} />
//         <Route path="/settings" element={<Settings />} />
//         <Route path="/profile" element={<Profile />} />

//         <Route path="/categories" element={<Navigate to="/categories" />} />

//         <Route path="/categories" element={<CategoryListPage />} />
//         <Route path="/categories/new" element={<CategoryFormPage />} />
//         <Route path="/categories/:id" element={<CategoryDetailsPage />} />
//         <Route path="/categories/edit/:id" element={<CategoryFormPage />} />
//         <Route path="/regions" element={<RegionListPage />} />
//         <Route path="/regions/new" element={<RegionFormPage />} />
//         <Route path="/regions/edit/:id" element={<RegionFormPage />} />
//         <Route path="/regions/:id" element={<RegionDetailsPage />} />
//         <Route path="/order" element={<OrderPage />} />
//         <Route path="/user" element={<UserPage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </main>
//   );
// }

import { Routes, Route, Navigate } from "react-router-dom";
import CategoryListPage from "../pages/Category/CategoryListPage";
import CategoryDetailsPage from "../pages/Category/CategoryDetailsPage";
import CategoryFormPage from "../pages/Category/CategoryFormPage";

import RegionListPage from "../pages/Region/RegionListPage";
import RegionFormPage from "../pages/Region/RegionFormPage";
import RegionDetailsPage from "../pages/Region/RegionDetailsPage";

import OrderPage from "../pages/Orders/OrderPage";
import NotFoundPage from "../pages/NotFoundPage";
// import UserForm from "../components/Sample/UserForm";
import UserPage from "../pages/User/UserPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/categories" />} />

      <Route path="/categories" element={<CategoryListPage />} />
      <Route path="/categories/new" element={<CategoryFormPage />} />
      <Route path="/categories/:id" element={<CategoryDetailsPage />} />
      <Route path="/categories/edit/:id" element={<CategoryFormPage />} />

      <Route path="/regions" element={<RegionListPage />} />
      <Route path="/regions/new" element={<RegionFormPage />} />
      <Route path="/regions/edit/:id" element={<RegionFormPage />} />
      <Route path="/regions/:id" element={<RegionDetailsPage />} />

      <Route path="/order" element={<OrderPage />} />

      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

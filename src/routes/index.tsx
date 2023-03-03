import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";
import ProductPage from "../pages/product";
import HomePage from "../pages/homePage";

import RegisterPage from "../pages/Register";

import LoginPage from "../pages/LoginPage/loginPage";
import ResetPassword from "../pages/ResetPassword";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register-user" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/advertiser-profile/:idAdvertiser"
        element={<AdvertiserUser />}
      />
      <Route path="/announcement/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/recover-password/:id/:token" element={<ResetPassword />} />
    </Routes>
  );
};

export default RouteApllication;

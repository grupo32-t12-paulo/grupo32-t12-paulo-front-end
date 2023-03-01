import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";
import ProductPage from "../pages/product";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="advertiser-profile" element={<AdvertiserUser />} />
      <Route path="/announcement/:id" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RouteApllication;

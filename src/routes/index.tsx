import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";
import ProductPage from "../pages/product";
import HomePage from "../pages/homePage";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="advertiser-profile" element={<AdvertiserUser />} />
      <Route path="/announcement/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default RouteApllication;

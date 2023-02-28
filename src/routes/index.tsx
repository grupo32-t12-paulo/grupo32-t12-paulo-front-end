import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";
import ProductPage from "../pages/product";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/users" />
      <Route path="advertiser-profile" element={<AdvertiserUser />} />
      <Route path="/announcement/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default RouteApllication;

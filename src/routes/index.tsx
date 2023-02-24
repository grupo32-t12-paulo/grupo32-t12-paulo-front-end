import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";
import HomePage from "../pages/homePage";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/homepage" element={<HomePage />} />
      <Route path="advertiser-profile" element={<AdvertiserUser />} />
    </Routes>
  );
};

export default RouteApllication;

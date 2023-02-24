import { Route, Routes } from "react-router-dom";
import AdvertiserUser from "../pages/advertiserUser";

const RouteApllication = () => {
  return (
    <Routes>
      <Route path="/users" />
      <Route path="advertiser-profile" element={<AdvertiserUser />} />
    </Routes>
  );
};

export default RouteApllication;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CurrentImageGalleryProvider } from "./contexts/gallery.context";
import UserProvider from "./contexts/user.context";
import { AnnouncementDetailsProvider } from "./contexts/announcementDetails.context";
import AnnouncementProvider from "./contexts/announcement.context";
import { LoginProvider } from "./contexts/login.context";
import AddressProvider from "./contexts/address.context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <LoginProvider>
        <CurrentImageGalleryProvider>
          <UserProvider>
            <AddressProvider>
              <AnnouncementDetailsProvider>
                <AnnouncementProvider>
                  <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                  />
                  <App />
                </AnnouncementProvider>
              </AnnouncementDetailsProvider>
            </AddressProvider>
          </UserProvider>
        </CurrentImageGalleryProvider>
      </LoginProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

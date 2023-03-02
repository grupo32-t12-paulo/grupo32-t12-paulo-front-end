import "./App.css";
import Register from "./components/FormRegister";

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/Register";
import RouteApllication from "./routes";
import ProductPage from "./pages/product";
import ModalExpandImage from "./components/ModalExpandImage";
import Global from "./style/Global";
import ProfileViewAdmin from "./pages/profileViewAdmin";

function App() {
  return (
    <>
      <Global />
      <RouteApllication />
      {/* <RegisterPage /> */}
      {/* <Register /> */}
      {/* <LoginPage /> */}

      <ModalExpandImage />

    </>
  );
}

export default App;

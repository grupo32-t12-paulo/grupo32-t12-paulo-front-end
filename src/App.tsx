import "./App.css";

import LoginPage from "./pages/loginPage";
import RouteApllication from "./routes";
import ProductPage from "./pages/product";
import ModalExpandImage from "./components/ModalExpandImage";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Global />
      <RouteApllication />
      <ModalExpandImage />
    </>
  );
}

export default App;

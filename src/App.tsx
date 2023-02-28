import "./App.css";
import Global from "./style/Global";
import RouteApllication from "./routes";
import ProductPage from "./pages/product";
import ModalExpandImage from "./components/ModalExpandImage";

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

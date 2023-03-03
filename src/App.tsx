import "./App.css";
import ModalExpandImage from "./components/ModalExpandImage";
import Reset from "./components/Reset";
import RouteApllication from "./routes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Global />
      <RouteApllication />
      <ModalExpandImage />
      <Reset />
    </>
  );
}

export default App;

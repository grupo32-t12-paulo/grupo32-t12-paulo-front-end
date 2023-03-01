import "./App.css";
import Register from "./components/FormRegister";

import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/Register";
import RouteApllication from "./routes";
import Global from "./style/Global";

function App() {
  return (
    <>
      <Global />
      <RouteApllication />
      {/* <RegisterPage /> */}
      {/* <Register /> */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;

import BackToTop from "../components/Footer";
import Login from "../components/FormLogin";
import AppBarComponent from "../components/AppBar";


const LoginPage = () => {
    return(
        <div>
            <AppBarComponent />
            <Login />
            <BackToTop />
        </div>
    )
}

export default LoginPage
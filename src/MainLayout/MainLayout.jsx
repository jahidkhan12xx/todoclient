import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="  bg-cover" style={{backgroundImage : 'url(https://i.ibb.co/DwpK9DX/site-bg.jpg)' }}  >
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
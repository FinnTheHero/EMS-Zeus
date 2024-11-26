import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
const MainLayout = () => {
    return (
        <div className="w-full min-h-screen flex justify-between flex-col flex-nowrap">
            <Header />
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl ">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;

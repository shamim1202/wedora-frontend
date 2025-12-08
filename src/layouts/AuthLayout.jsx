import { Outlet } from "react-router";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default AuthLayout;

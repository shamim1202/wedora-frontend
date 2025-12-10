import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import RootLayout from "../layouts/RootLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Bookings from "../pages/Dashboard/Bookings/Bookings";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import Profile from "../pages/Dashboard/Profile/Profile";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "bookings",
        Component: Bookings,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

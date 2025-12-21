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
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AboutUs from "../pages/AboutUs/AboutUs";
import AddDecorationService from "../pages/Dashboard/Admin/AddDecorationService";
import Contact from "../pages/Contact/Contact";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel";
import ServiceCoverageMap from "../pages/ServiceCoverageMap/ServiceCoverageMap";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Statistics from "../pages/Dashboard/Statistics/Statistics";
import MyAssignedProjects from "../pages/Dashboard/Decorator/MyAssignedProjects/MyAssignedProjects";
import TodaysSchedule from "../pages/Dashboard/Decorator/TodaysSchedule/TodaysSchedule";
import BecomeDecorator from "../pages/Dashboard/User/BecomeDecorator/BecomeDecorator";
import DecoratorRequest from "../pages/Dashboard/Admin/DecoratorRequest/DecoratorRequest";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "services/:id",
        Component: ServiceDetails,
      },
      {
        path: "coverage",
        Component: ServiceCoverageMap,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "contact",
        Component: Contact,
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
        path: "payment/:bookingId",
        Component: Payment,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "add-service",
        element: (
          <AdminRoute>
            <AddDecorationService></AddDecorationService>
          </AdminRoute>
        ),
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancelled",
        Component: PaymentCancel,
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        Component: Statistics,
      },
      {
        path: "assigned-project",
        Component: MyAssignedProjects,
      },
      {
        path: "todays-schedule",
        Component: TodaysSchedule,
      },
      {
        path: "become-decorator",
        Component: BecomeDecorator,
      },
      {
        path: "decorator-request",
        element: (
          <AdminRoute>
            <DecoratorRequest></DecoratorRequest>
          </AdminRoute>
        ),
      },
    ],
  },
]);

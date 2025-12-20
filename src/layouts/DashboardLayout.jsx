import { useState } from "react";
import { BiHomeHeart } from "react-icons/bi";
import { LuPanelRightClose, LuPanelRightOpen } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi";
import { Link, Outlet } from "react-router";
import useRole from "../hooks/useRole";
import Loading from "../pages/Shared/Loading/Loading";
import UserMenu from "../components/UserMenu/UserMenu";
import AdminMenu from "../components/AdminMenu/AdminMenu";
import { GrPieChart } from "react-icons/gr";
import DecoratorMenu from "../components/DecoratorMenu/DecoratorMenu";

const DashboardLayout = () => {
  const [open, setOpen] = useState(true);
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <Loading />;
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* >====>====>====>===> Nvabar <===<===<===<===< */}
        <nav className="navbar w-full bg-secondary/30 p-3 md:p-5">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
            onClick={() => setOpen(!open)}
          >
            {/* Sidebar toggle icon */}
            {open ? (
              <LuPanelRightClose size={24} color="#1f1f36" />
            ) : (
              <LuPanelRightOpen size={24} color="#1f1f36" />
            )}
          </label>
          <div className="px-2 md:px-4 text-2xl md:text-4xl font-bold">Dashboard</div>
        </nav>

        {/* >====>=====>====> Nvabar <===<====<====<====< */}
        <Outlet />
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:pt-4 is-drawer-close:w-16 is-drawer-open:w-64 is-drawer-open:p-4">
          {/* >====>====>===> Sidebar content here <===<===<===< */}
          <ul className="menu w-full grow space-y-2">
            {/* >====>====>===> Dashboard Side Menu <===<===<===< */}
            {/* >==>==> Homepage <==<==< */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                <BiHomeHeart size={24} color="#1f1f36" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* >==>==> Profile <==<==< */}
            <li>
              <Link
                to="/dashboard/profile"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="My Profile"
              >
                <HiOutlineUser size={24} color="#1f1f36" />
                <span className="is-drawer-close:hidden">Profile</span>
              </Link>
            </li>

            {/* >==>==> Statistics <==<==< */}
            <li>
              <Link
                to="/dashboard/statistics"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Statistics"
              >
                <GrPieChart size={24} color="#1f1f36" />
                <span className="is-drawer-close:hidden">Statistics</span>
              </Link>
            </li>

            {/* >==>==> Admin <==<==< */}
            {role === "admin" && <AdminMenu></AdminMenu>}

            {/* >==>==> Decorator <==<==< */}
            {role === "decorator" && <DecoratorMenu></DecoratorMenu>}

            {/* >==>==> User <==<==< */}
            {role === "user" && <UserMenu></UserMenu>}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

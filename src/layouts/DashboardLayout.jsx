import { BiHomeHeart } from "react-icons/bi";
import { LuPanelRightClose } from "react-icons/lu";
import { Link, Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* >====>====>====>===> Nvabar <===<===<===<===< */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <LuPanelRightClose size={24} color="#1f1f36" />
          </label>
          <div className="px-4">Navbar Title</div>
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
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-16 is-drawer-open:w-64">
          {/* >====>====>===> Sidebar content here <===<===<===< */}
          <ul className="menu w-full grow">
            {/* >====>====>===> List Item <===<===<===< */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* >====>====>===> Hero Icon <===<===<===< */}
                <BiHomeHeart size={28} color="#1f1f36" />
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>

            {/* >====>====>===> List Item <===<===<===< */}
            <li>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* >====>====>===> Setting Icon <===<===<===< */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

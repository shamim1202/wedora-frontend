import { GrUserSettings } from "react-icons/gr";
import { TbUserScan } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { Link } from "react-router";

const AdminMenu = () => {
  return (
    <>
      {/* Manage Users */}
      <li>
        <Link
          to="/dashboard/manage-users"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Manage Users"
        >
          <GrUserSettings size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Manage Users</span>
        </Link>
      </li>

      {/* Decorator Request */}
      <li>
        <Link
          to="/dashboard/decorator-request"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Manage Users"
        >
          <TbUserScan size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Manage Users</span>
        </Link>
      </li>

      {/* Add Service (Decorator related, but admin controls it) */}
      <li>
        <Link
          to="/dashboard/add-service"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Add Service"
        >
          <MdEventAvailable size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Add Service</span>
        </Link>
      </li>
    </>
  );
};

export default AdminMenu;

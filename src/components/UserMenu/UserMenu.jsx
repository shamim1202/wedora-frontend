import { MdOutlineEventAvailable } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router";
import { GrUserPolice } from "react-icons/gr";

const UserMenu = () => {
  return (
    <>
      {/* Bookings */}
      <li>
        <Link
          to="/dashboard/bookings"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Bookings"
        >
          <MdOutlineEventAvailable size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Bookings</span>
        </Link>
      </li>

      {/* Payment History */}
      <li>
        <Link
          to="/dashboard/payment-history"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Payment History"
        >
          <FaCreditCard size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Payment History</span>
        </Link>
      </li>

      {/* Become Decorator */}
      <li>
        <Link
          to="/dashboard/become-decorator"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Become Decorator"
        >
          <GrUserPolice size={24} color="#1f1f36" />
          <span className="is-drawer-close:hidden">Become Decorator</span>
        </Link>
      </li>
    </>
  );
};

export default UserMenu;

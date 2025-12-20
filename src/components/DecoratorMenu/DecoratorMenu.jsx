import { BiTask } from "react-icons/bi";
import { GrPieChart } from "react-icons/gr";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from "react-router";

const DecoratorMenu = () => {
  return (
    <div>
      <>
        <li>
          <Link
            to="/dashboard/todays-schedule"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Today's Schedule"
          >
            <RiCalendarScheduleLine size={24} color="#1f1f36" />
            <span className="is-drawer-close:hidden">Today's Schedule</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/assigned-project"
            className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
            data-tip="Assigned Project"
          >
            <BiTask size={24} color="#1f1f36" />
            <span className="is-drawer-close:hidden">Assigned Project</span>
          </Link>
        </li>
      </>
    </div>
  );
};
export default DecoratorMenu;

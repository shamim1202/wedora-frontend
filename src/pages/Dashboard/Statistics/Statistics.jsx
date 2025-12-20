import useRole from "../../../hooks/useRole";
import Loading from "../../Shared/Loading/Loading";
import AdminStatistics from "./AdminStatistics/AdminStatistics";
import DecoratorStatistics from "./DecoratorStatistics/DecoratorStatistics";
import UserStatistics from "./UserStatistics/UserStatistics";

const Statistics = () => {
  const [role, isRoleLoading] = useRole();

  if (isRoleLoading) return <Loading></Loading>;
  return (
    <div>
      {role === "admin" && <AdminStatistics />}
      {role === "decorator" && <DecoratorStatistics />}
      {role === "user" && <UserStatistics />}
    </div>
  );
};
export default Statistics;

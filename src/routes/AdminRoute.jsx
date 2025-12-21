import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../pages/Shared/Loading/Loading";
import useRole from "../hooks/useRole";
import ForbiddenAccess from "../components/ForbiddenAccess/ForbiddenAccess";

const AdminRoute = ({children}) => {
  const { user, loading } = useAuth();
  const [role, isRoleLoading] = useRole();

  if (loading || isRoleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "admin") {
    return <ForbiddenAccess></ForbiddenAccess>;
  }
    return children;
};

export default AdminRoute;

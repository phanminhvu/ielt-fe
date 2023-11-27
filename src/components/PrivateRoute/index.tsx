import { ROLE } from "constants/enum";
import useInfoUser from "hooks/auth/useInfoUser";
import { Redirect, Route } from "react-router-dom";
import { GetAuthSelector } from "redux/selectors/auth";

const PrivateRoute = (props: any) => {
  const auth = GetAuthSelector();
  const { isLogin, userType } = auth;
  // const userType = authServices.getUserTypeFromLocalStorage();
  const [userDetail] = useInfoUser();
  //! Render
  if (isLogin) {
    return <Route {...props} />;
  }

  if (userType === ROLE.SUPER_ADMIN || userType === ROLE.ADMIN) {
    return <Redirect to="/admin/login" />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;

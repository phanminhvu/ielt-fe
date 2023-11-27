import { RouteBase } from "constants/routeUrl";
import { authActions } from "redux/creators/modules/auth";
import { useLayoutEffect } from "react";
import useSagaCreators from "hooks/useSagaCreators";
import { Redirect, useHistory } from "react-router-dom";

export const useCheckAuth = () => {
  const { dispatch } = useSagaCreators();

  useLayoutEffect(() => {
    dispatch(authActions.checkAuth);
  }, [dispatch]);
};

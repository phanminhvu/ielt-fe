import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useLocation, Link as RouterLink, Redirect, useHistory } from "react-router-dom";
import ButtonCommon from "components/Button";
import useSagaCreators from "hooks/useSagaCreators";
import { authActions } from "redux/creators/modules/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { RouteBase } from "constants/routeUrl";
import useInfoUser from "hooks/auth/useInfoUser";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function AdminBreadcrumbs() {
  const location = useLocation();
  const [userDetail] = useInfoUser();

  const { dispatch } = useSagaCreators();
  const pathSplit = location.pathname.split("/").filter((path) => path);
  const history = useHistory();
  const onLogout = () => {
    dispatch(authActions.logout, { role: userDetail });
    history.push(RouteBase.AdminLogin);
  };

  return (
    <div role="presentation" onClick={handleClick} style={styles.breadcrumbContainer}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathSplit.map((el: string, index: number) => {
          const to = `/${pathSplit.slice(0, index + 1).join("/")}`;

          if (index === pathSplit.length - 1) {
            return (
              <Typography key={index} color="text.primary" style={{ textTransform: "capitalize", fontWeight: "bold" }}>
                {el}
              </Typography>
            );
          }
          if (el === "questionbank") {
            return (
              <Typography key={index} style={{ textTransform: "capitalize" }}>
                {el}
              </Typography>
            );
          }
          return (
            <RouterLink key={index} color="inherit" to={to} className="hover-link">
              <Typography style={{ textTransform: "capitalize" }}>{el}</Typography>
            </RouterLink>
          );
        })}
      </Breadcrumbs>

      <ButtonCommon onClick={onLogout}>
        <LogoutIcon />
      </ButtonCommon>
    </div>
  );
}

const styles = {
  breadcrumbContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
};

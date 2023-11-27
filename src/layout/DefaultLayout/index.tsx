import { Box } from "@mui/system";
import Header from "components/Header";
import PrivateRoute from "components/PrivateRoute";
import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes";
import HeaderResponsive from "../../components/Header/HeaderResponsive";
import NavResponsive from "../../components/Header/NavResponsive";
//
const DefaultLayout: React.FC = (props) => {
  const [isShowNav, setIsShowNav] = useState(false);
  const handleShowNavResponsive = () => {
    setIsShowNav(true);
  };
  const handleCloseNavResponsive = (event: any) => {
    setIsShowNav(false);
  };

  return (
    <Box>
      <Header />
      <HeaderResponsive handleShowNavResponsive={handleShowNavResponsive} />
      {isShowNav && <NavResponsive handleCloseNavResponsive={handleCloseNavResponsive} />}
      <main className="main-container" style={{ marginTop: "60px" }}>
        <Suspense fallback="Loading...">
          <Switch>
            {routes.map((route: any, idx: any) => {
              if (route.isPrivate) {
                return <PrivateRoute key={idx} path={route.path} exact={route.exact} component={route.component} />;
              }
              return <Route key={idx} path={route.path} exact={route.exact} component={route.component} />;
            })}
          </Switch>
        </Suspense>
      </main>
      {/* <Footer /> */}
    </Box>
  );
};

export default DefaultLayout;

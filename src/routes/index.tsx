import { lazy } from "react";
import withErrorBoundary from "components/HOCs/withErrorBoundary";

const HomePage = lazy(() => import("views/Home"));
// const Ielts = lazy(() => import("views/Ielts"));
const TOFFL = lazy(() => import("views/TOFFL"));
const IeltsListening = lazy(() => import("views/Ielts/listening"));
const Page404 = lazy(() => import("views/Page404"));

//! Route in Default Layout
const routes = [
  // {
  //   path: "/ielts",
  //   name: "Ielts",
  //   component: Ielts,
  //   isPrivate: false,
  // },
  {
    path: "/ielts/listening",
    name: "IeltsListening",
    component: IeltsListening,
    isPrivate: true,
  },
  {
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
    isPrivate: false,
  },
  { name: "404", component: Page404 },
];

const wrapRouteErrorBoundary = routes.map((route) => {
  return {
    ...route,
    component: withErrorBoundary(route.component),
  };
});

export default wrapRouteErrorBoundary;

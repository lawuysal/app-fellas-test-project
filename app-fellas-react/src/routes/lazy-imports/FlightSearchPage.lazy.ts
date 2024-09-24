// Necessary to use HMR with react-router

import { lazy } from "react";

const FlightsSearchPage = lazy(
  () => import("@/pages/flightSearchPage/FlightSearchPage"),
);

export default FlightsSearchPage;

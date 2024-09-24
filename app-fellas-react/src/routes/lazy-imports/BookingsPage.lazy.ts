// Necessary to use HMR with react-router

import { lazy } from "react";

const BookingsPage = lazy(() => import("@/pages/bookingsPage/BookingsPage"));

export default BookingsPage;

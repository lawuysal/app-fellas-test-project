import Loading from "@/components/Loading";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Bookings from "./lazy-imports/Bookings.lazy";
import MyFlights from "./lazy-imports/MyFlights.lazy";
import Routes from "./Routes.enum";

export const router = createBrowserRouter([
  {
    path: Routes.BOOKINGS,
    element: (
      <Suspense fallback={<Loading />}>
        <Bookings />
      </Suspense>
    ),
  },
  {
    path: Routes.MYFLIGHTS,
    element: (
      <Suspense fallback={<Loading />}>
        <MyFlights />
      </Suspense>
    ),
  },
]);

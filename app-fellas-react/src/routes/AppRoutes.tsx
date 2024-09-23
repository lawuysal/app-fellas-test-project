import Loading from "@/components/Loading";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FlightSearchPage from "./lazy-imports/FlightSearchPage.lazy";
import BookingsPage from "./lazy-imports/BookingsPage.lazy";
import Routes from "./Routes.enum";

export const router = createBrowserRouter([
  {
    path: Routes.FLIGHT_SEARCH_PAGE,
    element: (
      <Suspense fallback={<Loading />}>
        <FlightSearchPage />
      </Suspense>
    ),
  },
  {
    path: Routes.BOOKINGS_PAGE,
    element: (
      <Suspense fallback={<Loading />}>
        <BookingsPage />
      </Suspense>
    ),
  },
]);

import Loading from "@/components/Loader";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FlightSearchPage from "./lazy-imports/FlightSearchPage.lazy";
import BookingsPage from "./lazy-imports/BookingsPage.lazy";
import ROUTES from "./Routes.enum";

// This is the main routing component that will be used in the App.tsx file.
export function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path={ROUTES.FLIGHT_SEARCH_PAGE}
          element={<FlightSearchPage />}
        />
        <Route path={ROUTES.BOOKINGS_PAGE} element={<BookingsPage />} />
      </Routes>
    </Suspense>
  );
}

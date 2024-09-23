import { Button } from "@/components/ui/button";
import Routes from "@/routes/Routes.enum";
import { NavLink } from "react-router-dom";

export default function MyFlights() {
  return (
    <div>
      <p>hello from bookings</p>
      <NavLink to={Routes.FLIGHT_SEARCH_PAGE}>
        <Button>Search Flights</Button>
      </NavLink>
    </div>
  );
}

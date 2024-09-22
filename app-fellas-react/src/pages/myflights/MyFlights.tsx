import { Button } from "@/components/ui/button";
import Routes from "@/routes/Routes.enum";
import { NavLink } from "react-router-dom";

export default function MyFlights() {
  return (
    <div>
      <p>hello from my flights</p>
      <NavLink to={Routes.BOOKINGS}>
        <Button>Bookings</Button>
      </NavLink>
    </div>
  );
}

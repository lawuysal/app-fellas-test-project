import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
import Routes from "@/routes/Routes.enum";

export default function Navbar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between py-6 transition-all duration-300 ease-linear">
      <NavLink
        to={Routes.FLIGHT_SEARCH_PAGE}
        className="flex items-center gap-4"
      >
        <IoAirplaneSharp
          color="#ffffff"
          className="size-8 rounded-full bg-primary py-1 pr-2"
          size={45}
        />
        <h1 className="text-center text-lg font-bold">PLANE SCAPE</h1>
      </NavLink>

      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <FaTag className="text-primary" />
          <Button variant={"link"} className="p-0 text-base text-foreground">
            Deals
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <FaGlobeAmericas className="text-primary" />
          <Button variant={"link"} className="p-0 text-base text-foreground">
            Discover
          </Button>
        </div>
        <NavLink to={Routes.BOOKINGS_PAGE}>
          <div className="flex items-center gap-2">
            <IoAirplaneSharp className="rotate-[-135deg] text-primary" />
            <Button variant={"link"} className="p-0 text-base text-foreground">
              My Flights
            </Button>
          </div>
        </NavLink>
        <div className="ml-4 flex items-center gap-2">
          <Avatar className="flex size-9">
            <AvatarImage src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" />
            <AvatarFallback>OU</AvatarFallback>
          </Avatar>
          <p className="font-medium">Oğuzhan Uysal</p>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

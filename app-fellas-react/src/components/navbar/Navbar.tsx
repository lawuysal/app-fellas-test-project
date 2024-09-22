import { ModeToggle } from "@/components/dark-mode/mode-toggle";
import { IoAirplaneSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-7xl mx-auto py-6">
      <div className="flex gap-4 items-center">
        <IoAirplaneSharp
          color="#ffffff"
          className="bg-primary pr-2 py-1 rounded-full size-8"
          size={45}
        />
        <h1 className="text-center text-lg font-bold">PLANE SCAPE</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex items-center gap-1">
          <FaTag className="text-primary" />
          <Button variant={"link"} className="text-foreground p-0 text-base">
            Deals
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <FaGlobeAmericas className="text-primary" />
          <Button variant={"link"} className="text-foreground p-0 text-base">
            Discover
          </Button>
        </div>
        <div className="flex gap-2 items-center ml-4">
          <Avatar className="flex size-9">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-medium">Joane Smith</p>
        </div>
        <ModeToggle />
      </div>
    </div>
  );
}

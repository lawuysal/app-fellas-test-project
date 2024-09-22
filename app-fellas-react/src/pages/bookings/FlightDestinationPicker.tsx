import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

export default function DestinationPicker() {
  return (
    <div className="flex gap-1">
      <div className="relative">
        <FaPlaneDeparture className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="border-[3px] dark:border-primary rounded-s-full pl-10"
        />
      </div>
      <div className="relative">
        <FaPlaneArrival className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="border-[3px] dark:border-primary rounded-e-full pl-10"
        />
      </div>
    </div>
  );
}

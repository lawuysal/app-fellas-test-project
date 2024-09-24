import { FaPlaneArrival, FaPlaneDeparture } from "react-icons/fa";

export default function DestinationPicker() {
  return (
    <div className="flex gap-1">
      <div className="relative">
        <FaPlaneDeparture className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="rounded-s-full border-[3px] pl-10 dark:border-primary"
        />
      </div>
      <div className="relative">
        <FaPlaneArrival className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="rounded-e-full border-[3px] pl-10 dark:border-primary"
        />
      </div>
    </div>
  );
}

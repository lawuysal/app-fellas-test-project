import { IoMdCalendar } from "react-icons/io";

export default function DatePicker() {
  return (
    <div className="flex gap-1">
      <div className="relative">
        <IoMdCalendar className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="border-[3px] dark:border-primary rounded-s-full pl-10"
        />
      </div>
      <div className="relative">
        <IoMdCalendar className="absolute left-3 top-[0.35rem] flex items-center text-primary" />
        <input
          type="text"
          className="border-[3px] dark:border-primary rounded-e-full pl-10"
        />
      </div>
    </div>
  );
}

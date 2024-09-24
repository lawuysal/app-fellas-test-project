import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export default function FlightFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryClient = useQueryClient();

  function handleSortChange(value: string) {
    const newParams = new URLSearchParams(searchParams);
    if (value === "none") {
      newParams.delete("sortBy");
    } else {
      newParams.delete("sortBy");
      newParams.append("sortBy", value);
    }
    setSearchParams(newParams);

    queryClient.invalidateQueries({
      queryKey: ["flights"],
      exact: false,
    });
  }

  return (
    <div className="flex flex-col gap-4 self-start pl-8 pt-4">
      <div className="flex flex-col gap-2">
        <p>Sort By:</p>
        <Select
          onValueChange={handleSortChange}
          value={searchParams.get("sortBy") ?? ""}
        >
          <SelectTrigger className="rounded-lg border-0 dark:bg-background/40">
            <SelectValue placeholder="Select a field" />
          </SelectTrigger>
          <SelectContent
            ref={(ref) => {
              if (!ref) return;
              ref.ontouchstart = (e) => e.preventDefault();
            }}
            className="dark:bg-[#141b28]"
          >
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="+scheduleTime">
              Departure Time (Ascending)
            </SelectItem>
            <SelectItem value="-scheduleTime">
              Departure Time (Descending)
            </SelectItem>
            <SelectItem value="+estimatedLandingTime">
              Arrival Time (Ascending)
            </SelectItem>
            <SelectItem value="-estimatedLandingTime">
              Arrival Time (Descending)
            </SelectItem>
            <SelectItem value="+scheduleDate">
              Departure Date (Ascending)
            </SelectItem>
            <SelectItem value="-scheduleDate">
              Departure Date (Descending)
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

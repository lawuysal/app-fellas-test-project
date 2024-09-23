import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function TripTypeSwitch() {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="inline-flex  rounded-md  gap-[0.10rem]" role="group">
      <Button
        variant={isRoundTrip ? "default" : "secondary"}
        className={`rounded-r-none rounded-s-full px-4 py-2 text-sm font-[550] ${
          isRoundTrip
            ? "bg-primary text-primary-foreground border-2 border-primary"
            : "bg-primary/20  text-primary hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 border-2 border-primary/20 dark:border-primary"
        }`}
        onClick={() => setIsRoundTrip(true)}
        aria-pressed={isRoundTrip}
      >
        Round trip
      </Button>
      <Button
        variant={!isRoundTrip ? "default" : "secondary"}
        className={`rounded-l-none rounded-r-full px-4 py-2 text-sm font-[550] ${
          !isRoundTrip
            ? "bg-primary text-primary-foreground border-2 border-primary"
            : "bg-primary/20  text-primary hover:bg-primary/30 dark:bg-primary/10 dark:hover:bg-primary/20 border-2 border-primary/20 dark:border-primary"
        }`}
        onClick={() => setIsRoundTrip(false)}
        aria-pressed={!isRoundTrip}
      >
        One way
      </Button>
    </div>
  );
}

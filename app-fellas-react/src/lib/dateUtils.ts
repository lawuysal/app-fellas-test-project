import {
  addHours,
  differenceInMilliseconds,
  formatDate,
  subHours,
} from "date-fns";

// returns the formatted departure time like 02:00 AM
export function getDepartureTime(scheduleDateTime: string) {
  return formatDate(subHours(new Date(scheduleDateTime), 2), "HH:mm a");
}

// returns the formatted landing time like 02:00 AM
export function getLandingTime(
  estimatedLandingTime: string | undefined,
  scheduleDateTime: string,
) {
  let date: Date;

  if (estimatedLandingTime === undefined) {
    date = addHours(new Date(scheduleDateTime), 2);
  } else {
    date = new Date(estimatedLandingTime);
  }

  return formatDate(date, "HH:mm a");
}

// returns the flight duration in milliseconds
export function getFlightDurationInMilliseconds(
  estimatedLandingTime: string,
  scheduleDateTime: string,
) {
  let estimatedDate;

  if (estimatedLandingTime === undefined) {
    estimatedDate = addHours(new Date(scheduleDateTime), 2);
  } else {
    estimatedDate = new Date(estimatedLandingTime);
  }

  return differenceInMilliseconds(
    new Date(estimatedDate),
    subHours(new Date(scheduleDateTime), 2),
  );
}

// returns the formatted flight duration like 02h 30m
export function getFlightDuration(
  estimatedLandingTime: string,
  scheduleDateTime: string,
) {
  let estimatedDate;

  if (estimatedLandingTime === undefined) {
    estimatedDate = addHours(new Date(scheduleDateTime), 2);
  } else {
    estimatedDate = new Date(estimatedLandingTime);
  }

  const diffMilliseconds = getFlightDurationInMilliseconds(
    estimatedDate.toISOString(),
    scheduleDateTime,
  );

  const hours = Math.floor(diffMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (diffMilliseconds % (1000 * 60 * 60)) / (1000 * 60),
  );

  return `${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m`;
}

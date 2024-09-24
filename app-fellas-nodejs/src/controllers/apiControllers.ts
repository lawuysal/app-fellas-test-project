import { Request, Response } from "express";
import { apiHeaders } from "../api/apiHeaders";

// Request handlers for the airplane API

export async function getApiFlight(req: Request, res: Response) {
  const flightId = req.params.flightId;

  const response = await fetch(
    `https://api.schiphol.nl/public-flights/flights/${flightId}`,
    {
      method: "GET",
      headers: apiHeaders,
    },
  );

  const data = await response.json();
  res.json(data);
}

export async function getApiFlights(req: Request, res: Response) {
  let queries: string = "";

  if (req.params.queries) {
    // To escape from React Router's sort convention
    if (req.params.queries.includes("sortBy")) {
      req.params.queries = req.params.queries.replace("sortBy", "sort");
    }

    queries = req.params.queries;
  }

  const response = await fetch(
    `https://api.schiphol.nl/public-flights/flights?${queries}`,
    {
      method: "GET",
      headers: apiHeaders,
    },
  );

  const data = await response.json();
  res.json(data);
}

export async function getApiDestination(req: Request, res: Response) {
  const destinationCode = req.params.iata;

  const response = await fetch(
    `https://api.schiphol.nl/public-flights/destinations/${destinationCode}`,
    {
      method: "GET",
      headers: apiHeaders,
    },
  );

  const data = await response.json();
  res.json(data);
}

export async function getApiAirline(req: Request, res: Response) {
  const airlineCode = req.params.prefixICAO;

  const response = await fetch(
    `https://api.schiphol.nl/public-flights/airlines/${airlineCode}`,
    {
      method: "GET",
      headers: apiHeaders,
    },
  );

  const data = await response.json();
  res.json(data);
}

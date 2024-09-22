import express from "express";
import { Express } from "express";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const resourceVersion = process.env.RESOURCE_VERSION;

const apiHeaders = new Headers();
apiHeaders.append("app_id", appId as string);
apiHeaders.append("app_key", appKey as string);
apiHeaders.append("ResourceVersion", resourceVersion as string);

app.get("/flights", async (req, res) => {
  const response = await fetch(
    "https://api.schiphol.nl/public-flights/flights",
    {
      method: "GET",
      headers: apiHeaders,
    },
  );

  const data = await response.json();
  res.json(data);
});

app.get("/destinations/:iata", async (req, res) => {
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
});

app.get("/airlines/:prefixICAO", async (req, res) => {
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
});

export default app;

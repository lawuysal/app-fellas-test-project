import express from "express";
import { Express } from "express";
import cors from "cors";
import apiRouter from "./routes/apiRoutes";
import bookingRouter from "./routes/bookingRoutes";

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

// Api router endpoints
app.use("/api", apiRouter);
app.use("/bookings", bookingRouter);

export default app;

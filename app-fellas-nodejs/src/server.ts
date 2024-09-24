import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";

// This method must be called before the app decleration!!!
dotenv.config({ path: "./.env.local" });

import app from "./app";

const server = http.createServer(app);

const dbConnectionString = process.env.DB_URL
  ? process.env.DB_URL.replace("<db_password>", process.env.DB_PASS ?? "")
  : "";

mongoose.connect(dbConnectionString).then(() => {
  console.log("Connected to DB");
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Started to listening at ${port}...`);
});

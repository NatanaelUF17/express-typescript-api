import express from "express";
import api from "./api";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my server 👾",
  });
});

app.use("/api/v1", api);

export default app;

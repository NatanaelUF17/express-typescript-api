import app from "./app";
import dotenv from "dotenv";
import * as db from "./data/database";

dotenv.config();

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
});

db.databaseConnection();

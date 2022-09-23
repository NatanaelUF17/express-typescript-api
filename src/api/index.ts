import { Router } from "express";
import todos from "./routes/todos.routes";

const router = Router();

// Entry point of the api
router.get("/", (req, res) => {
  res.json({
    message: "Welcome to my API 🚀",
  });
});

// Routes for the api
router.use("/todos", todos);

export default router;

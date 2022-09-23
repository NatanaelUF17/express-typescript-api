import { Router } from "express";
import * as todosController from "../../controllers/todos.controller";

const router = Router();

router.get("/", todosController.getTodos);
router.get("/:id", todosController.getTodo);
router.post("/", todosController.insertTodo);
router.put("/:id", todosController.updateTodo);

export default router;

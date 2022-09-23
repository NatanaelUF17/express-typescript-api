import mongoose from "mongoose";
import Todo from "../../models/todo";

const todoSchema = new mongoose.Schema<Todo>({
  todo: String,
  done: Boolean,
  disableDate: Date,
  createdAt: Date,
});

const TodoModel = mongoose.model<Todo>("Todo", todoSchema);

export default TodoModel;

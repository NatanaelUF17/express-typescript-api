import { Document } from "mongoose";

interface Todo extends Document {
  id: string;
  todo: string;
  done: boolean;
  disableDate: Date | null;
  createdAt: Date;
}

export default Todo;

import TodoModel from "../../data/schemas/todo.schema";
import todoTable from "../../data/schemas/todo.schema";
import Todo from "../../models/todo";

export const getTodos = async (): Promise<Todo[]> => {
  const todos: Todo[] = await todoTable.find({});

  if (todos && todos.length === 0) return [];

  return todos;
};

export const getTodo = async (id: string): Promise<Todo> => {
  const todo: Todo | null = await todoTable.findById(id).exec();

  if (!todo) return {} as Todo;

  return todo;
};

export const insertTodo = async (todo: Todo): Promise<boolean> => {
  if (!todo) return false;

  let successInserted = false;
  const newTodo = new TodoModel({
    todo: todo.todo,
    done: todo.done,
    disableDate: null,
    createdAt: Date.now(),
  });

  try {
    await newTodo
      .validate()
      .then(() => newTodo.save())
      .then((todo: Todo) => {
        successInserted = todo.id ? true : false;
      });
  } catch (error) {
    console.log(error);
  }

  return successInserted;
};

export const updateTodo = async (id: string, todo: Todo): Promise<boolean> => {
  return true;
};

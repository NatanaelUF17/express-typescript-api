import { NextFunction, Request, Response } from "express";
import * as todoService from "../services/todos/todo.services";
import Todo from "../models/todo";

// Retrieve all todos from the database
export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos: Todo[] = await todoService.getTodos();

    if (todos && todos.length === 0) {
      res.status(404).json({
        message: "No records found on the database.",
      });
    }

    res.send(todos);
  } catch (error) {
    next(error);
  }
};

// Retrieve one todo from the database based on the id
export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const todo: Todo = await todoService.getTodo(id);

    if (!todo) {
      res.status(404).json({
        message: `No todo found with id ${id}.`,
      });
    }

    res.send(todo);
  } catch (error) {
    next(error);
  }
};

// Insert one todo record on the database
export const insertTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo: Todo = { ...req.body };
    const insertedTodo = await todoService.insertTodo(todo);

    if (insertedTodo) {
      res.status(200).json({
        message: "Todo inserted successfully.",
      });
    } else {
      res.sendStatus(500).json({
        message: "Could not insert record on the database.",
      });
    }
  } catch (error) {
    next(error);
  }
};

// Update a todo based on the id
// TODO: make it work
export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todo: Todo = { ...req.body };
    const id = req.params.id;

    const updatedTodo = await todoService.updateTodo(id, todo);

    if (updatedTodo) {
      res.status(200).json({
        message: `Record with id ${id} successfully updated.`,
      });
    } else {
      res.sendStatus(500).json({
        message: `Could not update record with id ${id} on the database.`,
      });
    }
  } catch (error) {
    next(error);
  }
};

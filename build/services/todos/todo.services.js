"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.insertTodo = exports.getTodo = exports.getTodos = void 0;
const todo_schema_1 = __importDefault(require("../../data/schemas/todo.schema"));
const todo_schema_2 = __importDefault(require("../../data/schemas/todo.schema"));
const getTodos = async () => {
    const todos = await todo_schema_2.default.find({});
    if (todos && todos.length === 0)
        return [];
    return todos;
};
exports.getTodos = getTodos;
const getTodo = async (id) => {
    const todo = await todo_schema_2.default.findById(id).exec();
    if (!todo)
        return {};
    return todo;
};
exports.getTodo = getTodo;
const insertTodo = async (todo) => {
    if (!todo)
        return false;
    let successInserted = false;
    const newTodo = new todo_schema_1.default({
        todo: todo.todo,
        done: todo.done,
        disableDate: null,
        createdAt: Date.now(),
    });
    try {
        await newTodo
            .validate()
            .then(() => newTodo.save())
            .then((todo) => {
            successInserted = todo.id ? true : false;
        });
    }
    catch (error) {
        console.log(error);
    }
    return successInserted;
};
exports.insertTodo = insertTodo;
const updateTodo = async (id, todo) => {
    return true;
};
exports.updateTodo = updateTodo;

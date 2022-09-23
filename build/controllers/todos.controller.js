"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.insertTodo = exports.getTodo = exports.getTodos = void 0;
const todoService = __importStar(require("../services/todos/todo.services"));
// Retrieve all todos from the database
const getTodos = async (req, res, next) => {
    try {
        const todos = await todoService.getTodos();
        if (todos && todos.length === 0) {
            res.status(404).json({
                message: "No records found on the database.",
            });
        }
        res.send(todos);
    }
    catch (error) {
        next(error);
    }
};
exports.getTodos = getTodos;
// Retrieve one todo from the database based on the id
const getTodo = async (req, res, next) => {
    try {
        const id = req.params.id;
        const todo = await todoService.getTodo(id);
        if (!todo) {
            res.status(404).json({
                message: `No todo found with id ${id}.`,
            });
        }
        res.send(todo);
    }
    catch (error) {
        next(error);
    }
};
exports.getTodo = getTodo;
// Insert one todo record on the database
const insertTodo = async (req, res, next) => {
    try {
        const todo = { ...req.body };
        const insertedTodo = await todoService.insertTodo(todo);
        if (insertedTodo) {
            res.status(200).json({
                message: "Todo inserted successfully.",
            });
        }
        else {
            res.sendStatus(500).json({
                message: "Could not insert record on the database.",
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.insertTodo = insertTodo;
// Update a todo based on the id
// TODO: make it work
const updateTodo = async (req, res, next) => {
    try {
        const todo = { ...req.body };
        const id = req.params.id;
        const updatedTodo = await todoService.updateTodo(id, todo);
        if (updatedTodo) {
            res.status(200).json({
                message: `Record with id ${id} successfully updated.`,
            });
        }
        else {
            res.sendStatus(500).json({
                message: `Could not update record with id ${id} on the database.`,
            });
        }
    }
    catch (error) {
        next(error);
    }
};
exports.updateTodo = updateTodo;

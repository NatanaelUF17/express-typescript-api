"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    todo: String,
    done: Boolean,
    disableDate: Date,
    createdAt: Date,
});
const TodoModel = mongoose_1.default.model("Todo", todoSchema);
exports.default = TodoModel;

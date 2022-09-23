"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_routes_1 = __importDefault(require("./routes/todos.routes"));
const router = (0, express_1.Router)();
// Entry point of the api
router.get("/", (req, res) => {
    res.json({
        message: "Welcome to my API 🚀",
    });
});
// Routes for the api
router.use("/todos", todos_routes_1.default);
exports.default = router;

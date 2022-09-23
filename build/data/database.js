"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const databaseConnection = () => {
    try {
        mongoose_1.default.connect(process.env.MONGODB_URI || "mongodb://localhost/todos");
    }
    catch (error) {
        console.log(error);
        mongoose_1.default.connection.close();
    }
};
exports.databaseConnection = databaseConnection;

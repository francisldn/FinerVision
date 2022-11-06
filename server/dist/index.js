"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3001;
const user_1 = require("./models/user");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
}));
app.use(router_1.default);
user_1.User.sync().then(() => {
    console.log('Connected to db');
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

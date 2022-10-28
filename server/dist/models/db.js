"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// username: admin, password: admin
const db = new sequelize_1.Sequelize('app', USERNAME, PASSWORD, {
    storage: './database.sqlite',
    dialect: 'sqlite',
    logging: false,
});
exports.default = db;

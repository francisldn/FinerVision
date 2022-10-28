import { Sequelize } from 'sequelize';

const USERNAME = process.env.DB_USERNAME as string;
const PASSWORD = process.env.DB_PASSWORD as string;
// username: admin, password: admin
const db = new Sequelize('app', USERNAME, PASSWORD, {
    storage: './database.sqlite',
    dialect: 'sqlite',
    logging: false,
});

export default db;

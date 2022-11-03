import express from 'express';
import cors from 'cors';
import router from './router';
require('dotenv').config();
const PORT = process.env.SERVER_PORT || 3001;
import { User } from './models/user';
const app = express();

app.use(express.json());
app.use(
    cors({
        origin: process.env.CLIENT_URL,
    }),
);
app.use(router);

User.sync().then(() => {
    console.log('Connected to db');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import "express-async-errors";

import "./database/connection";
import { router } from "./routes";
import { ensureAutheticated } from "./middlewares/enrureAuthenticated";

const app = express();

app.use(express.json());
app.use(router);
dotenv.config();
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    return response.json({
        status: "Error",
        message: error.message,
    });
});

app.get("/courses", ensureAutheticated, (request, response) => {
    const courses = [
        { id: 1, name: "NodeJS" },
        { id: 2, name: "ReactJS" },
        { id: 3, name: "React Native" },
        { id: 4, name: "Flutter" },
        { id: 5, name: "Elixir" }
    ];
    return response.json(courses);
});

export { app };


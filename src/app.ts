import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";
import "express-async-errors";

import "./database/connection";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
dotenv.config();

export { app };


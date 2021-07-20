import express from "express";
import dotenv from "dotenv";
import "reflect-metadata";

const app = express();

dotenv.config();

export { app };


import { Router } from "express";

import { UserController } from "./controllers/UserController";
import { AuthController } from "./controllers/AuthController";

const router = Router();
const userController = new UserController();
const authController = new AuthController();

router.post("/users", userController.save);

router.post("/login", authController.login);

export { router };
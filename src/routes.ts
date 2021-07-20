import { Router } from "express";

import { UserController } from "./controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/users", userController.save);

export { router };
import { Router } from "express";

import { UserController } from "./controllers/UserController";
import { AuthController } from "./controllers/AuthController";
import { RefreshTokenController } from "./controllers/RefreshController";

const router = Router();
const userController = new UserController();
const authController = new AuthController();
const refreshTokenController = new RefreshTokenController();

router.post("/users", userController.save);

router.post("/login", authController.login);

router.post("/refresh-token", refreshTokenController.refreshToken);

export { router };
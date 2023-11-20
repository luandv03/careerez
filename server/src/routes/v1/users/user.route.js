import { Router } from "express";

import { UserController } from "../../../controllers/users/user.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/auth/google", userController.loginWithGoogle);

userRoutes.get("/auth/profile/view", authMiddleware, userController.getProfile);

userRoutes.get("/auth/refresh_token", userController.refreshToken);

userRoutes.get("/auth/logout", authMiddleware, userController.logout);

export default userRoutes;

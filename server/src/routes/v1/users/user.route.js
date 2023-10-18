import { Router } from "express";
import { UserController } from "../../../controllers/users/user.controller.js";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/auth/google", userController.loginWithGoogle);

export default userRoutes;

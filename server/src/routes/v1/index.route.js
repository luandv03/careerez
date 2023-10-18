import { Router } from "express";
import userRoutes from "./users/user.route.js";

const routerV1 = Router();

routerV1.use("/v1", userRoutes);

export default routerV1;

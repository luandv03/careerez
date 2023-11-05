import { Router } from "express";

import userRoutes from "./users/user.route.js";
import courseRoutes from "./courses/course.route.js";

const routerV1 = Router();

routerV1.use("/v1", userRoutes);
routerV1.use("/v1", courseRoutes);

export default routerV1;

import { Router } from "express";

import userRoutes from "./users/user.route.js";
import courseRoutes from "./courses/course.route.js";
import testRoutes from "./test/test.routes.js";

const routerV1 = Router();

routerV1.use("/v1", userRoutes);
routerV1.use("/v1", courseRoutes);
routerV1.use("/v1", testRoutes);

export default routerV1;

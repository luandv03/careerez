import { Router } from "express";

import userRoutes from "./users/user.route.js";
import courseRoutes from "./courses/course.route.js";
import testRoutes from "./test/test.routes.js";
import jobSimulationRoutes from "./job_simulations/job_simulation.route.js";
import paymentRoutes from "./payments/payment.route.js";

const routerV1 = Router();

routerV1.use("/v1", userRoutes);
routerV1.use("/v1", courseRoutes);
routerV1.use("/v1", testRoutes);
routerV1.use("/v1", jobSimulationRoutes);
routerV1.use("/v1", paymentRoutes);

export default routerV1;

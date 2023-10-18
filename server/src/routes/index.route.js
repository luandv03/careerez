import { Router } from "express";

import routerV1 from "./v1/index.route.js";

const routerApp = Router();

routerApp.use("/api", routerV1);

export default routerApp;

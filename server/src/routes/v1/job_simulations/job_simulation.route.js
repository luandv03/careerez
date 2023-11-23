import { Router } from "express";
import { JobSimulationController } from "../../../controllers/job_simulations/job_simulation.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";

const jobSimulationRoutes = Router();
const jobSimulationController = new JobSimulationController();

jobSimulationRoutes.get(
    "/job_simulation/job_category/all/view",
    jobSimulationController.getListJobCategory
);

jobSimulationRoutes.get(
    "/job_simulation/job_company/all/view",
    jobSimulationController.getListCompany
);

jobSimulationRoutes.get(
    "/job_simulation/job_category/list/view",
    jobSimulationController.getJobSimulationByCategoryId
);

// đã login
jobSimulationRoutes.get(
    "/job_simulation/job_category/list/user/view",
    authMiddleware,
    jobSimulationController.getJobSimulationByCategoryIdAndUserId
);

jobSimulationRoutes.get(
    "/job_simulation/company/list/view",
    jobSimulationController.getJobSimulationByCompanyId
);

// đã login
jobSimulationRoutes.get(
    "/job_simulation/company/list/user/view",
    jobSimulationController.getJobSimulationByCompanyIdAndUserId
);

// get job detail by id
jobSimulationRoutes.get(
    "/job_simulation/:job_simulation_id/view",
    jobSimulationController.getJobSimulationDetailById
);

// get tasks by id
jobSimulationRoutes.get(
    "/job_simulation/task/:job_simulation_id/view",
    jobSimulationController.getTaskByJobId
);

export default jobSimulationRoutes;

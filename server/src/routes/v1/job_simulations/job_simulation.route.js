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
    authMiddleware,
    jobSimulationController.getJobSimulationByCompanyIdAndUserId
);

// get job detail by id
jobSimulationRoutes.get(
    "/job_simulation/:job_simulation_id/view",
    jobSimulationController.getJobSimulationDetailById
);

// get job detail by id and userId
jobSimulationRoutes.get(
    "/job_simulation/:job_simulation_id/owner/view",
    authMiddleware,
    jobSimulationController.getJobSimulationDetailByIdAndUserId
);

// register job simulation by id
jobSimulationRoutes.post(
    "/job_simulation/:job_simulation_id/register",
    authMiddleware,
    jobSimulationController.registerJobSimulationById
);

// get tasks by id
jobSimulationRoutes.get(
    "/job_simulation/task/:job_simulation_id/view",
    jobSimulationController.getTaskByJobId
);

// get task requirement by task id and number
jobSimulationRoutes.get(
    "/job_simulation/task/:task_id/requirement_number/:requirement_number/view",
    jobSimulationController.getTaskRequirement
);

export default jobSimulationRoutes;

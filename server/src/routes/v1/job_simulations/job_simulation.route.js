import { Router } from "express";
import { JobSimulationController } from "../../../controllers/job_simulations/job_simulation.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";
import { checkTaskRequirement } from "../../../middlewares/checkTaskRequirement.middleware.js";

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

// get list company by list category
jobSimulationRoutes.post(
    "/job_simulation/job_category/company/all/view",
    jobSimulationController.getListCompanyByCategoryId
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
    "/job_simulation/:job_simulation_id/job_category/:job_category_id/company/:company_id/register",
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
    "/job_simulation/:job_simulation_id/task/:task_id/requirement_number/:requirement_number/view",
    authMiddleware,
    checkTaskRequirement,
    jobSimulationController.getTaskRequirement
);

// register pack service
jobSimulationRoutes.post(
    "/service_pack/:service_pack_id/register",
    authMiddleware,
    jobSimulationController.registerPackService
);

// get user buy pack service by id
jobSimulationRoutes.get(
    "/user_buy_service_pack/:user_buy_service_pack_id/view",
    authMiddleware,
    jobSimulationController.getUserBuyServicePackById
);

// apply user service pack to job category and company
jobSimulationRoutes.post(
    "/user_buy_service_pack/:user_buy_service_pack_id/apply",
    authMiddleware,
    jobSimulationController.applyServicePackJobCategoryCompany
);

export default jobSimulationRoutes;

import { Router } from "express";
import { JobSimulationController } from "../../../controllers/job_simulations/job_simulation.controller.js";

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

jobSimulationRoutes.get(
    "/job_simulation/company/list/view",
    jobSimulationController.getJobSimulationByCompanyId
);

// get job detail by id
jobSimulationRoutes.get(
    "/job_simulation/:job_simulation_id/view",
    jobSimulationController.getJobSimulationDetailById
);

export default jobSimulationRoutes;

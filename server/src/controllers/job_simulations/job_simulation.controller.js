import { HttpStatusCode } from "../../configs/httpStatusCode.js";
import { jobSimulationService } from "../../services/job_simulations/job_simulation.service.js";

export class JobSimulationController {
    async getListJobCategory(req, res, next) {
        try {
            const data = await jobSimulationService.getListJobCategory();

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getListCompany(req, res, next) {
        try {
            const data = await jobSimulationService.getListCompany();

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getJobSimulationByCategoryId(req, res, next) {
        try {
            const { job_category_name, page, limit } = req.query;

            const data =
                await jobSimulationService.getJobSimulationByCategoryId(
                    job_category_name,
                    page,
                    limit
                );

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getJobSimulationByCompanyId(req, res, next) {
        try {
            const { company_name, page, limit } = req.query;

            const data = await jobSimulationService.getJobSimulationByCompanyId(
                company_name,
                page,
                limit
            );

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getJobSimulationDetailById(req, res) {
        try {
            const { job_simulation_id } = req.params;

            const data = await jobSimulationService.getJobSimulationDetailById(
                Number(job_simulation_id)
            );

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getTaskByJobId(req, res, next) {
        try {
            const { job_simulation_id } = req.params;

            const data = await jobSimulationService.getTaskByJobId(
                Number(job_simulation_id)
            );

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }
}

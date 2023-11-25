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

    // đã đăng nhập
    async getJobSimulationByCategoryIdAndUserId(req, res, next) {
        try {
            const { job_category_name, page, limit } = req.query;
            const { user_id } = res.locals.data;

            const data =
                await jobSimulationService.getJobSimulationByCategoryIdAndUserId(
                    job_category_name,
                    Number(user_id),
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

            console.log(company_name);

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

    // getJobSimulationByCompanyIdAndUserId
    async getJobSimulationByCompanyIdAndUserId(req, res, next) {
        try {
            const { company_name, page, limit } = req.query;
            const { user_id } = res.locals.data;

            const data =
                await jobSimulationService.getJobSimulationByCompanyIdAndUserId(
                    company_name,
                    Number(user_id),
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

    // get job by id and userId
    async getJobSimulationDetailByIdAndUserId(req, res) {
        try {
            const { job_simulation_id } = req.params;
            const { user_id } = res.locals.data;

            const data =
                await jobSimulationService.getJobSimulationDetailByIdAndUserId(
                    Number(job_simulation_id),
                    Number(user_id)
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

    // register job simulation
    async registerJobSimulationById(req, res, next) {
        try {
            const { job_simulation_id } = req.params;
            const { user_id } = res.locals.data;

            const data = await jobSimulationService.registerJobSimulationById(
                Number(job_simulation_id),
                Number(user_id)
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

    async getTaskRequirement(req, res, next) {
        try {
            const { task_id, requirement_number } = req.params;

            const data = await jobSimulationService.getTaskRequirement(
                Number(task_id),
                Number(requirement_number)
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

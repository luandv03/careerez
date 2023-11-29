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

    async getListCompanyByCategoryId(req, res, next) {
        try {
            const { listCategoryId } = req.body;

            const data = await jobSimulationService.getListCompanyByCategoryId(
                listCategoryId
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
            const { job_simulation_id, job_category_id, company_id } =
                req.params;
            const { user_id } = res.locals.data;

            const data = await jobSimulationService.registerJobSimulationById(
                Number(job_category_id),
                Number(company_id),
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

    async registerPackService(req, res) {
        try {
            const { service_pack_id } = req.params;
            const { user_id } = res.locals.data;

            const data = await jobSimulationService.registerPackService(
                Number(service_pack_id),
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

    async getUserBuyServicePackById(req, res) {
        try {
            const { user_buy_service_pack_id } = req.params;

            const data = await jobSimulationService.getUserBuyServicePackById(
                Number(user_buy_service_pack_id)
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

    async applyServicePackJobCategoryCompany(req, res) {
        try {
            const { user_buy_service_pack_id } = req.params;
            const { payload } = req.body;

            const data =
                await jobSimulationService.applyServicePackJobCategoryCompany(
                    Number(user_buy_service_pack_id),
                    payload
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

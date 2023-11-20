import { query } from "../../db/index.db.js";
import { HttpStatusCode } from "../../configs/httpStatusCode.js";

class JobSimulationService {
    async getListJobCategory() {
        const result = await query(`SELECT * FROM job_category`);

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Category OK",
            data: {
                job_categories: result.rows,
            },
        };
    }

    async getListCompany() {
        const result = await query(`SELECT * FROM company`);

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Company OK",
            data: {
                companies: result.rows,
            },
        };
    }

    async getJobSimulationByCategoryId(job_category_name, page, limit) {
        const offset = (page - 1) * limit;

        const result = await query(
            `SELECT js.*, jc.job_category_name, c.company_name, c.company_logo FROM job_simulation js
            JOIN job_category jc USING(job_category_id)
            JOIN company c USING(company_id)
            WHERE job_category_name = $1 OFFSET $2 LIMIT $3`,
            [job_category_name, offset, limit]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Category OK",
            data: {
                job_simulations: result.rows,
            },
        };
    }

    async getJobSimulationByCompanyId(company_name, page, limit) {
        const offset = (page - 1) * limit;

        const result = await query(
            `SELECT js.*, jc.job_category_name, c.company_name, c.company_logo FROM job_simulation js
            JOIN job_category jc USING(job_category_id)
            JOIN company c USING(company_id) WHERE company_name = $1 OFFSET $2 LIMIT $3`,
            [company_name, offset, limit]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Company OK",
            data: {
                job_simulations: result.rows,
            },
        };
    }
}

export const jobSimulationService = new JobSimulationService();

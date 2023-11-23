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

    //user don't login
    async getJobSimulationByCategoryId(job_category_name, page, limit) {
        const offset = (page - 1) * limit;

        const result = await query(
            `SELECT js.*, jc.job_category_name, c.company_name, c.company_logo FROM job_simulation js
            JOIN job_category jc USING(job_category_id)
            JOIN company c USING(company_id)
            WHERE job_category_name = $1 
            OFFSET $2 LIMIT $3`,
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

    // user logined
    async getJobSimulationByCategoryIdAndUserId(
        job_category_name,
        user_id,
        page,
        limit
    ) {
        const offset = (page - 1) * limit;

        const result = await query(
            `select jobs.*, b.status  from (SELECT js.*, jc.job_category_name, c.company_name, c.company_logo FROM job_simulation js
            JOIN job_category jc USING(job_category_id)
            JOIN company c USING(company_id) 
            WHERE job_category_name = $1) as jobs
            left join (select job_simulation_id ,status from user_enroll_job_simulation where user_id = $2) b using(job_simulation_id)
            OFFSET $3 LIMIT $4`,
            [job_category_name, user_id, offset, limit]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Category OK",
            data: {
                job_simulations: result.rows,
            },
        };
    }

    // user don't login
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

    // user logined
    async getJobSimulationByCompanyIdAndUserId(
        company_name,
        user_id,
        page,
        limit
    ) {
        const offset = (page - 1) * limit;

        const result = await query(
            `select jobs.*, b.status  from (SELECT js.*, jc.job_category_name, c.company_name, c.company_logo FROM job_simulation js
            JOIN job_category jc USING(job_category_id)
            JOIN company c USING(company_id) 
            WHERE company_name = $1) as jobs
            left join (select job_simulation_id ,status from user_enroll_job_simulation where user_id = $2) b using(job_simulation_id)
            OFFSET $3 LIMIT $4`,
            [company_name, user_id, offset, limit]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Company OK",
            data: {
                job_simulations: result.rows,
            },
        };
    }

    async getJobSimulationDetailById(jobSimulationId) {
        const result = await query(
            `select js.*, c.company_name, c.company_logo, c.company_video_intro, jc.job_category_name from job_simulation js
        join company c using(company_id)
        join job_category jc using(job_category_id)
        where js.job_simulation_id = $1`,
            [jobSimulationId]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Simultion OK",
            data: {
                job_simulation: result.rows[0],
            },
        };
    }

    async getTaskByJobId(jobId) {
        const result = await query(
            `select * from task where job_simulation_id = $1 order by task_number`,
            [jobId]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Task Simultion OK",
            data: {
                tasks: result.rows,
            },
        };
    }
}

export const jobSimulationService = new JobSimulationService();

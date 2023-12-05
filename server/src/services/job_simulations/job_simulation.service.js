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

    async getListCompanyByCategoryId(listCategoryId) {
        const result =
            await query(`SELECT jsonb_pretty(jsonb_agg(js_object)) result
        FROM (
        select
            jsonb_build_object(
                'job_category_id', job_category_id,
                'job_category_name', job_category_name,
                'list_company', jsonb_agg(company)
            ) js_object
        from (select jc.*,  jsonb_build_object(
                                    'company_id', company_id,
                                    'company_name', company_name
                                ) company
        from job_category jc
        join job_category_company jcc using(job_category_id)
        join company c using(company_id)
        where job_category_id IN (${listCategoryId})
        ) l
        group by job_category_id, job_category_name
        ) l`);

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get List Company OK",
            data: {
                list_job_category: !!result.rows[0].result
                    ? JSON.parse(result.rows[0].result)
                    : [],
            },
        };
    }

    // apply service pack to job category and company

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
            `select task.*, count(requirement_id) number_of_requirement from task 
            left join requirement using(task_id)
            where job_simulation_id = $1
            group by task_id
            order by task_number`,
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

    // get job by user_id and job id
    async getJobSimulationDetailByIdAndUserId(jobSimulationId, userId) {
        const result = await query(
            `select job.*,COALESCE(b.status, '0') status from (select js.*, c.company_name, c.company_logo, c.company_video_intro, jc.job_category_name from job_simulation js
                join company c using(company_id)
                join job_category jc using(job_category_id)
                where js.job_simulation_id = $1) job
                left join (select job_simulation_id ,status from user_enroll_job_simulation where user_id = $2) b using(job_simulation_id)`,
            [jobSimulationId, userId]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get Job Simultion OK",
            data: {
                job_simulation: result.rows[0],
            },
        };
    }

    async registerJobSimulationById(
        job_category_id,
        company_id,
        job_simulation_id,
        user_id
    ) {
        // kiểm tra xem user này đã đăng ký goi dịch vụ chưa
        const checkBuyServicePack = await query(
            `select a.*, b.user_id from apply_service_pack_job_category_company a
            join user_buy_service_pack b using(user_buy_service_pack_id)
            where (a.job_category_id = $1 and a.company_id = $2) and user_id = $3`,
            [job_category_id, company_id, user_id]
        );

        if (!checkBuyServicePack.rowCount) {
            return {
                statusCode: HttpStatusCode.FORBIDDEN,
                message: "Hãy đăng ký dịch vụ để trải nghiệm nhé",
            };
        }

        const jobRegistration = await query(
            `SELECT * FROM user_enroll_job_simulation WHERE job_simulation_id = $1 AND user_id = $2`,
            [job_simulation_id, user_id]
        );

        if (jobRegistration.rowCount > 0) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
                message: "You Registered This Job Before",
            };
        }

        const results = await query(
            `INSERT INTO user_enroll_job_simulation VALUES (DEFAULT, $1, $2, $3, '1', now(), now()) RETURNING *`,
            [
                user_id,
                job_simulation_id,
                checkBuyServicePack.rows[0]
                    .apply_service_pack_job_category_company_id,
            ]
        );

        if (!results.rowCount) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
                message: "Register Job Simultion Failed",
            };
        }

        return {
            statusCode: HttpStatusCode.OK,
            message: "Register Job Simultion OK",
        };
    }

    async getTaskRequirement(taskId, requirementNumber) {
        const result = await query(
            `SELECT * FROM requirement WHERE task_id = $1 AND requirement_number = $2`,
            [taskId, requirementNumber]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Task requirement OK",
            data: {
                requirement: result.rows[0],
            },
        };
    }

    async registerPackService(servicePackId, userId) {
        const result = await query(
            `INSERT INTO user_buy_service_pack VALUES (DEFAULT, $1, $2, now(), now()) RETURNING *`,
            [servicePackId, userId]
        );

        return {
            statusCode: HttpStatusCode.OK,
            message: "Register Service Pack Ok",
            data: {
                user_buy_service_pack: result.rows[0],
            },
        };
    }

    async getUserBuyServicePackById(user_buy_service_pack_id) {
        const result = await query(`SELECT * FROM user_buy_service_pack`, [
            user_buy_service_pack_id,
        ]);

        if (!result.rowCount) {
            return {
                statusCode: HttpStatusCode.OK,
                message: "Ban chua dang ky goi dich vu nay",
            };
        }

        let job_category_number = 0;
        let company_number = 0;

        switch (result.rows[0].service_pack_id) {
            case 1:
                job_category_number = 1;
                company_number = 1;
                break;
            case 2:
                job_category_number = 1;
                company_number = 2;
                break;
            case 3:
                job_category_number = 2;
                company_number = 2;
                break;
        }

        return {
            statusCode: HttpStatusCode.OK,
            message: "Register Service Pack Ok",
            data: {
                user_buy_service_pack: {
                    ...result.rows[0],
                    job_category_number,
                    company_number,
                },
            },
        };
    }

    async applyServicePackJobCategoryCompany(
        user_buy_service_pack_id,
        payload
    ) {
        let q = "INSERT INTO apply_service_pack_job_category_company VALUES ";
        payload.map((item) => {
            q += `(DEFAULT, ${item.job_category_id}, ${item.company_id}, ${user_buy_service_pack_id}, now(), now()),`;
        });

        q = q.slice(0, q.length - 1);

        const result = await query(q);

        if (!result.rowCount) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
                message: "Áp dụng không thành công",
            };
        }

        return {
            statusCode: HttpStatusCode.OK,
            message: "Áp dụng thành công",
            data: result.rows,
        };
    }
}

export const jobSimulationService = new JobSimulationService();

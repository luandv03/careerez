import { query } from "../db/index.db.js";
import { HttpStatusCode } from "../configs/httpStatusCode.js";

export const checkTaskRequirement = async (req, res, next) => {
    try {
        const { user_id } = res.locals.data;
        const { job_simulation_id, task_id } = req.params;

        const resTask = await query(
            `select task_level from task where task_id = $1 `,
            [Number(task_id)]
        );

        if (resTask.rows[0].task_level === "khó") {
            const resService = await query(
                `select service_pack_id from user_buy_service_pack where user_buy_service_pack_id in (
                select user_buy_service_pack_id from apply_service_pack_job_category_company
                where apply_service_pack_job_category_company_id in (
                select apply_service_pack_job_category_company_id from user_enroll_job_simulation where user_id = $1 and job_simulation_id = $2 ))`,
                [Number(user_id), Number(job_simulation_id)]
            );

            console.log(resService.rows);

            if (resService.rows[0].service_pack_id < 2) {
                return res.status(HttpStatusCode.FORBIDDEN).json({
                    statusCode: HttpStatusCode.FORBIDDEN,
                    message: "Bạn hãy nâng cấp gói dịch vụ để trải nghiệm nhé!",
                });
            }
        }

        return next();
    } catch (err) {
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send({
            statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
            message: "Interbal Server Error",
            err,
        });
    }
};

import { BaseService } from "./base.service";

class JobSimulationService extends BaseService {
    async getListJobCategory() {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/job_category/all/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getListCompany() {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/job_company/all/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // getListCompanyByCategoryId
    async getListCompanyByCategoryId(listCategoryId: number[]) {
        try {
            const res = await this.httpClientPublic.post(
                `/job_simulation/job_category/company/all/view`,
                { listCategoryId }
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getJobSimulationByCategoryId(
        jobCategoryName: string,
        page: number,
        limit: number
    ) {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/job_category/list/view?job_category_name=${jobCategoryName}&page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // đã login
    async getJobSimulationByCategoryIdAndUserId(
        jobCategoryName: string,
        page: number,
        limit: number
    ) {
        try {
            const res = await this.httpClientPrivate.get(
                `/job_simulation/job_category/list/user/view?job_category_name=${jobCategoryName}&page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getJobSimulationByCompanyId(
        companyName: string,
        page: number,
        limit: number
    ) {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/company/list/view?company_name=${companyName}&page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // da login
    async getJobSimulationByCompanyIdAndUserId(
        companyName: string,
        page: number,
        limit: number
    ) {
        try {
            const res = await this.httpClientPrivate.get(
                `/job_simulation/company/list/user/view?company_name=${companyName}&page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getJobSimulationDetailById(jobSimulationId: number) {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/${jobSimulationId}/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    ///job_simulation/:job_simulation_id/owner/view
    async getJobSimulationDetailByIdAndUserId(jobSimulationId: number) {
        try {
            const res = await this.httpClientPrivate.get(
                `/job_simulation/${jobSimulationId}/owner/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getTaskByJobId(jobSimulationId: number) {
        try {
            const res = await this.httpClientPublic.get(
                `/job_simulation/task/${jobSimulationId}/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // register job simulation
    async registerJobSimulationById(
        jobCategoryId: number,
        companyId: number,
        jobSimulationId: number
    ) {
        try {
            const res = await this.httpClientPrivate.post(
                `/job_simulation/${jobSimulationId}/job_category/${jobCategoryId}/company/${companyId}/register`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getTaskRequirement(
        jobSimulationId: number,
        taskId: number,
        requirementnumber: number
    ) {
        try {
            const res = await this.httpClientPrivate.get(
                `/job_simulation/${jobSimulationId}/task/${taskId}/requirement_number/${requirementnumber}/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async registerPackService(servicePackId: number) {
        try {
            const res = await this.httpClientPrivate.post(
                `/service_pack/${servicePackId}/register`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getUserBuyServicePackById(userBuyServicePackId: number) {
        try {
            const res = await this.httpClientPrivate.get(
                `/user_buy_service_pack/${userBuyServicePackId}/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async applyServicePackJobCategoryCompany(
        userBuyServicePackId: number,
        payload: { job_category_id: number; company_id: number }[]
    ) {
        try {
            const res = await this.httpClientPrivate.post(
                `/user_buy_service_pack/${userBuyServicePackId}/apply`,
                { payload }
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // create task
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async createTaskByJobId(payload: any) {
        try {
            const res = await this.httpClientPublic.post(`/task/create`, {
                payload,
            });

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const jobSimulationService = new JobSimulationService();

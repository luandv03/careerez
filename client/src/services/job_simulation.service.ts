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
    async registerJobSimulationById(jobSimulationId: number) {
        try {
            const res = await this.httpClientPrivate.post(
                `/job_simulation/${jobSimulationId}/register`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const jobSimulationService = new JobSimulationService();

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
}

export const jobSimulationService = new JobSimulationService();

import { BaseService } from "./base.service";

class CourseService extends BaseService {
    async getAllCategories() {
        try {
            const res = await this.httpClientPublic("/course/category/view");

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const courseService: CourseService = new CourseService();

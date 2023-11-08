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

    async getListCoursesByMajorId(majorId: number) {
        try {
            const res = await this.httpClientPublic(`/course/${majorId}/view`);

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getCourseDetailById(courseId: number) {
        try {
            const res = await this.httpClientPublic(
                `/course/detail/${courseId}/view`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const courseService: CourseService = new CourseService();

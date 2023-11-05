import { courseService } from "../../services/courses/course.service.js";
import { HttpStatusCode } from "../../configs/httpStatusCode.js";

export class CourseController {
    async getCategories(req, res, next) {
        try {
            const data = await courseService.getCategories();

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getMajorByCategoryId(req, res, next) {
        try {
            const categoryId = req.params.categoryId;
            const data = await courseService.getMajorByCategoryId(
                Number(categoryId)
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

    async getListCoursesByMajorId(req, res, next) {
        try {
            const majorId = req.params.majorId;
            const data = await courseService.getListCoursesByMajorId(
                Number(majorId)
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

    async getCourseDetailById(req, res, next) {
        try {
            const courseId = req.params.courseId;
            const data = await courseService.getCourseDetailById(
                Number(courseId)
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

    async getListLessonByCourseId(req, res, next) {
        try {
            const courseId = req.params.courseId;
            const data = await courseService.getListLessonByCourseId(
                Number(courseId)
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

    async getLessonById(req, res, next) {
        try {
            const lessonId = req.params.lessonId;
            const data = await courseService.getLessonById(Number(lessonId));

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async registerCourseById(req, res, next) {
        try {
            const courseId = req.params.courseId;
            const { user_id } = res.locals.data;

            const data = await courseService.registerCourseById(
                Number(courseId),
                user_id
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

    async getRegisteredListCourseByUserId(req, res, next) {
        try {
            const { user_id } = res.locals.data;

            const data = await courseService.getRegisteredListCourseByUserId(
                user_id
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

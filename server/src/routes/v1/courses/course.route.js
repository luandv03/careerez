import { Router } from "express";

import { CourseController } from "../../../controllers/courses/course.controller.js";
import { authMiddleware } from "../../../middlewares/auth.middleware.js";

const courseRoutes = Router();

const courseController = new CourseController();

// get all categories
courseRoutes.get("/course/category/view", courseController.getCategories);

// get major by categoryId
courseRoutes.get(
    "/course/category/:categoryId/major/view",
    courseController.getMajorByCategoryId
);

// get list course by majorId
courseRoutes.get(
    "/course/:majorId/view",
    courseController.getListCoursesByMajorId
);

// get course detail by id
courseRoutes.get(
    "/course/detail/:courseId/view",
    courseController.getCourseDetailById
);

// get list course
courseRoutes.get(
    "/course/:courseId/lesson/all/view",
    courseController.getListLessonByCourseId
);

// get lesson by id
courseRoutes.get(
    "/course/lesson/:lessonId/view",
    courseController.getLessonById
);

// register course
courseRoutes.post(
    "/course/:courseId/register",
    authMiddleware,
    courseController.registerCourseById
);

// get user's courses registered

courseRoutes.get(
    "/course/user/registered/view",
    authMiddleware,
    courseController.getRegisteredListCourseByUserId
);

export default courseRoutes;

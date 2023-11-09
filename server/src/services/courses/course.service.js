import { HttpStatusCode } from "../../configs/httpStatusCode.js";
import { query } from "../../db/index.db.js";

class CourseService {
    async getCategories() {
        const allCategories = await query(
            `SELECT jsonb_pretty(jsonb_agg(js_object)) result
        FROM (
            select 
                jsonb_build_object(
                    'category_id', category_id,
                    'category_name', category_name,
                    'majors', jsonb_agg(major)
                ) js_object
            from (
                select 
                    c.*, 
                    jsonb_build_object(
                        'major_id', major_id,
                        'major_name', major_name
                    ) major
                from "Category" c
                join "Major" m on c.category_id = m.category_id
                ) l
        group by category_id, category_name
        ) l
        `
        );

        return {
            message: "Get categories successfull",
            statusCode: HttpStatusCode.OK,
            data: { categories: JSON.parse(allCategories.rows[0].result) },
        };
    }

    async getMajorByCategoryId(categoryId) {
        const allMajorCategories = await query(
            `SELECT * FROM "Major" WHERE category_id = $1`,
            [categoryId]
        );

        return {
            message: "Get majors successfull",
            statusCode: HttpStatusCode.OK,
            data: { majors: allMajorCategories.rows },
        };
    }

    async getListCoursesByMajorId(majorId) {
        const results = await query(
            `SELECT c.*, u.username FROM "Course" c JOIN "User" u ON (c.author_id = u.user_id)
            WHERE major_id = $1 `,
            [majorId]
        );

        return {
            message: "Get courses successfull",
            statusCode: HttpStatusCode.OK,
            data: {
                courses: results.rows,
            },
        };
    }

    async getCourseDetailById(courseId) {
        const courseDetail = await query(
            `SELECT * FROM "Course" WHERE course_id = $1`,
            [courseId]
        );

        const courseRes = await query(
            `SELECT jsonb_pretty(jsonb_agg(js_object)) result
            FROM (
                select 
                    jsonb_build_object(
                        'chapter_id', chapter_id,
                        'chapter_name', chapter_name,
                        'chapter_number', chapter_number,
                        'lessons', jsonb_agg(lesson)
                    ) js_object
                from (
                    select 
                        c.*, 
                        jsonb_build_object(
                            'lesson_id', lesson_id,
                            'lesson_name', lesson_name,
                            'lesson_number', lesson_number,
                            'lesson_video_url', lesson_video_url
                        ) lesson
                    from "Chapter" c
                    join "Lesson" l on c.chapter_id = l.chapter_id
                    WHERE c.course_id = $1
                    ) l
            group by chapter_id, chapter_name, chapter_number
            ) l
            `,
            [courseId]
        );

        return {
            message: "Get course detail successfull",
            statusCode: HttpStatusCode.OK,
            data: {
                course: {
                    ...courseDetail.rows[0],
                    chapters: !!courseRes.rows[0].result
                        ? JSON.parse(courseRes.rows[0].result)
                        : [],
                },
            },
        };
    }

    async getListLessonByCourseId(courseId) {
        const chapterRes = await query(
            `SELECT jsonb_pretty(jsonb_agg(js_object)) result
            FROM (
                select 
                    jsonb_build_object(
                        'chapter_id', chapter_id,
                        'chapter_name', chapter_name,
                        'lessons', jsonb_agg(lesson)
                    ) js_object
                from (
                    select 
                        c.*, 
                        jsonb_build_object(
                            'lesson_id', lesson_id,
                            'lesson_name', lesson_name,
                            'lesson_number', lesson_number
                        ) lesson
                    from "Chapter" c
                    join "Lesson" l on c.chapter_id = l.chapter_id
                    WHERE c.course_id = $1
                    ) l
            group by chapter_id, chapter_name
            ) l
            `,
            [courseId]
        );

        return {
            message: "Get courses successfull",
            statusCode: HttpStatusCode.OK,
            data: {
                course: !!chapterRes.rows[0].result
                    ? JSON.parse(chapterRes.rows[0].result)
                    : [],
            },
        };
    }

    async getLessonById(lessonId) {
        const result = await query(
            `SELECT * FROM "Lesson" WHERE lesson_id = $1`,
            [lessonId]
        );

        return {
            message: "Get lesson successfull",
            statusCode: HttpStatusCode.OK,
            data: {
                lesson: result.rows[0],
            },
        };
    }

    async registerCourseById(courseId, userId) {
        const checkExist = await query(
            `Select * from "Register_Course" where course_id = $1 and user_id = $2`,
            [courseId, userId]
        );

        if (checkExist.rowCount) {
            return {
                statusCode: HttpStatusCode.BAD_REQUEST,
                message: "You registed before time",
            };
        }

        // create register course
        const result = await query(
            `INSERT INTO "Register_Course" Values($1, $2, $3) Returning *`,
            [courseId, userId, 1]
        );

        if (result.rowCount)
            return {
                statusCode: HttpStatusCode.OK,
                message: "You registed course successfull",
            };
    }

    async getRegisteredListCourseByUserId(userId) {
        const result = await query(
            `SELECT c.*, rc.lesson_number_public FROM "Course" c JOIN "Register_Course" rc using(course_id) WHERE user_id = $1`,
            [userId]
        );
        // ben FE se so sanh lesson_number cua tung lesson voi lesson_number_public

        return {
            statusCode: HttpStatusCode.OK,
            message: "Get your courses successfull",
            data: {
                courses: result.rows,
            },
        };
    }
}

export const courseService = new CourseService();

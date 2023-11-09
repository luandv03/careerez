import { testService } from "../../services/tests/test.service.js";
import { HttpStatusCode } from "../../configs/httpStatusCode.js";

export class TestController {
    async getPersonalTest(req, res, next) {
        try {
            const { page, limit } = req.query;
            const data = await testService.getPersonalTest(page, limit);

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    async getPersonalityAnswer(req, res) {
        try {
            const listAnswer = req.body;

            const data = await testService.getPersonalityAnswer(listAnswer);

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

import { BaseService } from "./base.service";

class TestService extends BaseService {
    async getPersonalTest(page: number, limit: number) {
        try {
            const res = await this.httpClientPublic(
                `/test/personality_mbi/question?page=${page}&limit=${limit}`
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }

    // /test/personality_mbi/answer
    async getPersonalityAnswer(
        listAnswer: {
            question_id: number;
            answer: number;
        }[]
    ) {
        try {
            const res = await this.httpClientPublic.post(
                `/test/personality_mbi/answer`,
                listAnswer
            );

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const testService = new TestService();

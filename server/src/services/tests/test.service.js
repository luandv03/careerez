import { HttpStatusCode } from "../../configs/httpStatusCode.js";
import { query } from "../../db/index.db.js";

class TestService {
    async getPersonalTest(page, limit) {
        const offset = (page - 1) * limit;
        const res = await query(`select * from "Question" offset $1 limit $2`, [
            offset,
            limit,
        ]);

        return {
            message: "Get Personality Test Successfull",
            statusCode: HttpStatusCode.OK,
            data: res.rows,
        };
    }

    async getPersonalityAnswer(listAnswer) {
        const answers = listAnswer.map((item) => item.answer);

        const result = await query(
            `select * from answer_test where question_1 = $1 and question_2 = $2 and question_3 = $3 and question_4 = $4 and question_5 = $5 and question_6 = $6 and question_7 = $7 and question_8 = $8 and question_9 = $9 and question_10 = $10 and question_11 = $11 and question_12 = $12 and question_13 = $13 and question_14 = $14 and question_15 = $15 and question_16 = $16 and question_17 = $17 and question_18 = $18 and question_19 = $19 and question_20 = $20 and question_21 = $21 and question_22 = $22 and question_23 = $23 and question_24 = $24 and question_25 = $25 and question_26 = $26 and question_27 = $27 and question_28 = $28 and question_29 = $29 and question_30 = $30 and question_31 = $31 and question_32 = $32 and question_33 = $33 and question_34 = $34 and question_35 = $35 and question_36 = $36 and question_37 = $37 and question_38 = $38 and question_39 = $39 and question_40 = $40 and question_41 = $41 and question_42 = $42 and question_43 = $43 and question_44 = $44 and question_45 = $45 and question_46 = $46 and question_47 = $47 and question_48 = $48 and question_49 = $49 and question_50 = $50 and question_51 = $51 and question_52 = $52 and question_53 = $53 and question_54 = $54 and question_55 = $55 and question_56 = $56 and question_57 = $57 and question_58 = $58 and question_59 = $59 and question_60 = $60`,
            [...answers]
        );

        let res;
        if (!result.rowCount) {
            res = await query(
                `SELECT * FROM personality_mbti WHERE personality_key = 'ESTJ'`
            );
        } else {
            res = await query(
                `SELECT * FROM personality_mbti WHERE personality_key = $1`,
                [result.rows[0].personality]
            );
        }

        return {
            message: "Get Personality Test Answer Successfull",
            statusCode: HttpStatusCode.OK,
            data: res.rows[0],
        };
    }
}

export const testService = new TestService();

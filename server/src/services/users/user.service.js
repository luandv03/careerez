import { OAuth2Client } from "google-auth-library";
import https from "https";

import { query } from "../../db/index.db.js";
import { HttpStatusCode } from "../../configs/httpStatusCode.js";
import { createToken } from "../../helpers/createToken.helper.js";

class UserService {
    async registerUser(email, string) {}

    async login(email, password) {}

    // vì thời gian gấp quá nên làm tạm
    // sẽ fix cái này sau hiu hiu
    async loginWithGoogle(token) {
        return new Promise((resolve, reject) => {
            const res = https.get(
                `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`,
                async (resp) => {
                    let data = "";

                    // A chunk of data has been received.
                    resp.on("data", (chunk) => {
                        data += chunk;
                    });

                    // The whole response has been received. Print out the result.
                    resp.on("end", async () => {
                        data = JSON.parse(data);

                        // let user = await prisma.user.findFirst({
                        //     where: {
                        //         email: data?.email,
                        //     },
                        // });

                        let result = await query(
                            `SELECT * FROM "User" WHERE email = $1`,
                            [data?.email]
                        );

                        if (!result.rowCount) {
                            // user = await prisma.user.create({
                            //     data: {
                            //         email: data.email,
                            //         username: data.name,
                            //         method_auth: "google",
                            //         role: "user",
                            //     },
                            // });

                            result = await query(
                                `INSERT INTO "USER" VALUES(DEFAULT, $1, 'user', 'google', now(), now(), $2) RETURNING *`,
                                [data.name, data.email]
                            );
                        }

                        const user = result.rows[0];

                        const access_token = createToken(
                            { user_id: user.user_id },
                            process.env.SECRET_KEY_ACCESS_TOKEN,
                            {
                                expiresIn: 60 * 60 * 24 * 3,
                            }
                        );

                        resolve({
                            message: "Login successfull",
                            statusCode: HttpStatusCode.OK,
                            data: {
                                access_token,
                                EXPIRES_ACCESS_TOKEN: 60 * 60 * 24 * 3,
                            },
                        });
                    });
                }
            );

            res.on("error", (err) => {
                reject({
                    message: "Have error",
                    statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                });
            });

            res.end();
        });
    }
}

export const userService = new UserService();

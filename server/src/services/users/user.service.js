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

                        let result = await query(
                            `SELECT * FROM "User" WHERE email = $1`,
                            [data?.email]
                        );

                        if (!result.rowCount) {
                            result = await query(
                                `INSERT INTO "User" VALUES (DEFAULT, $1, 'user', 'google', now(), now(), $2) RETURNING *`,
                                [data?.name, data?.email]
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

                        const refresh_token = createToken(
                            { user_id: user.user_id },
                            process.env.SECRET_KEY_REFRESH_TOKEN,
                            {
                                expiresIn: 60 * 60 * 24 * 30,
                            }
                        );

                        resolve({
                            message: "Login successfull",
                            statusCode: HttpStatusCode.OK,
                            data: {
                                access_token,
                                refresh_token,
                                EXPIRES_ACCESS_TOKEN: 60 * 60 * 24 * 3,
                                EXPIRES_REFRESH_TOKEN: 60 * 60 * 24 * 30,
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

    refreshTokenService(token) {
        const decoded = jwt.verify(token, process.env.SECRET_KEY_REFRESH_TOKEN);

        if (!decoded) {
            return {
                statusCode: 401,
                message: "Invalid token",
            };
        }
        const access_token = createToken(
            { user_id: user.user_id },
            process.env.SECRET_KEY_ACCESS_TOKEN,
            {
                expiresIn: 60 * 60 * 24 * 3,
            }
        );

        return {
            statusCode: 201,
            message: "refesh token successfull",
            data: {
                access_token,
                EXPIRES_ACCESS_TOKEN: 60 * 60 * 24 * 3,
            },
        };
    }

    async getProfile(user_id) {
        const results = await query(
            `SELECT user_id, email, username, role FROM "User" WHERE user_id = $1`,
            [user_id]
        );

        if (!results.rows.length) {
            return {
                statusCode: 404,
                message: "User not exist",
            };
        }

        return {
            statusCode: 200,
            message: "Get Profile Successfull",
            data: results.rows[0],
        };
    }
}

export const userService = new UserService();

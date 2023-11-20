import { HttpStatusCode } from "../../configs/httpStatusCode.js";
import { userService } from "../../services/users/user.service.js";

export class UserController {
    async loginWithGoogle(req, res, next) {
        try {
            const { token } = req.body;
            const data = await userService.loginWithGoogle(token);

            return res.status(data.statusCode).json(data);
        } catch (error) {
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatusCode.INTERNAL_SERVER_ERROR,
                message: "Internal Server Error",
                error,
            });
        }
    }

    refreshToken(req, res) {
        try {
            let refresh_token = req.headers["authorization"];

            if (refresh_token.startsWith("Bearer ")) {
                refresh_token = refresh_token.slice(7, refresh_token.length);
            }

            if (!refresh_token) {
                return res.status(403).json({
                    statusCode: 403,
                    message: "Refresh token not valid",
                });
            }

            const data = userService.refreshTokenService(refresh_token);

            res.status(data.statusCode).json(data);
        } catch (err) {
            res.status(400).json({
                error: err,
            });
        }
    }

    async getProfile(req, res) {
        try {
            const { user_id } = res.locals.data;
            const data = await userService.getProfile(user_id);

            return res.status(data.statusCode).json(data);
        } catch (err) {
            res.status(500).json({
                statusCode: 500,
                message: err,
            });
        }
    }

    async logout(req, res) {
        try {
            // res.clearCookie("access_token_user");
            // res.clearCookie("refresh_token_user");

            return res.status(200).json({
                statusCode: 200,
                message: "Logout successfully",
            });
        } catch (err) {
            return res.status(500).json({
                statusCode: 500,
                message: err,
            });
        }
    }
}

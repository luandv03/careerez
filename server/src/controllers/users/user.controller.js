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
}

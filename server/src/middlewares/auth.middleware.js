import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    let access_token = req.headers["authorization"];

    if (access_token?.startsWith("Bearer ")) {
        access_token = access_token.slice(7, access_token.length);
    }

    if (!access_token) {
        return res
            .status(401)
            .json({ statusCode: 401, message: "Not access token" });
    }

    try {
        const decoded = jwt.verify(
            access_token,
            process.env.SECRET_KEY_ACCESS_TOKEN
        );

        if (decoded) {
            res.locals.data = decoded;
        }

        return next();
    } catch (err) {
        return res.status(401).send({
            statusCode: 401,
            message: "Invalid Token",
            err,
        });
    }
};

import jwt from "jsonwebtoken";

export function createToken(data, secret_key, expiresIn) {
    const access_token = jwt.sign(data, secret_key, expiresIn);

    return access_token;
}

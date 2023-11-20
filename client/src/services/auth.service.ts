import { BaseService } from "./base.service";

class AuthService extends BaseService {
    async loginWithGoogle(access_token: string) {
        try {
            const res = await this.httpClientPublic.post("/auth/google", {
                token: access_token,
            });

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async getProfile() {
        try {
            const res = await this.httpClientPrivate.get("/auth/profile/view");

            return res.data;
        } catch (error) {
            return error;
        }
    }

    async logout() {
        try {
            const res = await this.httpClientPrivate.get("/auth/logout");

            return res.data;
        } catch (error) {
            return error;
        }
    }
}

export const authService: AuthService = new AuthService();

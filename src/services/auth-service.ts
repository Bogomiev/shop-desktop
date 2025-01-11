import $api from 'api'
import { AxiosResponse } from 'axios'
import { AuthResponse, MeResponse } from 'models/response/auth-response'

export default class AuthService {
    static async login(
        username: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        const body = { username, password }
        return await $api.post<AuthResponse>('auth/login', body, undefined)
    }

    static async logout(): Promise<void> {
        return await $api.post('auth/logout')
    }

    static async checkAuth(): Promise<void> {
        try {
            const response = await $api.post<AuthResponse>('auth/check')
            localStorage.setItem('accessToken', response.data.data.accessToken)
            localStorage.setItem(
                'refreshToken',
                response.data.data.refreshToken
            )

        } catch (e) {
            // console.log(e.response?.data?.message);
        } finally {
        }

        // return await $api.post('/auth/refresh')
    }
}

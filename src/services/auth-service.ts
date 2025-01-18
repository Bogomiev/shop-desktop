import $api from 'api'
import { AxiosResponse } from 'axios'
import { AuthResponse, MeResponse } from 'models/response/auth-response'

export default class AuthService {
    static setToken(accessToken: string, refreshToken: string) {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    }
    static async login(
        username: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse>> {
        const body = { username, password }
        return await $api.post<AuthResponse>('auth/login', body)
    }

    static async logout(): Promise<void> {
        return await $api.post('auth/logout')
    }

    static async me(): Promise<AxiosResponse<MeResponse>> {
        return await $api.get<MeResponse>('auth/me')
    }
}

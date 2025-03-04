import $api from 'api'
import { AxiosResponse } from 'axios'
import { AuthResponse, MeResponse, MeResponseData } from 'models/response/auth-response'

export default class AuthService {
    static setToken(accessToken: string, refreshToken: string) {
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('refreshToken', refreshToken)
    }
    static removeToken() {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
    }
    static async login(
        username: string,
        password: string,
        shopId: string
    ): Promise<AxiosResponse<AuthResponse>>  {
        const body = { username, password, shopId}
        return $api.post<AuthResponse>('auth/login', body)
    }


    static async logout(): Promise<void> {
        return await $api.post('auth/logout')
    }

    static async me(): Promise<MeResponseData> {
        const res = await $api.get<MeResponse>('auth/me', {withCredentials: true})
        return res.data.data
    }
}

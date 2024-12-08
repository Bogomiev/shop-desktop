
import $api, { API_URL } from 'api'
import axios, {AxiosResponse} from 'axios';
import {AuthResponse, MeResponse} from "models/response/auth-response";

export default class AuthService {
    static async login(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        const body = {username, password}
        return $api.postForm<AuthResponse>('/auth/login', body, )
    }

    static async registration(username: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/register', {username, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/auth/logout')
    }

    static async me(): Promise<AxiosResponse<MeResponse>> {
        return $api.get<MeResponse>(`${API_URL}/users/me`, {withCredentials: true})
    }

    static async checkAuth(): Promise<void> {
        try {
            const response = await axios.post<AuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
        } catch (e) {
            
            // console.log(e.response?.data?.message);
        } finally {

        }

        return $api.post('/auth/refresh')
    }
}


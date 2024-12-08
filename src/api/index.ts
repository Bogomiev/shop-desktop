import axios from 'axios'
import { AuthResponse } from 'models/response/auth-response'

export const API_URL = `http://212.233.124.178:59002/ut_test_5_eshop/hs/eshop/v1/`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true
            try {
                const response = await axios.post<AuthResponse>(
                    `${API_URL}/auth/refresh`,
                    { withCredentials: true }
                )
                localStorage.setItem('token', response.data.accessToken)
                return $api.request(originalRequest)
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН')
            }
        }
        throw error
    }
)

export default $api

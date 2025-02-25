import axios from 'axios'
import { AuthResponse } from 'models/response/auth-response'

//const API_URL = `http://212.233.124.178:59002/ut_test_5/hs/shopdesktop/v1/`
const API_URL = `https://shop-desktop.ikorniysrv.ru/api/v1/`
const HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'Basic U2hvcERlc2t0b3A6MTQxODYzMA==',
}

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: HEADERS,
})

const refreshApi = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: HEADERS,
})

$api.interceptors.request.use((config) => {
    config.headers.TokenAuthorization = `${localStorage.getItem('accessToken')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        const refreshToken = localStorage.getItem('refreshToken')
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry &&
            refreshToken
        ) {
            originalRequest._isRetry = true
            try {
                const response = await refreshApi.post<AuthResponse>(
                    `auth/refresh`,
                    {
                        withCredentials: false,
                        refreshToken: refreshToken,
                    }
                )
                localStorage.setItem(
                    'accessToken',
                    response.data.data.accessToken
                )
                localStorage.setItem(
                    'refreshToken',
                    response.data.data.refreshToken
                )

                return $api.request(originalRequest)
            } catch (e) {
                console.log('НЕ АВТОРИЗОВАН')
            }
        }
        throw error
    }
)

export default $api

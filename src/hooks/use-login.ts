import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AuthResponseFail } from 'models/response/auth-response'
import { ILogin } from 'models/user'
import { useNavigate } from 'react-router-dom'
import AuthService from 'services/auth-service'
import { useAlert } from 'components'


export function useLogin(props: ILogin) {
    const queryClient = useQueryClient()
    const navigate = useNavigate()
    const { message } = useAlert()

    return useMutation({
        mutationFn: () => {
            return AuthService.login(props.login, props.code, props.shopId)
        },
        onSuccess: (data) => {
            AuthService.setToken(data.data.data.accessToken, data.data.data.refreshToken)
            queryClient.invalidateQueries({ queryKey: ['me'] })
            navigate('/', { replace: true })
        },
        onError: (error: AxiosError<AuthResponseFail>) => {
            const mess =
                error.response?.data?.messages
                    ? error.response.data.messages[0]
                    : 'Сеть недоступна!'
            message({
                type: 'error',
                message: mess,
                duration: 7000,
            })
        },
    })
}

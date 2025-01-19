import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AuthResponseFail } from 'models/response/auth-response'
import { useAlert } from 'components'
import ShiftService from 'services/shift-service'
import AuthService from 'services/auth-service'
import { store } from 'App'

export function useCloseShift() {
    const queryClient = useQueryClient()
    const { message } = useAlert()

    return useMutation({
        mutationFn: () => {
            return ShiftService.closeShift()
        },
        onSuccess: (data, variables) => {
            AuthService.removeToken()
            store.userName = ''
            queryClient.invalidateQueries({ queryKey: ['shifts'] })
            queryClient.invalidateQueries({ queryKey: ['me'] })
        },
        onError: (error: AxiosError<AuthResponseFail>, variables, context) => {
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

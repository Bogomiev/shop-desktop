import { useQuery } from '@tanstack/react-query'
import { MeResponseData } from 'models/response/auth-response'
import { UserType } from 'models/user'
import AuthService from 'services/auth-service'

const defaultMe: MeResponseData = {
    isCashier: false,
    isTerritorialManager: false,
    user: {
        id: '',
        name: '',
        surname: '',
        firstname: '',
        patronymic: '',
        type: UserType.UNKNOWN,
    },
}

export function useMe() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['me'],
        queryFn: () => AuthService.me(),
        retry: false,
        initialData: defaultMe
    })

    return { data, isError, isLoading }
}

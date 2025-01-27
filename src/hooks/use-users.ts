import { useQuery } from '@tanstack/react-query'
import UserService from 'services/user-service'

export function useUsers(userType: string, term: string) {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => UserService.users(userType, term),
        retry: false
    })

    return { data, isError, isLoading }
}

import { useQuery } from '@tanstack/react-query'
import { store } from 'App'
import ShiftService from 'services/shift-service'

export function useShifts() {
    const coords = store.geo

    const { data, isError, isLoading } = useQuery({
        queryKey: ['shifts'],
        queryFn: () => ShiftService.shifts(coords.latitude, coords.longitude),
        retry: false,
    })

    return { data, isError, isLoading }
}

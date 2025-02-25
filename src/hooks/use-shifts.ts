import { useQuery } from '@tanstack/react-query'
import { GeoPositionStore, GeoService } from 'services/geo-service'
import ShiftService from 'services/shift-service'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useShifts() {
    const geoStore = new GeoPositionStore()
    if(geoStore.position.latitude === 0)
        GeoService.setLocation(geoStore)

    const { data, isError, isLoading } = useQuery({
        queryKey: ['shifts'],
        queryFn: async () => {
            for (let i = 0; i < 10; i++) {
                if (geoStore.position.latitude === 0) await sleep(250)
                else break
            }

            return ShiftService.shifts(
                geoStore.position.latitude,
                geoStore.position.longitude
            )
        },
        retry: true,
        select: (data) => data.data.data,
    })

    return { data, isError, isLoading }
}

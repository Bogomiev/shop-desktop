import { useQuery } from '@tanstack/react-query'
import { GeoService } from 'services/geo-service'
import ShiftService from 'services/shift-service'

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function useShifts() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['shifts'],
        queryFn: async () => {
            let i = 0
            while (i < 30 && !GeoService.PositionIsFound()) {
                if(i === 0) GeoService.UpdatePosition()
                i++
                await sleep(250)
            }
            const pos = GeoService.GetPosition()
            return ShiftService.shifts(pos.latitude, pos.longitude)
        },
        retry: true,
        select: (data) => data.data.data,
    })

    return { data, isError, isLoading }
}

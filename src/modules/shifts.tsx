import { useQuery } from '@tanstack/react-query'
import { store } from 'App'
import { Shifts } from 'components/shifts'
import Spin from 'components/ui/spin'
import ShiftService from 'services/shift-service'

export const ShiftsContainer: React.FC = () => {
    const coords = store.geo
    console.log(coords)
    const shiftsDefault = ShiftService.hiftsDefault
    const { data, isError, isLoading } = useQuery({
        queryKey: ['shifts'],
        queryFn: () => ShiftService.shifts(coords.latitude, coords.longitude),
        
        retry: false,
        
    })

    return isLoading ? (
        <Spin></Spin>
    ) : (
        <>
            <Shifts
                {...(data && !isError ? data.data.data : shiftsDefault)}
            ></Shifts>
        </>
    )
}

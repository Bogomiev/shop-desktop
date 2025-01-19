import { store } from 'App'
import { Shifts } from 'components/shifts'
import { useCloseShift } from 'hooks/use-close-shift'
import { useShifts } from 'hooks/use-shifts'
import { useNavigate } from 'react-router-dom'
import ShiftService from 'services/shift-service'

export const ShiftsContainer: React.FC = () => {
    const shiftsDefault = ShiftService.hiftsDefault
    const { data, isError, isLoading } = useShifts()
    const navigate = useNavigate()
    const closeShift = useCloseShift()

    const cashierChangeHandler = (cachierName: string, shopId: string) => {
        if (!store.userName) {
            store.login = cachierName
            store.shopId = shopId
            navigate('/login', { replace: true })
        }
    }
    const closeShiftHandler = () => {
        closeShift.mutate()
    }

    return (
        <>
            <Shifts
                {...{
                    isLoading,
                    cashierChangeHandler,
                    closeShiftHandler,
                    ...(data && !isError ? data.data.data : shiftsDefault),
                }}
            ></Shifts>
        </>
    )
}

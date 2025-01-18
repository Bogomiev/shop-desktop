import { store } from 'App'
import { Shifts } from 'components/shifts'
import { useShifts } from 'hooks/use-shifts'
import { useNavigate } from 'react-router-dom'
import ShiftService from 'services/shift-service'

export const ShiftsContainer: React.FC = () => {
    const shiftsDefault = ShiftService.hiftsDefault
    const { data, isError, isLoading } = useShifts()
    const navigate = useNavigate()
    
    const cashierChangeHandler = (cachierName: string) => {
        store.userName = cachierName
        navigate('/login', { replace: true })
    }
    
    return (
        <>
            <Shifts
                {...{
                    isLoading,
                    cashierChangeHandler,
                    ...(data && !isError ? data.data.data : shiftsDefault),
                }}
            ></Shifts>
        </>
    )
}

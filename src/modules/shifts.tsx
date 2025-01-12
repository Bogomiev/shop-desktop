import { Shifts } from 'components/shifts'
import { useShifts } from 'hooks/use-shifts'
import ShiftService from 'services/shift-service'

export const ShiftsContainer: React.FC = () => {
    const shiftsDefault = ShiftService.hiftsDefault
    const { data, isError, isLoading } = useShifts()

    return (
        <>
            <Shifts
                {...{
                    isLoading,
                    ...(data && !isError ? data.data.data : shiftsDefault),
                }}
            ></Shifts>
        </>
    )
}

import { useCallback, useEffect, useState } from 'react'
import { addMonths, getDatePresentation } from 'services/calendar/date'
import { Timesheet } from 'components/personal-account/timesheet'
import { useTimesheet } from 'hooks/use-timesheet'
import { ITimesheetDay, TimesheetProps } from 'models/timesheet'
import { useQueryClient } from '@tanstack/react-query'
import TimesheetLegend from 'components/personal-account/timesheet-legend'

const colorOfDay = (day: ITimesheetDay) => {
    if (day.plan === 0 && day.fact === 0) {
        return 'timesheet-dayoff'
    }
    if (day.plan > 0 && day.fact === 0) {
        return 'timesheet-absenteeism'
    }
    if (day.fact > 0) {
        return 'timesheet-done'
    }

    return 'timesheet-dayoff'
}

export const TimesheetContainer: React.FC<TimesheetProps> = (props) => {
    const queryClient = useQueryClient()
    const [currentPeriod, setCurrentPeriod] = useState<Date>(new Date())
    const [periodPresentation, setPeriodPresentation] = useState<string>(
        getDatePresentation(currentPeriod)
    )
    // const days = useMemo(() => {
    //     const calendar = CalendarGeneratorService.generate(
    //         currentPeriod.getFullYear(),
    //         currentPeriod.getMonth()
    //     )
    //     return calendar
    // }, [currentPeriod])
    const { data: days, isLoading } = useTimesheet(props.shopId, currentPeriod)
    const changePeriodCallback = useCallback(
        (month: number) => {
            const period = addMonths(currentPeriod, month)

            setCurrentPeriod(period)
            setPeriodPresentation(getDatePresentation(period))
        },
        [currentPeriod]
    )

    useEffect(() => {
        if (props.shopId)
            queryClient.invalidateQueries({ queryKey: ['timesheet'] })
    }, [currentPeriod, queryClient, props])

    return (
        <>
            <Timesheet
                isLoading={isLoading}
                currentPeriod={currentPeriod}
                periodPresentation={periodPresentation}
                user={props.user}
                days={days}
                changePeriodHandler={changePeriodCallback}
                colorOfDay={colorOfDay}
            />

            <TimesheetLegend />
        </>
    )
}

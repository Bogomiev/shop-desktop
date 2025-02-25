import { useQuery } from '@tanstack/react-query'
import TimesheetService from 'services/timesheet-service'

export function useTimesheet(shopId: string,
    month: Date) {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['timesheet'],
        queryFn: () => TimesheetService.timesheet(shopId, month),
        initialData: TimesheetService.timesheetDefault(month),
        retry: false,
        staleTime: 5000
    })

    return { data, isError, isLoading }
}

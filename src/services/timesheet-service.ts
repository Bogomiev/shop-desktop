import $api from 'api'
import { TimesheetResponse } from 'models/response/timesheet-response'
import CalendarGeneratorService, {
    ICalendarDay,
} from './calendar/calendar-generator-service'
import { ITimesheetData, ITimesheetDay } from 'models/timesheet'

export default class TimesheetService {
    static async timesheet(
        shopId: string,
        month: Date
    ): Promise<ITimesheetDay[]> {
        const res = await $api.get<TimesheetResponse>('timesheet', {
            params: { shopId, month },
        })
        const calendar = CalendarGeneratorService.generate(
            month.getFullYear(),
            month.getMonth()
        )
        const timesheetDays = calendar.map((day) =>
            TimesheetService.timesheetDay(day, res.data.data)
        )
        console.log(JSON.stringify(timesheetDays))
        return timesheetDays
    }

    static timesheetDefault(month: Date): ITimesheetDay[] {
        const calendar = CalendarGeneratorService.generate(
            month.getFullYear(),
            month.getMonth()
        )
        const timesheetDays = calendar.map((day) =>
            TimesheetService.timesheetDay(day, [])
        )

        return timesheetDays
    }

    static timesheetDay(
        day: ICalendarDay,
        timeshetData: ITimesheetData[]
    ): ITimesheetDay {
        let plan = 0
        let fact = 0
        const details: ITimesheetData[] = []
        const timesheetDays = timeshetData.filter(
            (c) => new Date(c.day).getTime() === day.date.getTime()
        )

        timesheetDays.forEach((timesheetDay) => {
            plan += timesheetDay.plan
            fact += timesheetDay.fact
            details.push({
                ...timesheetDay,
            })
        })

        return {
            ...day,
            plan: plan,
            fact: fact,
            details,
        }
    }
}

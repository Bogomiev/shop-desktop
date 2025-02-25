export interface ICalendarDay {
    date: Date
    day: number
    weekday: string
    currentMonth: boolean
}

export default class CalendarGeneratorService {
    private static weekdays = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
    ]

    public static generate = (year: number, month: number): ICalendarDay[] => {
        const daysInMonth = new Date(year, month + 1, 0).getDate()
        const prevMonth = month > 0 ? month - 1 : 11
        const prevYear = month > 0 ? year : year - 1
        const daysInPrevMonth = new Date(prevYear, prevMonth + 1, 0).getDate()
        const dateWeekdayArray: ICalendarDay[] = []

        const dayFromPrevMonth = new Date(
            prevYear,
            prevMonth,
            daysInPrevMonth
        ).getDay()

        for (
            let day = daysInPrevMonth - dayFromPrevMonth + 1;
            day <= daysInPrevMonth;
            day++
        ) {
            const date = new Date(prevYear, prevMonth, day)
            const weekday = CalendarGeneratorService.weekdays[date.getDay()]
            dateWeekdayArray.push({
                date: date,
                day: date.getDate(),
                weekday,
                currentMonth: false,
            })
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day)
            const weekday = CalendarGeneratorService.weekdays[date.getDay()]
            dateWeekdayArray.push({
                date: date,
                day: date.getDate(),
                weekday,
                currentMonth: true,
            })
        }

        return dateWeekdayArray
    }
}

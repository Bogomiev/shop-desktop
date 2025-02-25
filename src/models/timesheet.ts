import { ICalendarDay } from 'services/calendar/calendar-generator-service'
import { IUser } from './user'

export interface ITimesheetProps {
    isLoading: boolean
    user: IUser
    currentPeriod: Date
    periodPresentation: string
    days: ITimesheetDay[]
    changePeriodHandler: (month: number) => void
    colorOfDay: (day: ITimesheetDay) => void
}

export interface ITimesheetData {
    day: Date
    shopId: string
    shopName: string
    plan: number,
    fact: number,
    shiftStartTime: string
    shiftEndTime: string
    shiftStartTimeFact: string
    shiftEndTimeFact: string 
}

export interface ITimesheetDay extends ICalendarDay {
    plan: number,
    fact: number,
    details: ITimesheetData[]
}

export interface TimesheetProps {
    user: IUser
    shopId: string
}
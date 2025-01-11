import { IUser } from './user'

interface ShiftUser {
    user: IUser
    shiftStartTime: string
    shiftEndTime: string
}

export interface ShiftsData {
    shopId: string
    shopName: string
    address: string
    cashiers: ShiftUser[]
}


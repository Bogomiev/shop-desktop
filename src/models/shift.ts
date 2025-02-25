import { IUser, UserType } from './user'

interface ShiftUser {
    user: IUser
    current: boolean
    shiftStartTime: string
    shiftEndTime: string
}

export interface ShiftsData {
    shopId: string
    shopName: string
    address: string
    cashiers: ShiftUser[]
}

export interface ShiftsProps extends ShiftsData{
    isLoading: boolean
    cashierChangeHandler: (login: string, shopId: string, userType: UserType) => void
    closeShiftHandler: () => void
    openAccountHandler: (shopId: string) => void
}



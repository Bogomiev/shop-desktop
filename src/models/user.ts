export interface IUser {
    id?: number
    userName?: string
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    isActive?: boolean
}
export interface ILogin {
    login: string,
    code: string
}

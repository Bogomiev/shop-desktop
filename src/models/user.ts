export interface IUser {
    id: string
    name: string
}
export interface ILogin {
    login: string,
    code: string,
    shopId: string
}

export enum UserType {
    UNKNOWN = 'UNKNOWN',
    CASHIER = 'CASHIER',
    TERRITORIAL_MANAGER = 'TERRITORIAL_MANAGER'
  }
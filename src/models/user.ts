export interface IUser {
    id: string
    name: string
    surname: string,
	firstname: string,
	patronymic: string,
	type: UserType
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
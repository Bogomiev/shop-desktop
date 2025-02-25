import { BaseResponse } from './base'
import { IUser } from 'models/user'


export interface UsersResponse extends BaseResponse {
    data: IUser[]
}

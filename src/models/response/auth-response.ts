import { IUser } from '../user'
import { BaseResponse } from './base'

export interface AuthResponseData {
    accessToken: string
    refreshToken: string
}

export interface AuthResponse extends BaseResponse {
    data: AuthResponseData
}

export interface AuthResponseFail extends BaseResponse {

}

export interface MeResponseData {
    user: IUser
    isCashier: boolean
    isTerritorialManager: boolean
    shift?: {
        id: string
        shopId: string
    }
}

export interface MeResponse extends BaseResponse {
    data: MeResponseData
}

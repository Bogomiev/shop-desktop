import { BaseResponse } from './base'


export interface SettingsResponse extends BaseResponse {
    data: {
        shopId: string
    }
}

export interface SettingsResponseFail extends BaseResponse {

}

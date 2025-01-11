import { ShiftsData } from 'models/shift'
import { BaseResponse } from './base'


export interface ShiftResponse extends BaseResponse {
    data: ShiftsData
}

export interface ShiftResponseFail extends BaseResponse {

}

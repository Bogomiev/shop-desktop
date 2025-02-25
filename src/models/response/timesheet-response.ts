import { ITimesheetData } from 'models/timesheet'
import { BaseResponse } from './base'

interface TimesheetDay extends ITimesheetData{
    
}

export interface TimesheetResponse extends BaseResponse {
    data: TimesheetDay[]
}

export interface TimesheetResponseFail extends BaseResponse {

}

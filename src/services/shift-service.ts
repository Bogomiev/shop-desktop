import $api from 'api'
import { AxiosResponse } from 'axios'
import { ShiftResponse } from 'models/response/shift-response'
import { ShiftsData } from 'models/shift'

export default class ShiftService {
    static async shifts(lat: number, lon: number): Promise<AxiosResponse<ShiftResponse>> {
        return await $api.get<ShiftResponse>('shifts', {params: {lat, lon}})
    }

    static hiftsDefault: ShiftsData = {
        shopId: '',
        shopName: '<>',
        address: ' - ',
        cashiers: [{shiftStartTime: '', shiftEndTime: '', user: {id: '', name: '<Не определен>'}}]
    }
}

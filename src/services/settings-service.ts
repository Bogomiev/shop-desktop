import $api from 'api'
import { SettingsResponse } from 'models/response/settings-response'
import { ISettings } from 'models/settings'
import { useSettingsStore } from 'store/settings'

export default class SettingsService {
    private static generateDeviceId() {
        const code = Math.floor(
            Math.random() * (99999 - 10001) + 10001
        ).toString()
        useSettingsStore.getState().setDeviceId(crypto.randomUUID(), code)
    }
    static init() {
        const state = useSettingsStore.getState()
        if (!state.deviceId) this.generateDeviceId()
    }
    static async settings(): Promise<ISettings> {
        const state = useSettingsStore.getState()
        const res = await $api.get<SettingsResponse>('settings')

        return {
            ...state,
            shopId: res.data && res.data.resultCode === 0 ? res.data.data.shopId : ''
        }
    }
    static async setSettings(): Promise<SettingsResponse> {
        return (await $api.post<SettingsResponse>('settings')).data
    }
}

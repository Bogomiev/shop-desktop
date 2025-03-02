import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface settingsState {
    deviceId: string
    identificationCode: string

    setDeviceId: (deviceId: string, identificationCode: string) => void
}

export const useSettingsStore = create<settingsState>()(
    persist(
        (set) => ({
            deviceId: '',
            identificationCode: '',

            setDeviceId: (
                newDeviceId: string,
                newIdentificationCode: string
            ) => {
                set({
                    deviceId: newDeviceId,
                    identificationCode: newIdentificationCode,
                })
            },
        }),
        { name: 'settings' }
    )
)
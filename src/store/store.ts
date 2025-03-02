import { UserType } from 'models/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface storeState {
    login: string
    userType: UserType
    shopId: string

    setLogin: (newLogin: string) => void
    setUserType: (newUserType: UserType) => void
    setShopId: (newShopId: string) => void
}

export const Store = create<storeState>()(
    persist(
        (set) => ({
            login: '',
            userType: UserType.UNKNOWN,
            shopId: '',

            setLogin: (newLogin: string) => set({ login: newLogin }),
            setUserType: (newUserType: UserType) =>
                set({ userType: newUserType }),
            setShopId: (newShopId: string) => set({ shopId: newShopId }),
        }),
        { name: 'shop-storage' }
    )
)
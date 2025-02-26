import { IGeo } from 'models/geo'
import { UserType } from 'models/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface storeState {
    login: string
    geo: IGeo
    userType: UserType
    shopId: string

    setLogin: (newLogin: string) => void
    setGeo: (newGeo: IGeo) => void
    setUserType: (newUserType: UserType) => void
    setShopId: (newShopId: string) => void
}

export const Store = create<storeState>()(
    persist(
        (set) => ({
            login: '',
            geo: { latitude: 0.0, longitude: 0.0 },
            userType: UserType.UNKNOWN,
            shopId: '',

            setLogin: (newLogin: string) => set({ login: newLogin }),
            setGeo: (newGeo: IGeo) => set({ geo: newGeo }),
            setUserType: (newUserType: UserType) =>
                set({ userType: newUserType }),
            setShopId: (newShopId: string) => set({ shopId: newShopId }),
        }),
        { name: 'shop-storage' }
    )
)

export class Store1 {
    private _geo: IGeo = { latitude: 0.0, longitude: 0.0 }
    private _login: string = ''
    private _userType: UserType = UserType.UNKNOWN
    private _shopId: string = ''

    get geo() {
        return this._geo
    }
    set geo(value) {
        this._geo = value
    }
    get login() {
        return this._login
    }
    set login(value) {
        this._login = value
    }
    get userType() {
        return this._userType
    }
    set userType(value) {
        this._userType = value
    }
    get shopId() {
        return this._shopId
    }
    set shopId(value) {
        this._shopId = value
    }
}

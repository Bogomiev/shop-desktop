import { IGeo } from 'models/geo'
import { UserType } from 'models/user'

export default class Store {
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

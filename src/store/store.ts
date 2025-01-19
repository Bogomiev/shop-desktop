import { IGeo } from 'models/geo'

export default class Store {
    private _geo: IGeo = { latitude: 0.0, longitude: 0.0 }
    private _login: string = ''
    private _userName: string = ''
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
    get userName() {
        return this._userName
    }
    set userName(value) {
        this._userName = value
    }
    get shopId() {
        return this._shopId
    }
    set shopId(value) {
        this._shopId = value
    }
}

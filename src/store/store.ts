import { IGeo } from 'models/geo'

export default class Store {
    private _geo: IGeo = { latitude: 0.0, longitude: 0.0 }
    private _userName: string = ''

    get geo() {
        return this._geo
    }
    set geo(value) {
        this._geo = value
    }
    get userName() {
        return this._userName
    }
    set userName(value) {
        this._userName = value
    }
}

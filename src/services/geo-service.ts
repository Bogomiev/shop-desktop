import { store } from 'App'
import { IGeo, IGeoPositionStore } from 'models/geo'

export class GeoService {
    static error(err: { code: any; message: any }) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }
    
    static setLocation(store: IGeoPositionStore) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(store.setPosition, GeoService.error)
        }
    }  
}

export class GeoPositionStore implements IGeoPositionStore {
    setPosition(position: { coords: IGeo }) {
        store.geo = position.coords
    } 
    get position() {
        return store.geo
    }
}


export default class GeoService {
    static setLocation(callback: PositionCallback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(callback)
        }
    }  
}

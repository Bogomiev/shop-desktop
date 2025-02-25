import { IGeo } from 'models/geo'
import { create, createStore } from 'zustand'

export class GeoService {
    static error(err: { code: any; message: any }) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    static UpdatePosition() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                geoStore.getState().setGeo,
                GeoService.error
            )
        }
    }

    static GetPosition() {
        return geoStore.getState().geo
    }
    static PositionIsFound() {
        return geoStore.getState().geo.latitude > 0
    }
}

interface geoState {
    geo: IGeo

    setGeo: (position: { coords: IGeo }) => void
}

const geoStore = create<geoState>()((set, get) => ({
    geo: { latitude: 0.0, longitude: 0.0 },

    setGeo: (position: { coords: IGeo }) =>
        set({
            geo: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            },
        }),
}))
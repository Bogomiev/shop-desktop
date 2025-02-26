import { IGeo } from 'models/geo'
import { create, StoreApi, UseBoundStore } from 'zustand'

export class GeoService {
    static get Store(): UseBoundStore<StoreApi<geoState>> {
        return useGeoStore
    }

    static error(err: { code: any; message: any }) {
        console.warn(`ERROR(${err.code}): ${err.message}`)
    }

    static UpdatePosition() {
        const setGeo = useGeoStore.getState().setGeo
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                setGeo,
                GeoService.error
            )
        }
    }

    static GetPosition() {
        return useGeoStore.getState().geo
    }
    static PositionIsFound() {
        return useGeoStore.getState().geo.latitude > 0
    }
}

interface geoState {
    geo: IGeo

    setGeo: (position: { coords: IGeo }) => void
}

const useGeoStore = create<geoState>()((set, get) => ({
    geo: { latitude: 0.0, longitude: 0.0 },

    setGeo: (position: { coords: IGeo }) => {
        set({
            geo: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            },
        })},
}))
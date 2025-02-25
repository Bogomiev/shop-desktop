import { ShiftsContainer } from 'modules/shifts'
import { FC } from 'react'
import { GeoPositionStore, GeoService } from 'services/geo-service'
  
 const MainPage: FC = () => {
    const geoStore = new GeoPositionStore()
    if(geoStore.position.latitude === 0)
        GeoService.setLocation(geoStore)
    return (
        <div className="space-y-3">
            <div>
                'lat': {geoStore.position.latitude}
                {'; '}
                'lon': {geoStore.position.longitude}
            </div>
            <ShiftsContainer></ShiftsContainer>
        </div>
    )
}

export default MainPage

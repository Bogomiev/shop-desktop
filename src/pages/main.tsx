import { ShiftsContainer } from 'modules/shifts'
import { FC } from 'react'
import { GeoService } from 'services/geo-service'
  
 const MainPage: FC = () => {
    const pos = GeoService.GetPosition()

    if(pos.latitude === 0)
        GeoService.UpdatePosition()
    return (
        <div className="space-y-3">
            <div>
                'lat': {pos.latitude}
                {'; '}
                'lon': {pos.longitude}
            </div>
            <ShiftsContainer></ShiftsContainer>
        </div>
    )
}

export default MainPage

import { ShiftsContainer } from 'modules/shifts'
import { FC, useEffect, useState } from 'react'
import { GeoService } from 'services/geo-service'

const MainPage: FC = () => {
    

    // const geo = GeoService.GetPosition()
    // const [pos, setPos] = useState({...geo})

    // if (pos.latitude === 0) GeoService.UpdatePosition()

    // useEffect(() => {
    //     setPos(geo)
    // }, [geo, geo.latitude])

    return (
        <div className="space-y-3">
            {/* <div>
                'lat': {geo.latitude}
                {'; '}
                'lon': {geo.longitude}
            </div> */}
            <ShiftsContainer></ShiftsContainer>
        </div>
    )
}

export default MainPage

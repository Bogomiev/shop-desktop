import { store } from 'App'
import { ShiftsContainer } from 'modules/shifts'
import { FC } from 'react'

const MainForm: FC = () => {
    const position = store.geo

    return (
        <div className="space-y-5">
            <div>
                'lat': {position.latitude}
                'lon': {position.longitude}
            </div>
            <ShiftsContainer></ShiftsContainer>
        </div>
    )
}

export default MainForm

import { ShiftsContainer } from 'modules/shifts'
import { FC } from 'react'

const MainPage: FC = () => {
    return (
        <div className="space-y-3">
            <ShiftsContainer></ShiftsContainer>
        </div>
    )
}

export default MainPage

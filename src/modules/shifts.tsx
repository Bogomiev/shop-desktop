import { Shifts } from 'components/shifts'
import { useCloseShift } from 'hooks/use-close-shift'
import { useShifts } from 'hooks/use-shifts'
import { UserType } from 'models/user'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authServices, Services, unauthServices } from 'routers/services'
import { GeoService } from 'services/geo-service'
import ShiftService from 'services/shift-service'
import {Store} from 'store/store'

export const ShiftsContainer: React.FC = () => {
    const shiftsDefault = ShiftService.hiftsDefault
    const { data, isError, isLoading } = useShifts()
    const navigate = useNavigate()
    const closeShift = useCloseShift()
    const store = Store((state) => state);
    const geo = GeoService.GetPosition()
    const [pos, setPos] = useState(geo)

    useEffect(() => {
        setPos(geo)
    }, [data, geo])

    const cashierChangeHandler = (
        cachierName: string,
        shopId: string,
        userType: UserType
    ) => {
        store.setLogin(cachierName)
        store.setUserType(userType)
        store.setShopId(shopId)
        const loginPath = unauthServices.get(Services.Login)?.path
        if (loginPath) navigate(loginPath, { replace: true })
    }
    const closeShiftHandler = () => {
        closeShift.mutate()
    }
    const accountServicePath = authServices.has(Services.Account)
        ? authServices.get(Services.Account)?.path
        : ''
    const openAccountHandler = () => {
        if (accountServicePath) {
            navigate(accountServicePath, { replace: true })
        }
    }

    return (
        <>
        <div>
                'lat': {geo.latitude}
                {'; '}
                'lon': {pos.longitude}
            </div>
        <Shifts
            {...{
                isLoading,
                cashierChangeHandler,
                closeShiftHandler,
                openAccountHandler: openAccountHandler,
                ...(data && !isError ? data : shiftsDefault),
            }}
        ></Shifts></>
    )
}

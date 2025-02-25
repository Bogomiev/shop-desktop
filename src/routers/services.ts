import React from 'react'
import { IService } from '../models/service'
import { BiHomeAlt2 } from 'react-icons/bi'
import { RiAccountCircleLine } from 'react-icons/ri'

const LoginPage = React.lazy(() => import('../pages/auth/login'))
const MainPage = React.lazy(() => import('../pages/main'))
const PersonalAccountPage = React.lazy(
    () => import('../pages/personal-account')
)

export enum Services {
    Main = 'MAIN',
    Login = 'LOGIN',
    Account = 'ACCOUNT',
}

const sharedServices = (): Map<Services, IService> => {
    const services = new Map()
    services.set(Services.Main, {
        key: 0,
        exact: true,
        path: '/',
        isMenu: true,
        component: MainPage,
        title: 'Главная страница',
        icon: BiHomeAlt2,
        icon_mini: BiHomeAlt2,
    })

    services.set(Services.Login, {
        key: 1,
        exact: true,
        path: '/login',
        isMenu: false,
        component: LoginPage,
        title: 'Авторизация',
    })
    return services
}

const unauthorizedZone = (): Map<Services, IService> => {
    const services = sharedServices()

    return services
}

const authorizedZone = (): Map<Services, IService> => {
    const services = sharedServices()
    services.set(Services.Account, {
        key: services.size + 1,
        exact: true,
        path: '/services/account',
        isMenu: true,
        component: PersonalAccountPage,
        title: 'Личный кабинет',
        icon: RiAccountCircleLine,
        icon_mini: RiAccountCircleLine,
    })

    return services
}
export const unauthServices = unauthorizedZone()
export const authServices = authorizedZone()
import React from 'react'
import { IService } from '../models/service'
import { BiHomeAlt2 } from 'react-icons/bi'
import { FiAlertCircle } from 'react-icons/fi'
import TestServicePage from 'pages/test-service-page'

const LoginPage = React.lazy(() => import('../pages/auth/login'))
const MainPage = React.lazy(() => import('../pages/main'))

export const unauthorizedZone = (): IService[] => {
    return [
        {
            key: 0,
            exact: true,
            path: '/',
            isMenu: true,
            component: MainPage,
            title: 'Главная страница',
            icon: BiHomeAlt2,
            icon_mini: BiHomeAlt2,
        },
        {
            key: 1,
            exact: true,
            path: '/login',
            isMenu: false,
            component: LoginPage,
            title: 'Авторизация',
        },
    ]
}

export const authorizedZone = (): IService[] => {
    const routers: IService[] = []
    routers.push({
        key: 0,
        exact: true,
        path: '/',
        isMenu: true,
        component: MainPage,
        title: 'Главная страница',
        icon: BiHomeAlt2,
        icon_mini: BiHomeAlt2,
    })
    routers.push({
        key: 0,
        exact: true,
        path: '/test',
        isMenu: true,
        component: TestServicePage,
        title: 'Тестовая страница',
        icon: FiAlertCircle,
        icon_mini: FiAlertCircle,
    })

    return routers
}

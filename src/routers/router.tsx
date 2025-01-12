import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spin from 'components/ui/spin'
import NotFound from 'pages/not-found'
import { useQuery } from '@tanstack/react-query'
import AuthService from 'services/auth-service'
import { authorizedZone, unauthorizedZone } from './services'

export const Router: React.FC = () => {
    const authRoutes = authorizedZone()
    const unauthRoutes = unauthorizedZone()
    const { data, isError } = useQuery({
        queryKey: ['checkAuth'],
        queryFn: AuthService.checkAuth,
        retry: false,
    })

    return (
        <Suspense fallback={<Spin/>}>
            <Routes>
                {!isError && data ? (
                    <>
                        {authRoutes.map((service) => (
                            <Route
                                path={service.path}
                                key={service.key}
                                element={<service.component />}
                            />
                        ))}
                        <Route path={'*'} element={<NotFound />} />
                    </>
                ) : (
                    <>
                        {unauthRoutes.map((service) => (
                            <Route
                                path={service.path}
                                key={service.key}
                                element={<service.component />}
                            />
                        ))}
                        <Route path={'*'} element={<NotFound />} />
                    </>
                )}
            </Routes>
        </Suspense>
    )
}

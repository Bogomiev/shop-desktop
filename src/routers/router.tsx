import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Spin from 'components/ui/spin'
import NotFoundPage from 'pages/not-found'
import { authServices, unauthServices } from './services'
import { IService } from 'models/service'
import { useMe } from 'hooks/use-me'

export const Router: React.FC = () => {
    const { isError, data } = useMe()
    
    return (
        <Suspense fallback={<Spin />}>
            <Routes>
                {!isError && data ? (
                    <>
                        {authServices
                            .values()
                            .toArray()
                            .map((service: IService) => (
                                <Route
                                    path={service.path}
                                    key={service.key}
                                    element={<service.component />}
                                />
                            ))}
                        <Route path={'*'} element={<NotFoundPage />} />
                    </>
                ) : (
                    <>
                        {unauthServices
                            .values()
                            .toArray()
                            .map((service: IService) => (
                                <Route
                                    path={service.path}
                                    key={service.key}
                                    element={<service.component />}
                                />
                            ))}
                        <Route path={'*'} element={<NotFoundPage />} />
                    </>
                )}
            </Routes>
        </Suspense>
    )
}

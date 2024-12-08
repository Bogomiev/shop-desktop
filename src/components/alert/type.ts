import { ReactNode, RefObject } from 'react'

export type AlertProps = {
    id: number
    type?: 'success' | 'info' | 'warning' | 'error'
    message?: ReactNode
    duration?: number
    position?: AlertPositionType
    icon?: ReactNode | boolean
}

export type AlertPositionType =
    | 'topLeft'
    | 'topCenter'
    | 'topRight'
    | 'bottomRight'
    | 'bottomCenter'
    | 'bottomLeft'

export type RequiredAlertProps = Required<AlertProps>

export type AlertContextType = {
    message: (alert: Omit<AlertProps, 'id'>) => void
    removeMessage: (alertId: number, ref: RefObject<HTMLDivElement>) => void
    position: AlertPositionType
}

import clsx from 'clsx'
import {
    createContext,
    FC,
    ReactNode,
    RefObject,
    useContext,
    useState,
} from 'react'
import { AlertContextType, AlertPositionType, AlertProps } from './type'
import { positionClasses } from './utils'
import { Alert } from './alert'

const AlertContext = createContext<AlertContextType>({
    message: () => {},
    removeMessage: () => {},
    position: 'topRight',
})

export const useAlert = () => useContext(AlertContext)

export const AlertProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [alerts, setAlerts] = useState<AlertProps[]>([])
    const [position, setPosition] = useState<AlertPositionType>('topRight')

    const message = (alert: Omit<AlertProps, 'id'>) => {
        //first check for position
        if (alert.position && alert.position !== position) {
            setPosition(alert.position)
        }

        // add it to the list
        setAlerts((alerts) => [
            ...alerts,
            { ...alert, id: Math.random() * 10000 },
        ])
    }

    const removeMessage = (alertId: number, ref: RefObject<HTMLDivElement>) => {
        ref?.current?.classList.add('animate-alertOut')

        //remove element after animation is done
        ref?.current?.addEventListener('animationend', () => {
            // lets remove it
            setAlerts((alerts) =>
                alerts.filter((alert) => alert.id !== alertId)
            )
        })
    }

    return (
        <div className="">
            <AlertContext.Provider value={{ message, removeMessage, position }}>
                {children}
                {/* alert list */}
                <div
                    className={clsx(
                        positionClasses[position],
                        'fixed w-screen max-w-sm z-50'
                    )}
                >
                    {alerts.map((alert) => (
                        <Alert key={alert.id} {...alert} />
                    ))}
                </div>
            </AlertContext.Provider>
        </div>
    )
}

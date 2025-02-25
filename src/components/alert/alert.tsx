import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { AlertProps } from './type'
import { useAlert } from './use-alert'
import {
    animationVariables,
    closeButtonClasses,
    closeIcon,
    getIcon,
    iconClasses,
    wrapperClasses,
} from './utils'

export const Alert = (props: AlertProps) => {
    let {
        type = 'info',
        icon = '',
        message = '---',
        id,
        duration = 3000,
    } = props
    icon = icon === '' ? getIcon(type) : icon
    duration = typeof duration === 'string' ? +duration : duration

    const wrapperRef = useRef<HTMLDivElement>(null)
    const { removeMessage, position } = useAlert()

    //auto dismiss
    const dismissRef = useRef<ReturnType<typeof setTimeout>>()
    useEffect(() => {
        if (duration) {
            dismissRef.current = setTimeout(() => {
                removeMessage(id, wrapperRef)
            }, duration)
        }

        return () => {
            clearTimeout(dismissRef.current)
        }
    })

    // progressBar
    const progressBarRef = useRef<ReturnType<typeof setInterval>>()
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const complete = 100

        if (duration) {
            progressBarRef.current = setInterval(() => {
                if (progress < complete) {
                    setProgress((prev) => prev + 1)
                } else {
                    return
                }
            }, duration / complete)
        }

        return () => {
            clearInterval(progressBarRef.current)
        }
    })
    return (
        <div
            style={{ ['--elm-translate' as any]: animationVariables[position] }}
            className={clsx(
                wrapperClasses[type],
                'animate-alertIn',
                'flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 relative'
            )}
            ref={wrapperRef}
            role={'alert'}
        >
            {!!duration && (
                <div className="absolute bottom-0 right-0 left-0 w-full h-1 bg-neutral-500">
                    <span
                        className="absolute bg-neutral-200 left-0 top-0 bottom-0 h-full"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}

            {icon && (
                <div className={clsx(iconClasses[type], 'flex p-3')}>
                    <div className="inline-flex justify-center items-center w-6 h-6">
                        <span className="sr-only">{type} Icon</span>
                        {icon}
                    </div>
                </div>
            )}
            {/* <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                {'Заголовочек'}
            </span> */}
            <div className="text-sm font-semibold flex-grow p-3">{message}</div>

            {/* <div className="bg-indigo-900 text-center py-4 lg:px-4">
                <div
                    className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
                    role="alert"
                >
                    <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                        {'Заголовочек'}
                    </span>
                    <span className="font-semibold mr-2 text-left flex-auto">
                        {props.message}
                    </span>
                    <svg
                        className="fill-current opacity-75 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                    >
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
                    </svg>
                </div>
            </div> */}

            <button
                aria-label="Close"
                onClick={() => {
                    removeMessage(id, wrapperRef)
                }}
                className={closeButtonClasses}
            >
                <span className="sr-only">Close</span>
                {closeIcon}
            </button>
        </div>
    )
}

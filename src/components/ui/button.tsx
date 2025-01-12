import React from 'react'

interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {}

export const Button: React.FC<ButtonProps> = ({
    className,
    children,
    ...props
}) => {
    const classes =
        'text-white bg-[#1b1d2d] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black-300 rounded-lg w-full px-5 py-2.5 text-center ' +
        (className ? className : '')

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}
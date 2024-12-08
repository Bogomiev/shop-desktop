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
        'text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none  focus:ring-black-300 rounded-lg w-full px-5 py-2.5 text-center ' +
        (className ? className : '')

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    )
}

//  export const Button: React.FC = () => {
//     return (
//         <button
//             type="submit"
//             className="text-white bg-black hover:bg-black-800 focus:ring-4 focus:outline-none
//                     focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
//             // onClick={() => loginHandler.mutate({login, password})}
//         >
//             Войти
//         </button>
//     )
// }

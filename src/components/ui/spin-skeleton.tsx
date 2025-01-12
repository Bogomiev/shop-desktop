// interface SkeletonProps {
//     title: boolean
//     rowCount: number
// }

// const Spin: React.FC<SkeletonProps> = () => {
//     return (
//         <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
//             <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>

//             <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
//             <div className="w-full h-8 bg-gray-300 rounded mb-2"></div>
//             <div className="w-1/2 h-8 bg-gray-300 rounded"></div>
//         </div>
//     )
// }

// export default Spin

import React, { HTMLAttributes } from 'react'
import Spin from './spin'

interface DivProps
    extends React.DetailedHTMLProps<
        HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    spinning: number
}

export const SpinSceleton: React.FC<DivProps> = ({
    className,
    children,
    ...props
}) => {
    const classes =
        (className ? className : '') +
        (props.spinning ? ' animate-pulse' : '')
    return (
        <div className='relative'>
            {props.spinning ? (
                <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Spin></Spin>
                </div>
            ) : (
                <></>
            )}
            <div className={classes} {...props}>
                {children}
            </div>
        </div>
    )
}

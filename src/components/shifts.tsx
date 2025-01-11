import { ShiftsData } from 'models/shift'
import React from 'react'

export const Shifts: React.FC<ShiftsData> = (props) => {
    return (
        <>
            <div>{props.shopName}</div>
            <div>{props.address}</div>

            {props.cashiers && props.cashiers[0] ? (
                <div>
                    {props.cashiers[0].shiftStartTime}-
                    {props.cashiers[0].shiftEndTime}
                    {props.cashiers[0].user.name}
                </div>
            ) : (
                <div>
                    00:00-00:00
                    {'<>'}
                </div>
            )}
        </>
    )
}

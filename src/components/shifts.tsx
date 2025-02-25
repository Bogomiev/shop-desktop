import { ShiftsProps } from 'models/shift'
import React from 'react'
import logo from 'assets/images/logo-full.svg'
import { SpinSceleton } from './ui/spin-skeleton'
import { Button } from './ui/button'
import { UserType } from 'models/user'

export const Shifts: React.FC<ShiftsProps> = (props) => {
    return (
        <SpinSceleton
            spinning={Number(props.isLoading)}
            className="border border-black shadow-sm rounded-xl p-3"
            children=<div className="space-y-1">
                <div className="flex justify-between">
                    <img className="w-1/3" src={logo} alt="Ikorniy"></img>
                    <div className="font-extrabold text-3xl">
                        {props.shopName}
                    </div>
                </div>
                <div>{props.address}</div>
                <div className="font-semibold">Текущая смена</div>

                {props.cashiers.map((cashier) => (
                    <div key={cashier.user.id}>
                        <div
                            className={`font-extrabold text-xl ${cashier.current ? 'text-primary' : 'text-disableInput'}`}
                        >
                            <span
                                onClick={() => {
                                    if (cashier.current)
                                        props.openAccountHandler(props.shopId)
                                }}
                            >
                                {cashier.user.name}
                            </span>
                        </div>
                        <div
                            className={`flex justify-between ${cashier.current ? 'text-primary' : 'text-disableInput'}`}
                        >
                            {cashier.shiftStartTime
                                ? `с ${cashier.shiftStartTime} по ${cashier.shiftEndTime}`
                                : 'вне плана'}

                            <input
                                className="relative float-right me-1 mt-0.5 h-5 w-5 accent-primary"
                                type="radio"
                                name="cashierRadio"
                                id={cashier.user.id}
                                checked={cashier.current}
                                onChange={() =>
                                    props.cashierChangeHandler(
                                        cashier.user.name,
                                        props.shopId,
                                        UserType.CASHIER
                                    )
                                }
                            />
                        </div>
                        {cashier.current === true ? (
                            <Button
                                className="font-medium text-sm mt-1"
                                onClick={() => props.closeShiftHandler()}
                            >
                                Закрыть смену
                            </Button>
                        ) : (
                            <></>
                        )}
                    </div>
                ))}

                <div>
                    <a
                        href="###"
                        onClick={(e) => {
                            e.preventDefault()
                            props.cashierChangeHandler(
                                '',
                                props.shopId,
                                UserType.CASHIER
                            )
                        }}
                        className="text-primary underline"
                    >
                        Незапланированный выход
                    </a>
                </div>
            </div>
        ></SpinSceleton>
    )
}

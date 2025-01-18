import { ShiftsProps } from 'models/shift'
import React from 'react'
import logo from 'assets/images/logo-full.svg'
import { SpinSceleton } from './ui/spin-skeleton'

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
                    <>
                        <div className="font-extrabold text-xl">
                            {cashier.user.name}
                            <input
                                className="relative float-right me-1 mt-0.5 h-5 w-5 accent-[#1b1d2d]"
                                type="radio"
                                name="cashierRadio"
                                id={cashier.user.id}
                                checked={cashier.current}
                                onChange={() =>
                                    props.cashierChangeHandler(cashier.user.name)
                                }
                            />
                        </div>
                        <div className="flex">
                            с {cashier.shiftStartTime} по {cashier.shiftEndTime}
                        </div>
                    </>
                ))}
            </div>
        ></SpinSceleton>
    )
}

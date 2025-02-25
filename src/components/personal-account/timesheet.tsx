import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi'
import { ITimesheetProps } from 'models/timesheet'
import { SpinSceleton } from '../ui/spin-skeleton'

export const Timesheet: React.FC<ITimesheetProps> = (
    props: ITimesheetProps
) => {
    return (
        <SpinSceleton
            spinning={Number(props.isLoading)}
            children=<div className="max-w-sm w-full mx-auto">
                <div className="mt-2 px-6 py-3 border border-black rounded-xl">
                    <div className="mt-1 flex justify-center">
                        <button
                            type="button"
                            className="flex-none text-primary hover:border-gray-500 items-center rounded-full hover:bg-gray-400 hover:text-white justify-center p-3"
                            onClick={() => props.changePeriodHandler(-1)}
                        >
                            <BiSolidLeftArrow color="#C4C4C4" />
                        </button>

                        <span className=" font-semibold text-primary p-2.5">
                            {props.periodPresentation}
                        </span>

                        <button
                            type="button"
                            className="flex-none text-primary hover:border-gray-500 items-center rounded-full hover:bg-gray-400 hover:text-white justify-center p-3"
                            onClick={() => props.changePeriodHandler(1)}
                        >
                            <BiSolidRightArrow color="#C4C4C4" />
                        </button>
                    </div>
                    <div className="mt-2 grid grid-cols-7 text-primary text-center font-semibold text-xs">
                        <div>Пн</div>
                        <div>Вт</div>
                        <div>Ср</div>
                        <div>Чт</div>
                        <div>Пт</div>
                        <div>Сб</div>
                        <div>Вс</div>
                    </div>
                    <div className="mt-3 gap-px grid grid-cols-7 text-sm rounded-lg overflow-hidden">
                        {props.days.map((day) => (
                            <div
                                key={day.date.toString()}
                                className="bg-main-background"
                            >
                                {day.currentMonth ? (
                                    <button
                                        type="button"
                                        className={`bg-${props.colorOfDay(day)} mx-auto m-2 flex size-7 rounded-full items-center justify-center text-primary text-xs font-semibold hover:text-blue-600`}
                                    >
                                        <time dateTime="#_">{day.day}</time>
                                    </button>
                                ) : (
                                    <></>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        ></SpinSceleton>
    )
}

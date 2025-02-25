const TimesheetLegend: React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-2 mt-2 text-xs">
                <div className="flex place-content-center">
                    <div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-dayoff mt-1.5 mr-1" />
                            <span>выходной</span>
                        </div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-planned mt-1.5 mr-1" />
                            <span>запланировано</span>
                        </div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-done mt-1.5 mr-1" />
                            <span>выполнено</span>
                        </div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-absenteeism mt-1.5 mr-1" />
                            <span>невыход</span>
                        </div>
                    </div>
                </div>
                <div className="flex place-content-center">
                    <div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-vacation mt-1.5 mr-1" />
                            <span>отпуск</span>
                        </div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-sickleave mt-1.5 mr-1" />
                            <span>больничный</span>
                        </div>
                        <div className="flex">
                            <div className="rounded-full h-2 w-2 bg-timesheet-businesstrip mt-1.5 mr-1" />
                            <span>командировка</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimesheetLegend

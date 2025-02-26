import React from 'react'
import GoToMain from 'components/goto-main'
import { useMe } from 'hooks/use-me'
import { TimesheetContainer } from 'modules/personal-account/timesheet'


const PersonalAccountPage: React.FC = () => {
    const { data: meData, isError } = useMe()
    const shopId = !isError && meData && meData.shift ? meData.shift.shopId : ''

    return (
        <>
            <div>
                <div className="font-extrabold text-xl text-primary flex justify-center">
                    {meData?.user.name}
                </div>
                <TimesheetContainer
                    user={meData.user}
                    shopId={shopId}
                ></TimesheetContainer>
            </div>
            <br />
            <GoToMain />
        </>
    )
}

export default PersonalAccountPage

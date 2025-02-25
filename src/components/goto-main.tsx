import { Button } from 'components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const GoToMain: React.FC = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate('/', { replace: true })
    }

    return (
        <Button type="button" className="font-medium text-sm" onClick={back}>
            В личный кабинет
        </Button>
    )
}

export default GoToMain

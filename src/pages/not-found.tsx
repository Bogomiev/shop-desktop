import { Button } from 'components/ui/button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate('/', { replace: true })
    }

    return (
        <>
            <div className="font-extrabold">Ой! Страница не найдена!</div>
            <br />
            <br />
            <Button
                type="button"
                className="font-medium text-sm"
                onClick={back}
            >
                В личный кабинет
            </Button>
        </>
    )
}

export default NotFound

import React from 'react'
import GoToMain from 'components/goto-main'

const NotFoundPage: React.FC = () => {
    return (
        <>
            <div className="font-extrabold">Ой! Страница не найдена!</div>
            <br />
            <br />
            <GoToMain />
        </>
    )
}

export default NotFoundPage

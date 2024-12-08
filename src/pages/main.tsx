import React, {FC, useState} from 'react';


const MainForm: FC = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            Главная форма
        </div>
    );
};

export default MainForm;
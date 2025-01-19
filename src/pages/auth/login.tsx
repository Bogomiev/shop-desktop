import { store } from 'App'
import { Button } from 'components/ui/button'
import { useLogin } from 'hooks/use-login'
import { FC, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useNavigate } from 'react-router-dom'


const LoginForm: FC = () => {
    const [code, setCode] = useState<string>('')
    const login = store.login
    const shopId = store.shopId
    const loginHandler = useLogin({login, code, shopId} )
    const navigate = useNavigate()
    const back = () => {
        navigate('/', {replace:true})
    }
    
    return (
        <form
            className="max-w-sm mx-auto p-3"
            onSubmit={(e) => {
                e.preventDefault()
                loginHandler.mutate()
            }}
        >
            <br />
            <br />
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <label className="block mb-2 text-xl font-extrabold">
                        {store.login}
                    </label>
                    
                    <label className="mb-2 text-lg font-extrabold flex justify-center">
                        КОД ДОСТУПА
                    </label>

                    <div className="mb-3 flex justify-center">
                   
                        <ReactCodeInput
                            name="reactCode"
                            inputMode="numeric"
                            fields={5}
                            onChange={(e) => {
                                setCode(e);
                            }}
                        />
                               
                    </div>
                    <Button
                        type="submit"
                        className="font-medium text-sm"
                    >
                        Авторизоваться
                    </Button>
                    <Button
                        type="button"
                        className="font-medium text-sm"
                        onClick={back}
                    >
                        В личный кабинет
                    </Button>

                </div>
            </div>
        </form>
    )
}

export default LoginForm

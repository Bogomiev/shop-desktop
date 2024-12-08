import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAlert } from 'components'
import { Button } from 'components/ui/button'
import Spin from 'components/ui/spin'
import { AuthResponseFail } from 'models/response/auth-response'
import { ILogin } from 'models/user'
import { FC, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useNavigate } from 'react-router-dom'
import AuthService from 'services/auth-service'

const LoginForm: FC<string> = (login: string) => {
    const { message } = useAlert()
    const [code, setCode] = useState<string>('')
    const navigate = useNavigate()
    login = 'Иванова Марина'
    const queryClient = useQueryClient()

    const loginHandler = useMutation({
        mutationFn: (data: ILogin) => {
            return AuthService.login(data.login, data.code)
        },
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ['me'] })
            navigate('/', { replace: true })
        },
        onError: (error: AuthResponseFail, variables, context) => {
            const mess =
                error.response && error.response.data
                    ? error.response.data.message
                    : 'Network unavailable!'
            message({
                type: 'error',
                message: mess,
                duration: 7000,
            })
        },
    })

    return (
        <form
            className="max-w-sm mx-auto p-3"
            onSubmit={(e) => {
                e.preventDefault()
                loginHandler.mutate({ login, code })
            }}
        >
            <br />
            <br />
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <label className="block mb-2 text-xl font-extrabold">
                        {login}
                    </label>
                    
                    <label className="mb-2 text-lg font-extrabold flex justify-center">
                        КОД ДОСТУПА
                    </label>

                    <div className="mb-3 flex justify-center">
                   
                        <ReactCodeInput
                            name="reactCode"
                            inputMode="numeric"
                            fields={4}
                            onChange={(e) => {
                                setCode(e); 
                                console.log(e)
                            }}
                        />
                               
                    </div>
                    <Button
                        type="submit"
                        className="font-medium text-sm"
                        // onClick={() => loginHandler.mutate({login, password})}
                    >
                        Авторизоваться
                    </Button>
                    <Button
                        type="submit"
                        className="font-medium text-sm"
                        // onClick={() => loginHandler.mutate({login, password})}
                    >
                        В личный кабинет
                    </Button>

                </div>
            </div>
        </form>
    )
}

export default LoginForm

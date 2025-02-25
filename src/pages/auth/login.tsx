import { useQueryClient } from '@tanstack/react-query'
import { Button } from 'components/ui/button'
import { useLogin } from 'hooks/use-login'
import { useUsers } from 'hooks/use-users'
import { IUser } from 'models/user'
import { FC, useEffect, useState } from 'react'
import ReactCodeInput from 'react-code-input'
import { useNavigate } from 'react-router-dom'
import { Store } from 'store/store'

const LoginPage: FC = () => {
    const store = Store((state) => state);
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const [isLogin] = useState<boolean>(store.login === '')
    const [login, setLogin] = useState<string>(store.login)
    const [code, setCode] = useState<string>('')
    const loginHandler = useLogin({ login, code, shopId: store.shopId })
    
    const back = () => {
        navigate('/', { replace: true })
    }
    
    const users = useUsers(store.userType, login)
    const updateUsersDataHandler = (userlogin: string) => {
        setLogin(userlogin)
        store.setLogin(userlogin)
    }
    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
    }, [queryClient, login])

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
            <div className="w-full bg-main-background rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {isLogin ? (
                        <div className="mb-3">
                            <input
                                type="login"
                                id="login"
                                onChange={(e) => {
                                    updateUsersDataHandler(e.target.value)
                                }}
                                className="bg-gray-50 border border-gray-300 text-primary text-lg rounded-lg
                                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Введите имя..."
                                list="datalistLogins"
                                required
                            />

                            <datalist id="datalistLogins">
                                {!users.isError && !users.isLoading ? (
                                    users.data?.data.data.map((user: IUser) => (
                                        <option key={user.id} value={user.name}></option>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </datalist>
                        </div>
                    ) : (
                        <label className="block mb-2 text-xl font-extrabold">
                            {login}
                        </label>
                    )}

                    <label className="mb-2 text-lg text-primary font-extrabold flex justify-center">
                        КОД ДОСТУПА
                    </label>

                    <div className="mb-3 flex justify-center text-primary">
                        <ReactCodeInput
                            name="reactCode"
                            inputMode="numeric"
                            fields={5}
                            onChange={(e) => {
                                setCode(e)
                            }}
                        />
                    </div>
                    <Button
                        type="submit"
                        className="font-medium text-sm text-container-color"
                    >
                        Авторизоваться
                    </Button>
                    <Button
                        type="button"
                        className="font-medium text-sm text-container-color"
                        onClick={back}
                    >
                        В личный кабинет
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default LoginPage

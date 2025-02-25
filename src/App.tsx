import 'App.css'
import { BrowserRouter } from 'react-router-dom'
import Store from 'store/store'
import { createContext } from 'react'
import { AlertProvider } from 'components'
import { AppContainer } from 'modules/app'

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

function App() {
    return (
        <BrowserRouter>
            <AlertProvider>
                <Context.Provider
                    value={{
                        store,
                    }}
                >
                    <AppContainer />
                </Context.Provider>
            </AlertProvider>
        </BrowserRouter>
    )
}

export default App

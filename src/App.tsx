import 'App.css'
import { BrowserRouter } from 'react-router-dom'
import Store from 'store/store'
import { createContext } from 'react'
import { AlertProvider } from 'components'
import { AppContainer } from 'modules/app'
import { IGeo } from 'models/geo'
import GeoService from 'services/geo-service'

interface State {
    store: Store,
}

export const store = new Store();

export const Context = createContext<State>({
    store,
})

function setPosition(position: { coords: IGeo }): void {
    store.geo = position.coords
}

GeoService.setLocation(setPosition)

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

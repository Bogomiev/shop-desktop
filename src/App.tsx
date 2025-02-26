import 'App.css'
import { BrowserRouter } from 'react-router-dom'
import { AlertProvider } from 'components'
import { AppContainer } from 'modules/app'

function App() {
    return (
        <BrowserRouter>
            <AlertProvider>
                <AppContainer />
            </AlertProvider>
        </BrowserRouter>
    )
}

export default App

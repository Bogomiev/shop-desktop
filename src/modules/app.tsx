import { Router } from 'routers/router'
import SettingsService from 'services/settings-service'

export const AppContainer: React.FC = () => {
    SettingsService.init()
    const settings = SettingsService.settings()

    

    return (
        <Router></Router>
    )
}

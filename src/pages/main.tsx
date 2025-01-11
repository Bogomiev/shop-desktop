import { store } from 'App'
import { ShiftsContainer } from 'modules/shifts'
import {FC} from 'react';



const MainForm: FC = () => {
    const position = store.geo
    
    return (
        <>
        <div>
            'lat': {position.latitude}
            'lon': {position.longitude}
        </div>
        <ShiftsContainer></ShiftsContainer>
        </>
    );
};

export default MainForm;
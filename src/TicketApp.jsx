import React from 'react';
import { RouterPage } from './pages/RouterPage';
import { UiProvider } from './Context/UiContext';


export const TicketApp = () =>{
    return(
        <UiProvider>
            <RouterPage/>
        </UiProvider>
    )
}
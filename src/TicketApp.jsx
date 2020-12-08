import React from 'react';
import { RouterPage } from './pages/RouterPage';
import { UiProvider } from './Context/UiContext';
import { SocketProvider } from './Context/SocketContext';


export const TicketApp = () =>{
    return(
        <SocketProvider>
            <UiProvider>
                <RouterPage/>
            </UiProvider>
        </SocketProvider>
    )
}
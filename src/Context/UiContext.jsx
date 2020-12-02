import React,{useState, createContext} from 'react';

export const UiContext = createContext();


export const UiProvider = ({children}) => {
    const [hideMenu, setHideMenu] = useState(true);

    return (
        <UiContext.Provider
            value={
                {
                    hideMenu,
                    setHideMenu
                }
            }
        >   
            { children }
        </UiContext.Provider>
    )
}
import { useContext, useEffect } from "react"
import { UiContext } from "../Context/UiContext"

export const useHideMenu = ( hide ) => {
    const { setHideMenu, hideMenu } = useContext(UiContext);

    useEffect(()=>{
        if(hide){
            setHideMenu(false);
        }else{
            setHideMenu(true);
        }
    },[hideMenu])
}
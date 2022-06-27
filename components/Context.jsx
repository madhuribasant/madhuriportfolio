import React, {useContext ,useState } from 'react'


export const AppContext  = React.createContext()

export const AppProvider = ({children})=>{
    const [hover,setHover] = useState(false)

    return(
        <AppContext.Provider value={{
            hover,
            setHover
        }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext =()=>{
    return useContext(AppContext)
}
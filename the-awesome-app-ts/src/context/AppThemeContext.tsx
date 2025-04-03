import React, {createContext, useState} from 'react';

type AppThemeState = {
    mode: "light" | "dark";
    setMode: (mode: "light" | "dark") => void
}

const initialState: AppThemeState = {
    mode: 'light',
    setMode: () => {}
} 

export const AppThemeContext = createContext(initialState);

type AppThemeContextProviderProps = {
    children: React.ReactNode
}
export function AppThemeContextProvider(props: AppThemeContextProviderProps){

    const [mode, setMode] = useState(initialState.mode);

    return (
        <AppThemeContext.Provider value={{mode, setMode}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}
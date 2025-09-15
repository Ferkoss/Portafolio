import { createContext, useState } from "react";

export const modeContext = createContext();
export const ModeContextProvider = ({ children }) => {
    const [mode, setMode] = useState({type:"dark"});


    return (
        <modeContext.Provider value={{ mode, setMode }}>
            {children}
        </modeContext.Provider>
    );
}
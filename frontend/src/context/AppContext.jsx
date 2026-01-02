import { createContext,useState } from "react";
export const AppContext=createContext();
export function AppProvider({ children }) {
    const [sideBar,setSideBar]=useState(false);
    return (
        <AppContext.Provider value={{sideBar,setSideBar}}>{children}</AppContext.Provider>
    )
}

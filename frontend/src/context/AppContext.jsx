import { createContext,useState,useEffect } from "react";
import { checkLogin } from "../services/BackendHandler";
export const AppContext=createContext();
export function AppProvider({ children }) {
    const [sideBar,setSideBar]=useState(false);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const fetchUser=async()=>{
        setLoading(true);
        const loggedInUser=await checkLogin();
        if (loggedInUser){
            setUser(loggedInUser);
        } else{
            setUser(null);
        }
        setLoading(false);
    }
    fetchUser();
    },[]);
    return (
        <AppContext.Provider value={{sideBar,setSideBar,user,loading,setUser,setLoading}}>{children}</AppContext.Provider>
    )
}

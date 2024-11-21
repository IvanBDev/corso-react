import {ReactNode, useEffect, useState} from "react";
import {AuthContext} from "./AuthContext.tsx";

export function AuthContextProvider({children}: Readonly<{ children: ReactNode }>) {
    const [jwtToken, setJwtToken] = useState(``)

    function handleSetToken(data: string) {
        setJwtToken(data)
    }

    useEffect(() => {
        const browser = localStorage.getItem("jwt-token")
        if (browser) {
            const token: string = JSON.parse(browser)
            handleSetToken(token)
        }
    }, []);

    return (
        <AuthContext.Provider value={{jwtToken, handleSetToken}}> {children} </AuthContext.Provider>
    )
}
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../context/AuthContext.tsx";

export function DashboardPage() {
    const context = useContext(AuthContext)
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        if (context?.jwtToken)
            setShow(show => !show)
    }, []);

    return (
        <div>
            <pre>{JSON.stringify(context?.jwtToken ? "logged":"not logged", null, 2)}</pre>
        </div>
    )
}
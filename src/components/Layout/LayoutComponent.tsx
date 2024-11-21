import {useOutlet} from "react-router-dom";
import {HeaderComponent} from "../Header/HeaderComponent.tsx";

export function LayoutComponent() {
    const outlet = useOutlet()

    return (
        <>
            <HeaderComponent/>
            <main className="flex flex-col max-w-screen-lg mx-auto pt-6 px-3 gap-5">
                {outlet}
            </main>
        </>
    )
}
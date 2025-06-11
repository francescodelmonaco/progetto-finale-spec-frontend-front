import { Outlet } from "react-router-dom"

// components
import NavBar from "../components/NavBar"

export default function DefaultLayout() {
    return (
        <>
            <NavBar />

            <main className="container">
                <Outlet />
            </main>
        </>
    )
}
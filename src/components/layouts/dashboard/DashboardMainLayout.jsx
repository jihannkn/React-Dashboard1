import Aside from "../../fragments/dashboard/Aside";
import Navbar from "../../fragments/dashboard/Navbar";
import { Outlet } from "react-router-dom"

export default function DashboardMainLayout() {
    return (
        <div className="w-full h-dvh overflow-hidden flex items-center justify-center" style={{ background: '#edf2f7' }}>
            <div className="flex w-full h-full bg-gray-200">
                <Aside />
                <div className="flex flex-col flex-1 overflow-hidden">
                    <Navbar />
                    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container px-6 py-8 mx-auto">
                            <Outlet />
                        </div>
                    </main>
                </div >
            </div >
        </div >
    )
}
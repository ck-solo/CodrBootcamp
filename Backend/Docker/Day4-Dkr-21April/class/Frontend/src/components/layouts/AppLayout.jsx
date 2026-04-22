import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../navigation/Sidebar'

const AppLayout = () => {
  return (
    <div className="bg-[#05050A] text-gray-200 min-h-screen md:ps-[244px] relative overflow-hidden font-['Inter',sans-serif]">
            {/* Subtle premium background glow */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full mix-blend-screen" />
            </div>

            {/* Navigation (Sidebar Desktop / Bottom Bar Mobile) */}
            <Sidebar />

            {/* pb-[64px] adds bottom margin identical to the mobile bottom bar height */}
            <main className="md:pb-0 h-full flex justify-center w-full">
                <div className="w-full h-full max-w-7xl lg:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
  )
}

export default AppLayout
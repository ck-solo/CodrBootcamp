import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from '../navigation/Sidebar'

const AppLayout = () => {
  return (
    <div className="bg-[#05050A] min-h-screen md:ps-[244px]">
            {/* Navigation (Sidebar Desktop / Bottom Bar Mobile) */}
            <Sidebar />

            {/* pb-[64px] adds bottom margin identical to the mobile bottom bar height */}
            <main className="md:pb-0 h-full flex justify-center w-full text-white">
                <div className="w-full h-full max-w-7xl lg:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
  )
}

export default AppLayout
import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  PlusSquare,
  Bell,
  User,
  MessageCircle,
  Menu,
  LogOut,
} from "lucide-react";
import LoggedInUserTile from "../../features/users/components/LoggedInUserTile";
import { logoutUser } from "../../features/auth/service/auth.api";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Search", path: "/search", icon: Search },
    { name: "Messages", path: "/messages", icon: MessageCircle },
    { name: "Notifications", path: "/notifications", icon: Bell },
    { name: "Create", path: "/create", icon: PlusSquare },
    { name: "Profile", path: "/profile", icon: User },
  ];

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        await logoutUser();
        // Clear local storage or any existing state if necessary
        // Redirect to login
        window.location.href = "/login"; // Force reload to clear all state
      } catch (error) {
        console.error("Logout failed:", error);
        alert("Failed to log out. Please try again.");
      }
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="fixed left-0 top-0 hidden md:flex flex-col w-61 h-screen border-r border-white/5 bg-black/40 backdrop-blur-xl px-3 py-6 z-50">
        <div className="mb-8 px-3">
          <h1
            className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-blue-500"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            KodrGram
          </h1>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group relative ${
                    isActive
                      ? "font-medium text-white"
                      : "font-normal text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div
                        layoutId="sidebar-active"
                        className="absolute inset-0 bg-white/10 rounded-xl"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                    <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon
                        strokeWidth={isActive ? 2.5 : 2}
                        size={26}
                        className={
                          isActive
                            ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                            : "text-gray-300"
                        }
                      />
                    </div>
                    <span
                      className={`text-[15px] hidden lg:block tracking-wide relative z-10 ${isActive ? "font-semibold" : ""}`}
                    >
                      {item.name}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <LoggedInUserTile />
          <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-4 p-3 rounded-xl hover:bg-red-500/10 transition-all duration-300 group text-gray-400 hover:text-red-400"
          >
            <div className="relative group-hover:scale-110 transition-transform duration-300">
              <LogOut strokeWidth={2} size={26} />
            </div>
            <span className="text-[15px] hidden lg:block tracking-wide">
              Logout
            </span>
          </button>
           
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 px-4 py-2 z-50 pb-[env(safe-area-inset-bottom)]">
        <div className="flex justify-between items-center h-12">
          {navItems
            .filter((item) =>
              ["Home", "Search", "Create", "Messages", "Profile"].includes(
                item.name,
              ),
            )
            .map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative p-2 transition-transform active:scale-95 text-gray-400 hover:text-white"
                >
                  {({ isActive }) => (
                    <>
                      <Icon
                        strokeWidth={isActive ? 2.5 : 2}
                        size={26}
                        className={
                          isActive
                            ? "text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                            : ""
                        }
                      />
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active"
                          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;

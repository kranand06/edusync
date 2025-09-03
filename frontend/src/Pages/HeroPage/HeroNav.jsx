import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import ThemeToggle from "../Components/ThemeToggle";
import { useUserStore } from "../../store/useUserStore.js";

function HeroNav() {
const { user, loading, logout } = useUserStore();
  const navigate = useNavigate();
  return (
    <header className="w-full bg-white shadow-sm border-b/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              edu<span className="text-orange-500">Connect</span>
            </Link>
          </div>

          {/* Right: Auth */}
          <div className="flex items-center space-x-3 ml-auto">
            {user ? (
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
                className="bg-orange-500 font-bold text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors"
                aria-label="Logout"
                type="button"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-orange-500 font-bold text-white px-6 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors"
                aria-label="Login"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroNav;
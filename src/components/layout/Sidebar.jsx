import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaMoneyBillAlt,
  FaWallet,
  FaSearchLocation, FaChartLine, FaLeaf,
  FaUsers,
  FaHeadset,
  FaSignOutAlt, FaBarcode,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { name: "Dashboard", path: "/", icon: <FaTachometerAlt /> },
  { name: "Feed", path: "/Feed", icon: <FaLeaf /> },
  { name: "Stats", path: "/Stats", icon: <FaChartLine /> },
  { name: "Farm Accounts", path: "/FarmAccounts", icon: <FaMoneyBillAlt /> },
  { name: "Events", path: "/Events", icon: <FaBarcode /> },
  { name: "Debtors", path: "/Debtors", icon: <FaWallet /> },
  { name: "Maps", path: "/Debtors", icon: <FaSearchLocation /> }
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar (Hamburger only, no text) */}
      <div className="
      lg:hidden bg-slate-900 text-white flex 
      items-center  shadow-md absolute z-50 
      w-8 h-8 p-2 md:w-9 md:h-10  cursor-pointer " onClick={() => setOpen(true)}>
        <button className="cursor-pointer" onClick={() => setOpen(true)}>
          <FaBars size={15} />
        </button>
      </div>

      {/* Overlay (click outside to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-slate-900 text-white flex flex-col justify-between shadow-lg transform transition-transform duration-300 z-50
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static`}
      >
        <div>
          {/* Header with Logo + Close Button */}
          <div className="flex items-center justify-between px-4 py-6 border-b border-slate-700">
            <span className="text-2xl font-bold">EggXellence</span>
            {/* Close Button (mobile only) */}
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden text-gray-300 hover:text-white"
            >
              <FaTimes size={22} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col mt-4">
            {navItems.map(({ name, path, icon }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3  transition-colors 
                  ${isActive ? "bg-blue-600" : "hover:bg-slate-800"}`
                }
                // ⚡ Don't auto-close on click; let user close manually
              >
                {icon}
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700">
          <div className="text-sm">
            Hello, <strong>User</strong>
          </div>
          <div className="text-sm text-gray-400">
            Balance: <span className="text-green-500 font-bold">₵0.00</span>
          </div>
          <NavLink
            to="/logout"
            className="flex items-center gap-2 mt-3 text-red-400 hover:text-red-500"
            // logout should close sidebar
            onClick={() => setOpen(false)}
          >
            <FaSignOutAlt /> Log Out
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { FaBell } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-base-100 shadow-sm">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
        </div>
        <a className="btn btn-ghost text-3xl">
          <span className="text-[#003EA4] font-medium">Auction</span>
          <span className="text-[#FFD337] font-semibold">Gallery</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li className="mx-7">
            <a>Home</a>
          </li>
          <li className="mx-7">
            <a>Auctions</a>
          </li>
          <li className="mx-7">
            <a>Categories</a>
          </li>
          <li className="mx-7">
            <a>How to works</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        {/* Bell Notification Dropdown */}
        <div className="dropdown dropdown-end relative">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FaBell size={24} />
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between text-lg font-semibold">
                Profile <span> <CgProfile size={20} /></span>
              </a>
             
            </li>
            <li><a className="justify-between text-lg font-semibold">Settings <span><IoSettingsSharp size={20} /></span> </a></li>
            <li><a className=" justify-between text-lg font-semibold">Logout <span><TbLogout size={20} /></span> </a></li>
          </ul>
        </div>
      </div>

    </div>
    // </div>
  );
};

export default Navbar;

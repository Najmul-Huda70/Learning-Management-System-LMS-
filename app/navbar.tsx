"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* header and navbar*/}
      <div className="sticky bg-slate-900/50 backdrop-blur-2xl border-[#0A66C2] text-gray-300 top-0 z-10 flex p-2 justify-between items-center  text-lg">
        <div className="hidden sm:flex sm:items-center gap-3">
          <div className="bg-blue-500 text-white text-xl w-10 h-10 flex justify-center items-center rounded-lg">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>

          <div>
            <h2 className="text-xl font-bold">
              <span className="text-blue-600">L</span>MS
            </h2>
            <p className="text-sm text-gray-600">Learning Portal</p>
          </div>
        </div>
        {/* navbar menu sm */}
        <nav className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="w-10 h-10 flex flex-col justify-center items-center gap-1"
          >
            <span
              className={`block h-1 w-8 bg-gray-300 rounded transition-all duration-300 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>

            <span
              className={`block h-1 w-8 bg-gray-300 rounded transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block h-1 w-8 bg-gray-300 rounded transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </nav>
        {/* navbar menu >sm */}
        <nav className="hidden sm:grid">
          <ul className="flex text-md gap-5">
            <Link href={"/"}>Home</Link>
            <Link href={"/classroom"}>Classroom</Link>
            <Link href={"/notice"}>Notice</Link>
          </ul>
        </nav>
        <div className=" flex justify-end items-center gap-4">
          {/* Bell Ring*/}
          <div className=" w-10 h-10  flex justify-center items-center rounded-lg">
            <div className="notification">
              <div className="bell-container">
                <div className="bell"></div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            {/* Button */}
            <label
              tabIndex={0}
              className="btn flex items-center justify-center p-0 rounded-full"
            >
              <div className="rounded-full overflow-hidden">
                <Image
                  src="/najmul huda.png"
                  width={40}
                  height={40}
                  alt="Najmul Huda"
                  className="object-cover"
                />
              </div>
            </label>

            {/* Dropdown menu */}
            <ul
              tabIndex={0}
              className="dropdown-content menu  rounded-box top-13 z-50"
            >
              <div className="max-w-lg w-full bg-gray-950 border border-gray-800 rounded-xl overflow-hidden shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.08),0_15px_15px_-6px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="px-4 py-4 border-b border-gray-500 bg-linear-to-r from-gray-950 to-gray-800">
                  <p className="text-xs font-medium text-blue-300 uppercase tracking-wider">
                    Signed in as
                  </p>
                  <div className="flex gap-2 items-center mt-1">
                    {/* Avatar */}
                    <div className="rounded-full overflow-hidden w-8 h-8">
                      <Image
                        src="/najmul huda.png"
                        width={32}
                        height={32}
                        alt="Najmul Huda"
                        className="object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="leading-tight">
                      <h3 className="text-sm font-semibold text-white">
                        Najmul Huda
                      </h3>

                      <p className="text-xs text-gray-300">
                        najmul.student@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-1.5">
                  <Link
                    href="profile"
                    className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80"></div>
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-[#1a365d]">
                      Profile
                    </span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>

                  <Link
                    href="setting"
                    className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-all duration-200"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80"></div>
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors duration-200">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-blue-600 group-hover:text-[#2b6cb0]"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-[#1a365d]">
                      Settings
                    </span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-3 w-3 text-gray-400 ml-auto group-hover:text-[#2b6cb0]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>

                  <Link
                    href="/"
                    className="group relative flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 transition-all duration-200"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-red-500 rounded-r opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-y-100 scale-y-80"></div>
                    <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover:bg-red-200 transition-colors duration-200">
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        className="h-5 w-5 text-red-500 group-hover:text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-red-600">
                      Logout
                    </span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="h-3 w-3 text-gray-400 ml-auto group-hover:text-red-500"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <nav
        className={`fixed top-15 left-0 h-full w-38 bg-white shadow-gray-800 shadow-md hover:shadow-xl z-50 
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
        sm:hidden`}
      >
        {/* Header */}
        <div className="p-2 border-b border-gray-300 font-bold text-lg">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 text-white text-lg w-8 h-8 flex justify-center items-center rounded-lg">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>

            <div>
              <h2 className="text-md font-bold">
                <span className="text-blue-600">L</span>MS
              </h2>
              <p className="text-xs text-gray-600">Learning Portal</p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-4 p-4 text-md">
          <Link href={"/"}>Home</Link>
          <Link href={"/classroom"}>Classroom</Link>
          <Link href={"/notice"}>Notice</Link>
        </ul>
      </nav>
    </>
  );
}

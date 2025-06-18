import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function AdminSidebar({ isDrawerOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const location = useLocation();

  const navigate = useNavigate();

  return (
    <>
      <div className="div side-bar-wrapper flex flex-col items-start">
        <div
          id="drawer-navigation"
          className={`fixed top-[65px] left-0 z-40 w-[13.75rem] h-screen pt-[1.25rem] pb-[1rem] px-[0.75rem] overflow-y-auto transition-transform border-b border-gray-200 border-r-[1px] ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } bg-[#fbfcfe] lg:translate-x-0`}
          aria-labelledby="drawer-navigation-label"
        >
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center  lg:hidden"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="pt-8 lg:pt-2 ">
            <h5 className="flex items-center p-2 text-[#171A1C] text-[14px] font-inter font-medium rounded-lg hover:bg-[#f0f4f8] group">
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </h5>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f0f4f8]"
              onClick={() => navigate("/admin/home/products")}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21 6.5l-9-5-9 5v11l9 5 9-5v-11zm-9-3.12 6.8 3.78-2.98 1.66L12 5.08 8.18 8.82 5.2 7.16 12 3.38zM5 9.21l6.5 3.61v7.18l-6.5-3.61V9.21zm8.5 10.79v-7.18L20 9.21v7.18l-6.5 3.61z" />
              </svg>
              <span className="flex-1 ml-3 text-left text-[#171A1C] text-[14px] font-inter font-medium whitespace-nowrap">
                Products
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-[#f0f4f8]"
              onClick={() => navigate("/admin/home/orders")}
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M20 2H4a1 1 0 00-1 1v19l3-2 3 2 3-2 3 2 3-2 3 2V3a1 1 0 00-1-1zM7 9h10a1 1 0 110 2H7a1 1 0 110-2zm0 4h10a1 1 0 110 2H7a1 1 0 110-2z" />
              </svg>
              <span className="flex-1 ml-3 text-left text-[#171A1C] text-[14px] font-inter font-medium whitespace-nowrap">
                Orders
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminSidebar;

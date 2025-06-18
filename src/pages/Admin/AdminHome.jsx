import React from 'react';
import AdminNav from "../Admin/AdminNav/AdminNav";
import { Outlet } from 'react-router-dom';

function AdminHome() {
  return (
    <>
      <div>
        <AdminNav />
      </div>
      <div className="ml-[14rem] w-full h-full overflow-y-auto bg-[#fbfcfe]">
        <Outlet />{" "}
      </div>
    </>
  );
}

export default AdminHome;

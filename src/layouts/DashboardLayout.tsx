import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
export function DashboardLayout() {
 

  useEffect(() => {
    

  });

  return (
    <div className="w-full h-screen overflow-hidden flex text-zinc-300">
      <Sidebar></Sidebar>
      <main className="flex flex-col flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
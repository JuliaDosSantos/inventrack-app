import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
export function DashboardLayout() {
 

  useEffect(() => {
    

  });

  return (
    <div className="w-full h-screen overflow-hidden flex text-zinc-300">
      <main className="bg- sm:w-full flex flex-col flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
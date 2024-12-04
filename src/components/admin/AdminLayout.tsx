import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { Menu } from 'lucide-react';
  
export function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`flex h-screen bg-gray-100 ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <button onClick={toggleSidebar} className={`md:hidden absolute ${isSidebarOpen ? 'top-2 right-2' : 'top-2 right-2'}`}><Menu /></button>
      <AdminSidebar isOpen={isSidebarOpen} />
      <main className="flex-1 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
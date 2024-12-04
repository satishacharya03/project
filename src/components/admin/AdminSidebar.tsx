import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart,
  Tag,
  LogOut 
} from 'lucide-react';
import { auth } from '../../lib/firebase';
import { ArrowLeft, FileText } from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
}

export function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const location = useLocation();
  
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
    { icon: Package, label: 'Packages', path: '/admin/packages' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
    { icon: Tag, label: 'Offers', path: '/admin/offers' },
    { icon: FileText, label: 'Page Details', path: '/admin/pagedetails' },
  ];

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={`w-64 bg-gray-900 text-white ${isOpen ? 'block' : 'hidden'} md:block`}>
      <div className="p-4 flex flexspace-x-2">
        <Link to="/">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </div>
      <nav className="mt-8">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center space-x-3 px-6 py-3 text-sm ${
              location.pathname === path
                ? 'bg-purple-600'
                : 'hover:bg-gray-800'
            }`}
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </Link>
        ))}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-6 py-3 text-sm text-red-400 hover:bg-gray-800 w-full"
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </nav>
    </div>
  );
}

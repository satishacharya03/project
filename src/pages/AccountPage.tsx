import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { User, Package, LogOut } from 'lucide-react';

export  function AccountPage() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.displayName}</h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <button
              onClick={signOut}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Package className="h-6 w-6 text-purple-600" />
            <h2 className="text-xl font-semibold">Order History</h2>
          </div>
          
          <div className="space-y-4">
            {/* Order history will be implemented here */}
            <p className="text-gray-600">No orders yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
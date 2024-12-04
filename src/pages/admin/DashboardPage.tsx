
import React from 'react';
import { usePackages } from '../../hooks/usePackages';
import { useOrders } from '../../hooks/useOrders';
import { useUsers } from '../../hooks/useUsers';
import { Package, Users, ShoppingCart, TrendingUp } from 'lucide-react';

export function DashboardPage() {
  const { packages } = usePackages();
  const { orders } = useOrders();
  const { users } = useUsers();

  const stats = [
    {
      label: 'Total Packages',
      value: packages.length,
      icon: Package,
      color: 'bg-blue-500',
    },
    {
      label: 'Total Users',
      value: users.length,
      icon: Users,
      color: 'bg-green-500',
    },
    {
      label: 'Total Orders',
      value: orders.length,
      icon: ShoppingCart,
      color: 'bg-purple-500',
    },
    {
      label: 'Revenue',
      value: `$${orders.reduce((acc, order) => acc + order.amount, 0).toFixed(2)}`,
      icon: TrendingUp,
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{label}</p>
                <p className="text-2xl font-semibold mt-1">{value}</p>
              </div>
              <div className={`${color} p-3 rounded-lg`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          {/* Recent orders table implementation */}
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">Popular Packages</h2>
          {/* Popular packages chart implementation */}
        </div>
      </div>
    </div>
  );
}
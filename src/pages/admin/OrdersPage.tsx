
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { OrderList } from '../../components/admin/orders/OrderList';
import { useOrders } from '../../hooks/useOrders';

export function OrdersPage() {
  const { orders, loading } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOrders = orders.filter(order => 
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Order Management</h1>
      
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search orders by ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 bg-gray-200 rounded-lg" />
          ))}
        </div>
      ) : (
        <OrderList orders={filteredOrders} />
      )}
    </div>
  );
}
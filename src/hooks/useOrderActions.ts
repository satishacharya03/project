
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Order } from '../types';
import toast from 'react-hot-toast';

export function useOrderActions() {
  const updateOrderStatus = async (id: string, status: Order['status']) => {
    try {
      const orderRef = doc(db, 'orders', id);
      await updateDoc(orderRef, {
        status,
        updatedAt: new Date(),
      });
      toast.success('Order status updated successfully');
    } catch (error) {
      console.error('Error updating order status:', error);
      toast.error('Failed to update order status');
      throw error;
    }
  };

  return {
    updateOrderStatus,
  };
}

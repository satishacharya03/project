import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebase';
import { Package } from '../types';

interface OrderData {
  userId: string;
  items: (Package & { quantity: number })[];
  total: number;
  playerInfo: {
    playerName: string;
    playerId: string;
    email: string;
  };
}

export const createOrder = async (orderData: OrderData) => {
  const { userId, items, total, playerInfo } = orderData;

  const orderItems = items.map(item => ({
    packageId: item.id,
    quantity: item.quantity,
    price: item.onSale ? item.salePrice : item.price,
  }));

  const order = {
    userId,
    items: orderItems,
    total,
    playerInfo,
    status: 'pending',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const docRef = await addDoc(collection(db, 'orders'), order);
  return docRef.id;
};
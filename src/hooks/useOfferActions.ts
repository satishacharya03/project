// This file can be used for additional actions related to offers if needed.
// For now, it can be empty or contain specific actions that are not in useOffer.

import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Offer } from '../types';
import toast from 'react-hot-toast';

export function useOfferActions() {
  const createOffer = async (offerData: Omit<Offer, 'id'>) => {
    try {
      await addDoc(collection(db, 'offers'), {
        ...offerData,
        createdAt: new Date(),
      });
      toast.success('Offer created successfully');
    } catch (error) {
      console.error('Error creating offer:', error);
      toast.error('Failed to create offer');
      throw error;
    }
  };

  const updateOffer = async (id: string, offerData: Partial<Offer>) => {
    try {
      const offerRef = doc(db, 'offers', id);
      await updateDoc(offerRef, {
        ...offerData,
        updatedAt: new Date(),
      });
      toast.success('Offer updated successfully');
    } catch (error) {
      console.error('Error updating offer:', error);
      toast.error('Failed to update offer');
      throw error;
    }
  };

  const deleteOffer = async (id: string) => {
    try {
      const offerRef = doc(db, 'offers', id);
      await deleteDoc(offerRef);
      toast.success('Offer deleted successfully');
    } catch (error) {
      console.error('Error deleting offer:', error);
      toast.error('Failed to delete offer');
      throw error;
    }
  };

  return {
    createOffer,
    updateOffer,
    deleteOffer,
  };
} 
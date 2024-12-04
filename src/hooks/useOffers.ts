import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Offer } from '../types';

export function useOffers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOffers() {
      try {
        const querySnapshot = await getDocs(collection(db, 'offers'));
        const offersData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Offer[];
        setOffers(offersData);
      } catch (error) {
        console.error('Error fetching offers:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchOffers();
  }, []);

  const createOffer = async (offer: Offer) => {
    await addDoc(collection(db, 'offers'), offer);
    // Optionally, you can refetch offers here or update the state
  };

  const updateOffer = async (id: string, offer: Partial<Offer>) => {
    const offerRef = doc(db, 'offers', id);
    await updateDoc(offerRef, {
      ...offer,
    });
    // Optionally, you can refetch offers here or update the state
  };

  const deleteOffer = async (id: string) => {
    const offerRef = doc(db, 'offers', id);
    await deleteDoc(offerRef);
    // Optionally, you can refetch offers here or update the state
  };

  return { offers, loading, createOffer, updateOffer, deleteOffer };
} 
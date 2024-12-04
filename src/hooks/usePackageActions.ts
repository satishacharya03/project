
import { collection, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Package } from '../types';
import toast from 'react-hot-toast';

export function usePackageActions() {
  const createPackage = async (packageData: Omit<Package, 'id'>) => {
    try {
      await addDoc(collection(db, 'packages'), {
        ...packageData,
        createdAt: new Date(),
      });
      toast.success('Package created successfully');
    } catch (error) {
      console.error('Error creating package:', error);
      toast.error('Failed to create package');
      throw error;
    }
  };

  const updatePackage = async (id: string, packageData: Partial<Package>) => {
    try {
      const packageRef = doc(db, 'packages', id);
      await updateDoc(packageRef, {
        ...packageData,
        updatedAt: new Date(),
      });
      toast.success('Package updated successfully');
    } catch (error) {
      console.error('Error updating package:', error);
      toast.error('Failed to update package');
      throw error;
    }
  };

  const deletePackage = async (id: string) => {
    try {
      const packageRef = doc(db, 'packages', id);
      await deleteDoc(packageRef);
      toast.success('Package deleted successfully');
    } catch (error) {
      console.error('Error deleting package:', error);
      toast.error('Failed to delete package');
      throw error;
    }
  };

  return {
    createPackage,
    updatePackage,
    deletePackage,
  };
}

import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { User } from '../types';
import toast from 'react-hot-toast';

export function useUserActions() {
  const updateUser = async (id: string, userData: Partial<User>) => {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        ...userData,
        updatedAt: new Date(),
      });
      toast.success('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user');
      throw error;
    }
  };

  const toggleUserStatus = async (id: string, active: boolean) => {
    try {
      const userRef = doc(db, 'users', id);
      await updateDoc(userRef, {
        active,
        updatedAt: new Date(),
      });
      toast.success(`User ${active ? 'activated' : 'deactivated'} successfully`);
    } catch (error) {
      console.error('Error toggling user status:', error);
      toast.error('Failed to update user status');
      throw error;
    }
  };

  const resetPassword = async (userId: string) => {
    try {
      // In a real application, you would typically:
      // 1. Generate a password reset link
      // 2. Send it to the user's email
      // 3. Handle the reset through Firebase Auth
      toast.success('Password reset email sent');
    } catch (error) {
      console.error('Error resetting password:', error);
      toast.error('Failed to reset password');
      throw error;
    }
  };

  return {
    updateUser,
    toggleUserStatus,
    resetPassword,
  };
}

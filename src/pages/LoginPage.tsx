import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { GamepadIcon } from 'lucide-react';
import { prisma } from '../lib/prisma';

export function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (!userDoc.exists()) {
        // Create new user in both Firestore and PostgreSQL
        await setDoc(userRef, {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          role: 'USER',
          active: true,
          createdAt: new Date(),
        });

        await prisma.user.create({
          data: {
            id: user.uid,
            name: user.displayName || '',
            email: user.email || '',
            role: 'USER',
          },
        });
      }

      // Check if user is admin in PostgreSQL
      const dbUser = await prisma.user.findUnique({
        where: { email: user.email || '' },
      });

      if (dbUser?.role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate(from);
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <GamepadIcon className="h-12 w-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">Welcome to GamePacks</h2>
        
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center space-x-2 bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
}
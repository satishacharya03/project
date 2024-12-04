// import React from 'react';
import { Link } from 'react-router-dom';
import { GamepadIcon, ShoppingCart, User , X, Menu} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import TypingEffect from '../other/writer';
import { useState } from 'react';

export function Header() {
  const { user, userRole} = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-gray-900/50 backdrop-blur text-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between"> 
          <div className="relative md:hidden">
            <button 
              className=" flex items-center" 
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <span className="text-white"><Menu /></span>
            </button>

            {/* Floating Navigation Box */}
            <nav className={`top-10 ${isNavOpen ? 'flex' : 'hidden'} flex-col bg-gray-800 rounded-lg shadow-lg p-5 absolute w-100`}>
              <button onClick={() => setIsNavOpen(false)} className="absolute top-2 right-2"><X /></button>
              <Link to="/" className="hover:text-purple-400 py-2">Home</Link>
              <Link to="/packages" className="hover:text-purple-400 py-2">Packages</Link>
              <Link to="/about" className="hover:text-purple-400 py-2">About</Link>
              <Link to="/contact" className="hover:text-purple-400 py-2">Contact</Link>
              {userRole === 'ADMIN' && (
                <Link to="/admin" className="hover:text-purple-400 py-2">Admin Panel</Link>
              )}
            </nav>
          </div>
          <Link to="/" className="flex items-center space-x-2">
            <GamepadIcon className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold w-10">
              <TypingEffect>
                <span>GamePacks</span>
                <span>BY-Sujan</span>
              </TypingEffect>
            </span>
          </Link>

          <nav className="md:flex hidden items-center space-x-8">
              <Link to="/" className="hover:text-purple-400 py-2">Home</Link>
              <Link to="/packages" className="hover:text-purple-400 py-2">Packages</Link>
              <Link to="/about" className="hover:text-purple-400 py-2">About</Link>
              <Link to="/contact" className="hover:text-purple-400 py-2">Contact</Link>
              {userRole === 'ADMIN' && (
                <Link to="/admin" className="hover:text-purple-400 py-2">Admin Panel</Link>
              )}
            </nav>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="hover:text-purple-400">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/account" className="hover:text-purple-400">
                  <User className="h-6 w-6" />
                </Link>
              </div>
            ) : (
              <Link to="/login" className="hover:text-purple-400">Login</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
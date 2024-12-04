import React from 'react';
import { Link } from 'react-router-dom';

export function HeroBanner() {
  return (
    <>
    <div className="" style={{marginTop: '-80px'}}>
    <div className="relative h-[700px] bg-cover bg-center " style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="md:text-5xl font-bold mb-6 text-3xl">
              Unlock the Best Gaming Packages for Free Fire, PUBG & More!
            </h1>
            <p className="text-xl mb-8 ">
              Level up your gaming experience with exclusive in-game items and currency packages
            </p>
            <Link
              to="/packages"
              className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}
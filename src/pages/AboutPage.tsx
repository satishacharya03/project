import React from 'react';
import { Shield, Users, Trophy, Headphones } from 'lucide-react';

export  function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About GamePacks</h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-center mb-12">
            GamePacks is your trusted destination for premium gaming packages and in-game items.
            We provide secure, instant delivery for popular games like Free Fire and PUBG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-600">
              All transactions are protected with industry-standard encryption and security measures.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Users className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-600">
              We prioritize customer satisfaction with competitive prices and excellent support.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Trophy className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">
              Only the best gaming packages and items carefully curated for our customers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Headphones className="h-12 w-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our dedicated support team is always ready to assist you with any questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
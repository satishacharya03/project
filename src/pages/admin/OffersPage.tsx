import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { OfferList } from '../../components/admin/offers/OfferList';
import { OfferForm } from '../../components/admin/offers/OfferForm';
import { useOffers } from '../../hooks/useOffers';
import { Offer } from '../../types';

export function OffersPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingOffer, setEditingOffer] = useState<Offer | null>(null);
  const { offers, loading } = useOffers();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Special Offers</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Offer</span>
        </button>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      ) : (
        <OfferList
          offers={offers}
          onEdit={setEditingOffer}
        />
      )}

      {(isFormOpen || editingOffer) && (
        <OfferForm
          offer={editingOffer}
          onClose={() => {
            setIsFormOpen(false);
            setEditingOffer(null);
          }}
        />
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { PackageList } from '../../components/admin/packages/PackageList';
import { PackageForm } from '../../components/admin/packages/PackageForm';
import { usePackages } from '../../hooks/usePackages';
import { Package } from '../../types';

export function PackagesPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingPackage, setEditingPackage] = useState<Package | null>(null);
  const { packages, loading } = usePackages();

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Packages</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors"
        >
          <Plus className="h-5 w-5" />
          <span>Add Package</span>
        </button>
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-20 bg-gray-200 rounded"></div>
          ))}
        </div>
      ) : (
        <PackageList
          packages={packages}
          onEdit={setEditingPackage}
        />
      )}

      {(isFormOpen || editingPackage) && (
        <PackageForm
          package={editingPackage}
          onClose={() => {
            setIsFormOpen(false);
            setEditingPackage(null);
          }}
        />
      )}
    </div>
  );
}

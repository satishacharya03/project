import  { useState } from 'react';
import { UserList } from '../../components/admin/users/UserList';
import { UserForm } from '../../components/admin/users/UserForm';
import { useUsers } from '../../hooks/useUsers';
import { Search } from 'lucide-react';
import { User } from '../../types';

export function UsersPage() {
  const { users, loading } = useUsers();
  const [searchTerm, setSearchTerm] = useState('');
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">User Management</h1>
      
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
      </div>

      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-16 bg-gray-200 rounded-lg" />
          ))}
        </div>
      ) : (
        <UserList
          users={filteredUsers}
          onEdit={setEditingUser}
        />
      )}

      {editingUser && (
        <UserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
        />
      )}
    </div>
  );
}
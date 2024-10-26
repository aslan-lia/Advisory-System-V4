// frontend/app/sections/ManageCustomers.tsx

import { Button } from '@headlessui/react';
import { useState } from 'react';

interface Customer {
  id: number;
  name: string;
  email: string;
}

interface ManageCustomersProps {
  goBack: () => void;
}

export default function ManageCustomers({ goBack }: ManageCustomersProps) {
  // Sample customer data
  const [customers, setCustomers] = useState<Customer[]>([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com' },
  ]);

  // Handlers for edit and delete actions
  const handleEdit = (id: number) => {
    console.log(`Edit customer with ID: ${id}`);
  };

  const handleDelete = (id: number) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  return (
    <div className="container mx-auto p-6 w-full max-w-lg">
      {/* Back Button */}
      <Button
        onClick={goBack}
        className="bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-600 mb-6"
      >
        ← Back
      </Button>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 text-white">Manage Customers</h2>

      {/* Customer List */}
      <div className="space-y-4">
        {customers.map(customer => (
          <div
            key={customer.id}
            className="flex justify-between items-center bg-white/5 p-4 rounded-lg backdrop-blur-md"
          >
            <div>
              <p className="text-lg font-medium text-primaryText">{customer.name}</p>
              <p className="text-secondaryText text-sm">{customer.email}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleEdit(customer.id)}
                className="bg-gray-600 py-1 px-3 rounded-lg text-white hover:bg-gray-500"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(customer.id)}
                className="bg-red-600 py-1 px-3 rounded-lg text-white hover:bg-red-500"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// frontend/app/sections/AddCustomer.tsx
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';

interface AddCustomerProps {
  onBack: () => void;
}

export default function AddCustomer({ onBack }: AddCustomerProps) {
  const [customerData, setCustomerData] = useState({
    fullName: '',
    email: '',
    company: '',
    phoneNumber: '',
  });

  // Update customerData state as inputs change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Function to handle Add Customer action
  const handleAddCustomer = async () => {
    try {
      const response = await axios.post('http://localhost:4000/customers', customerData);
      console.log("Customer added!", response.data);
      alert("Customer added successfully!");
    } catch (error) {
      console.error("Error adding customer", error);
      alert("Failed to add customer.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-cardBackground p-6 rounded-lg shadow-lg mt-8">
      {/* Go Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner hover:bg-gray-600 focus:outline-none mb-4"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-semibold text-center text-primaryText mb-6">Add Customer</h2>

      {/* Customer Details Fields */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-secondaryText font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={customerData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-secondaryText font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={customerData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-secondaryText font-medium">Company</label>
            <input
              type="text"
              name="company"
              value={customerData.company}
              onChange={handleInputChange}
              placeholder="Enter company name"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-secondaryText font-medium">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={customerData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
            />
          </div>
        </div>
      </div>
      
      {/* Add Customer Button */}
      <div className="text-center mt-6">
        <Button onClick={handleAddCustomer}>Add Customer</Button>
      </div>
    </div>
  );
}

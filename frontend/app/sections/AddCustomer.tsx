// frontend/app/sections/AddCustomer.tsx
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { useState } from 'react';
import Button from '../components/Button';  // Import the reusable Button component

interface AddCustomerProps {
  onBack: () => void;
}

export default function AddCustomer({ onBack }: AddCustomerProps) {
  // Function to handle Add Customer action
  const handleAddCustomer = () => {
    // Add your logic here to submit or save the customer information
    console.log("Customer added!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-cardBackground p-6 rounded-lg shadow-lg mt-8">
      {/* Go Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner 
                   hover:bg-gray-600 focus:outline-none mb-4"
      >
        ← Back
      </button>

      {/* Add Customer Button */}
      <div className="text-center mb-6">
        <Button onClick={handleAddCustomer}>
          Add Customer
        </Button>
      </div>

      <TabGroup>
        <TabList className="flex justify-center gap-4 mb-4">
          <Tab
            className="rounded-full py-1.5 px-4 text-sm font-semibold text-white focus:outline-none 
                       data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 
                       data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Customer Details
          </Tab>
          <Tab
            className="rounded-full py-1.5 px-4 text-sm font-semibold text-white focus:outline-none 
                       data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 
                       data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Site Information
          </Tab>
          <Tab
            className="rounded-full py-1.5 px-4 text-sm font-semibold text-white focus:outline-none 
                       data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 
                       data-[focus]:outline-1 data-[focus]:outline-white"
          >
            Product Information
          </Tab>
        </TabList>

        <TabPanels>
          {/* Customer Details Panel */}
          <TabPanel className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-secondaryText font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">Company</label>
                <input
                  type="text"
                  placeholder="Enter company name"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
            </div>
          </TabPanel>

          {/* Site Information Panel */}
          <TabPanel className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-secondaryText font-medium">Site Address</label>
                <input
                  type="text"
                  placeholder="Enter site address"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">City</label>
                <input
                  type="text"
                  placeholder="Enter city"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">State/Province</label>
                <input
                  type="text"
                  placeholder="Enter state/province"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">ZIP/Postal Code</label>
                <input
                  type="text"
                  placeholder="Enter ZIP/postal code"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">Country</label>
                <input
                  type="text"
                  placeholder="Enter country"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
            </div>
          </TabPanel>

                    {/* Product Information Panel */}
                    <TabPanel className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-secondaryText font-medium">Product Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-secondaryText font-medium">CPE Name</label>
                <input
                  type="text"
                  placeholder="Enter product description"
                  className="w-full p-2 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none"
                />
              </div>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}

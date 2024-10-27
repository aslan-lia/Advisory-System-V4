// frontend/app/sections/AddSite.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Button from '../components/Button';

interface AddSiteProps {
  onBack: () => void;
}

export default function AddSite({ onBack }: AddSiteProps) {
  const [siteData, setSiteData] = useState({
    siteAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  interface Customer {
    id: number;
    fullName: string;
  }

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers', error);
      }
    };
    fetchCustomers();
  }, []);

  const filteredCustomers =
    query === '' ? customers : customers.filter((customer) =>
      customer.fullName.toLowerCase().includes(query.toLowerCase())
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSiteData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddSite = async () => {
    if (!selectedCustomer) {
      alert('Please select a customer');
      return;
    }
    try {
      const response = await axios.post(`http://localhost:4000/sites`, {
        ...siteData,
        customerName: selectedCustomer.fullName, // Send fullName instead of ID
      });
      console.log('Site added!', response.data);
      alert('Site added successfully!');
    } catch (error) {
      console.error('Error adding site', error);
      alert('Failed to add site.');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-cardBackground p-4 rounded-lg shadow-lg mt-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1 px-2 text-sm font-semibold text-white shadow-inner hover:bg-gray-600 focus:outline-none mb-3"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold text-center text-primaryText mb-4">Add Site</h2>

      {/* Customer Selection with Searchable Combobox */}
      <div className="mb-3 relative z-10">
        <label className="block text-secondaryText font-medium">Select Customer</label>
        <Combobox value={selectedCustomer} onChange={setSelectedCustomer}>
          <div className="relative">
            <ComboboxInput
              className={clsx(
                'w-full rounded-lg border-none bg-white/5 py-1 px-3 pr-7 text-sm text-white',
                'focus:outline-none'
              )}
              displayValue={(customer: Customer) => customer?.fullName || ''}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a customer"
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="w-4 h-4 text-white/60" aria-hidden="true" />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            className="absolute mt-1 max-h-40 w-full overflow-y-auto rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{ zIndex: 10 }}
          >
            {filteredCustomers.length === 0 && query !== '' ? (
              <div className="cursor-default select-none py-2 px-4 text-white/70">No customers found.</div>
            ) : (
              filteredCustomers.map((customer) => (
                <ComboboxOption
                  key={customer.id}
                  value={customer}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 px-2 ${active ? 'bg-gray-600 text-white' : 'text-gray-300'}`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {customer.fullName}
                      </span>
                      {selected && (
                        <span className={`absolute inset-y-0 left-0 flex items-center pl-2 ${active ? 'text-white' : 'text-indigo-600'}`}>
                          <CheckIcon className="w-4 h-4" aria-hidden="true" />
                        </span>
                      )}
                    </>
                  )}
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </Combobox>
      </div>

      {/* Site Information Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-secondaryText text-sm font-medium">Site Address</label>
          <input
            type="text"
            name="siteAddress"
            value={siteData.siteAddress}
            onChange={handleInputChange}
            placeholder="Enter site address"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-secondaryText text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={siteData.city}
            onChange={handleInputChange}
            placeholder="Enter city"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-secondaryText text-sm font-medium">State/Province</label>
          <input
            type="text"
            name="state"
            value={siteData.state}
            onChange={handleInputChange}
            placeholder="Enter state/province"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-secondaryText text-sm font-medium">ZIP/Postal Code</label>
          <input
            type="text"
            name="zipCode"
            value={siteData.zipCode}
            onChange={handleInputChange}
            placeholder="Enter ZIP/postal code"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-secondaryText text-sm font-medium">Country</label>
          <input
            type="text"
            name="country"
            value={siteData.country}
            onChange={handleInputChange}
            placeholder="Enter country"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <Button onClick={handleAddSite}>Add Site</Button>
      </div>
    </div>
  );
}

// frontend/app/sections/AddProduct.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import Button from '../components/Button';

interface AddProductProps {
  onBack: () => void;
}

export default function AddProduct({ onBack }: AddProductProps) {
  const [productData, setProductData] = useState({
    name: '',
    cpeName: '',
  });

  interface Customer {
    id: number;
    fullName: string;
  }

  interface Site {
    id: number;
    city: string;
  }

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [selectedSite, setSelectedSite] = useState<Site | null>(null);
  const [customerQuery, setCustomerQuery] = useState('');
  const [siteQuery, setSiteQuery] = useState('');
  const [isCustomerDropdownOpen, setIsCustomerDropdownOpen] = useState(false);

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

  useEffect(() => {
    if (selectedCustomer) {
      const fetchSites = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/sites?customerId=${selectedCustomer.id}`);
          console.log("Fetched sites:", response.data); 
          setSites(response.data);
          setSelectedSite(null);
        } catch (error) {
          console.error('Error fetching sites', error);
        }
      };
      fetchSites();
    }
  }, [selectedCustomer]);

  const filteredCustomers =
    customerQuery === ''
      ? customers
      : customers.filter((customer) =>
          customer.fullName.toLowerCase().includes(customerQuery.toLowerCase())
        );

  const filteredSites =
    siteQuery === ''
      ? sites
      : sites.filter((site) =>
          site.city.toLowerCase().includes(siteQuery.toLowerCase())
        );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddProduct = async () => {
    if (!selectedCustomer || !selectedSite) {
      alert('Please select both a customer and a site');
      return;
    }
    try {
      const response = await axios.post(`http://localhost:4000/products`, {
        ...productData,
        customerId: selectedCustomer.id,
        siteId: selectedSite.id,
      });
      console.log('Product added!', response.data);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product', error);
      alert('Failed to add product.');
    }
  };

  return (
    <div className="relative max-w-xl mx-auto bg-cardBackground p-4 rounded-lg shadow-lg mt-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1 px-2 text-sm font-semibold text-white shadow-inner hover:bg-gray-600 focus:outline-none mb-3"
      >
        ← Back
      </button>

      <h2 className="text-xl font-semibold text-center text-primaryText mb-4">Add Product</h2>

      {/* Backdrop for Dropdown */}
      {isCustomerDropdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCustomerDropdownOpen(false)}
        ></div>
      )}

      {/* Customer Selection */}
      <div className="mb-3 relative z-50">
        <label className="block text-secondaryText font-medium">Select Customer</label>
        <Combobox
          value={selectedCustomer}
          onChange={(value) => {
            setSelectedCustomer(value);
            setIsCustomerDropdownOpen(false);
          }}
        >
          <div className="relative">
            <ComboboxInput
              className={clsx(
                'w-full rounded-lg border-none bg-white/5 py-1 px-3 pr-7 text-sm text-white',
                'focus:outline-none'
              )}
              displayValue={(customer: Customer) => customer?.fullName || ''}
              onChange={(event) => {
                setCustomerQuery(event.target.value);
                setIsCustomerDropdownOpen(true);
              }}
              placeholder="Search for a customer"
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="w-4 h-4 text-white/60" aria-hidden="true" />
            </ComboboxButton>
          </div>
          <ComboboxOptions
            className="absolute mt-1 max-h-40 w-full overflow-y-auto rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            {filteredCustomers.length === 0 && customerQuery !== '' ? (
              <div className="cursor-default select-none py-2 px-4 text-white/70">
                No customers found.
              </div>
            ) : (
              filteredCustomers.map((customer) => (
                <ComboboxOption
                  key={customer.id}
                  value={customer}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 px-2 ${
                      active ? 'bg-gray-600 text-white' : 'text-gray-300'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {customer.fullName}
                      </span>
                      {selected && (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-2 ${
                            active ? 'text-white' : 'text-indigo-600'
                          }`}
                        >
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

      {/* Site Selection */}
      <div className="mb-3 relative z-10">
        <label className="block text-secondaryText font-medium">Select Site</label>
        <Combobox value={selectedSite} onChange={setSelectedSite}>
          <div className="relative">
            <ComboboxInput
              className={clsx(
                'w-full rounded-lg border-none bg-white/5 py-1 px-3 pr-7 text-sm text-white',
                'focus:outline-none'
              )}
              displayValue={(site: Site) => site?.city || ''}
              onChange={(event) => setSiteQuery(event.target.value)}
              placeholder="Search for a site"
            />
            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon className="w-4 h-4 text-white/60" aria-hidden="true" />
            </ComboboxButton>
          </div>
          <ComboboxOptions className="absolute mt-1 max-h-40 w-full overflow-y-auto rounded-md bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            {filteredSites.length === 0 && siteQuery !== '' ? (
              <div className="cursor-default select-none py-2 px-4 text-white/70">
                No sites found.
              </div>
            ) : (
              filteredSites.map((site) => (
                <ComboboxOption
                  key={site.id}
                  value={site}
                  className={({ active }) =>
                    `relative cursor-default select-none py-1 px-2 ${
                      active ? 'bg-gray-600 text-white' : 'text-gray-300'
                    }`
                  }
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {site.city}
                      </span>
                      {selected && (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-2 ${
                            active ? 'text-white' : 'text-indigo-600'
                          }`}
                        >
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

      {/* Product Information Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className="block text-secondaryText text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            placeholder="Enter product name"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-secondaryText text-sm font-medium">CPE Name</label>
          <input
            type="text"
            name="cpeName"
            value={productData.cpeName}
            onChange={handleInputChange}
            placeholder="Enter CPE name"
            className="w-full p-1.5 mt-1 rounded-lg bg-gray-700 text-white text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="text-center mt-4">
        <Button onClick={handleAddProduct}>Add Product</Button>
      </div>
    </div>
  );
}

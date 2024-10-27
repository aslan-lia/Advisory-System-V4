"use client";

import { useState } from 'react';
import { FiUserPlus, FiEdit, FiFileText, FiMapPin, FiBox } from 'react-icons/fi';
import MenuDropdown from './components/MenuDropdown';
import Card from './components/Card';
import AddCustomer from './sections/AddCustomer';
import ManageCustomers from './sections/ManageCustomers';
import Reports from './sections/Reports';
import AddSite from './sections/AddSite';
import AddProduct from './sections/AddProduct';

export default function Dashboard() {
  const [currentSection, setCurrentSection] = useState('home');

  // Render different sections based on state
  const renderSection = () => {
    switch (currentSection) {
      case 'addCustomer':
        return <AddCustomer onBack={() => setCurrentSection('home')} />;
      case 'manageCustomers':
        return <ManageCustomers goBack={() => setCurrentSection('home')} />;
      case 'reports':
        return <Reports goBack={() => setCurrentSection('home')} />;
      case 'addSite':
        return <AddSite onBack={() => setCurrentSection('home')} />;
      case 'addProduct':
        return <AddProduct onBack={() => setCurrentSection('home')} />;
      default:
        return (
          <div className="flex flex-col items-center gap-y-6">
            {/* Welcome Message */}
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold text-white">Welcome Back!</h2>
              <p className="text-secondaryText text-md">
                Manage your customers, sites, and products seamlessly.
              </p>
            </div>

            {/* Workflow Section */}
            <div className="flex items-center gap-x-4">
              <Card
                title="Add Customer"
                description="Add new customers"
                icon={<FiUserPlus size={24} className="text-buttonPrimary mb-1" />}
                onClick={() => setCurrentSection('addCustomer')}
                buttonLabel="Add"
                style={{ width: '8rem', padding: '0.5rem' }} // Smaller card style
              />
              <div className="text-buttonPrimary text-lg font-bold">→</div>
              <Card
                title="Add Site"
                description="Add site details"
                icon={<FiMapPin size={24} className="text-buttonPrimary mb-1" />}
                onClick={() => setCurrentSection('addSite')}
                buttonLabel="Add"
                style={{ width: '8rem', padding: '0.5rem' }} // Smaller card style
              />
              <div className="text-buttonPrimary text-lg font-bold">→</div>
              <Card
                title="Add Product"
                description="Add product info"
                icon={<FiBox size={24} className="text-buttonPrimary mb-1" />}
                onClick={() => setCurrentSection('addProduct')}
                buttonLabel="Add"
                style={{ width: '8rem', padding: '0.5rem' }} // Smaller card style
              />
            </div>

            {/* Additional Actions Section */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mt-4">
              <Card
                title="Manage Customers"
                description="Edit customer info"
                icon={<FiEdit size={24} className="text-buttonPrimary mb-1" />}
                onClick={() => setCurrentSection('manageCustomers')}
                buttonLabel="Manage"
                style={{ width: '8rem', padding: '0.5rem' }} // Smaller card style
              />
              <Card
                title="Create Report"
                description="Generate reports"
                icon={<FiFileText size={24} className="text-buttonPrimary mb-1" />}
                onClick={() => setCurrentSection('reports')}
                buttonLabel="Report"
                style={{ width: '8rem', padding: '0.5rem' }} // Smaller card style
              />
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black min-h-screen text-primaryText font-sans w-full">
      <nav className="bg-black bg-opacity-60 p-4 shadow-lg w-full">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <MenuDropdown />
        </div>
      </nav>

      <div className="container mx-auto p-6 w-full">
        {renderSection()}
      </div>
    </div>
  );
}

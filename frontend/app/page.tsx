// frontend/app/page.tsx

"use client";

import { useState } from 'react';
import { FiUserPlus, FiEdit, FiFileText } from 'react-icons/fi';
import MenuDropdown from './components/MenuDropdown';
import Card from './components/Card';
import AddCustomer from './sections/AddCustomer';
import ManageCustomers from './sections/ManageCustomers';
import Reports from './sections/Reports';

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
      default:
        return (
          <div className="flex flex-col items-center gap-y-6">
            {/* Welcome Message */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white">Welcome Back!</h2>
              <p className="text-secondaryText text-lg">
                Manage your customers and reports seamlessly.
              </p>
            </div>
            {/* Action Cards */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mt-6">
              <Card
                title="Add Customer"
                description="Add new customers to the system."
                icon={<FiUserPlus size={30} className="text-buttonPrimary mb-2" />}
                onClick={() => setCurrentSection('addCustomer')}
                buttonLabel="Add Customer"
              />
              <Card
                title="Manage Customers"
                description="Review, edit, or delete customer information."
                icon={<FiEdit size={30} className="text-buttonPrimary mb-2" />}
                onClick={() => setCurrentSection('manageCustomers')}
                buttonLabel="Manage Customers"
              />
              <Card
                title="Create Report"
                description="Generate detailed reports."
                icon={<FiFileText size={30} className="text-buttonPrimary mb-2" />}
                onClick={() => setCurrentSection('reports')}
                buttonLabel="Create Report"
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
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <MenuDropdown />
        </div>
      </nav>

      <div className="container mx-auto p-6 w-full">
        {renderSection()}
      </div>
    </div>
  );
}

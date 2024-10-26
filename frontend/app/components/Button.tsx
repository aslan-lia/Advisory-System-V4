// frontend/app/components/Button.tsx
"use client";

import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  icon?: ReactNode;
}

const Button = ({ children, onClick, icon }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
    >
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;

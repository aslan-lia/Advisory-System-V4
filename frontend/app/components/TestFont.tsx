// frontend/app/components/TestFont.tsx
import React from 'react';

const TestFont = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      <h1 className="text-4xl font-bold mb-4">This is a Test for Inter Font</h1>
      <p className="text-lg">If you see this text in the Inter font, it means the font is working correctly.</p>
    </div>
  );
};

export default TestFont;
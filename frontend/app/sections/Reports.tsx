// frontend/app/sections/Reports.tsx

import { Button } from '@headlessui/react';
import { useState } from 'react';

interface Report {
  id: number;
  title: string;
  date: string;
}

interface ReportsProps {
  goBack: () => void;
}

export default function Reports({ goBack }: ReportsProps) {
  // Sample report data
  const [reports] = useState<Report[]>([
    { id: 1, title: 'Monthly Sales Report', date: '2023-09-30' },
    { id: 2, title: 'Customer Feedback Summary', date: '2023-10-05' },
    { id: 3, title: 'Annual Financial Overview', date: '2023-01-01' },
  ]);

  const handleView = (id: number) => {
    console.log(`View report with ID: ${id}`);
  };

  const handleDownload = (id: number) => {
    console.log(`Download report with ID: ${id}`);
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
      <h2 className="text-2xl font-semibold mb-4 text-white">Reports</h2>

      {/* Report List */}
      <div className="space-y-4">
        {reports.map(report => (
          <div
            key={report.id}
            className="flex justify-between items-center bg-white/5 p-4 rounded-lg backdrop-blur-md"
          >
            <div>
              <p className="text-lg font-medium text-primaryText">{report.title}</p>
              <p className="text-secondaryText text-sm">Date: {report.date}</p>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleView(report.id)}
                className="bg-blue-600 py-1 px-3 rounded-lg text-white hover:bg-blue-500"
              >
                View
              </Button>
              <Button
                onClick={() => handleDownload(report.id)}
                className="bg-gray-600 py-1 px-3 rounded-lg text-white hover:bg-gray-500"
              >
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

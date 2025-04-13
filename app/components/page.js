import { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the WasteManagementContainer to avoid SSR issues
const WasteManagementContainer = dynamic(
  () => import('../chatbot/WasteManagementContainer'),
  { ssr: false, loading: () => <p>Loading waste management chatbot...</p> }
);

export const metadata = {
  title: 'Waste Management Chatbot',
  description: 'AI-powered waste management chatbot using Gemini',
};

export default function WasteManagementPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-center mb-8">
          Waste Management AI Assistant
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">About This Chatbot</h2>
          <p className="mb-4">
            This AI-powered waste management assistant can help answer questions about:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>Waste segregation and classification</li>
            <li>Recycling processes and best practices</li>
            <li>Composting methods and tips</li>
            <li>E-waste disposal</li>
            <li>Hazardous waste handling</li>
            <li>Waste reduction strategies</li>
            <li>Environmental impact of improper waste disposal</li>
          </ul>
          <p>
            Click the recycling icon ♻️ in the bottom-right corner to start chatting with the waste management assistant.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="font-medium text-green-800 mb-2">Try asking these questions:</h3>
          <ul className="list-disc list-inside space-y-1 text-green-700">
            <li>How should I dispose of batteries?</li>
            <li>What are the best practices for composting at home?</li>
            <li>How do I recycle electronic devices properly?</li>
            <li>What are the different categories of waste?</li>
            <li>How can I reduce plastic waste in my daily life?</li>
          </ul>
        </div>
      </div>

      {/* The chatbot widget will appear in the corner */}
      <Suspense fallback={<div>Loading chatbot...</div>}>
        <WasteManagementContainer />
      </Suspense>
    </main>
  );
}

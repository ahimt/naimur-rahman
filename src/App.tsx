import React from 'react';
import { initialResumeData, themeColors } from './data/resumeData';
import { ExecutiveProTemplate } from './components/templates/ExecutiveProTemplate';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-start py-0 md:py-8 font-sans antialiased">
      <ExecutiveProTemplate data={initialResumeData} theme={themeColors[0]} />

      {/* CSS for A4 Printing */}
      <style>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          #a4-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 210mm !important;
            height: 297mm !important;
            margin: 0 !important;
            box-shadow: none !important;
            border: none !important;
            transform: none !important;
            page-break-after: avoid !important;
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </div>
  );
}


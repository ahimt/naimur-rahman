import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageHtml: string;
}

export const CodeModal: React.FC<CodeModalProps> = ({ isOpen, onClose, pageHtml }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(pageHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-xl max-w-4xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-5 py-3 border-b border-slate-800 flex justify-between items-center bg-slate-900">
          <div>
            <h3 className="text-sm font-bold text-white">Standalone `page1.html` Code</h3>
            <p className="text-xs text-slate-400">Pure offline static HTML resume for instant double-click preview</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? 'Copied to Clipboard!' : 'Copy Code'}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-4 overflow-y-auto bg-slate-950 font-mono text-xs text-cyan-300 space-y-1 select-all">
          <pre className="whitespace-pre-wrap break-all">{pageHtml}</pre>
        </div>

      </div>
    </div>
  );
};

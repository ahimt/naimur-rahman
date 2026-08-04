import React from 'react';
import { TemplateId, ThemeColor } from '../types/resume';
import { themeColors } from '../data/resumeData';
import { Printer, Download, Edit3, Eye, RotateCcw, Code, Check } from 'lucide-react';

interface ToolbarProps {
  activeTemplate: TemplateId;
  setActiveTemplate: (t: TemplateId) => void;
  activeTheme: ThemeColor;
  setActiveTheme: (t: ThemeColor) => void;
  isEditing: boolean;
  setIsEditing: (val: boolean) => void;
  onPrint: () => void;
  onDownloadZip: () => void;
  onReset: () => void;
  onShowCode: () => void;
  zoomLevel: number;
  setZoomLevel: (z: number) => void;
  isGeneratingZip: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  activeTemplate,
  setActiveTemplate,
  activeTheme,
  setActiveTheme,
  isEditing,
  setIsEditing,
  onPrint,
  onDownloadZip,
  onReset,
  onShowCode,
  zoomLevel,
  setZoomLevel,
  isGeneratingZip
}) => {
  const templates: { id: TemplateId; label: string }[] = [
    { id: 'executive-pro', label: 'Executive Pro' },
    { id: 'modern-minimal', label: 'Modern Minimal' },
    { id: 'corporate-banner', label: 'Corporate Banner' },
    { id: 'classic-editorial', label: 'Classic Editorial' },
    { id: 'ats-clean', label: 'ATS Clean (100%)' },
  ];

  return (
    <header className="no-print bg-slate-900 border-b border-slate-800 text-white px-4 py-3 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Brand & Title */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg shadow-sm">
            CV
          </div>
          <div>
            <h1 className="font-bold text-sm leading-tight text-slate-100 flex items-center gap-2">
              A4 Resume Designer <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold">Pro Edition</span>
            </h1>
            <p className="text-[11px] text-slate-400">Naimur Rahman • B.Sc. Textile Engineering CV</p>
          </div>
        </div>

        {/* Template Selector Pills */}
        <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700/60 overflow-x-auto max-w-full">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => setActiveTemplate(tpl.id)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all whitespace-nowrap ${
                activeTemplate === tpl.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tpl.label}
            </button>
          ))}
        </div>

        {/* Actions & Color Pickers */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          
          {/* Color Swatches */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 p-1.5 rounded-lg border border-slate-700/60">
            {themeColors.map((color) => (
              <button
                key={color.id}
                onClick={() => setActiveTheme(color)}
                className={`w-5 h-5 rounded-full transition-transform border border-white/20 flex items-center justify-center ${
                  activeTheme.id === color.id ? 'scale-110 ring-2 ring-cyan-400' : 'hover:scale-105'
                }`}
                style={{ backgroundColor: color.primary }}
                title={color.name}
              >
                {activeTheme.id === color.id && <Check className="w-3 h-3 text-white" />}
              </button>
            ))}
          </div>

          {/* Toggle View/Edit */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition-all ${
              isEditing 
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            {isEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            {isEditing ? 'Preview Mode' : 'Edit CV Data'}
          </button>

          {/* Zoom Controls */}
          <div className="hidden lg:flex items-center bg-slate-800 rounded-lg border border-slate-700 p-1 text-xs text-slate-300">
            <button 
              onClick={() => setZoomLevel(Math.max(0.5, zoomLevel - 0.1))}
              className="px-2 py-0.5 hover:bg-slate-700 rounded font-bold"
            >
              -
            </button>
            <span className="px-2 text-[11px] font-mono text-cyan-300">{Math.round(zoomLevel * 100)}%</span>
            <button 
              onClick={() => setZoomLevel(Math.min(1.2, zoomLevel + 0.1))}
              className="px-2 py-0.5 hover:bg-slate-700 rounded font-bold"
            >
              +
            </button>
          </div>

          {/* Code Viewer */}
          <button
            onClick={onShowCode}
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
            title="View Raw HTML Code"
          >
            <Code className="w-4 h-4" />
          </button>

          {/* Reset */}
          <button
            onClick={onReset}
            className="p-2 text-slate-400 hover:text-amber-400 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700"
            title="Reset to Original Resume Data"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Download Standalone ZIP */}
          <button
            onClick={onDownloadZip}
            disabled={isGeneratingZip}
            className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 font-semibold text-xs rounded-lg flex items-center gap-1.5 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            {isGeneratingZip ? 'Generating ZIP...' : 'Download Standalone ZIP'}
          </button>

          {/* Print PDF Button */}
          <button
            onClick={onPrint}
            className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-lg flex items-center gap-1.5 transition-all shadow-md active:scale-95"
          >
            <Printer className="w-4 h-4" />
            Print / Save as A4 PDF
          </button>

        </div>

      </div>
    </header>
  );
};

import React from 'react';
import { ResumeData } from '../types/resume';
import { Plus, Trash2, User, Briefcase, GraduationCap, Award, Globe, Phone, FileText } from 'lucide-react';

interface EditorPanelProps {
  data: ResumeData;
  onChange: (updated: ResumeData) => void;
  onClose: () => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({ data, onChange, onClose }) => {
  
  const updateContact = (key: keyof ResumeData['contact'], val: string) => {
    onChange({
      ...data,
      contact: { ...data.contact, [key]: val }
    });
  };

  const updatePersonalInfo = (key: keyof ResumeData['personalInfo'], val: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [key]: val }
    });
  };

  const handleAddSkill = () => {
    onChange({
      ...data,
      skills: [...data.skills, "New Skill"]
    });
  };

  const handleRemoveSkill = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index)
    });
  };

  const handleUpdateSkill = (index: number, val: string) => {
    const updated = [...data.skills];
    updated[index] = val;
    onChange({ ...data, skills: updated });
  };

  return (
    <div className="bg-slate-900 border-r border-slate-800 text-slate-200 w-full md:w-96 p-5 overflow-y-auto space-y-6 h-[calc(100vh-60px)] shadow-xl shrink-0">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h2 className="font-bold text-base text-white flex items-center gap-2">
          <FileText className="w-5 h-5 text-cyan-400" /> Live Resume Editor
        </h2>
        <button 
          onClick={onClose}
          className="text-xs text-slate-400 hover:text-white bg-slate-800 px-2.5 py-1 rounded"
        >
          Close Panel
        </button>
      </div>

      {/* Header Info */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold uppercase text-cyan-400 tracking-wider flex items-center gap-1.5">
          <User className="w-4 h-4" /> Header & Contact
        </h3>
        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Full Name</label>
          <input 
            type="text" 
            value={data.fullName}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Job Title / Qualification</label>
          <input 
            type="text" 
            value={data.jobTitle}
            onChange={(e) => onChange({ ...data, jobTitle: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Phone</label>
          <input 
            type="text" 
            value={data.contact.phone}
            onChange={(e) => updateContact('phone', e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
          />
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Email</label>
          <input 
            type="text" 
            value={data.contact.email}
            onChange={(e) => updateContact('email', e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
          />
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1">Address</label>
          <input 
            type="text" 
            value={data.contact.address}
            onChange={(e) => updateContact('address', e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white"
          />
        </div>
      </section>

      {/* Summary */}
      <section className="space-y-2">
        <h3 className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Profile Summary</h3>
        <textarea
          rows={4}
          value={data.profileSummary}
          onChange={(e) => onChange({ ...data, profileSummary: e.target.value })}
          className="w-full bg-slate-800 border border-slate-700 rounded px-2.5 py-1.5 text-xs text-white leading-normal"
        />
      </section>

      {/* Skills */}
      <section className="space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase text-cyan-400 tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4" /> Skills
          </h3>
          <button 
            onClick={handleAddSkill}
            className="text-[11px] bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 px-2 py-0.5 rounded flex items-center gap-1"
          >
            <Plus className="w-3 h-3" /> Add
          </button>
        </div>
        <div className="space-y-1.5">
          {data.skills.map((skill, index) => (
            <div key={index} className="flex gap-2">
              <input 
                type="text" 
                value={skill}
                onChange={(e) => handleUpdateSkill(index, e.target.value)}
                className="flex-1 bg-slate-800 border border-slate-700 rounded px-2 py-1 text-xs text-white"
              />
              <button 
                onClick={() => handleRemoveSkill(index)}
                className="text-red-400 hover:text-red-300 p-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Info */}
      <section className="space-y-2">
        <h3 className="text-xs font-bold uppercase text-cyan-400 tracking-wider">Personal Information</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="text-[10px] text-slate-400">Father's Name</label>
            <input 
              type="text" 
              value={data.personalInfo.fathersName}
              onChange={(e) => updatePersonalInfo('fathersName', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400">Mother's Name</label>
            <input 
              type="text" 
              value={data.personalInfo.mothersName}
              onChange={(e) => updatePersonalInfo('mothersName', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400">Date of Birth</label>
            <input 
              type="text" 
              value={data.personalInfo.dateOfBirth}
              onChange={(e) => updatePersonalInfo('dateOfBirth', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-xs"
            />
          </div>
          <div>
            <label className="text-[10px] text-slate-400">Marital Status</label>
            <input 
              type="text" 
              value={data.personalInfo.maritalStatus}
              onChange={(e) => updatePersonalInfo('maritalStatus', e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-white text-xs"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

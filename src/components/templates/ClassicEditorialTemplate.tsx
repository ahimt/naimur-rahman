import React from 'react';
import { ResumeData, ThemeColor } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
  theme: ThemeColor;
}

export const ClassicEditorialTemplate: React.FC<TemplateProps> = ({ data, theme }) => {
  return (
    <div 
      id="a4-print-area"
      className="w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] bg-white shadow-2xl p-9 flex flex-col justify-between overflow-hidden text-[10pt] leading-tight font-serif select-text"
      style={{ color: theme.text, backgroundColor: theme.bg }}
    >
      <div className="space-y-4">
        
        {/* Header */}
        <header className="text-center pb-4 border-b border-slate-300 space-y-1.5">
          <h1 className="text-[26pt] font-normal tracking-widest uppercase" style={{ color: theme.primary }}>
            {data.fullName}
          </h1>
          <p className="text-[11pt] font-sans font-semibold tracking-widest text-slate-600 uppercase">
            {data.jobTitle}
          </p>
          <div className="flex justify-center gap-4 text-[8.5pt] font-sans text-slate-600 pt-1">
            <span>📞 {data.contact.phone}</span>
            <span>•</span>
            <span>✉️ {data.contact.email}</span>
            <span>•</span>
            <span>📍 {data.contact.address}</span>
          </div>
        </header>

        {/* Profile Summary */}
        <p className="text-[9pt] italic text-slate-700 leading-relaxed text-justify px-4">
          "{data.profileSummary}"
        </p>

        {/* Sections */}
        <div className="space-y-4 font-sans">
          
          {/* Experience */}
          <section className="space-y-2">
            <h2 className="text-[11pt] font-serif font-bold uppercase tracking-widest pb-1 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
              Experience & Professional Objective
            </h2>
            <div className="space-y-2.5">
              {data.experience.map((exp) => (
                <div key={exp.id} className="space-y-0.5">
                  <div className="flex justify-between font-bold text-[9.5pt]">
                    <span style={{ color: theme.primary }}>{exp.role}</span>
                    <span className="text-[8pt] text-slate-500">{exp.period}</span>
                  </div>
                  {exp.summary && <p className="text-[8.5pt] text-slate-700">{exp.summary}</p>}
                  {exp.bullets && (
                    <ul className="list-disc pl-5 text-[8.5pt] text-slate-700 space-y-0.5">
                      {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education & Skills Grid */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-[11pt] font-serif font-bold uppercase tracking-widest pb-1 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                Education
              </h2>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id} className="text-[8.5pt]">
                    <div className="font-bold">{edu.degree}</div>
                    <div className="text-slate-600">{edu.institution} ({edu.year})</div>
                    <div className="text-slate-500 font-semibold">{edu.result}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills & Language */}
            <section className="space-y-2">
              <h2 className="text-[11pt] font-serif font-bold uppercase tracking-widest pb-1 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                Skills & Languages
              </h2>
              <div className="text-[8.5pt] space-y-2">
                <div>
                  <div className="font-bold text-slate-800 mb-1">Key Skills:</div>
                  <p className="text-slate-700 leading-relaxed">{data.skills.join(' • ')}</p>
                </div>
                <div>
                  <div className="font-bold text-slate-800 mb-0.5">Languages:</div>
                  <p className="text-slate-700">{data.languages.map(l => `${l.name} (${l.proficiency})`).join(', ')}</p>
                </div>
              </div>
            </section>

          </div>

          {/* Personal Info & References */}
          <div className="grid grid-cols-2 gap-6">
            <section className="space-y-1.5">
              <h2 className="text-[11pt] font-serif font-bold uppercase tracking-widest pb-1 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                Personal Details
              </h2>
              <div className="text-[8pt] space-y-0.5 text-slate-700">
                <div><span className="font-semibold">Father's Name:</span> {data.personalInfo.fathersName}</div>
                <div><span className="font-semibold">Mother's Name:</span> {data.personalInfo.mothersName}</div>
                <div><span className="font-semibold">DOB:</span> {data.personalInfo.dateOfBirth} ({data.personalInfo.religion})</div>
                <div><span className="font-semibold">Nationality:</span> {data.personalInfo.nationality}</div>
                <div><span className="font-semibold">Blood Group:</span> {data.personalInfo.bloodGroup} | NID: {data.personalInfo.nationalId}</div>
              </div>
            </section>

            <section className="space-y-1.5">
              <h2 className="text-[11pt] font-serif font-bold uppercase tracking-widest pb-1 border-b" style={{ color: theme.primary, borderColor: theme.primary }}>
                References
              </h2>
              <div className="space-y-1.5 text-[8pt]">
                {data.references.map((ref) => (
                  <div key={ref.id}>
                    <div className="font-bold">{ref.name}</div>
                    <div className="text-slate-600">{ref.designation}, {ref.organization}</div>
                    <div className="text-slate-500">Ph: {ref.phone}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>

      </div>

      <div className="text-center text-[7.5pt] text-slate-400 font-sans border-t border-slate-200 pt-2">
        Classic Editorial Template • Print-Perfect A4 Format
      </div>
    </div>
  );
};

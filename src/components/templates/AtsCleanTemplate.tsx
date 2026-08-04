import React from 'react';
import { ResumeData, ThemeColor } from '../../types/resume';

interface TemplateProps {
  data: ResumeData;
  theme: ThemeColor;
}

export const AtsCleanTemplate: React.FC<TemplateProps> = ({ data, theme }) => {
  return (
    <div 
      id="a4-print-area"
      className="w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] bg-white shadow-2xl p-9 flex flex-col justify-between overflow-hidden text-[10pt] leading-snug font-sans select-text"
      style={{ color: '#111827', backgroundColor: '#FFFFFF' }}
    >
      <div className="space-y-3.5">
        
        {/* Header */}
        <header className="text-center pb-3 border-b-2 border-black space-y-1">
          <h1 className="text-[22pt] font-extrabold uppercase tracking-tight text-black">
            {data.fullName}
          </h1>
          <p className="text-[10pt] font-bold text-gray-700 uppercase tracking-wide">
            {data.jobTitle}
          </p>
          <p className="text-[8.5pt] text-gray-600">
            {data.contact.phone} | {data.contact.email} | {data.contact.address}
          </p>
        </header>

        {/* Profile Summary */}
        <section>
          <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
            Professional Summary
          </h2>
          <p className="text-[8.8pt] text-gray-800 leading-relaxed text-justify">
            {data.profileSummary}
          </p>
        </section>

        {/* Experience */}
        <section className="space-y-2">
          <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
            Experience & Career Objective
          </h2>
          <div className="space-y-2.5">
            {data.experience.map((exp) => (
              <div key={exp.id} className="space-y-0.5">
                <div className="flex justify-between font-bold text-[9pt] text-black">
                  <span>{exp.role}</span>
                  <span className="text-[8pt] text-gray-600">{exp.period}</span>
                </div>
                {exp.summary && <p className="text-[8.5pt] text-gray-800">{exp.summary}</p>}
                {exp.bullets && (
                  <ul className="list-disc pl-5 text-[8.5pt] text-gray-800 space-y-0.5">
                    {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="space-y-1.5">
          <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
            Education
          </h2>
          <div className="space-y-1.5">
            {data.education.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline text-[8.5pt]">
                <div>
                  <span className="font-bold text-black">{edu.degree}</span> – <span className="text-gray-700">{edu.institution}</span>
                  {edu.boardGroup && <span className="text-gray-500 text-[8pt]"> ({edu.boardGroup})</span>}
                </div>
                <div className="font-semibold text-gray-900">{edu.year} | {edu.result}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Leadership */}
        <div className="grid grid-cols-2 gap-4">
          <section>
            <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
              Skills
            </h2>
            <p className="text-[8.5pt] text-gray-800">{data.skills.join(', ')}</p>
          </section>

          <section>
            <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
              Leadership & Co-Curricular
            </h2>
            {data.leadership.map((l) => (
              <div key={l.id} className="text-[8.5pt]">
                <span className="font-bold">{l.title}</span> – {l.organization} ({l.period})
              </div>
            ))}
          </section>
        </div>

        {/* Personal Details */}
        <section>
          <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
            Personal Information
          </h2>
          <div className="grid grid-cols-3 gap-1 text-[8pt] text-gray-800">
            <div><span className="font-semibold">Father:</span> {data.personalInfo.fathersName}</div>
            <div><span className="font-semibold">Mother:</span> {data.personalInfo.mothersName}</div>
            <div><span className="font-semibold">DOB:</span> {data.personalInfo.dateOfBirth}</div>
            <div><span className="font-semibold">Nationality:</span> {data.personalInfo.nationality}</div>
            <div><span className="font-semibold">Blood Group:</span> {data.personalInfo.bloodGroup}</div>
            <div><span className="font-semibold">NID:</span> {data.personalInfo.nationalId}</div>
          </div>
        </section>

        {/* References */}
        <section>
          <h2 className="text-[10pt] font-bold uppercase tracking-wider text-black border-b border-gray-400 pb-0.5 mb-1">
            References
          </h2>
          <div className="grid grid-cols-2 gap-2 text-[8pt]">
            {data.references.map((ref) => (
              <div key={ref.id}>
                <div className="font-bold text-black">{ref.name}</div>
                <div className="text-gray-700">{ref.designation}, {ref.organization}</div>
                <div className="text-gray-600">Phone: {ref.phone} | Email: {ref.email}</div>
              </div>
            ))}
          </div>
        </section>

      </div>

      <div className="text-center text-[7.5pt] text-gray-400 border-t border-gray-200 pt-1">
        Maximum ATS Compatibility • Single Column Format
      </div>
    </div>
  );
};

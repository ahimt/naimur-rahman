import React from 'react';
import { ResumeData, ThemeColor } from '../../types/resume';
import { Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Globe, User, BookOpen, Star } from 'lucide-react';

interface TemplateProps {
  data: ResumeData;
  theme: ThemeColor;
}

export const CorporateBannerTemplate: React.FC<TemplateProps> = ({ data, theme }) => {
  return (
    <div 
      id="a4-print-area"
      className="w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] bg-white shadow-2xl flex flex-col justify-between overflow-hidden text-[10pt] leading-tight select-text"
      style={{ color: theme.text, backgroundColor: theme.bg }}
    >
      <div className="space-y-4">
        
        {/* Full-width Executive Banner */}
        <header 
          className="p-7 text-white flex justify-between items-center"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="space-y-1">
            <h1 className="text-[24pt] font-black tracking-wide uppercase leading-none">{data.fullName}</h1>
            <p className="text-[11pt] font-medium tracking-widest text-slate-200 uppercase">{data.jobTitle}</p>
          </div>

          <div className="text-right text-[8.2pt] text-slate-200 space-y-1 bg-white/10 p-3 rounded border border-white/20">
            <div className="flex items-center justify-end gap-1.5"><Phone className="w-3 h-3 text-cyan-300" /> {data.contact.phone}</div>
            <div className="flex items-center justify-end gap-1.5"><Mail className="w-3 h-3 text-cyan-300" /> {data.contact.email}</div>
            <div className="flex items-center justify-end gap-1.5"><MapPin className="w-3 h-3 text-cyan-300" /> {data.contact.address}</div>
          </div>
        </header>

        {/* Content Body Container */}
        <div className="px-7 space-y-4">

          {/* Profile Summary */}
          <section className="bg-slate-50 p-3.5 rounded border-l-4 border-slate-300 space-y-1" style={{ borderLeftColor: theme.secondary }}>
            <h2 className="text-[9.5pt] font-bold uppercase tracking-wider text-slate-900">Executive Profile</h2>
            <p className="text-[8.8pt] text-slate-700 leading-relaxed text-justify">
              {data.profileSummary}
            </p>
          </section>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-12 gap-5">
            
            {/* Left 7 Columns */}
            <div className="col-span-7 space-y-4">
              
              {/* Experience */}
              <section className="space-y-2">
                <h2 className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1.5" style={{ color: theme.primary, borderColor: theme.secondary }}>
                  <Briefcase className="w-4 h-4" /> Experience & Career Track
                </h2>
                <div className="space-y-3">
                  {data.experience.map((exp) => (
                    <div key={exp.id} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-[9.2pt]" style={{ color: theme.primary }}>{exp.role}</span>
                        <span className="text-[8pt] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">{exp.period}</span>
                      </div>
                      {exp.summary && <p className="text-[8.5pt] text-slate-600">{exp.summary}</p>}
                      {exp.bullets && (
                        <ul className="list-disc pl-4 text-[8.5pt] text-slate-700 space-y-0.5">
                          {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Personal Details */}
              <section className="space-y-1.5">
                <h2 className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1.5" style={{ color: theme.primary, borderColor: theme.secondary }}>
                  <User className="w-4 h-4" /> Personal Profile
                </h2>
                <div className="grid grid-cols-2 gap-1.5 text-[8pt] bg-slate-50 p-2.5 rounded border border-slate-200">
                  <div><span className="font-semibold text-slate-500">Father:</span> {data.personalInfo.fathersName}</div>
                  <div><span className="font-semibold text-slate-500">Mother:</span> {data.personalInfo.mothersName}</div>
                  <div><span className="font-semibold text-slate-500">DOB:</span> {data.personalInfo.dateOfBirth}</div>
                  <div><span className="font-semibold text-slate-500">Status:</span> {data.personalInfo.maritalStatus}</div>
                  <div><span className="font-semibold text-slate-500">Nationality:</span> {data.personalInfo.nationality}</div>
                  <div><span className="font-semibold text-slate-500">Blood Group:</span> {data.personalInfo.bloodGroup}</div>
                  <div className="col-span-2"><span className="font-semibold text-slate-500">NID:</span> {data.personalInfo.nationalId}</div>
                  <div className="col-span-2"><span className="font-semibold text-slate-500">Address:</span> {data.personalInfo.permanentAddress}</div>
                </div>
              </section>

            </div>

            {/* Right 5 Columns */}
            <div className="col-span-5 space-y-4">
              
              {/* Education */}
              <section className="space-y-2">
                <h2 className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1.5" style={{ color: theme.primary, borderColor: theme.secondary }}>
                  <GraduationCap className="w-4 h-4" /> Education
                </h2>
                <div className="space-y-2">
                  {data.education.map((edu) => (
                    <div key={edu.id} className="p-2 bg-slate-50 rounded border border-slate-200">
                      <div className="flex justify-between text-[7.8pt] font-bold text-slate-500">
                        <span>{edu.year}</span>
                        <span className="text-slate-800">{edu.result}</span>
                      </div>
                      <div className="font-bold text-[8.8pt]" style={{ color: theme.primary }}>{edu.degree}</div>
                      <div className="text-[8.2pt] text-slate-600">{edu.institution}</div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="space-y-1.5">
                <h2 className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1.5" style={{ color: theme.primary, borderColor: theme.secondary }}>
                  <Award className="w-4 h-4" /> Professional Skills
                </h2>
                <div className="flex flex-wrap gap-1">
                  {data.skills.map((s, i) => (
                    <span key={i} className="px-2 py-0.5 text-[7.8pt] bg-slate-100 text-slate-800 font-medium rounded border border-slate-200">
                      {s}
                    </span>
                  ))}
                </div>
              </section>

              {/* References */}
              <section className="space-y-1.5">
                <h2 className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b-2 flex items-center gap-1.5" style={{ color: theme.primary, borderColor: theme.secondary }}>
                  <User className="w-4 h-4" /> References
                </h2>
                <div className="space-y-1.5 text-[8pt]">
                  {data.references.map((ref) => (
                    <div key={ref.id} className="p-2 bg-slate-50 rounded border border-slate-200 border-l-2" style={{ borderLeftColor: theme.secondary }}>
                      <div className="font-bold text-slate-900">{ref.name}</div>
                      <div className="text-slate-600">{ref.designation}, {ref.organization}</div>
                      <div className="text-slate-500">Ph: {ref.phone}</div>
                    </div>
                  ))}
                </div>
              </section>

            </div>

          </div>

        </div>

      </div>

      <div className="px-7 py-3 text-center text-[7.5pt] text-slate-400 border-t border-slate-200">
        A4 Print Quality Standard • Corporate Banner Template
      </div>
    </div>
  );
};

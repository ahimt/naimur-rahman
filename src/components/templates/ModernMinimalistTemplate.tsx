import React from 'react';
import { ResumeData, ThemeColor } from '../../types/resume';
import { Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Globe, User, BookOpen, Star } from 'lucide-react';

interface TemplateProps {
  data: ResumeData;
  theme: ThemeColor;
}

export const ModernMinimalistTemplate: React.FC<TemplateProps> = ({ data, theme }) => {
  return (
    <div 
      id="a4-print-area"
      className="w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] bg-white shadow-2xl p-8 flex flex-col justify-between overflow-hidden text-[10pt] leading-tight select-text"
      style={{ color: theme.text, backgroundColor: theme.bg }}
    >
      <div className="space-y-4">
        
        {/* Top Header */}
        <header className="flex justify-between items-center pb-4 border-b-2" style={{ borderColor: theme.primary }}>
          <div className="space-y-1">
            <h1 className="text-[24pt] font-extrabold uppercase tracking-tight" style={{ color: theme.primary }}>
              {data.fullName}
            </h1>
            <p className="text-[11pt] font-semibold tracking-wider text-slate-600 uppercase">
              {data.jobTitle}
            </p>
          </div>

          <div className="text-right text-[8.2pt] text-slate-600 space-y-1">
            <div className="flex items-center justify-end gap-1.5">
              <span>{data.contact.phone}</span> <Phone className="w-3 h-3 text-slate-400" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>{data.contact.email}</span> <Mail className="w-3 h-3 text-slate-400" />
            </div>
            <div className="flex items-center justify-end gap-1.5">
              <span>{data.contact.address}</span> <MapPin className="w-3 h-3 text-slate-400" />
            </div>
          </div>
        </header>

        {/* Profile Summary */}
        <p className="text-[8.8pt] text-slate-700 leading-relaxed text-justify bg-slate-50 p-3 rounded border border-slate-200">
          {data.profileSummary}
        </p>

        {/* Two-Column Layout Grid */}
        <div className="grid grid-cols-12 gap-5">
          
          {/* Main Left Column (7 cols) */}
          <div className="col-span-7 space-y-4">
            
            {/* Experience */}
            <section className="space-y-2">
              <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                <Briefcase className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Experience & Objectives
              </h2>
              <div className="space-y-3">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-[9pt]" style={{ color: theme.primary }}>{exp.role}</span>
                      <span className="text-[7.8pt] font-semibold text-slate-500">{exp.period}</span>
                    </div>
                    {exp.summary && <p className="text-[8.2pt] text-slate-600">{exp.summary}</p>}
                    {exp.bullets && (
                      <ul className="list-disc pl-4 text-[8.2pt] text-slate-700 space-y-0.5">
                        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Extra Curricular */}
            {data.extraCurricular.length > 0 && (
              <section className="space-y-1.5">
                <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                  <BookOpen className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Extra-Curricular
                </h2>
                <ul className="list-disc pl-4 text-[8.2pt] text-slate-700 space-y-0.5">
                  {data.extraCurricular.map((act, i) => <li key={i}>{act}</li>)}
                </ul>
              </section>
            )}

            {/* References */}
            <section className="space-y-1.5">
              <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                <User className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> References
              </h2>
              <div className="grid grid-cols-2 gap-2 text-[7.8pt]">
                {data.references.map((ref) => (
                  <div key={ref.id} className="p-2 bg-slate-50 rounded border border-slate-200">
                    <div className="font-bold text-slate-900">{ref.name}</div>
                    <div className="text-slate-600">{ref.designation}</div>
                    <div className="text-slate-500">{ref.organization}</div>
                    <div className="text-slate-500">Ph: {ref.phone}</div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar Right Column (5 cols) */}
          <div className="col-span-5 space-y-4">
            
            {/* Education */}
            <section className="space-y-2">
              <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                <GraduationCap className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Education
              </h2>
              <div className="space-y-2">
                {data.education.map((edu) => (
                  <div key={edu.id} className="p-2 bg-slate-50 rounded border border-slate-200 space-y-0.5">
                    <div className="flex justify-between text-[7.5pt] font-bold text-slate-500">
                      <span>{edu.year}</span>
                      <span className="text-emerald-700">{edu.result}</span>
                    </div>
                    <div className="font-bold text-[8.5pt]" style={{ color: theme.primary }}>{edu.degree}</div>
                    <div className="text-[8pt] text-slate-600">{edu.institution}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="space-y-1.5">
              <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                <Award className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Core Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {data.skills.map((s, i) => (
                  <span key={i} className="px-2 py-0.5 text-[7.5pt] bg-slate-100 text-slate-800 rounded font-medium border border-slate-200">
                    {s}
                  </span>
                ))}
              </div>
            </section>

            {/* Leadership */}
            {data.leadership.length > 0 && (
              <section className="space-y-1.5">
                <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                  <Star className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Leadership
                </h2>
                {data.leadership.map((l) => (
                  <div key={l.id} className="p-2 bg-slate-50 rounded border border-slate-200 text-[8pt]">
                    <div className="font-bold text-slate-900">{l.title}</div>
                    <div className="text-slate-600">{l.organization}</div>
                    <div className="text-slate-400 text-[7.5pt]">{l.period}</div>
                  </div>
                ))}
              </section>
            )}

            {/* Personal Details */}
            <section className="space-y-1.5">
              <h2 className="text-[10.5pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-1.5" style={{ color: theme.primary }}>
                <User className="w-3.5 h-3.5" style={{ color: theme.secondary }} /> Personal Details
              </h2>
              <div className="text-[7.8pt] space-y-1 bg-slate-50 p-2 rounded border border-slate-200">
                <div><span className="font-semibold text-slate-500">DOB:</span> {data.personalInfo.dateOfBirth}</div>
                <div><span className="font-semibold text-slate-500">Status:</span> {data.personalInfo.maritalStatus}</div>
                <div><span className="font-semibold text-slate-500">Nationality:</span> {data.personalInfo.nationality}</div>
                <div><span className="font-semibold text-slate-500">Religion:</span> {data.personalInfo.religion}</div>
                <div><span className="font-semibold text-slate-500">Blood Group:</span> {data.personalInfo.bloodGroup}</div>
                <div><span className="font-semibold text-slate-500">NID:</span> {data.personalInfo.nationalId}</div>
              </div>
            </section>

          </div>

        </div>

      </div>

      <div className="text-center text-[7.5pt] text-slate-400 pt-2 border-t border-slate-200">
        Standalone A4 Resume • Standard ATS Format
      </div>
    </div>
  );
};

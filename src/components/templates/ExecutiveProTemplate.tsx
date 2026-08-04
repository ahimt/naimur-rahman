import React from 'react';
import { ResumeData, ThemeColor } from '../../types/resume';
import { Phone, Mail, MapPin, Briefcase, GraduationCap, Award, Globe, User, BookOpen, ChevronRight, Star } from 'lucide-react';

interface TemplateProps {
  data: ResumeData;
  theme: ThemeColor;
}

export const ExecutiveProTemplate: React.FC<TemplateProps> = ({ data, theme }) => {
  return (
    <div 
      id="a4-print-area"
      className="w-[210mm] h-[297mm] min-h-[297mm] max-h-[297mm] bg-white shadow-2xl flex overflow-hidden text-[10.2pt] leading-tight select-text"
      style={{
        color: theme.text,
        backgroundColor: theme.bg
      }}
    >
      {/* LEFT SIDEBAR */}
      <aside 
        className="w-[70mm] p-6 flex flex-col justify-between shrink-0"
        style={{
          backgroundColor: theme.sidebarBg,
          color: theme.sidebarText
        }}
      >
        <div className="space-y-5">
          {/* Profile Photo */}
          {data.showPhoto && (
            <div className="flex justify-center mb-1">
              <div className="relative group">
                <img 
                  src={data.photoUrl || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"} 
                  alt={data.fullName}
                  className="w-24 h-24 rounded-full object-cover border-2 border-white/20 shadow-lg"
                />
              </div>
            </div>
          )}

          {/* Contact Details */}
          <section className="space-y-2">
            <h3 className="text-[10pt] font-bold uppercase tracking-wider text-white pb-1 border-b border-white/20 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-cyan-400" /> Contact
            </h3>
            <div className="space-y-2 text-[8.5pt] text-slate-200">
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{data.contact.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span className="break-all">{data.contact.email}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>{data.contact.address}</span>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-2">
            <h3 className="text-[10pt] font-bold uppercase tracking-wider text-white pb-1 border-b border-white/20 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> Education
            </h3>
            <div className="space-y-2.5">
              {data.education.map((edu) => (
                <div key={edu.id} className="space-y-0.5">
                  <div className="text-[7.8pt] font-bold text-cyan-300">{edu.year}</div>
                  <div className="text-[8.8pt] font-bold text-white leading-tight">{edu.degree}</div>
                  <div className="text-[8.2pt] text-slate-300">{edu.institution}</div>
                  {edu.boardGroup && (
                    <div className="text-[7.5pt] text-slate-400">{edu.boardGroup}</div>
                  )}
                  <div className="text-[7.8pt] font-semibold text-cyan-200">{edu.result}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="space-y-2">
            <h3 className="text-[10pt] font-bold uppercase tracking-wider text-white pb-1 border-b border-white/20 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-cyan-400" /> Key Skills
            </h3>
            <div className="flex flex-wrap gap-1">
              {data.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2 py-0.5 text-[7.8pt] rounded bg-white/10 text-slate-100 border border-white/15"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Leadership */}
          {data.leadership.length > 0 && (
            <section className="space-y-2">
              <h3 className="text-[10pt] font-bold uppercase tracking-wider text-white pb-1 border-b border-white/20 flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-cyan-400" /> Leadership
              </h3>
              {data.leadership.map((lead) => (
                <div key={lead.id} className="space-y-0.5 text-[8.2pt]">
                  <div className="font-bold text-white">{lead.title}</div>
                  <div className="text-slate-300">{lead.organization}</div>
                  <div className="text-cyan-300 text-[7.5pt]">{lead.period}</div>
                </div>
              ))}
            </section>
          )}

          {/* Languages */}
          <section className="space-y-2">
            <h3 className="text-[10pt] font-bold uppercase tracking-wider text-white pb-1 border-b border-white/20 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-cyan-400" /> Language
            </h3>
            <div className="space-y-1 text-[8.2pt]">
              {data.languages.map((lang, i) => (
                <div key={i} className="flex justify-between border-b border-white/10 pb-0.5">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-cyan-300 font-semibold">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer info tag */}
        <div className="text-[7pt] text-slate-400 text-center border-t border-white/10 pt-2">
          ATS Compliant • Print Ready A4
        </div>
      </aside>

      {/* RIGHT MAIN SECTION */}
      <main className="flex-1 p-7 flex flex-col justify-between overflow-hidden">
        <div className="space-y-4">
          
          {/* Header Banner */}
          <header className="pb-3 border-b-2" style={{ borderColor: theme.primary }}>
            <h1 className="text-[22pt] font-black uppercase tracking-wider leading-none" style={{ color: theme.primary }}>
              {data.fullName}
            </h1>
            <p className="text-[10.5pt] font-semibold uppercase tracking-widest mt-1" style={{ color: theme.secondary }}>
              {data.jobTitle}
            </p>
          </header>

          {/* Profile Summary */}
          <section className="space-y-1">
            <p className="text-[8.8pt] text-slate-700 text-justify leading-relaxed">
              {data.profileSummary}
            </p>
          </section>

          {/* Experience & Career Objective */}
          <section className="space-y-2">
            <h2 
              className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-2"
              style={{ color: theme.primary, borderColor: '#E2E8F0' }}
            >
              <Briefcase className="w-4 h-4" style={{ color: theme.secondary }} /> Experience & Career Objective
            </h2>

            <div className="space-y-3">
              {data.experience.map((exp) => (
                <div key={exp.id} className="relative pl-3.5 border-l-2 space-y-1" style={{ borderColor: theme.secondary }}>
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-[9.5pt]" style={{ color: theme.primary }}>{exp.role}</span>
                    <span className="text-[8pt] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {exp.period}
                    </span>
                  </div>
                  {exp.summary && (
                    <p className="text-[8.5pt] text-slate-700 leading-normal">{exp.summary}</p>
                  )}
                  {exp.bullets && exp.bullets.length > 0 && (
                    <ul className="list-disc pl-4 space-y-0.5 text-[8.5pt] text-slate-700">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Extra Curricular Activities */}
          {data.extraCurricular.length > 0 && (
            <section className="space-y-1.5">
              <h2 
                className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-2"
                style={{ color: theme.primary, borderColor: '#E2E8F0' }}
              >
                <BookOpen className="w-4 h-4" style={{ color: theme.secondary }} /> Extra-Curricular Activities
              </h2>
              <ul className="list-disc pl-5 space-y-0.5 text-[8.5pt] text-slate-700">
                {data.extraCurricular.map((act, idx) => (
                  <li key={idx}>{act}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Personal Information */}
          <section className="space-y-1.5">
            <h2 
              className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-2"
              style={{ color: theme.primary, borderColor: '#E2E8F0' }}
            >
              <User className="w-4 h-4" style={{ color: theme.secondary }} /> Personal Information
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 bg-slate-50 p-2.5 rounded border border-slate-200 text-[8.2pt]">
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Father's Name:</span> <span className="font-medium text-slate-800">{data.personalInfo.fathersName}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Mother's Name:</span> <span className="font-medium text-slate-800">{data.personalInfo.mothersName}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Date of Birth:</span> <span className="font-medium text-slate-800">{data.personalInfo.dateOfBirth}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Marital Status:</span> <span className="font-medium text-slate-800">{data.personalInfo.maritalStatus}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Nationality:</span> <span className="font-medium text-slate-800">{data.personalInfo.nationality}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Religion:</span> <span className="font-medium text-slate-800">{data.personalInfo.religion}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">Blood Group:</span> <span className="font-medium text-slate-800">{data.personalInfo.bloodGroup}</span></div>
              <div><span className="font-semibold text-slate-500 w-28 inline-block">National ID:</span> <span className="font-medium text-slate-800">{data.personalInfo.nationalId}</span></div>
              <div className="col-span-2"><span className="font-semibold text-slate-500 w-28 inline-block">Permanent Address:</span> <span className="font-medium text-slate-800">{data.personalInfo.permanentAddress}</span></div>
            </div>
          </section>

          {/* References */}
          <section className="space-y-1.5">
            <h2 
              className="text-[11pt] font-bold uppercase tracking-wider pb-1 border-b flex items-center gap-2"
              style={{ color: theme.primary, borderColor: '#E2E8F0' }}
            >
              <User className="w-4 h-4" style={{ color: theme.secondary }} /> References
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {data.references.map((ref) => (
                <div 
                  key={ref.id} 
                  className="bg-slate-50 p-2.5 rounded border border-slate-200 border-l-4 text-[8pt] space-y-0.5"
                  style={{ borderLeftColor: theme.secondary }}
                >
                  <div className="font-bold text-[8.8pt]" style={{ color: theme.primary }}>{ref.name}</div>
                  <div className="text-slate-600 font-medium">{ref.designation}, {ref.organization}</div>
                  <div className="text-slate-500">Phone: {ref.phone}</div>
                  <div className="text-slate-500">Email: {ref.email}</div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

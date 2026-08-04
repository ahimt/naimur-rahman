export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedin?: string;
  github?: string;
  website?: string;
}

export interface EducationItem {
  id: string;
  year: string;
  degree: string;
  institution: string;
  boardGroup?: string;
  result: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  companyOrCategory: string;
  summary?: string;
  bullets?: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  organization: string;
  period: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export interface PersonalInfo {
  fathersName: string;
  mothersName: string;
  dateOfBirth: string;
  maritalStatus: string;
  nationality: string;
  religion: string;
  bloodGroup: string;
  nationalId: string;
  permanentAddress: string;
}

export interface ReferenceItem {
  id: string;
  name: string;
  designation: string;
  organization: string;
  phone: string;
  email: string;
}

export interface ResumeData {
  fullName: string;
  jobTitle: string;
  profileSummary: string;
  photoUrl?: string;
  showPhoto: boolean;
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  extraCurricular: string[];
  skills: string[];
  leadership: LeadershipItem[];
  languages: LanguageItem[];
  personalInfo: PersonalInfo;
  references: ReferenceItem[];
}

export type TemplateId = 'executive-pro' | 'modern-minimal' | 'corporate-banner' | 'classic-editorial' | 'ats-clean';

export interface ThemeColor {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  bg: string;
  sidebarBg: string;
  sidebarText: string;
}

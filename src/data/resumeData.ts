import { ResumeData, ThemeColor } from '../types/resume';

export const initialResumeData: ResumeData = {
  fullName: "NAIMUR RAHMAN",
  jobTitle: "TEXTILE ENGINEERING (APPAREL) GRADUATE",
  showPhoto: true,
  photoUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
  profileSummary: "Motivated and detail-oriented B.Sc. in Textile Engineering (Apparel) graduate with a strong academic foundation in apparel manufacturing, garment production processes, and quality standards. Experienced in student leadership as Vice President of the City University Textile Club, demonstrating excellent leadership, communication, event management, and teamwork skills. Passionate about contributing to the growth of the textile and apparel industry through continuous learning and professional excellence.",
  contact: {
    phone: "01771092543",
    email: "naimurr183@gmail.com",
    address: "Road- 02, Block- G, Mirpur-2, Dhaka- 1216"
  },
  education: [
    {
      id: "edu-1",
      year: "2025",
      degree: "B.Sc. in Textile Engineering (Apparel)",
      institution: "City University",
      result: "CGPA: 3.19"
    },
    {
      id: "edu-2",
      year: "2020",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Sristi College of Tangail",
      boardGroup: "Dhaka Board | Science Group",
      result: "GPA: 4.33 out of 5.00"
    },
    {
      id: "edu-3",
      year: "2018",
      degree: "Secondary School Certificate (SSC)",
      institution: "Jadunath Pilot High School and College",
      boardGroup: "Dhaka Board | Science Group",
      result: "GPA: 4.22 out of 5.00"
    }
  ],
  experience: [
    {
      id: "exp-1",
      period: "2025 – Present",
      role: "Seeking an Entry-Level Position",
      companyOrCategory: "Textile & Apparel Industry",
      summary: "Actively seeking an opportunity to begin a professional career in the textile and apparel industry where I can apply my academic knowledge, learn from experienced professionals, and contribute to organizational success."
    },
    {
      id: "exp-2",
      period: "2020 – 2025",
      role: "Academic Projects & Training",
      companyOrCategory: "City University & Industrial Workshops",
      bullets: [
        "Completed academic projects on apparel manufacturing and production processes.",
        "Participated in workshops and industrial programs related to textile engineering.",
        "Gained knowledge on fabric properties, garment construction, quality control, and production planning."
      ]
    },
    {
      id: "exp-3",
      period: "2018 – 2020",
      role: "Volunteer & Community Activities",
      companyOrCategory: "Social & Co-Curricular Involvement",
      bullets: [
        "Volunteered in social and community service events.",
        "Actively participated in university programs and cultural activities.",
        "Developed leadership, communication, and teamwork skills through various co-curricular involvements."
      ]
    }
  ],
  extraCurricular: [
    "Active participation in various workshop, programs arranged by textile industries.",
    "Working as a volunteer in different social events.",
    "Voluntary work in university and community programs."
  ],
  skills: [
    "Microsoft Word",
    "Microsoft Excel",
    "Microsoft PowerPoint",
    "Internet Browsing",
    "Basic Documentation",
    "Report Preparation",
    "Data Management",
    "Quick Learner"
  ],
  leadership: [
    {
      id: "lead-1",
      title: "Vice President",
      organization: "City University Textile Club",
      period: "2024 – 2025"
    }
  ],
  languages: [
    { name: "Bengali", proficiency: "Native" },
    { name: "English", proficiency: "Good" }
  ],
  personalInfo: {
    fathersName: "Abdul Kuddus Miah",
    mothersName: "Nasima Akter",
    dateOfBirth: "01 October 2002",
    maritalStatus: "Single",
    nationality: "Bangladeshi",
    religion: "Islam",
    bloodGroup: "B+",
    nationalId: "7818381968",
    permanentAddress: "Nagarpur, Tangail-1936, Bangladesh"
  },
  references: [
    {
      id: "ref-1",
      name: "Jarin Yesmin",
      designation: "Assistant Professor",
      organization: "City University",
      phone: "01771777582",
      email: "N/A"
    },
    {
      id: "ref-2",
      name: "Abdullah Bin Atiq",
      designation: "Merchandiser",
      organization: "East West Industrial Park",
      phone: "01790-418893",
      email: "atiq@eastwestindpark.com"
    }
  ]
};

export const themeColors: ThemeColor[] = [
  {
    id: "navy-slate",
    name: "Executive Navy & Charcoal",
    primary: "#0F2027",
    secondary: "#203A43",
    accent: "#2C5364",
    text: "#1E293B",
    bg: "#FFFFFF",
    sidebarBg: "#0B192C",
    sidebarText: "#F8FAFC"
  },
  {
    id: "classic-monochrome",
    name: "Corporate Onyx & Slate",
    primary: "#18181B",
    secondary: "#3F3F46",
    accent: "#52525B",
    text: "#09090B",
    bg: "#FFFFFF",
    sidebarBg: "#18181B",
    sidebarText: "#FAFAFA"
  },
  {
    id: "emerald-executive",
    name: "Forest Emerald & Cream",
    primary: "#064E3B",
    secondary: "#047857",
    accent: "#059669",
    text: "#111827",
    bg: "#FFFFFF",
    sidebarBg: "#022C22",
    sidebarText: "#ECFDF5"
  },
  {
    id: "royal-burgundy",
    name: "Deep Burgundy & Warm Ivory",
    primary: "#4A0E17",
    secondary: "#7A1C29",
    accent: "#9B2C3B",
    text: "#1F1D1D",
    bg: "#FFFFFF",
    sidebarBg: "#33080E",
    sidebarText: "#FFF5F5"
  },
  {
    id: "sapphire-modern",
    name: "Sapphire Blue & Slate",
    primary: "#1E3A8A",
    secondary: "#2563EB",
    accent: "#3B82F6",
    text: "#0F172A",
    bg: "#FFFFFF",
    sidebarBg: "#172554",
    sidebarText: "#EFF6FF"
  }
];

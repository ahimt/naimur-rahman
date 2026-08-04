import JSZip from 'jszip';
import { ResumeData, ThemeColor } from '../types/resume';

export async function generateStandaloneZip(data: ResumeData, theme: ThemeColor, activeTemplate: string): Promise<Blob> {
  const zip = new JSZip();

  // 1. Create css/styles.css
  const cssContent = `/* 
  ==================================================
  A4 PREMIUM RESUME STYLESHEET
  Generated for Standalone Offline A4 Printing & ATS
  ==================================================
*/

:root {
  --primary-color: ${theme.primary};
  --secondary-color: ${theme.secondary};
  --accent-color: ${theme.accent};
  --text-dark: ${theme.text};
  --text-muted: #64748B;
  --bg-main: ${theme.bg};
  --sidebar-bg: ${theme.sidebarBg};
  --sidebar-text: ${theme.sidebarText};
  --border-light: #E2E8F0;
  --badge-bg: #F1F5F9;
  --font-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
}

@page {
  size: A4 portrait;
  margin: 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  width: 210mm;
  height: 297mm;
  font-family: var(--font-body);
  color: var(--text-dark);
  background-color: #E2E8F0;
  line-height: 1.45;
  font-size: 10.5pt;
  -webkit-font-smoothing: antialiased;
}

.resume-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 20px 0;
}

.a4-page {
  width: 210mm;
  min-height: 297mm;
  height: 297mm;
  background: var(--bg-main);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  overflow: hidden;
  position: relative;
}

.resume-sidebar {
  width: 72mm;
  background-color: var(--sidebar-bg);
  color: var(--sidebar-text);
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-photo-container {
  text-align: center;
  margin-bottom: 5px;
}

.profile-photo {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}

.sidebar-title {
  font-size: 11pt;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #FFFFFF;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 5px;
  margin-bottom: 10px;
}

.sidebar-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 8.5pt;
  color: #E2E8F0;
  word-break: break-word;
}

.edu-item {
  margin-bottom: 10px;
}

.edu-year {
  font-size: 8pt;
  font-weight: 600;
  color: #38BDF8;
}

.edu-degree {
  font-size: 9pt;
  font-weight: 700;
  color: #FFFFFF;
  line-height: 1.2;
}

.edu-school {
  font-size: 8.5pt;
  color: #CBD5E1;
}

.edu-result {
  font-size: 8pt;
  color: #94A3B8;
  font-weight: 600;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.skill-badge {
  background-color: rgba(255, 255, 255, 0.1);
  color: #F1F5F9;
  font-size: 7.8pt;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.lang-item {
  display: flex;
  justify-content: space-between;
  font-size: 8.5pt;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.15);
  padding-bottom: 4px;
}

.lang-name {
  color: #FFFFFF;
  font-weight: 600;
}

.lang-level {
  color: #38BDF8;
}

.resume-main {
  flex: 1;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  background-color: var(--bg-main);
}

.header-block {
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 12px;
}

.applicant-name {
  font-size: 24pt;
  font-weight: 800;
  color: var(--primary-color);
  letter-spacing: 1px;
  text-transform: uppercase;
  line-height: 1.1;
}

.applicant-title {
  font-size: 11pt;
  font-weight: 600;
  color: var(--secondary-color);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 4px;
}

.section-heading {
  font-size: 12pt;
  font-weight: 700;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1.5px solid var(--border-light);
  padding-bottom: 4px;
  margin-bottom: 10px;
}

.profile-summary-text {
  font-size: 9.2pt;
  color: #334155;
  text-align: justify;
  line-height: 1.5;
}

.timeline-item {
  position: relative;
  padding-left: 14px;
  margin-bottom: 12px;
  border-left: 2px solid var(--secondary-color);
}

.timeline-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2px;
}

.timeline-role {
  font-size: 10pt;
  font-weight: 700;
  color: var(--primary-color);
}

.timeline-period {
  font-size: 8.5pt;
  font-weight: 600;
  color: var(--secondary-color);
  background: var(--badge-bg);
  padding: 1px 6px;
  border-radius: 3px;
}

.timeline-bullets {
  padding-left: 16px;
  margin-top: 4px;
}

.timeline-bullets li {
  font-size: 8.8pt;
  color: #334155;
  margin-bottom: 3px;
}

.personal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 16px;
  font-size: 8.5pt;
  background-color: #F8FAFC;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid var(--border-light);
}

.personal-row {
  display: flex;
}

.personal-label {
  width: 110px;
  font-weight: 600;
  color: #64748B;
}

.personal-value {
  color: var(--text-dark);
  font-weight: 500;
}

.reference-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.reference-card {
  background-color: #F8FAFC;
  padding: 10px;
  border-radius: 6px;
  border-left: 3px solid var(--secondary-color);
  border: 1px solid var(--border-light);
  border-left-width: 3px;
}

.ref-name {
  font-size: 9.5pt;
  font-weight: 700;
  color: var(--primary-color);
}

.ref-desc {
  font-size: 8.5pt;
  color: #475569;
}

.ref-contact {
  font-size: 8pt;
  color: #64748B;
  margin-top: 4px;
}

@media print {
  body {
    background: none;
    width: 210mm;
    height: 297mm;
  }
  .resume-wrapper {
    padding: 0;
  }
  .a4-page {
    box-shadow: none;
    width: 210mm;
    height: 297mm;
  }
}
`;

  zip.file("css/styles.css", cssContent);

  // 2. Create css/bootstrap.min.css
  const bootstrapCss = `/*!
 * Local Bootstrap v5.3.3 Core Utility Base
 */
*, ::after, ::before { box-sizing: border-box; }
.container-fluid { width: 100%; padding-right: 0.75rem; padding-left: 0.75rem; }
.row { display: flex; flex-wrap: wrap; margin-right: -0.5rem; margin-left: -0.5rem; }
.col-4 { flex: 0 0 auto; width: 33.33333333%; }
.col-8 { flex: 0 0 auto; width: 66.66666667%; }
.col-6 { flex: 0 0 auto; width: 50%; }
.col-12 { flex: 0 0 auto; width: 100%; }
.d-flex { display: flex !important; }
.flex-column { flex-direction: column !important; }
.justify-content-between { justify-content: space-between !important; }
.align-items-center { align-items: center !important; }
.fw-bold { font-weight: 700 !important; }
.text-uppercase { text-transform: uppercase !important; }
`;
  zip.file("css/bootstrap.min.css", bootstrapCss);

  // 3. Create page1.html
  const page1Html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.fullName} - Resume</title>
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>

  <div class="resume-wrapper">
    <main class="a4-page" id="resume-canvas">
      
      <aside class="resume-sidebar">
        ${data.showPhoto ? `
        <div class="profile-photo-container">
          <img src="${data.photoUrl || 'assets/images/profile.jpg'}" alt="${data.fullName}" class="profile-photo">
        </div>
        ` : ''}

        <section class="sidebar-section">
          <h2 class="sidebar-title">Contact</h2>
          <div class="contact-item"><span>📞 ${data.contact.phone}</span></div>
          <div class="contact-item"><span>✉️ ${data.contact.email}</span></div>
          <div class="contact-item"><span>📍 ${data.contact.address}</span></div>
        </section>

        <section class="sidebar-section">
          <h2 class="sidebar-title">Education</h2>
          ${data.education.map(edu => `
          <div class="edu-item">
            <div class="edu-year">${edu.year}</div>
            <div class="edu-degree">${edu.degree}</div>
            <div class="edu-school">${edu.institution}</div>
            ${edu.boardGroup ? `<div class="edu-school" style="font-size:7.8pt;">${edu.boardGroup}</div>` : ''}
            <div class="edu-result">${edu.result}</div>
          </div>
          `).join('')}
        </section>

        <section class="sidebar-section">
          <h2 class="sidebar-title">Skills</h2>
          <div class="skill-list">
            ${data.skills.map(s => `<span class="skill-badge">${s}</span>`).join('')}
          </div>
        </section>

        ${data.leadership.length > 0 ? `
        <section class="sidebar-section">
          <h2 class="sidebar-title">Leadership</h2>
          ${data.leadership.map(l => `
            <div style="font-size: 8.8pt; color: #FFFFFF; font-weight: 700;">${l.title}</div>
            <div style="font-size: 8.2pt; color: #CBD5E1;">${l.organization}</div>
            <div style="font-size: 7.8pt; color: #38BDF8;">${l.period}</div>
          `).join('')}
        </section>
        ` : ''}

        <section class="sidebar-section">
          <h2 class="sidebar-title">Languages</h2>
          ${data.languages.map(l => `
          <div class="lang-item">
            <span class="lang-name">${l.name}</span>
            <span class="lang-level">${l.proficiency}</span>
          </div>
          `).join('')}
        </section>
      </aside>

      <section class="resume-main">
        <header class="header-block">
          <h1 class="applicant-name">${data.fullName}</h1>
          <p class="applicant-title">${data.jobTitle}</p>
        </header>

        <article>
          <p class="profile-summary-text">${data.profileSummary}</p>
        </article>

        <section>
          <h2 class="section-heading">Experience & Career Objective</h2>
          ${data.experience.map(exp => `
          <div class="timeline-item">
            <div class="timeline-header">
              <span class="timeline-role">${exp.role}</span>
              <span class="timeline-period">${exp.period}</span>
            </div>
            ${exp.summary ? `<p style="font-size: 8.8pt; color: #334155; margin-top: 3px;">${exp.summary}</p>` : ''}
            ${exp.bullets && exp.bullets.length > 0 ? `
            <ul class="timeline-bullets">
              ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            ` : ''}
          </div>
          `).join('')}
        </section>

        ${data.extraCurricular.length > 0 ? `
        <section>
          <h2 class="section-heading">Extra-Curricular Activities</h2>
          <ul class="timeline-bullets">
            ${data.extraCurricular.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </section>
        ` : ''}

        <section>
          <h2 class="section-heading">Personal Information</h2>
          <div class="personal-grid">
            <div class="personal-row"><span class="personal-label">Father's Name:</span><span class="personal-value">${data.personalInfo.fathersName}</span></div>
            <div class="personal-row"><span class="personal-label">Mother's Name:</span><span class="personal-value">${data.personalInfo.mothersName}</span></div>
            <div class="personal-row"><span class="personal-label">Date of Birth:</span><span class="personal-value">${data.personalInfo.dateOfBirth}</span></div>
            <div class="personal-row"><span class="personal-label">Marital Status:</span><span class="personal-value">${data.personalInfo.maritalStatus}</span></div>
            <div class="personal-row"><span class="personal-label">Nationality:</span><span class="personal-value">${data.personalInfo.nationality}</span></div>
            <div class="personal-row"><span class="personal-label">Religion:</span><span class="personal-value">${data.personalInfo.religion}</span></div>
            <div class="personal-row"><span class="personal-label">Blood Group:</span><span class="personal-value">${data.personalInfo.bloodGroup}</span></div>
            <div class="personal-row"><span class="personal-label">National ID:</span><span class="personal-value">${data.personalInfo.nationalId}</span></div>
            <div class="personal-row" style="grid-column: span 2;"><span class="personal-label">Permanent Address:</span><span class="personal-value">${data.personalInfo.permanentAddress}</span></div>
          </div>
        </section>

        <section>
          <h2 class="section-heading">References</h2>
          <div class="reference-grid">
            ${data.references.map(ref => `
            <div class="reference-card">
              <div class="ref-name">${ref.name}</div>
              <div class="ref-desc">${ref.designation}, ${ref.organization}</div>
              <div class="ref-contact">Phone: ${ref.phone}</div>
              <div class="ref-contact">Email: ${ref.email}</div>
            </div>
            `).join('')}
          </div>
        </section>

      </section>

    </main>
  </div>

</body>
</html>
`;
  zip.file("page1.html", page1Html);

  // 4. Create README.txt
  const readmeContent = `==================================================
${data.fullName} - STANDALONE OFFLINE RESUME PACKAGE
==================================================

This package was generated automatically by A4 Resume Designer.

INSTRUCTIONS:
1. Extract all files to a folder.
2. Double-click "page1.html" to view in any web browser.
3. No internet connection, server, npm, or build tool is needed.
4. Press Ctrl+P (or Cmd+P) -> Save as PDF (A4 size, zero margins) to print.
`;
  zip.file("README.txt", readmeContent);

  return await zip.generateAsync({ type: 'blob' });
}

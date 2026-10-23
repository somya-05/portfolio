# Somya Bansal - Software Engineer Portfolio

A modern, responsive, high-performance portfolio website built with **React**, **Vite**, and **Tailwind CSS**, tailored for **Somya Bansal** (Software Engineer specializing in REST APIs, Scalable Microservices on AWS, and Agentic AI).

---

## 🚀 Live Features

- **Interactive Developer Hero**:
  - Highlights Somya's background: 2.5+ years experience, 500+ hours saved, 40% security enhancement, and AWS Certified Cloud Practitioner.
  - Interactive Terminal profile simulator showcasing real-time stack and metrics.
  - One-click copy for email and direct links to GitHub & LinkedIn.
- **Experience Timeline**:
  - **Moody's Ratings** (Associate Software Engineer, Jan 2024 - Present): REST APIs for automated user provisioning, AWS Lambda ESMA compliance pipeline, Agentic AI & MCP server automation, 10k+ press release pipeline, and Angular upgrade resolving 25+ CVEs (Snyk).
  - **Dell Technologies** (Data Analyst & Automation Intern, Jun 2023 - Jul 2023): 1M+ supply chain rows analyzed, Power BI simulation for predictive fault detection, and 40M+ rows incremental loading function in PostgreSQL.
- **Featured Projects**:
  - **Medical RAG Assistant**: Full-stack AI app utilizing ChromaDB, Groq LLM, and Streamlit across 400+ medical symptoms.
  - **Urban Tails: Pet Adoption Platform**: Android (XML), Java, and Firebase real-time data sync.
  - **Agentic AI Rating Workflow Automation**: Enterprise Model Context Protocol (MCP) server & agent eliminating 70+ hours of manual effort.
  - **ESMA Issuer Default-Status Pipeline**: Event-driven AWS Lambda compliance engine.
- **Interactive Technical Arsenal**:
  - Real-time search filter across Languages, Frameworks, Cloud, Databases, and AI Tools.
  - Categorized proficiency bars and verification badges.
- **Credentials & Honors**:
  - **Education**: Bachelor of Technology in Information Technology from Manipal Institute of Technology (CGPA: 8.59).
  - **Certifications**: AWS Certified Cloud Practitioner (2025).
  - **Awards**: Moody's Bronze Award (Q1 2025 Recognition).
- **Leadership & Community**:
  - Mentor in Moody's **EmpowHER** program (Women in STEM).
  - Web Master at **ACM-W Manipal** chapter.
- **Integrated Resume Viewer**:
  - Built-in PDF modal viewer and direct download button for `Somya_Bansal_CV.pdf`.
- **Contact & Connect**:
  - Interactive contact form with mailto client integration.
  - One-click copy for email (`somyabansal68@gmail.com`) and phone (`+91 8744919622`).

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS
- **Icons**: Lucide React
- **Typography**: Inter & Fira Code (Google Fonts)

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Production Build
```bash
npm run build
```
The production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── Somya_Bansal_CV.pdf      # Resume PDF for direct download & preview
│   └── vite.svg                 # SB monogram brand icon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with blur & mobile drawer
│   │   ├── Hero.jsx             # Hero section with interactive terminal
│   │   ├── About.jsx            # Core engineering pillars & quick facts
│   │   ├── Experience.jsx       # Interactive work experience timeline
│   │   ├── Projects.jsx         # Filterable project showcase & GitHub links
│   │   ├── Skills.jsx           # Technical skills matrix with real-time search
│   │   ├── Credentials.jsx      # MIT Education, AWS cert & Bronze award
│   │   ├── Leadership.jsx       # EmpowHER & ACM-W community impact
│   │   ├── Contact.jsx          # Contact info, copy buttons & message form
│   │   ├── Footer.jsx           # Links, copyright & back-to-top button
│   │   └── ResumeModal.jsx      # Built-in modal PDF viewer
│   ├── data/
│   │   └── portfolioData.js     # Single source of truth for portfolio content
│   ├── App.jsx                  # Main page layout
│   ├── index.css                # Tailwind directives & custom utilities
│   └── main.jsx                 # React root entry
├── index.html                   # HTML template & fonts
├── tailwind.config.js           # Tailwind theme extension
├── vite.config.js               # Vite configuration
└── package.json                 # Project dependencies & scripts
```

---

## 🌐 Deployment

You can deploy the `dist/` directory instantly to:
- **Vercel**: Run `npx vercel`
- **Netlify**: Drag and drop the `dist/` folder or link GitHub repo
- **GitHub Pages**: Build and publish `dist` branch

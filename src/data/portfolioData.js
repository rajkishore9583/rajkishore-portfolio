export const portfolioData = {
  personal: {
    name: "Rajkishore Pradhan",
    monogram: "RP",
    title: "Electrical & Industrial Automation Engineer",
    specialization: "PLC & SCADA Specialist",
    email: "rajkishorepradhan59@gmail.com",
    phone: "+91 8117959869",
    location: "Balasore, Odisha, India",
    linkedin: "https://www.linkedin.com/in/rajkishore-pradhan-ab74042b4/",
    github: "https://github.com/rajkishore9583",
    resumeUrl: "https://drive.google.com/file/d/1Zoo5OQQ-zb73UIaeyjr5bvW9vIy0j0qE/view?usp=sharing",
    statusBadge: "Available for Industrial Automation & Core Electrical Roles",
    heroHeadline: "Engineering Intelligent Automation, Industrial Control Systems & Smart Enterprise Solutions.",
    heroSubtext: "B.Tech Electrical Engineering student passionate about PLC programming, SCADA/HMI visualization, E-CAD, and bridging industrial automation with Python and SAP ecosystems.",
    typingRoles: [
      "Industrial Automation Specialist",
      "PLC & SCADA Engineer",
      "Control Circuit & E-CAD Designer",
      "Quality Assurance & Testing Engineer",
      "Python & SAP Enterprise Integrator"
    ],
    avatar: "/images/bg_1.png",
    profilePhoto: "/images/about-me.png",
  },

  stats: [
    { label: "Academic CGPA", value: "8.81", suffix: "/10", sub: "Diploma Engineering Distinction" },
    { label: "Industrial Quality Exp", value: "1+", suffix: "Year", sub: "Dr. Reddy's Pharma SEZ Unit" },
    { label: "Core Competencies", value: "3+", suffix: "Domains", sub: "Automation, Quality & Enterprise" },
    { label: "Technical Traineeships", value: "5+", suffix: "Trained", sub: "SDI, OPTCL, InternPe & BCET" }
  ],

  about: {
    bio: [
      "I am a driven Electrical & Industrial Automation Engineer and B.Tech student with extensive hands-on experience across industrial automation, electrical protection, circuit design, and pharmaceutical quality engineering.",
      "My professional foundation includes over a year at Dr. Reddy's Laboratories (SEZ Plant), where I verified critical manufacturing processes, tested electrical control components, and ensured stringent regulatory compliance. I complement this with intensive programming and simulation training in PLC ladder logic, SCADA/HMI interfaces, and AutoCAD Electrical at the Skill Development Institute (SDI), Bhubaneswar.",
      "With a strong interest in cyber-physical systems, I actively bridge traditional factory floor automation with modern software tools like Python scripting, data analysis, and SAP S/4HANA enterprise workflows."
    ],
    languages: [
      { name: "English", level: "Professional Working Proficiency", flag: "🌐" },
      { name: "Hindi", level: "Full Professional Fluency", flag: "🇮🇳" },
      { name: "Odia", level: "Native Proficiency", flag: "🌾" }
    ],
    highlights: [
      {
        icon: "Cpu",
        title: "Industrial Automation & Controls",
        desc: "Ladder logic programming, SCADA/HMI screen design, VFD motor control, sensor interfacing, and closed-loop feedback systems.",
        tags: ["PLC", "SCADA", "HMI", "Motor Control", "Sensors", "Relay Logic"]
      },
      {
        icon: "ShieldCheck",
        title: "Quality Engineering & Testing",
        desc: "Rigorous inspection of electrical components, equipment validation, standard operating procedures (SOP), and audit compliance.",
        tags: ["Pharma SEZ", "Compliance", "Component Testing", "Reliability", "SOP"]
      },
      {
        icon: "Layers",
        title: "Cross-Domain Tech & Integration",
        desc: "Bridging physical industrial machinery with digital intelligence via Python automation, E-CAD drafting, and SAP BDC workflows.",
        tags: ["Python", "E-CAD", "AutoCAD Electrical", "SAP S/4HANA", "BDC"]
      }
    ],
    quickFacts: [
      { label: "Education", value: "B.Tech Electrical Engineering" },
      { label: "University", value: "Balasore College of Engg & Tech" },
      { label: "Diploma CGPA", value: "8.81 / 10 (CUTM)" },
      { label: "Key Traineeship", value: "SDI Bhubaneswar (PLC/SCADA & CAD)" },
      { label: "Industry Experience", value: "Dr. Reddy's Laboratories (Quality)" },
      { label: "Location", value: "Balasore, Odisha, India" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "automation", label: "Automation & Controls" },
      { id: "design", label: "Design & CAD" },
      { id: "software", label: "Software & Enterprise" },
      { id: "soft", label: "Professional Skills" }
    ],
    items: [
      // Automation & Controls
      { name: "PLC Programming", category: "automation", level: 90, icon: "Cpu", highlight: true, note: "Ladder logic, timers, counters, sequencers & bit logic" },
      { name: "SCADA & HMI Systems", category: "automation", level: 88, icon: "Monitor", highlight: true, note: "Real-time visualization, alarm logging, setpoints & trend analysis" },
      { name: "Industrial Automation", category: "automation", level: 92, icon: "Settings", highlight: true, note: "Closed-loop control, sensor loops, industrial relays & actuators" },
      { name: "Electrical Control Systems", category: "automation", level: 86, icon: "Sliders", note: "MCC panels, interlocking circuitry, contactors & control buses" },
      { name: "Control Circuit Design", category: "automation", level: 85, icon: "CircuitBoard", note: "Schematic drafting, start/stop logic, emergency trips" },
      { name: "Motor Control (VFDs & Starters)", category: "automation", level: 84, icon: "Zap", note: "DOL, Star-Delta, variable frequency drives & speed profiling" },
      { name: "Electrical Protection & Switchgear", category: "automation", level: 88, icon: "Shield", note: "Overcurrent, earth fault, circuit breakers (MCB, MCCB, SF6)" },

      // Design & CAD
      { name: "AutoCAD (Electrical)", category: "design", level: 86, icon: "FileCode", highlight: true, note: "Single-line diagrams (SLD), schematic layouts & terminal block plans" },
      { name: "E-CAD Drafting", category: "design", level: 82, icon: "Layers", note: "Industrial electrical schematics & cross-referencing" },
      { name: "Electrical Wiring & Troubleshooting", category: "design", level: 90, icon: "Wrench", highlight: true, note: "Multimeter diagnostics, continuity, insulation resistance & rewiring" },
      { name: "Panel Layout & BOM Generation", category: "design", level: 80, icon: "Box", note: "DIN rail layout, cable tray routing, bill of materials estimation" },

      // Software & Enterprise
      { name: "Python Programming", category: "software", level: 82, icon: "Code", highlight: true, note: "Automation scripting, data processing, logic simulation & algorithms" },
      { name: "SAP S/4HANA Ecosystem", category: "software", level: 78, icon: "Database", note: "Enterprise process modeling, Order-to-Cash (O2C) flow analysis" },
      { name: "SAP Business Data Cloud (BDC)", category: "software", level: 80, icon: "Cloud", highlight: true, note: "Batch input sessions, direct call transactions, data ingestion" },
      { name: "MS Office Suite & Data Analysis", category: "software", level: 88, icon: "FileSpreadsheet", note: "Advanced Excel modeling, technical documentation & presentation decks" },
      { name: "Git & Version Control", category: "software", level: 75, icon: "GitBranch", note: "Repository management, branching & collaborative workflows" },

      // Soft Skills
      { name: "Problem Solving & RCA", category: "soft", level: 92, icon: "CheckCircle2", note: "Root cause analysis, systematic troubleshooting, electrical diagnostics" },
      { name: "Technical Communication", category: "soft", level: 88, icon: "MessageSquare", note: "Engineering documentation, SOP writing, client & team reporting" },
      { name: "Teamwork & Collaboration", category: "soft", level: 90, icon: "Users", note: "Cross-functional synergy between electrical, mechanical & IT units" },
      { name: "Industrial Safety & Standards", category: "soft", level: 94, icon: "ShieldAlert", note: "Adherence to electrical codes, LOTO safety protocols & ISO/SEZ standards" }
    ]
  },

  experience: [
    {
      id: "exp-1",
      role: "Quality Engineer",
      company: "Dr. Reddy's Laboratories",
      location: "FTO-11 / Processing Unit 1 / SEZ Plant, Vizianagaram, Andhra Pradesh",
      period: "03/2023 - 06/2024",
      duration: "1 Year 4 Months",
      type: "Full-Time Industrial Experience",
      color: "cyan",
      badge: "Pharma SEZ Compliance",
      highlights: [
        "Inspected critical products, raw electrical components, and active processing systems against strict FDA/SEZ quality assurance protocols.",
        "Conducted end-to-end performance verification, insulation testing, and operational parameter qualification on industrial machinery.",
        "Authored validation checklists, logged compliance deviations, and coordinated with instrumentation and automation teams for corrective actions.",
        "Upheld 100% adherence to Standard Operating Procedures (SOPs), Good Manufacturing Practices (cGMP), and safety guidelines."
      ],
      skills: ["Quality Control", "Testing & Verification", "Pharma SEZ Standards", "SOP Compliance", "Audit Preparation", "Process Qualification"]
    },
    {
      id: "exp-2",
      role: "Python Programming Intern",
      company: "InternPe",
      location: "Remote",
      period: "07/2026",
      duration: "Internship",
      type: "Software Development",
      color: "emerald",
      badge: "Automation & Scripting",
      highlights: [
        "Architected modular Python scripts to automate repetitive computation, file operations, and data transformation tasks.",
        "Implemented robust data handling algorithms with exception trapping, data logging, and clean functional architecture.",
        "Explored integration between Python mathematical models and control system simulation parameters."
      ],
      skills: ["Python 3", "Data Scripting", "Algorithm Design", "Automation Routines", "Code Optimization"]
    },
    {
      id: "exp-3",
      role: "AutoCAD (Electrical) Trainee",
      company: "Skill Development Institute (SDI)",
      location: "Bhubaneswar, Odisha",
      period: "06/2026",
      duration: "Advanced Technical Training",
      type: "Engineering CAD Certification",
      color: "cyan",
      badge: "Industrial CAD Drafting",
      highlights: [
        "Trained in industrial computer-aided drafting specifically for electrical control panels, power distribution, and motor control centers (MCC).",
        "Designed standardized Single Line Diagrams (SLD), ladder schematics, terminal connection diagrams, and 2D panel layout drawings.",
        "Generated automated Bills of Materials (BOM) and component wire numbering in compliance with IEC/IEEE drafting standards."
      ],
      skills: ["AutoCAD Electrical", "Single Line Diagrams (SLD)", "Control Schematics", "Panel Layouts", "Wire Numbering", "IEC Standards"]
    },
    {
      id: "exp-4",
      role: "PLC, SCADA & HMI Programming Trainee",
      company: "Skill Development Institute (SDI)",
      location: "Bhubaneswar, Odisha",
      period: "06/2025",
      duration: "Advanced Industrial Automation Training",
      type: "Hands-on Automation Labs",
      color: "emerald",
      badge: "Core Automation",
      highlights: [
        "Engineered ladder logic routines incorporating timers, counters, sequencers, math blocks, and interlocking logic on industry-grade PLCs.",
        "Created dynamic SCADA & HMI operator displays featuring animated process graphics, threshold alarm banners, and historical trending.",
        "Simulated real-world manufacturing workflows including automated bottle filling, material sorting, and multi-pump water distribution systems.",
        "Interfaced digital/analog sensors, pneumatic actuators, and solenoid valves to programmable logic controller I/O modules."
      ],
      skills: ["PLC Ladder Logic", "SCADA HMI Integration", "Alarm Management", "Process Simulation", "Industrial Sensors", "I/O Mapping"]
    },
    {
      id: "exp-5",
      role: "Electrical Engineering Apprentice",
      company: "OPTCL (Odisha Power Transmission Corporation Limited)",
      location: "T/L & S/S S/D Jaleswar (132/33KV Grid Substation)",
      period: "2022",
      duration: "Apprenticeship",
      type: "Power Transmission & Grid Operations",
      color: "cyan",
      badge: "High-Voltage Power Grid",
      highlights: [
        "Acquired hands-on grid experience at a vital 132/33KV transmission substation managing regional electricity distribution.",
        "Monitored power transformers, SF6 gas circuit breakers, current transformers (CT), potential transformers (PT), and lightning arrestors.",
        "Assisted senior engineers in inspecting numerical protection relays, DC battery bank backup systems, and scheduled substation maintenance.",
        "Participated in switchyard inspection walks and recorded vital load parameters and transformer oil temperature readings."
      ],
      skills: ["132/33KV Substation", "Power Transformers", "SF6 Circuit Breakers", "Switchgear Protection", "Grid Maintenance", "High Voltage Safety"]
    }
  ],

  projects: [
    {
      id: "project-1",
      title: "Automatic Power Factor Correction (APFC) System",
      subtitle: "Microcontroller & Capacitor Bank Panel for Industrial Energy Optimization",
      category: "Automation & Electrical",
      categoryKey: "automation",
      image: "/images/apfc-bg.png",
      tags: ["Electrical Protection", "Control Circuit Design", "Capacitor Banks", "Power Factor", "Energy Efficiency"],
      featured: true,
      summary: "Designed and implemented an automatic power factor correction panel using discrete capacitor banks and microprocessor/control circuitry to boost power factor close to unity (0.98+) and eliminate reactive power losses.",
      challenge: "Industrial inductive loads (motors, transformers, ballasts) draw heavy reactive power, causing low power factor, elevated line currents, thermal stress on cables, and heavy penalty surcharges from electrical utility boards.",
      solution: "Engineered an intelligent controller that continuously measures the phase displacement between line voltage and load current. When inductive lag exceeds set thresholds, the controller triggers relay drivers to switch optimal capacitor bank steps via zero-cross contactors, supplying reactive kVAR locally.",
      keyFeatures: [
        "Continuous RMS voltage, current, and phase-angle acquisition",
        "Multi-stage capacitor bank stepping algorithm (1:2:4:8 binary switching)",
        "Over-voltage and harmonic surge suppression protection circuitry",
        "Interactive digital display reporting instantaneous Power Factor (cos φ), Active Power (kW), and Reactive Power (kVAR)",
        "Manual override bypass switch for scheduled maintenance testing"
      ],
      impact: "Maintained power factor above 0.98 lagging, eliminating utility penalty surcharges and reducing overall distribution line current by ~18%.",
      githubUrl: "https://github.com/rajkishore9583/rajkishore-portfolio",
      demoUrl: "#contact"
    },
    {
      id: "project-2",
      title: "Automated Water Level Control System",
      subtitle: "PLC-Driven Closed-Loop Controller with SCADA HMI Visual Monitoring",
      category: "PLC & SCADA",
      categoryKey: "plc",
      image: "/images/scada-bg.png",
      tags: ["PLC Programming", "SCADA & HMI", "Industrial Automation", "Sensors", "Pump Automation", "Ladder Logic"],
      featured: true,
      summary: "Built a PLC-based level controller integrated with SCADA for real-time visual monitoring, threshold alerting, dry-run protection, and automated pump staging.",
      challenge: "Manual water storage operation suffers from human errors, water wastage due to overflows, pump burnout from dry running, and lack of real-time visibility into reservoir volume across distant tanks.",
      solution: "Implemented an automated closed-loop system using an industrial PLC programmed with ladder logic, coupled with ultrasonic continuous level transmitters and float limit switches. Designed a full SCADA operator GUI featuring dynamic tank level visuals, automated pump duty alternation, and audible alarm banners.",
      keyFeatures: [
        "Ladder logic program with hysteresis bands to prevent rapid motor hunting",
        "Dry-run protection interlock that cuts power if reservoir intake runs empty",
        "SCADA screen with real-time level gauge, pump run/trip status, and hourly flow rates",
        "Automatic lead/lag dual pump alternation to balance motor wear and tear",
        "Audible and visual alarms for High-High (overflow risk) and Low-Low (starvation risk)"
      ],
      impact: "Achieved 100% prevention of tank overflow incidents, eliminated dry-run pump failures, and provided centralized visual control for plant operators.",
      githubUrl: "https://github.com/rajkishore9583/rajkishore-portfolio",
      demoUrl: "#contact"
    },
    {
      id: "project-3",
      title: "SAP S/4HANA Sales Process Optimization Case Study",
      subtitle: "Enterprise Order-to-Cash (O2C) Streamlining & BDC Automation Analysis",
      category: "Enterprise & SAP",
      categoryKey: "enterprise",
      image: "/images/sap-bg.png",
      tags: ["SAP S/4HANA", "BDC", "Enterprise Process Modeling", "Order-to-Cash (O2C)", "Data Cloud"],
      featured: true,
      summary: "Analyzed end-to-end Order-to-Cash (O2C) flows to eliminate process bottlenecks across sales order booking, inventory verification, dispatch, billing, and customer fulfillment.",
      challenge: "High-volume enterprise sales workflows faced severe latency caused by manual multi-step order entries, master data inconsistencies between sales and dispatch warehouses, and delayed billing reconciliations.",
      solution: "Conducted an architectural analysis of the SAP SD and MM integration touchpoints. Formulated recommendations utilizing SAP Batch Data Communication (BDC) sessions and BAPI wrappers to automate bulk order booking, accelerate pricing condition checks, and synchronize inventory availability in real time.",
      keyFeatures: [
        "End-to-end mapping of Inquiry → Quotation → Sales Order → Delivery → Invoicing",
        "Batch Data Communication (BDC) blueprint for batch upload of bulk purchase orders",
        "Identification of approval bottlenecks in credit management and shipping triggers",
        "Designed KPI dashboard metrics tracking Order Cycle Time, OTIF (On-Time In-Full), and Billing Accuracy",
        "Integration roadmap between field automation telemetry and SAP enterprise inventory"
      ],
      impact: "Demonstrated a projected 32% reduction in sales order cycle time, 91% fulfillment rate, and real-time process mining visibility across $14.2M+ pipeline volume.",
      githubUrl: "https://github.com/rajkishore9583/sap-s4hana-o2c-optimization",
      demoUrl: "#/projects/sap-o2c-dashboard"
    }
  ],

  certifications: [
    {
      title: "PLC Programming Certification",
      issuer: "Skill Development Institute (SDI), Bhubaneswar",
      category: "Automation",
      date: "2025",
      badge: "Verified Certification",
      skills: ["Ladder Logic", "Siemens / Allen-Bradley Architecture", "Timers & Counters", "Industrial Digital I/O Interfacing"],
      description: "Comprehensive hands-on training in programming, troubleshooting, and commissioning programmable logic controllers for industrial sequence automation."
    },
    {
      title: "AutoCAD (Electrical) Certification",
      issuer: "Skill Development Institute (SDI), Bhubaneswar",
      category: "Design",
      date: "2026",
      badge: "Verified Certification",
      skills: ["Control Schematics", "Single Line Diagrams (SLD)", "Panel Layout Drafting", "Component Wire Tagging"],
      description: "Professional industrial training in electrical drafting, circuit schematic creation, panel layout design, and BOM documentation according to IEC/IEEE drafting standards."
    },
    {
      title: "SAP Business Data Cloud (BDC)",
      issuer: "Enterprise Training Initiative",
      category: "Enterprise",
      date: "2025",
      badge: "Cloud & Data Certified",
      skills: ["Batch Data Ingestion", "S/4HANA ERP Flows", "Transactional Screen Mapping", "Session Method"],
      description: "Specialized certification covering SAP data migration, Batch Data Communication (BDC) architectures, transaction recording, and automated data updates."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Electrical Engineering",
      institution: "Balasore College of Engineering & Technology (BCET)",
      location: "Balasore, Odisha",
      period: "2024 - 2027",
      status: "Currently Pursuing (Lateral Entry)",
      color: "cyan",
      highlights: [
        "Focus on Power Systems, Control Systems Engineering, Electrical Machines, and Industrial Power Electronics.",
        "Active member of Technical Project Labs exploring PLC-based automation and energy management systems.",
        "Leading student initiatives bridging classroom theoretical principles with industrial hardware implementations."
      ]
    },
    {
      degree: "Diploma in Electrical Engineering",
      institution: "Centurion University of Technology and Management (CUTM)",
      location: "Odisha, India",
      period: "Completed",
      score: "CGPA 8.81 / 10",
      status: "Graduated with Distinction",
      color: "emerald",
      highlights: [
        "Earned outstanding academic distinction with an 8.81/10 CGPA.",
        "Deep foundation in Electrical Circuits, Measurement Instrumentation, Power Generation & Transmission, and Digital Electronics.",
        "Hands-on workshop training in electrical wiring, machine testing, transformer winding analysis, and safety protocols."
      ]
    }
  ],

  contact: {
    heading: "Let's Build Something Exceptional Together",
    subheading: "Open to industrial automation engineering roles, electrical control system projects, consulting, and cross-domain collaborations.",
    email: "rajkishorepradhan59@gmail.com",
    phone: "+91 8117959869",
    location: "Balasore, Odisha, India",
    linkedin: "https://www.linkedin.com/in/rajkishore-pradhan-ab74042b4/",
    github: "https://github.com/rajkishorepradhan"
  }
};

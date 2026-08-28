/**
 * ============================================================================
 * PORT OF BELIZE LIMITED (PBL) - MANAGEMENT INFORMATION SYSTEM (MIS)
 * UNIVERSITY ACADEMIC PROJECT DATA CONFIGURATION
 * ============================================================================
 * 
 * STUDENTS / EDITORS:
 * You can easily customize this project by editing the values below!
 * Change student names, student IDs, photos, resumes, group name, course details,
 * or add your own verified information for PBL.
 */

import { ProjectMetadata, StudentMember, ServiceItem, SystemTool, BusinessObjective } from '../types';
import pblLogo from '../assets/images/port_of_belize_logo_1787871180067.jpg';

export { pblLogo };

export const projectMeta: ProjectMetadata = {
  websiteName: "Management Information System",
  // EDIT HERE: Course & Institutional Details
  courseName: "Management Information Systems",
  courseCode: "CMPS 2014",
  courseYear: 2026,
  groupName: "Group 4 - Digital Logistics Analysts",
  groupLeaderName: "Student 1",
  lecturerName: "Jevon Mckenzie",
  lecturerEmail: "Jevon.mckenzie@ub.edu.bz",
  institutionName: "University of Belize",
  institutionShort: "UB",
  academicTerm: "Semester 1 — Academic Year 2026",
  websiteCreatedDate: "August 2026",

  // Organization & System Under Study
  organizationName: "Port of Belize Limited",
  organizationShort: "PBL",
  organizationType: "Private, For-Profit Organization",
  systemName: "Management Information System (MIS)",
  systemShort: "PBL-MIS",
  logoUrl: pblLogo,
  mission: "To provide reliable, sustainable, efficient, and high-quality logistics services to valued customers through skilled and engaged employees, supported by technology.",
  vision: "To be the port of choice for Belizean shippers, facilitating economic growth, offering innovative customer-centric services, and providing employees with rewarding careers.",
};

/**
 * GROUP MEMBERS CONFIGURATION (3:5 Ratio Profile Images & Resumes)
 * EDIT HERE: Update with your real group members' names, IDs, photos, and CV details.
 */
export const groupMembers: StudentMember[] = [
  {
    id: "member-1",
    name: "Student 1",
    studentId: "",
    role: "Project Leader & Information Systems Analyst",
    isLeader: true,
    photoUrl: "https://lh3.googleusercontent.com/d/1jk2gfkeaysZpt6Hu5pPM6f49ZxYfDS4N",
    pdfUrl: "https://drive.google.com/file/d/1Hc7bhnKs525LxCdGDKlo9Gev_zP9wich/view?usp=sharing",
    pdfFileId: "1Hc7bhnKs525LxCdGDKlo9Gev_zP9wich",
    bio: "Undergraduate student specializing in Information Technology and Systems Analysis. Coordinated group research, synthesis of MIS business value, and overall project governance.",
    responsibilities: [
      "Project planning, milestone coordination, and academic formatting",
      "In-depth analysis of MIS Strategic Business Objectives (Laudon Ch. 1)",
      "Liaison with university course guidelines and submission criteria",
      "Executive review of organization profile and system accuracy"
    ],
    resume: {
      education: "Bachelor of Science in Information Technology (Candidate) — University of Belize (2023–2027)",
      skills: ["Information Systems Modeling", "Business Process Mapping", "Systems Analysis & Design", "Team Leadership", "Data Flow Analysis"],
      coursework: ["Management Information Systems (CMPS 2014)", "Database Management Systems", "Business Telecommunications", "Systems Analysis"],
      projectContributions: "Authored the core strategic business value analysis, coordinated research on PBL's Shipping Agent Portal, and led team collaboration milestones.",
      contactEmail: "student1@ub.edu.bz"
    }
  },
  {
    id: "member-2",
    name: "Student 2",
    studentId: "",
    role: "Lead Front-End Designer & UI/UX Developer",
    isLeader: false,
    photoUrl: "https://lh3.googleusercontent.com/d/1maIz5VFjG4smdTacD76mXZPgYtx1zqpG",
    pdfUrl: "https://drive.google.com/file/d/15voP43RQmYb1DRFkPRWht-OpUj_4UpQb/view?usp=sharing",
    pdfFileId: "15voP43RQmYb1DRFkPRWht-OpUj_4UpQb",
    bio: "Enthusiastic developer focusing on modern web interfaces, responsive accessibility, and interactive digital experiences for enterprise case studies.",
    responsibilities: [
      "Responsive UI/UX architecture and Tailwind CSS maritime design system",
      "Google Sites iframe embedding integration and responsive viewport testing",
      "Interactive simulation sandbox development for B/L and Berthage tools",
      "Accessibility and mobile optimization across all screen dimensions"
    ],
    resume: {
      education: "Bachelor of Science in Information Technology — University of Belize (2023–2027)",
      skills: ["React & TypeScript", "Tailwind CSS", "Responsive Web Design", "UI/UX Prototyping", "Google Sites Embedding"],
      coursework: ["Web Development Technologies", "Human-Computer Interaction", "Management Information Systems", "Computer Networks"],
      projectContributions: "Designed and implemented the interactive web architecture, navigation flow, and Google Sites iframe compliance.",
      contactEmail: "student2@ub.edu.bz"
    }
  },
  {
    id: "member-3",
    name: "Student 3",
    studentId: "",
    role: "Maritime Logistics & Organization Researcher",
    isLeader: false,
    photoUrl: "https://lh3.googleusercontent.com/d/1N_yfj58rK1U1FwHDWzaKtOqbYZ1pS75w",
    pdfUrl: "https://drive.google.com/file/d/1YQq8bS8CjLg-EAhSnb232PBFcsqXxObi/view?usp=sharing",
    pdfFileId: "1YQq8bS8CjLg-EAhSnb232PBFcsqXxObi",
    bio: "Focuses on supply chain digital transformation, Caribbean maritime port infrastructure, and organizational service delivery workflows.",
    responsibilities: [
      "Gathering verified Port of Belize Limited operational background and services",
      "Cataloging core container, bulk, break-bulk, and maritime support services",
      "Documenting national economic significance of PBL as Belize's primary gateway",
      "Academic cross-referencing of official documentation and course guidelines"
    ],
    resume: {
      education: "Bachelor of Science in Business Administration / IT Minor — University of Belize (2023–2027)",
      skills: ["Organizational Research", "Maritime Operations Analysis", "Supply Chain Concepts", "Technical Writing", "Academic Referencing"],
      coursework: ["Operations Management", "Management Information Systems", "Business Communications", "International Trade Logistics"],
      projectContributions: "Researched and structured the Organization Profile, detailed all 10 core cargo services and secondary maritime capabilities.",
      contactEmail: "student3@ub.edu.bz"
    }
  },
  {
    id: "member-4",
    name: "Student 4",
    studentId: "",
    role: "Technical Systems & Security Analyst",
    isLeader: false,
    photoUrl: "https://lh3.googleusercontent.com/d/1Sw6Lp084qBvPMzlgRtevBeuZVVmjiEq1",
    pdfUrl: "https://drive.google.com/file/d/1F4FpcZVJp4JHoiUSxHqSAHLvzXi7Ogix/view?usp=sharing",
    pdfFileId: "1F4FpcZVJp4JHoiUSxHqSAHLvzXi7Ogix",
    bio: "Passionate about network security, client-server architectures, and enterprise software integration in high-throughput transportation hubs.",
    responsibilities: [
      "Technical analysis of the Shipping Agent Portal desktop software architecture",
      "Evaluating web-based tracking tools (Bill of Lading, Stripping Status, Berthage)",
      "Documenting hardware, networking, data types (import/export manifests), and security protocols",
      "Maintaining strict academic adherence regarding verified vs unconfirmed IT details"
    ],
    resume: {
      education: "Bachelor of Science in Information Technology — University of Belize (2023–2027)",
      skills: ["Network Security Fundamentals", "Enterprise Architecture", "Database Query Analysis", "Technical Documentation", "IT Auditing"],
      coursework: ["Information Security", "Network Administration", "Operating Systems", "Management Information Systems"],
      projectContributions: "Constructed the MIS Conceptual Architecture model, technical specifications breakdown, and data management matrices.",
      contactEmail: "student4@ub.edu.bz"
    }
  },
  {
    id: "member-5",
    name: "Student 5",
    studentId: "",
    role: "Systems Integration & Operational QA Researcher",
    isLeader: false,
    photoUrl: "https://lh3.googleusercontent.com/d/1GenHctkzz0RrVf5zoXATMhw_KiS6FLCs",
    pdfUrl: "https://drive.google.com/file/d/11famgiRLxq8x-krQ3DIP5HwgIyFNkYK4/view?usp=sharing",
    pdfFileId: "11famgiRLxq8x-krQ3DIP5HwgIyFNkYK4",
    bio: "Undergraduate student focusing on enterprise systems integration, data quality assurance, and information technology applications in maritime transport logistics.",
    responsibilities: [
      "Investigation of terminal operational workflows and verification matrices",
      "Synthesis of Laudon & Laudon Chapter 1 MIS framework alignment",
      "Analysis of Navis Octopi TOS cloud capabilities and user ecosystem",
      "Academic quality assurance and cross-module documentation review"
    ],
    resume: {
      education: "Bachelor of Science in Information Technology — University of Belize (2023–2027)",
      skills: ["Systems Integration", "Data Flow Analysis", "Quality Assurance", "Technical Research", "Information Systems Evaluation"],
      coursework: ["Management Information Systems", "Database Design", "Business Analytics", "Systems Quality Management"],
      projectContributions: "Contributed to the technical analysis of the cloud-based Navis Octopi TOS, operational data tracking, and academic research synthesis.",
      contactEmail: "student5@ub.edu.bz"
    }
  }
];

/**
 * GROUP COLLABORATION & METHODOLOGY BREAKDOWN
 */
export const groupCollaborationData = {
  purpose: "The primary objective of our academic research team is to critically examine how Port of Belize Limited (PBL) leverages modern Management Information Systems (MIS) to achieve strategic business objectives, enhance operational throughput, and deliver enduring economic value to Belize's trade ecosystem.",
  methodology: [
    {
      area: "Organization Research",
      description: "Conducted systematic evaluation of PBL's corporate profile, private for-profit structure, cargo handling domains, and critical role as Belize's primary maritime gateway.",
      lead: "Member 3"
    },
    {
      area: "Information Systems Analysis",
      description: "Deconstructed the MIS ecosystem comprising the desktop Shipping Agent Portal, web tracking utilities, manifest processing pipelines, and client-server interactions.",
      lead: "Member 1 & Member 4"
    },
    {
      area: "Business Value Synthesis",
      description: "Applied Laudon & Laudon Chapter 1 framework to assess the six strategic business objectives (Operational Excellence, Decision Making, etc.) with explicit ENHANCED impact ratings.",
      lead: "Member 1"
    },
    {
      area: "Interactive Web & Iframe Engineering",
      description: "Developed the responsive web platform tailored for standalone deployment and seamless embedding within Google Sites without layout degradation.",
      lead: "Member 2"
    },
    {
      area: "Documentation & Academic Review",
      description: "Maintained rigorous fact-checking protocols to ensure unverified technical specifications use clear academic placeholders rather than fabricated claims.",
      lead: "Entire Research Team"
    }
  ]
};

/**
 * PORT OF BELIZE LIMITED - PRODUCTS & SERVICES
 */
export const organizationServices: ServiceItem[] = [
  {
    id: "srv-1",
    title: "Container Import & Export",
    category: "core",
    description: "Full-service handling of standard 20ft and 40ft containerized cargo arriving from and departing to international shipping lanes.",
    iconName: "Container",
    details: "Coordinates inbound customs-cleared cargo and outbound exports with yard cranes and chassis handlers."
  },
  {
    id: "srv-2",
    title: "Bulk Cargo Handling",
    category: "core",
    description: "Specialized discharge and loading operations for dry unpackaged commodities, grains, aggregates, and liquid bulk vessels.",
    iconName: "Boxes",
    details: "Utilizes high-capacity hoppers, conveyors, and mechanical grabs for rapid turnaround."
  },
  {
    id: "srv-3",
    title: "Break-Bulk Cargo Handling",
    category: "core",
    description: "Expert stevedoring and quayside staging for non-containerized palletized goods, steel, timber, machinery, and oversized freight.",
    iconName: "PackageCheck",
    details: "Heavy-lift equipment and specialized slings ensure safe transit from vessel holds to pier."
  },
  {
    id: "srv-4",
    title: "Container Storage",
    category: "core",
    description: "Provides secure, monitored quayside yard space where full and empty shipping containers can be stored temporarily before collection or shipment.",
    iconName: "Warehouse",
    details: "Secure staging area with designated terminal bays for scheduled dispatch and pickup."
  },
  {
    id: "srv-5",
    title: "Container Weighing (VGM)",
    category: "core",
    description: "Certified Solas-compliant Verified Gross Mass (VGM) container scale weighing services ensuring international maritime safety compliance.",
    iconName: "Scale",
    details: "Calibrated weighbridges prevent vessel overload and verify accurate manifest declarations."
  },
  {
    id: "srv-6",
    title: "Cold Storage & Reefer Facilities",
    category: "core",
    description: "Continuous electrical monitoring and temperature-controlled power hookups for refrigerated containers (reefers) holding perishable agricultural goods.",
    iconName: "ThermometerSnowflake",
    details: "Preserves the cold chain for Belizean agricultural exports like citrus, seafood, and bananas."
  },
  {
    id: "srv-7",
    title: "Warehousing & Freight Staging",
    category: "core",
    description: "Covered, secure storage facilities for break-bulk, LCL (less-than-container load) cargo, and bonded customs-controlled merchandise.",
    iconName: "Building2",
    details: "Weatherproof warehousing with perimeter security and controlled inventory access."
  },
  {
    id: "srv-8",
    title: "Ro-Ro (Roll-on / Roll-off) Services",
    category: "core",
    description: "Dedicated ramp facilities for drivable cargo including commercial trucks, heavy construction machinery, buses, and passenger vehicles.",
    iconName: "Truck",
    details: "Direct drive-on/drive-off quayside discharge minimizing handling damage."
  },
  {
    id: "srv-9",
    title: "Pilotage Services",
    category: "core",
    description: "Licensed maritime pilots assisting ocean-going vessels through navigational channels, reef passages, and harbor approaches safely.",
    iconName: "Compass",
    details: "Expert nautical guidance through Belize's delicate barrier reef channels to port berths."
  },
  {
    id: "srv-10",
    title: "Vessel Services & Husbandry",
    category: "core",
    description: "Comprehensive quayside marine support including fresh water provisioning, bunkering coordination, mooring, and berthage management.",
    iconName: "Ship",
    details: "Full vessel support during berthing turnaround to minimize port stay duration."
  }
];

/**
 * ADDITIONAL MARITIME & REGULATORY SERVICES
 */
export const additionalMaritimeServices: ServiceItem[] = [
  { id: "add-1", title: "Water Taxi Permit Administration", category: "additional", description: "Issuing and regulating operational permits for coastal and cayes passenger vessels.", iconName: "Anchor" },
  { id: "add-2", title: "Marine Pilot Coordination", category: "additional", description: "Scheduling certified harbor pilots for incoming commercial and charter vessels.", iconName: "Compass" },
  { id: "add-3", title: "Shipping Agent Accreditation", category: "additional", description: "Official registry and digital authorization for local shipping agents and forwarders.", iconName: "UserCheck" },
  { id: "add-4", title: "Boat Builders Standards & Oversight", category: "additional", description: "Advisory compliance monitoring for maritime vessel fabrication standards.", iconName: "Wrench" },
  { id: "add-5", title: "Hurricane Preparedness & Marine Safety", category: "additional", description: "Coordinating port securing, safe anchorage, and emergency maritime evacuation plans.", iconName: "ShieldAlert" },
  { id: "add-6", title: "Marine Surveyors Liaison", category: "additional", description: "Facilitating independent cargo inspection, draft surveys, and damage assessments.", iconName: "ClipboardCheck" },
  { id: "add-7", title: "Over Water Structures Permitting", category: "additional", description: "Reviewing dock, jetty, and marine infrastructure alignment within port jurisdiction.", iconName: "Layers" },
  { id: "add-8", title: "Port Designation & Security Zones", category: "additional", description: "Enforcing ISPS Code compliant international maritime security perimeter boundaries.", iconName: "ShieldCheck" },
  { id: "add-9", title: "Port of Entry Processing", category: "additional", description: "Official staging for national customs, immigration, quarantine, and health clearance.", iconName: "MapPin" },
  { id: "add-10", title: "Registration & Vessel Licensing", category: "additional", description: "Documentation and compliance records for commercial and industrial watercraft.", iconName: "FileCheck" }
];

/**
 * PORT OF BELIZE LIMITED - INFORMATION SYSTEM COMPONENTS
 */
export const informationSystemData = {
  name: "Port of Belize Limited Management Information System",
  acronym: "PBL-MIS",
  overview: "Port of Belize Limited manages daily port logistics, cargo processing, and vessel scheduling through Octopi, a modern Terminal Operating System (TOS) developed by Navis. The digital ecosystem operates via a cloud-based platform to manage transactional activities, vessel arrivals and departures, yard planning, and operational data tracking, working in tandem with the desktop Shipping Agent Portal and online tracking utilities to eliminate manual paperwork and maximize terminal throughput.",
  
  // System Type & Software Breakdown (Verified)
  systemType: {
    title: "System Type & Software",
    softwareName: "Octopi",
    developer: "Navis",
    category: "Terminal Operating System (TOS)",
    summary: "Software: They use Octopi, a Terminal Operating System (TOS) developed by Navis. It manages transactional activities, vessel arrivals and departures, yard planning, and operational data tracking.",
    capabilities: [
      "Transactional Activities Management",
      "Vessel Arrivals & Departures Scheduling",
      "Container Yard Planning & Stacking Allocation",
      "Real-Time Operational Data Tracking & Reporting"
    ]
  },

  // Deployment Model (Verified)
  deployment: {
    title: "Deployment",
    model: "Cloud-Based Platform",
    summary: "Cloud-based: The Octopi system operates via a cloud-based platform rather than strictly on local physical premises servers.",
    benefits: [
      "High availability & resilient cloud uptime",
      "Real-time synchronized quayside & remote access",
      "Reduced on-premises server maintenance overhead",
      "Scalable infrastructure matching vessel volume surges"
    ]
  },

  components: [
    {
      id: "octopi-tos",
      name: "Octopi Terminal Operating System (TOS)",
      type: "Cloud-Based Platform",
      developer: "Navis",
      description: "The central core software platform managing transactional activities, vessel arrivals and departures, yard planning, and operational data tracking across the Port of Belize terminal.",
      supportedManifests: [
        { name: "Yard & Berth Planning", desc: "Coordinates quay crane assignments, vessel berth windows, and container yard bay allocations in real time." },
        { name: "Vessel Movement Logs", desc: "Automates logging of vessel arrivals, departures, pilot boarding, and turnaround milestones." },
        { name: "Transactional Tracking", desc: "Maintains real-time audit trails of container discharges, load lists, and gate-in/gate-out events." }
      ],
      accessMethod: "Cloud-based terminal operating system accessible securely via web and connected operations clients.",
      security: "Enterprise cloud encryption, role-based authorization, and high-availability secure data pipelines."
    },
    {
      id: "portal",
      name: "Shipping Agent Portal",
      type: "Desktop Program",
      developer: "PBL / Partner Integration",
      description: "A specialized desktop software client installed on the local computers of approved shipping agents and freight forwarders. It serves as the primary gateway for submitting, maintaining, and verifying crucial shipping documentation prior to and during vessel arrival.",
      supportedManifests: [
        { name: "Import Manifests", desc: "Detailed declaration of inbound cargo, consignees, container numbers, and commodity classifications." },
        { name: "Export Manifests", desc: "Outbound shipment schedules, export permits, container weights, and destination ports." },
        { name: "Ryder Manifests", desc: "Specialized manifest documentation supporting feeder routes, transit cargo, and supplementary consignment lines." }
      ],
      accessMethod: "Installed desktop client software on authorized agent workstations.",
      security: "Restricted to authenticated, accredited shipping agencies with active credentials."
    },
    {
      id: "bl-tracker",
      name: "Bill of Lading (B/L) Tracker",
      type: "Web-Based Tool",
      developer: "PBL Web Suite",
      description: "A web utility enabling importers, exporters, and logistics coordinators to follow cargo movements, verify document processing status, and monitor customs releases using their B/L number.",
      supportedManifests: [],
      accessMethod: "Publicly accessible via modern web browsers on any connected device.",
      security: "Encrypted query validation against the PBL operational database."
    },
    {
      id: "stripping-tool",
      name: "Container Stripping Status Query Tool",
      type: "Web-Based Tool",
      developer: "PBL Web Suite",
      description: "Online self-service portal allowing consignees and truckers to check whether a specific container has been de-stuffed/stripped into the warehouse and is ready for cargo collection.",
      supportedManifests: [],
      accessMethod: "Accessible online 24/7 through the PBL web portal.",
      security: "Unique Container Number and Voyage ID verification."
    },
    {
      id: "berthage-tool",
      name: "Online Berthage Request System",
      type: "Web-Based Tool",
      developer: "PBL Web Suite",
      description: "Digital reservation interface allowing vessel masters, shipping agents, and charterers to submit formal berthing applications, ETA notices, and quayside service requests in advance.",
      supportedManifests: [],
      accessMethod: "Secure web form accessible by registered shipping lines.",
      security: "Agent authentication with automated email/system tracking ID generation."
    }
  ],

  // System Ecosystem & Architecture Details
  hosting: {
    title: "Deployment & Hosting Infrastructure",
    status: "Cloud-Based Platform (Navis Octopi)",
    verificationNote: "Verified: Cloud-based Terminal Operating System (TOS) developed by Navis.",
    details: "The Octopi system operates via a cloud-based platform rather than strictly on local physical premises servers. This cloud-native architecture coordinates transactional activities, vessel arrivals and departures, yard planning, and operational data tracking seamlessly across port operations and remote stakeholders."
  },

  users: {
    title: "System User Ecosystem",
    categories: [
      { name: "PBL Terminal & Operations Managers", role: "Supervise Octopi TOS yard planning, vessel arrival/departure scheduling, and berth allocation." },
      { name: "Approved Shipping Agents", role: "Submit import/export/Ryder manifests and manage cargo paperwork." },
      { name: "Freight Forwarders & Brokers", role: "Coordinate consolidated cargo, customs filing, and dispatch orders." },
      { name: "PBL Quayside & Gate Staff", role: "Record container gate-in/gate-out, weighbridge VGM, and crane operations in real time." },
      { name: "Cargo Owners & Consignees", role: "Check Bill of Lading progress and container stripping availability remotely." },
      { name: "Vessel Masters & Charterers", role: "Submit berthage applications and coordinate quayside utility needs." }
    ],
    userCountNote: "Active users include PBL terminal controllers, quayside operators, accredited shipping lines, agents, and national trade stakeholders."
  },

  accessibility: {
    title: "System Accessibility & Remote Access",
    onSite: "Direct quayside and administrative access to cloud-based Octopi TOS and operational weighbridge terminals.",
    remoteWeb: "24/7 cloud-based web accessibility for consignees, agents, and forwarders using web tracking and request tools.",
    internalRemoteNote: "Cloud-based deployment enables authorized PBL operations personnel to monitor yard and vessel data securely from any connected workstation."
  },

  hardwareAndSoftware: {
    hardware: [
      "Workstation desktop computers & operations laptops",
      "Quayside terminal tablets / computers & weighbridge scale interfaces",
      "Network routing & broadband cloud connectivity infrastructure",
      "Barcode & container tracking mobile devices"
    ],
    software: [
      "Octopi — Terminal Operating System (TOS) developed by Navis (Cloud-based)",
      "Shipping Agent Portal proprietary desktop client software",
      "PBL web-based tracking tools (Bill of Lading Tracker, Container Stripping Query, Berthage Request)",
      "Modern standards-compliant web browsers (Chrome, Edge, Safari, Firefox)"
    ],
    networking: [
      "High-speed broadband connectivity to Navis Octopi cloud infrastructure",
      "Secure encrypted communication protocols (HTTPS / TLS 1.3)",
      "Dedicated secure port subnet for quayside and gate operations",
      "Encrypted TCP/IP network connectivity for external desktop agent client access"
    ]
  },

  dataManaged: [
    { type: "Vessel Arrivals & Departures", desc: "Real-time vessel scheduling, drafts, LOA, ETA/ETD, pilotage, and quayside berth windows in Octopi TOS." },
    { type: "Yard Planning & Allocation", desc: "Dynamic container yard coordinates, stack planning, reefer staging, and crane movements." },
    { type: "Transactional Activity Logs", desc: "Operational data tracking, gate-in/gate-out logs, stevedoring tallies, and container movement events." },
    { type: "Import Cargo Manifests", desc: "Container IDs, seal numbers, consignee details, cargo weight, and tariff codes." },
    { type: "Export Cargo Manifests", desc: "Shipper declarations, destination ports, VGM certifications, and loading sequences." },
    { type: "Ryder Manifests", desc: "Feeder vessel and transshipment consignment records." },
    { type: "Container Stripping & Yard Data", desc: "De-stuffing timestamps, warehouse storage bins, and release authorizations." },
    { type: "B/L Tracking & Clearance Status", desc: "Customs release markers, storage fee assessments, and gate-out clearances." }
  ],

  security: {
    title: "System Security & Information Assurance",
    verificationNote: "Enterprise-grade cloud security protocols managed via Navis Octopi & PBL secure networks.",
    principles: [
      { name: "Cloud Security & Encryption", desc: "End-to-end data encryption in transit (TLS) and at rest within the cloud-hosted Octopi TOS environment." },
      { name: "Role-Based Access Control (RBAC)", desc: "Granular authorization levels ensuring shipping agents only access authorized manifests while PBL controllers retain full terminal oversight." },
      { name: "Data Integrity & Validation", desc: "Automated schema checks preventing duplicate manifest submissions or conflicting container yard positions." },
      { name: "System Availability & Redundancy", desc: "Cloud infrastructure delivers 24/7 high availability, automated backups, and resilient disaster recovery for uninterrupted port logistics." }
    ]
  }
};

/**
 * 6 STRATEGIC BUSINESS OBJECTIVES OF INFORMATION SYSTEMS (Laudon & Laudon Framework)
 * Every objective is explicitly analyzed for Port of Belize Limited with "Impact: ENHANCED"
 */
export const businessObjectives: BusinessObjective[] = [
  {
    id: "obj-1",
    number: 1,
    name: "Operational Excellence",
    definition: "Organizations use Information Systems to achieve higher levels of efficiency, productivity, and throughput by eliminating bottlenecks, paper delays, and manual errors in daily operations.",
    howPBLUses: "PBL replaces labor-intensive paper manifest processing with electronic data interchange through the Shipping Agent Portal. Digital manifest submission eliminates physical paperwork trips, reduces transcribing errors, accelerates gate-in/gate-out verification, and dramatically shortens vessel turnaround times at the pier.",
    specificExample: "Electronic submission of Import, Export, and Ryder manifests directly through the desktop Shipping Agent Portal, coupled with digital berthage requests that automate operational scheduling.",
    impact: "ENHANCED",
    iconName: "Zap"
  },
  {
    id: "obj-2",
    number: 2,
    name: "New Products, Services, and Business Models",
    definition: "Information Systems and technologies act as foundational enablers for firms to create entirely new digital services, self-service channels, and revenue-generating business capabilities.",
    howPBLUses: "PBL expanded beyond purely physical cargo stevedoring by introducing self-service digital web tools. Customers, freight forwarders, and vessel agents can now interact with the port remotely through transparent web-based utilities that were previously impossible in a manual paper-based port model.",
    specificExample: "The Bill of Lading Tracker, Container Stripping Status Query Tool, and Online Berthage Request system enable 24/7 on-demand digital logistics services without requiring physical office visits.",
    impact: "ENHANCED",
    iconName: "Sparkles"
  },
  {
    id: "obj-3",
    number: 3,
    name: "Customer and Supplier Intimacy",
    definition: "When a business understands and accommodates its customers and supply chain partners with seamless information sharing, partners return more business, lowering friction and building enduring loyalty.",
    howPBLUses: "PBL fosters deep digital collaboration with international shipping lines, local shipping agents, freight forwarders, and commercial importers. Providing direct desktop access and real-time cargo visibility empowers stakeholders to coordinate trucking, customs brokerage, and vessel voyages smoothly.",
    specificExample: "Shipping agents obtain direct desktop software access to submit and maintain manifests, while cargo owners receive instantaneous stripping updates, drastically cutting telephone inquiries and wait times.",
    impact: "ENHANCED",
    iconName: "Users"
  },
  {
    id: "obj-4",
    number: 4,
    name: "Improved Decision Making",
    definition: "Information Systems provide accurate, timely, and organized data, allowing managers to base critical operational and strategic decisions on real-time facts rather than guesswork or outdated summaries.",
    howPBLUses: "PBL operations managers utilize timely digital manifest data, vessel ETAs, and yard capacity indicators to allocate berths, deploy heavy equipment (cranes, reach stackers), schedule stevedore shifts, and optimize yard space prior to a ship's actual arrival.",
    specificExample: "Advance electronic manifest submissions allow terminal supervisors to plan container stacking layouts and equipment allocation before vessels dock, avoiding quayside congestion.",
    impact: "ENHANCED",
    iconName: "TrendingUp"
  },
  {
    id: "obj-5",
    number: 5,
    name: "Competitive Advantage",
    definition: "By delivering superior service speed, reduced turnaround costs, and transparent operations through technology, an organization reinforces its market standing against regional alternatives.",
    howPBLUses: "As Belize's principal maritime facility, PBL strengthens its value proposition to international shipping alliances by offering modern digital tracking and prompt berthage processing. While maintaining academic nuance regarding regional competition, digital capabilities ensure PBL remains an attractive port of call.",
    specificExample: "Faster vessel turnaround, reduced container dwell time, and digital manifest processing provide higher operational reliability compared to traditional paper-reliant port setups.",
    impact: "ENHANCED",
    iconName: "Trophy"
  },
  {
    id: "obj-6",
    number: 6,
    name: "Survival",
    definition: "In modern globalized industries, investing in Information Systems is an essential business necessity to meet mandatory regulatory standards, international maritime protocols, and evolving industry norms.",
    howPBLUses: "International ocean carriers and customs authorities mandate electronic manifest submissions, Solas VGM container weighing compliance, and digital security auditing. Implementing the MIS is not merely a competitive bonus—it is an absolute operational necessity for PBL to participate in global maritime commerce.",
    specificExample: "Adhering to international shipping conventions, SOLAS safety requirements, and digitized customs protocols which strictly require electronic manifests and automated vessel notifications.",
    impact: "ENHANCED",
    iconName: "Shield"
  }
];

/**
 * SUMMARY TABLE FOR BUSINESS VALUE
 */
export const businessValueTable = [
  {
    objective: "Operational Excellence",
    howSystemHelps: "Digital manifests, tracking, and online requests reduce manual processing and eliminate paper delays.",
    impact: "Enhanced"
  },
  {
    objective: "New Products, Services & Business Models",
    howSystemHelps: "Digital self-service tools (B/L Tracker, Stripping Query, Berthage) provide modern, 24/7 web access.",
    impact: "Enhanced"
  },
  {
    objective: "Customer & Supplier Intimacy",
    howSystemHelps: "Improves access and transparency with shipping agents, freight forwarders, and commercial importers.",
    impact: "Enhanced"
  },
  {
    objective: "Improved Decision Making",
    howSystemHelps: "Provides timely operational information for yard management, crane allocation, and berth scheduling.",
    impact: "Enhanced"
  },
  {
    objective: "Competitive Advantage",
    howSystemHelps: "Supports faster vessel turnaround, lower cargo dwell times, and modern convenient digital services.",
    impact: "Enhanced"
  },
  {
    objective: "Survival",
    howSystemHelps: "Fulfills mandatory international maritime standards, digital carrier protocols, and modernization mandates.",
    impact: "Enhanced"
  }
];

/**
 * SAMPLE MOCK DATA FOR THE INTERACTIVE TOOL SIMULATOR
 * (Allows lecturers and students to test realistic sample lookups)
 */
export const sampleSimulationData = {
  billOfLading: [
    {
      blNumber: "PBL-BL-98234",
      consignee: "Belize Trading & Distribution Ltd.",
      vessel: "MV Caribbean Trader (Voyage 2026-08)",
      origin: "Miami, USA",
      containerCount: 2,
      status: "Customs Cleared — Ready for Quayside Gate Pickup",
      manifestType: "Import Manifest #IM-2026-4412",
      eta: "2026-08-25",
      cleared: true
    },
    {
      blNumber: "PBL-BL-77419",
      consignee: "Central Sugar Cane Refiners Co.",
      vessel: "MV Belize Pioneer (Voyage 2026-11)",
      origin: "Kingston, Jamaica",
      containerCount: 4,
      status: "Vessel at Anchorage — Scheduled for Berth 2",
      manifestType: "Import Manifest #IM-2026-4509",
      eta: "2026-08-28",
      cleared: false
    }
  ],
  containerStripping: [
    {
      containerId: "MSKU-402918-2",
      size: "40ft High Cube",
      status: "STRIPPED & STAGED",
      warehouseBay: "Warehouse Bay 4B — Section Green",
      strippedDate: "2026-08-26 10:30 AM",
      contents: "Commercial Electronics & Hardware",
      readyForPickup: true
    },
    {
      containerId: "CMAU-883102-9",
      size: "20ft Standard Dry",
      status: "IN YARD — SCHEDULED FOR STRIPPING",
      warehouseBay: "Yard Staging Bay C12",
      strippedDate: "Pending (Scheduled for 2026-08-28 08:00 AM)",
      contents: "Automotive Parts & Assemblies",
      readyForPickup: false
    }
  ]
};

export const projectsData = [
  {
    slug: "portal-alumni-ft-unma",
    title: "Portal Alumni FT UNMA & Alumni Bergerak",
    context: "Institutional / Client Project",
    category: "Client & Institutional",
    categories: ["Client & Institutional", "Backend", "Web Development"],
    role: "Full Stack Web Developer",
    achievement: "Commissioned by Faculty of Engineering, Universitas Majalengka",
    description:
      "An integrated institutional alumni management and crowdfunding platform commissioned by the Faculty of Engineering, Universitas Majalengka. Architected with a hybrid data model: integrating the central university academic API for alumni identity verification and SKPI records, while managing internal application databases for event moderation, email OTP verification, and Mayar payment gateway transactions with webhook handlers.",
    longDescription:
      "An integrated institutional alumni management and crowdfunding platform commissioned by the Faculty of Engineering, Universitas Majalengka (commissioned directly by Pak Harun, Vice Dean I). The system unifies alumni tracer studies, administrative records, community crowdfunding campaigns (Alumni Bergerak), and official event management into a single modern portal. Built with an enterprise-grade hybrid architecture connecting central university databases with internal Laravel application services.",
    contributions: [
      {
        title: "Central University Academic API Integration",
        description:
          "Integrated central academic endpoints for student and alumni identity verification, department records, and automated SKPI (Surat Keterangan Pendamping Ijazah) retrieval.",
      },
      {
        title: "Alumni Bergerak Crowdfunding Engine",
        description:
          "Engineered full crowdfunding and social campaign system with real-time target tracking, donor lists, and Mayar payment gateway webhook integrations.",
      },
      {
        title: "Event Moderation & OTP Verification",
        description:
          "Implemented event publishing workflows with administrative moderation, participant ticketing, and email OTP verification pipelines.",
      },
      {
        title: "Hybrid Full-Stack Architecture",
        description:
          "Architected reactive frontend using React, TypeScript, and Inertia.js coupled with Laravel 11, Tailwind CSS, and MySQL database.",
      },
    ],
    stack: [
      "Laravel",
      "React",
      "TypeScript",
      "Inertia.js",
      "Tailwind CSS",
      "REST API",
      "Mayar Payment Gateway",
      "MySQL",
    ],
    featured: true,
    repository: null,
    liveUrl: null,
    image: "/alumni-ft.png",
  },
  {
    slug: "taniva-ai-agricultural-supply-chain",
    title: "TANIVA — AI-Powered Agricultural Supply Chain",
    context: "Hackathon / Team Project",
    category: "Competition / Team",
    categories: ["Competition / Team", "Backend", "Web Development"],
    role: "Backend Developer",
    achievement: null,
    description:
      "A collaborative B2B AgriTech supply chain platform developed in a hackathon to connect farmers with MSMEs. Architected the backend using SvelteKit, Node.js, and Prisma ORM: implemented OpenRouteService geospatial API for routing and distance calculation, engineered a multi-factor supplier matching algorithm (40% crop quality, 35% reputation, 25% logistics), automated distance-based shipping rate formulas, integrated OpenRouter for NLP natural language order parsing, and built QR Code verification for crop quality certificates.",
    longDescription:
      "An AI-powered B2B AgriTech supply chain platform developed in a competitive hackathon to connect regional farmers with micro, small, and medium enterprises (MSMEs/UMKM). Addresses supply chain friction, opaque crop grading, and logistics barriers across Solo Raya with AI computer vision quality assessment, smart geographic supplier matching, automated shipping tariffs, and conversational order dispatching.",
    contributions: [
      {
        title: "Geolocation & Route Integration",
        description:
          "Integrated OpenRouteService API to calculate precise driving distances and optimal logistics routes between farmers and MSME buyers.",
      },
      {
        title: "Smart 3-Factor Farmer Matching Algorithm",
        description:
          "Engineered multi-criteria algorithmic ranking weighting harvest quality (40%), farmer reputation (35%), and logistics proximity (25%) to recommend optimal suppliers.",
      },
      {
        title: "Dynamic Logistics Cost Calculation",
        description:
          "Implemented an automated freight estimation engine with base fee formulas and variable per-kilometer transport rates.",
      },
      {
        title: "OpenRouter NLP Order Extraction",
        description:
          "Built conversational ordering workflows that process unstructured natural language buyer inputs via OpenRouter into validated transactional order payloads.",
      },
      {
        title: "Digital QR Quality Certification",
        description:
          "Integrated QR Code verification enabling buyers to immediately view digital quality certificates, inspection grades, and analysis details.",
      },
    ],
    stack: [
      "SvelteKit",
      "Node.js",
      "REST API",
      "Prisma ORM",
      "MySQL",
      "OpenRouteService",
      "OpenRouter",
      "QR Code",
    ],
    featured: true,
    repository: "https://github.com/ahmadnurain/taniva",
    liveUrl: null,
    image: "/taniva.png",
  },
  {
    slug: "desa-kepuh-digital-administration-iot",
    title: "Desa Kepuh — Village Administration & IoT Monitoring System",
    context: "Collaborative Project (Team of 2)",
    category: "Client & Institutional",
    categories: ["Client & Institutional", "Backend", "Web Development"],
    role: "Full Stack Web Developer (Backend-Focused)",
    achievement: null,
    description:
      "A digital public administration and IoT monitoring system developed in a 2-developer collaboration. Engineered dynamic administrative request forms using Laravel Livewire with conditional field logic across 11 document types, implemented citizen identity verification (KTP & selfie validation) with real-time status tracking, automated administrative PDF issuance via Laravel DomPDF, and integrated telemetry REST APIs for LoRa IoT water flow and RSSI signal monitoring.",
    longDescription:
      "A digital public administration and IoT monitoring system developed in a 2-developer collaboration for the village government of Desa Kepuh. The platform digitizes paper-based civil administrative letter requests for village residents while simultaneously streaming real-time IoT water flow and LoRa telemetry data to a unified monitoring dashboard.",
    contributions: [
      {
        title: "Dynamic Administrative Forms",
        description:
          "Developed reactive letter request forms using Laravel Livewire, enabling conditional form schemas across 11 official village document types without page reloads.",
      },
      {
        title: "Document Upload & Resident Verification",
        description:
          "Implemented secure file upload pipelines for resident ID cards (KTP) and selfie validation, complete with multi-stage status tracking.",
      },
      {
        title: "Automated PDF Generation",
        description:
          "Integrated Laravel DomPDF to automatically map validated resident submission data into official government letter templates with barcode validation.",
      },
      {
        title: "Administrative Review & Moderation Workflow",
        description:
          "Collaborated on administrative back-office workflows for request review, approval/rejection notes, document issuance, and archival.",
      },
      {
        title: "IoT Telemetry API Integration",
        description:
          "Built REST API consumers to ingest water flow debit metrics and LoRa RSSI signal strength data for village infrastructure monitoring.",
      },
    ],
    stack: [
      "Laravel 11",
      "Livewire 3",
      "Blade",
      "Tailwind CSS",
      "DomPDF",
      "REST API",
      "MySQL",
      "LoRa IoT",
    ],
    featured: false,
    repository: "https://github.com/ahmadnurain/adminstrasisurat-pematauan-debit-air-kepuh",
    liveUrl: null,
    image: "/desa-kepuh.png",
  },
  {
    slug: "smart-infrastructure-reporting",
    title: "Smart Infrastructure Reporting & AI-Driven Prioritization System (InfraStar)",
    context: "Competition / Team Project",
    category: "Competition / Team",
    categories: ["Backend", "Competition / Team"],
    role: "Backend Developer",
    achievement: "1st Place: PERMIKOMNAS Hackathon 2025",
    description:
      "A web-based infrastructure damage reporting platform developed as a team project using Laravel, React, Inertia.js, and Flask. As the Backend Developer, I built the core backend features including image upload pipelines, automated email notifications with Laravel Mail, database architecture with Eloquent ORM, migrations, and seeders, and API integration with a Flask ML service (TensorFlow / Keras) for damage classification and report prioritization.",
    longDescription:
      "A municipal infrastructure damage reporting platform built for the PERMIKOMNAS Hackathon 2025, winning 1st Place. Enables citizens to report road and public facility damages, automatically prioritizing repair dispatches via computer vision machine learning models.",
    contributions: [
      {
        title: "Flask ML Microservice Integration",
        description:
          "Connected Laravel backend to an internal Flask service running TensorFlow/Keras to analyze uploaded photos and predict damage severity.",
      },
      {
        title: "Automated Notification Pipeline",
        description:
          "Implemented automated email alert dispatches via Laravel Mail to notify municipal officers on high-priority infrastructure hazards.",
      },
      {
        title: "Database & Backend Design",
        description:
          "Designed relational database schemas, seeders, and Eloquent ORM relations supporting media uploads, triage workflows, and audit logs.",
      },
    ],
    stack: [
      "Laravel",
      "Inertia.js",
      "React",
      "Tailwind CSS",
      "Flask Integration",
      "Laravel Mail",
      "Eloquent ORM",
      "Database Design",
    ],
    featured: true,
    repository: "https://github.com/ahmadnurain/infrastar",
    liveUrl: null,
    image: "/infrastar.png",
  },
  {
    slug: "carita-cultural-ai-retail-assistant",
    title: "CARITA: Cultural AI for Retail & Identity-Telling Assistant",
    context: "Competition / Team Project",
    category: "Competition / Team",
    categories: ["Backend", "Competition / Team"],
    role: "Backend Developer",
    achievement: null,
    description:
      "A competition-driven AI application developed in a team using Laravel 12, Livewire 3, and a Python Flask microservice. As the Backend Developer, I implemented backend flows including image upload, QR Code generation, CRUD operations, and internal REST API integration with the PyTorch/Sentence-Transformers AI service for batik motif detection and cultural narrative generation.",
    longDescription:
      "An intelligent cultural retail assistant engineered with Laravel 12, Livewire 3, and a Python Flask microservice to recognize authentic Indonesian batik motifs and deliver cultural narratives directly to shoppers via QR codes.",
    contributions: [
      {
        title: "AI Model Microservice Integration",
        description:
          "Implemented REST API bridges to PyTorch/Sentence-Transformers vision and semantic search pipelines for motif classification.",
      },
      {
        title: "QR Code Generator & Tag Verification",
        description:
          "Built on-the-fly QR code generation linking physical garment labels to cultural storytelling pages and artisan profiles.",
      },
    ],
    stack: [
      "Laravel 12",
      "Livewire 3",
      "MySQL",
      "Spatie Permission",
      "Flask Integration",
      "REST API",
      "QR Code",
    ],
    featured: false,
    repository: "https://github.com/ahmadnurain/Carita",
    liveUrl: null,
    image: "/carita.png",
  },
  {
    slug: "synanthropic-bird-audio-classification",
    title: "Synanthropic Bird Audio Classification",
    context: "Academic / Final Thesis (Skripsi)",
    category: "Academic",
    categories: ["Academic", "Backend"],
    role: "ML Researcher & Developer",
    achievement: null,
    description:
      "An undergraduate thesis research developing a deep learning audio classification model for synanthropic bird vocalizations using the Xeno-Canto dataset. Implemented Log-Mel Spectrogram feature extraction combined with a hybrid EfficientNet-B3 and GRU architecture.",
    longDescription:
      "Undergraduate thesis research focusing on deep learning audio classification for synanthropic bird vocalizations using the global Xeno-Canto dataset. Investigates frequency transformation combined with recurrent convolutional networks to achieve robust bioacoustic classification in urban acoustic environments.",
    contributions: [
      {
        title: "Log-Mel Spectrogram Audio Pipeline",
        description:
          "Implemented audio preprocessing, noise reduction, and Mel-scale frequency spectrogram feature extraction using Python and Librosa.",
      },
      {
        title: "Hybrid EfficientNet-B3 + GRU Architecture",
        description:
          "Designed and trained a deep learning architecture combining convolutional visual feature extraction with Gated Recurrent Units for temporal vocalization dynamics.",
      },
    ],
    stack: ["Python", "EfficientNet-B3", "GRU", "Log-Mel Spectrogram", "Xeno-Canto"],
    featured: false,
    repository: "https://github.com/ahmadnurain/synanthropic-bird-classification",
    liveUrl: null,
    image: "/synanthropic-bird.png",
  },
  {
    slug: "website-pemesanan-tiket-wisata",
    title: "Website Pemesanan Tiket Wisata",
    context: "Academic / Competition Project",
    category: "Web Development",
    categories: ["Web Development", "Backend", "Competition / Team", "Academic"],
    role: "Backend Developer",
    achievement: "2nd Place: Gelar Karya Informatika 2025",
    description:
      "A tourism ticket booking web application built with Laravel and MySQL. Features include user authentication, destination CRUD through Filament Admin Panel, Midtrans payment integration, automated e-ticket delivery by email, ticket validation, and transaction reporting.",
    longDescription:
      "Tourism destination ticket booking platform built with Laravel and MySQL, winning 2nd Place at Gelar Karya Informatika 2025. Features instant e-tickets, payment gateway checkout, and complete admin reporting.",
    contributions: [
      {
        title: "Filament Admin Dashboard",
        description:
          "Built comprehensive destination management, quota monitoring, and financial reporting with Filament.",
      },
      {
        title: "Midtrans Payment Integration",
        description:
          "Integrated Midtrans Snap payment gateway with asynchronous webhook notification handlers.",
      },
      {
        title: "Automated E-Ticket Delivery",
        description:
          "Automated QR-coded e-ticket generation and PDF email dispatching upon payment confirmation.",
      },
    ],
    stack: ["Laravel", "MySQL", "Filament", "Midtrans", "Tailwind CSS"],
    featured: false,
    repository: "https://github.com/ahmadnurain/Web-Pemesanan-tiket",
    liveUrl: null,
    image: "/Screenshot (1304).png",
  },
  {
    slug: "personal-portfolio-website",
    title: "Personal Portfolio Website",
    context: "Personal Project",
    category: "Personal",
    categories: ["Web Development", "Personal"],
    role: "Designer & Developer",
    achievement: null,
    description:
      "A React + Tailwind portfolio created as a central place for recruiters, clients, and collaborators to review my experience, projects, and technical profile.",
    longDescription:
      "A high-performance modern web developer portfolio crafted with React, Vite, Tailwind CSS, and Framer Motion. Engineered with dark aesthetic tokens, responsive layouts, animated reveals, and detailed project case studies.",
    contributions: [
      {
        title: "Design System & UI Tokens",
        description:
          "Implemented custom dark-mode aesthetic with emerald accents, glassmorphic navigation, and responsive typography.",
      },
      {
        title: "Framer Motion Interactive Layer",
        description:
          "Engineered cinematic splash reveals, modal dialogs, and smooth state transitions.",
      },
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    featured: false,
    repository: "https://github.com/ahmadnurain/My-Portofolio",
    liveUrl: null,
    image: "/portofolio.png",
  },
  {
    slug: "chicken-crave-ui",
    title: "Chicken Crave UI",
    context: "Competition Project",
    category: "Web Development",
    categories: ["Web Development", "Competition / Team"],
    role: "Frontend Developer",
    achievement: null,
    description:
      "A modern food ordering concept focused on fluid UI/UX, smooth Framer Motion animations, and responsive layout structure.",
    longDescription:
      "A modern interactive culinary ordering web application concept engineered for high visual engagement, fluid animations, and intuitive ordering journeys.",
    contributions: [
      {
        title: "Fluid Animations & Micro-interactions",
        description:
          "Built engaging menu exploration and cart interaction animations using Framer Motion.",
      },
      {
        title: "Responsive Interface",
        description:
          "Crafted high-fidelity mobile-first layouts using Tailwind CSS.",
      },
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    featured: false,
    repository: "https://github.com/ahmadnurain/Chicken-Crave-Lomba-Web-Design",
    liveUrl: null,
    image: "/Screenshot (1139).png",
  },
  {
    slug: "winds-tech-landing",
    title: "Winds Tech Landing",
    context: "Competition / Team Project",
    category: "Web Development",
    categories: ["Web Development", "Competition / Team"],
    role: "Frontend Developer",
    achievement: "2nd Place: Web Design Competition, Universitas Wiralodra 2024",
    description:
      "An advanced online course landing page developed as a team project for a web design competition, achieving 2nd Place. Delivering an interactive user experience utilizing modern animations, clean typography, and responsive layout structure.",
    longDescription:
      "An advanced education technology landing page developed for a university-level web design competition, achieving 2nd Place at Universitas Wiralodra 2024. Focused on clean typographic hierarchy, engaging course previews, and seamless responsiveness.",
    contributions: [
      {
        title: "Competition UI/UX Architecture",
        description:
          "Designed and coded high-impact landing pages optimized for conversion and clarity.",
      },
      {
        title: "Interactive Components",
        description:
          "Developed animated testimonial carousels, curriculum accordions, and pricing tiers.",
      },
    ],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
    featured: false,
    repository: "https://github.com/ahmadnurain/Web-Design-Wind-s-Tech",
    liveUrl: null,
    image: "/Home section.png",
  },
  {
    slug: "personal-linktree",
    title: "Personal Linktree",
    context: "Personal Project",
    category: "Personal",
    categories: ["Web Development", "Personal"],
    role: "Frontend Developer",
    achievement: null,
    description:
      "A minimalist personal link-tree website featuring engaging animations and clean aesthetics. Built with ReactJS & Tailwind CSS.",
    longDescription:
      "A minimalist personal link hub and biography microsite featuring clean micro-animations, quick social dispatching, and responsive design.",
    contributions: [
      {
        title: "Minimalist Aesthetic",
        description:
          "Designed clean monochromatic visual scheme with subtle hover depth.",
      },
    ],
    stack: ["React", "Tailwind CSS"],
    featured: false,
    repository: "https://github.com/ahmadnurain/Link-tree",
    liveUrl: null,
    image: "/Screenshot 2025-02-21 222913.png",
  },
];

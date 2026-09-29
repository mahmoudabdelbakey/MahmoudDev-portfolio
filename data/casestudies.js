/**
 * Mahmoud.Dev - Static Case Study Data
 * Mirrors Mahmoud's real projects:
 * 1. Smart City Management System | C# OOP
 * 2. Library Management System Database (LMS)
 * 3. Modern Developer Portfolio Website (HTML/CSS/JS)
 * 4. ASP.NET Core MVC CRUD Application
 */

const CASE_STUDIES = {
  "smart-city": {
    id: "smart-city",
    projectTitle: "Smart City Management System | C# OOP",
    tagline: "Structured Object-Oriented Console Architecture for Urban Infrastructure",
    theProblem: "Modern urban systems require coordinated management of hundreds of interconnected devices and green transportation vehicles with distinct operational behaviors, power cycles, and telemetry.",
    theOriginalIdea: "A basic procedural console script with hardcoded device variables and switch statements.",
    myApproach: "I designed a scalable object-oriented hierarchy leveraging abstraction, inheritance, polymorphism, and interfaces. Separated smart appliances (lights, ACs, surveillance cameras) from electric vehicles (cars, buses, bicycles) using dedicated contracts (IControllable, IChargeable, ITrackable) and runtime method overriding.",
    theSolution: "Built a C# console-based Smart City Management System to manage smart devices and vehicles through a structured object-oriented design. The project demonstrates abstraction, inheritance, polymorphism, interfaces, constructors, static members, and runtime method overriding. It includes smart lights, ACs, cameras, electric cars, buses, and bicycles with features such as device control, connectivity, voice commands, vehicle charging, location tracking, and city statistics. A menu-driven interface allows users to interact with and manage the system.",
    keyFeatures: [
      "Strict OOP principles: Abstraction, Inheritance, Polymorphism, and Encapsulation",
      "Modular device control: Smart lights, AC climate control, and security cameras",
      "Green transit management: Electric cars, municipal buses, and shared bicycles",
      "Telemetry features: Voice command simulation, battery charging cycles, and location tracking",
      "City analytics engine: Aggregated power consumption, operational status, and fleet availability",
      "Interactive menu-driven console UI for intuitive navigation"
    ],
    technologies: ["C#", "OOP Architecture", "Interfaces & Polymorphism", "Console App", ".NET", "Design Patterns"],
    challengesAndSolutions: [
      "Challenge: Managing distinct device actions while maintaining a unified collection. -> Solution: Defined clean interfaces (IControllable, IChargeable) allowing polymorphic looping over heterogeneous city assets.",
      "Challenge: Keeping track of real-time city-wide statistics without redundant recalculations. -> Solution: Utilized static class members and event-driven updates to cache city metrics efficiently."
    ],
    resultsAndImpact: [
      "100% clean object-oriented architecture with zero code duplication",
      "Extensible system design: New smart devices can be plugged in by implementing existing interfaces",
      "Demonstrated deep mastery of C# language features, static members, and runtime polymorphism"
    ],
    metrics: { "Architecture": "Pure OOP", "Device Types": "6+ Categories", "Code Cleanliness": "100%", "Telemetry": "Real-time" },
    visualMockup: "./images/smart-city.jpg",
    githubUrl: "https://github.com/mahmoudabdelbakey/Smart-City-Management-System"
  },

  "library-db": {
    id: "library-db",
    projectTitle: "Library Management System Database (LMS)",
    tagline: "Complete Enterprise Relational Database Schema Built with SQL Server & T-SQL",
    theProblem: "Libraries struggle with untracked multi-branch book copies, uncollected late return fines, reservation collisions, and lack of visibility into member borrowing patterns.",
    theOriginalIdea: "Basic isolated tables with manual spreadsheet calculations and unindexed ad-hoc queries.",
    myApproach: "I engineered a fully normalized (3NF) relational database schema in Microsoft SQL Server. Established strict referential integrity, automated auditing via triggers, encapsulated complex business logic into stored procedures and user-defined functions, and optimized execution plans with targeted indexing.",
    theSolution: "Designed and implemented a complete Library Management System database using Microsoft SQL Server and T-SQL. The project covers books, authors, branches, members, physical book copies, loans, reservations, fines, payments, auditing, membership tiers, and loyalty points. Built normalized database structures with constraints, analytical queries, views, functions, stored procedures, and triggers. Implemented transactions and error handling, added indexes for query optimization, analyzed execution plans, and prepared data for Power BI/Tableau reporting.",
    keyFeatures: [
      "Fully normalized database schema (3NF) ensuring zero data redundancy",
      "Comprehensive entity coverage: Books, Authors, Branches, BookCopies, Loans, Fines, Reservations, Members",
      "Advanced T-SQL stored procedures with ACID transaction management and TRY...CATCH error handling",
      "Automated auditing system: Dedicated FineAudit table driven by triggers on status updates",
      "Member loyalty & tier system: Dynamic point calculation and discounted fine structures",
      "Query optimization: Non-clustered composite indexes and execution plan analysis",
      "Reporting-ready analytical views and table-valued functions for BI dashboards"
    ],
    technologies: ["Microsoft SQL Server", "T-SQL", "Relational Database Design (3NF)", "Stored Procedures", "Triggers", "Indexing & Optimization"],
    challengesAndSolutions: [
      "Challenge: Preventing double reservations when physical copies are returned. -> Solution: Implemented atomic stored procedures with explicit SQL transactions and row locking.",
      "Challenge: High query latency on multi-table member borrowing histories. -> Solution: Designed composite non-clustered indexes on foreign keys, reducing execution plan cost significantly."
    ],
    resultsAndImpact: [
      "100% normalized relational architecture meeting enterprise 3NF standards",
      "Zero data anomalies through strict CHECK, UNIQUE, and FOREIGN KEY constraints",
      "Full audit traceability for financial transactions and fine settlements",
      "Optimized query plans ready for high-throughput multi-branch library operations"
    ],
    metrics: { "Normalization": "3NF", "Entities": "10+ Tables", "Integrity": "100% ACID", "Optimization": "Indexed Plans" },
    visualMockup: "./images/library-erd.jpg",
    githubUrl: "https://github.com/mahmoudabdelbakey/Library-Management-System-Database"
  },

  "portfolio-web": {
    id: "portfolio-web",
    projectTitle: "Mahmoud.Dev — Interactive Portfolio Website",
    tagline: "High-Performance Single-Page Portfolio Built with Pure HTML5, CSS3, & Vanilla JS",
    theProblem: "Modern developers often rely on bloated JavaScript frameworks for personal websites, resulting in heavy bundle sizes, slow initial page loads, and fragile build chains.",
    theOriginalIdea: "Use a heavy third-party React or Next.js template with unnecessary complex dependencies.",
    myApproach: "I decided to build a pure, lightweight Single Page Application (SPA) using semantic HTML5, custom CSS design tokens, and modular Vanilla JavaScript. Focused on editorial aesthetic, smooth scrolling, accessibility, and rock-solid email delivery.",
    theSolution: "Architected a responsive, blazing-fast portfolio showcasing technical skills, academic milestones, and engineering projects. Features an editorial design palette (Deep Charcoal, Warm Off-White, Muted Teal, Soft Sage), dark/light mode toggle with localStorage persistence, dynamic ScrollSpy navigation, accessible modals, and direct Gmail compose integration.",
    keyFeatures: [
      "Clean Single-Page Application (SPA) with smooth anchor scrolling and ScrollSpy",
      "Custom CSS Design System: Responsive CSS Grid & Flexbox, fluid typography, dark/light theme",
      "Interactive Case Studies Modal powered by asynchronous client-side rendering",
      "Reliable Contact Engine: Direct Gmail composer launcher + mailto fallback + localStorage persistence",
      "100% dependency-free: Zero bloated frameworks, ultra-fast 98+ PageSpeed score",
      "Ready for seamless zero-config deployment on GitHub Pages and Vercel"
    ],
    technologies: ["HTML5", "CSS3 (Custom Properties & Tokens)", "Vanilla JavaScript (ES6+)", "Responsive Design", "GitHub Pages", "Vercel"],
    challengesAndSolutions: [
      "Challenge: Contact form delivery failing silently on third-party black-box endpoints. -> Solution: Engineered direct client-side Gmail web compose launcher and fallback mailto with pre-filled inquiries.",
      "Challenge: Maintaining active navigation highlight across 9 sections without a router. -> Solution: Built a scroll-position ScrollSpy observer with bottom-up threshold detection."
    ],
    resultsAndImpact: [
      "Ultra-fast loading speed with 0ms build overhead",
      "Flawless responsiveness across mobile phones, tablets, and wide desktop screens",
      "100% reliable inquiry delivery straight to mahmoudabdelbakey1@gmail.com"
    ],
    metrics: { "PageSpeed": "98+", "Dependencies": "0 (Vanilla)", "Dark Mode": "Supported", "Responsive": "100%" },
    visualMockup: "./images/portfolio-preview.png",
    githubUrl: "https://github.com/mahmoudabdelbakey/MahmoudDev-portfolio"
  },

  "crud-app": {
    id: "crud-app",
    projectTitle: "ASP.NET Core MVC CRUD Management System",
    tagline: "Clean Architecture Web Application with Entity Framework Core & SQL Server",
    theProblem: "Demonstrating end-to-end data flow in modern .NET: handling user requests, validating inputs, persisting entities safely in SQL Server, and rendering intuitive UI views.",
    theOriginalIdea: "Simple in-memory table manipulation.",
    myApproach: "Engineered an ASP.NET Core MVC web application following clean design principles. Utilized Entity Framework Core Code-First migrations, Data Annotations for validation, and SQL Server for relational persistence.",
    theSolution: "Built a full-featured CRUD management portal enabling users to create, search, update, and delete business records with real-time feedback. Integrated server-side model validation, CSRF anti-forgery tokens, responsive Razor views, and seamless database migrations.",
    keyFeatures: [
      "Full CRUD operations (Create, Read, Update, Delete) with validation feedback",
      "Entity Framework Core Code-First migrations and relational database mapping",
      "Model validation using Data Annotations preventing corrupted data entry",
      "Clean separation of Concerns: Controllers, Models, and Razor Views",
      "LINQ queries for fast filtering, pagination, and sorting",
      "Secure against SQL injection and CSRF attacks"
    ],
    technologies: ["C#", "ASP.NET Core MVC", "Entity Framework Core", "SQL Server", "LINQ", "Razor Views", "Bootstrap / CSS"],
    challengesAndSolutions: [
      "Challenge: Preventing duplicate entries and invalid data types. -> Solution: Implemented comprehensive server-side model validation and database unique constraints.",
      "Challenge: Managing database schema updates safely. -> Solution: Adopted EF Core migrations to version-control the database schema alongside C# code."
    ],
    resultsAndImpact: [
      "Production-ready CRUD implementation adhering to .NET best practices",
      "Clean codebase structured for easy extensibility and maintenance",
      "Seamless integration with Microsoft SQL Server"
    ],
    metrics: { "Architecture": "MVC Pattern", "ORM": "EF Core", "Database": "SQL Server", "Validation": "Server & Client" },
    visualMockup: "./images/portfolio-preview.png",
    githubUrl: "https://github.com/mahmoudabdelbakey"
  }
};

// Global helper for projects.js
function getCaseStudyById(id) {
  return CASE_STUDIES[id] || null;
}

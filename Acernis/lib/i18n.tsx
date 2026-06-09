"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "en" | "de";

const translations = {
  en: {
    nav: {
      platform: "Platform",
      useCases: "Use Cases",
      customers: "Customers",
      trust: "Trust",
      about: "About Us",
      contact: "Contact",
      bookDemo: "Request Free Access",
      testApp: "Read the Case Study",
      caseStudy: "Case Study",
    },
    home: {
      hero: {
        plannerTag: "Built for mobile network planners and executers",
        title: "The AI-powered mobile network infrastructure platform",
        body: "Turn network strategy into field-ready deployment instructions - instantly",
        cta1: "Request Free Access",
        cta2: "Read the Case Study",
        demoNote: "30 min with our founder — on real sites, not slides.",
      },
      problem: {
        eyebrow: "The Problem",
        title: "Telecom networks are fragmented, manual and data-blind.",
        body: "Every new network generation is a €200B+ project planned with spreadsheets, PDFs, and phone calls. Acernis builds the data infrastructure that makes automation possible.",
        metrics: [
          { value: "500k+", label: "Active sites under management globally" },
          { value: "€200B+", label: "Annual global capex for mobile network rollouts" },
          { value: "13% CAGR", label: "Network investment growth rate" },
          { value: "10 months", label: "Average time for a single site rollout" },
        ],
      },
      platformIntro: {
        eyebrow: "The Acernis Platform",
        title: "One web app for your whole network.",
        body: "Acernis hosts your BIM-based digital twins — covering the key use cases for network planning and deployment. Use it directly in the browser, or connect it to your existing tools via API.",
        closing: "Your data stays yours. Your BIM models stay accurate. Your rollouts move faster.",
        futureTitle: "Where we're headed",
        futureBody: "Acernis will become the operating layer for your entire rollout process — with AI agents that know your workflows, execute the work, and keep humans in the loop.",
      },
      solution: {
        eyebrow: "The Acernis approach",
        title: "Data foundation first, use cases and AI-driven workflows on top.",
        card1Badge: "Live",
        card1Title: "BIM-Based Foundation",
        card1Body: "Structured, standardized site data – version controlled and maintained over time",
        arrow1Label: "enables",
        card2Badge: "Live",
        card2Title: "Automation Use Cases",
        card2Body: "Live use cases covering planning, compliance & design across the rollout workflow",
        arrow2Label: "scales to",
        card3Badge: "Custom-made",
        card3Title: "AI-Driven Workflows",
        card3Body: "AI agents autonomously execute use cases end-to-end incl. contractor coordination – human in the loop",
      },
      howItWorks: {
        eyebrow: "How it works",
        title: "From messy data to autonomous rollouts — in four steps.",
        steps: [
          { number: "01", title: "We scan your sites", body: "High-precision 3D scan of your network infrastructure. Real-world accuracy, no manual input." },
          { number: "02", title: "We build your digital twin", body: "Every site becomes a structured BIM model — verified, version-controlled, and AI-ready." },
          { number: "03", title: "Agents start working", body: "Our agents run checks, plans and reports — directly on your data. No setup required." },
          { number: "04", title: "You stay in control", body: "You approve. Agents execute. Every action is logged, auditable and reversible." },
        ],
      },
      platformSection: {
        eyebrow: "Platform",
        title: "One web app for your whole network.",
        body: "Acernis is the single place where your whole network team works — operators, planners, designers and contractors, all on the same data.",
        nativeAppsLabel: "Native apps for:",
        nativeApps: ["Structural Pre-Assessment", "EMF Pre-Assessment", "Line of Sight", "Concept Design", "Site Survey"],
        otherFeatures: ["BIM viewer", "Version history", "Export API", "Multi-user access", "Role-based permissions", "Offline mode"],
        cta: "Explore the platform",
      },
      useCasesSection: {
        eyebrow: "Use Cases",
        title: "Key use cases for efficient network rollout",
        cta: "See all 10 use cases",
        items: [
          {
            number: "UC-04",
            title: "Static Pre-Assessment",
            short: "Structural feasibility — before you commit to a site.",
            savings: "Save up to 80% of assessment time",
            points: [
              "Auto-generates from BIM in seconds",
              "Flags structural constraints early",
              "Prevents redesigns downstream",
            ],
          },
          {
            number: "UC-05",
            title: "EMF Pre-Assessment",
            short: "Compliance confidence — before you apply for a permit.",
            savings: "Avoid sunk costs on 2% of non-viable sites",
            points: [
              "Runs directly on your digital twin",
              "Flags non-viable configurations early",
              "No additional surveys needed",
            ],
          },
        ],
      },
      customers: {
        eyebrow: "Customers",
        title: "Built with Europe's leading network operators.",
        quote: "The Acernis solution and data integrates seamlessly into my daily workflows and tools. I have confidence in the analysis results and regulatory penalties for non-compliance are strongly reduced.",
        quoteAuthor: "Patrick Großilbeck",
        quoteRole: "Senior Expert Mobile Networks, Vodafone",
        metric: "€12M+",
        metricLabel: "total cost savings identified across the Vodafone DE network",
        whitepaper: "Read the full case study",
        operators: ["Vodafone", "VMO2", "Trekking Telecom", "MID"],
      },
      trust: {
        eyebrow: "Trust & Security",
        title: "Telco-grade data, kept in the EU.",
        body: "Your network data is some of the most sensitive infrastructure data in the world. Acernis is built to meet the security and compliance requirements of Europe's largest operators.",
        pillars: [
          { title: "Hosted in the EU", body: "All data is stored and processed on EU-based servers, compliant with GDPR and local telecom regulations." },
          { title: "Role-based access control", body: "Granular permissions ensure only the right people see the right data — down to the site level." },
          { title: "Full audit trail", body: "Every change, export and access event is logged and auditable. You always know who did what and when." },
        ],
      },
      videoSection: {
        eyebrow: "Product Walkthrough",
        title: "See Acernis in action.",
        subtitle: "Watch how Acernis turns site data into deployment-ready rollout plans.",
        placeholder: "Click to play",
        comingSoon: "Video coming soon",
      },
      kpis: {
        items: [
          { value: "10–15%", label: "Minimum reduction in network rollout costs in the first year" },
          { value: "<30", label: "Days to run a full PoC across up to 10 live network sites" },
          { value: "10+", label: "API integrations to existing tools and systems" },
        ],
      },
      cta: {
        title: "Ready to run your next planning cycle on Acernis?",
        subtitle: "Book a 30-minute call with our founder.",
        cta1: "Request Free Access",
        cta2: "Read the Case Study",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Frequently Asked Questions",
        items: [
          { q: "What does Acernis actually do?", a: "Acernis is the AI-powered telecom infrastructure platform for network rollouts. It creates accurate BIM-based digital twins of network sites and uses AI agents to orchestrate end-to-end rollout workflows — from planning and permitting to contractor coordination and deployment instructions." },
          { q: "How fast can Acernis generate deployment instructions?", a: "Acernis can turn a rollout decision into field-ready, site-level deployment instructions in seconds. Once a site is onboarded to the platform, the baseline 3D BIM model is created with a one-time setup. All subsequent planning and automation runs against that live data." },
          { q: "What is the onboarding process for a new site?", a: "Each site is onboarded via BIM capture — using digital images, 2D documentation, or 3D scan data. Acernis automates the creation of the 3D BIM model from this input. A typical PoC can be up and running in under one month." },
          { q: "Who is Acernis built for?", a: "Acernis is primarily built for MNOs (Mobile Network Operators) and their ecosystems — including TowerCos, contractors, and general contractors. It is designed to be used across the entire supply chain, not just by a single team." },
          { q: "What use cases does the platform cover?", a: "Acernis covers coverage planning, technical site surveys, line-of-sight validation, detailed site design, static pre-assessment, EMF pre-assessment and permitting, concept design, and material take-offs — all driven from the BIM model rather than manual field work." },
          { q: "What BIM input data does Acernis accept?", a: "Acernis ingests digital images, 2D documentation, and 3D scan data to build its site models. Ground-based tower surveys and rooftop surveys are both supported, streamlining data collection on-site and saving up to 20% of survey effort." },
          { q: "What external systems does Acernis integrate with?", a: "Acernis integrates with a wide range of tools via API: geospatial sources (OpenStreetMap, Geospatial Viewer, DSM data), regulatory platforms (BNetzA, Cadastral Maps), field operations tools (Kizeo Forms, Revit), and third-party MNO applications. New integrations can be added on request." },
          { q: "Does Acernis work with Revit?", a: "Yes. Revit is a supported integration in Acernis' field operations and engineering toolchain, enabling component data exchange with CAD/BIM and structural engineering tools." },
          { q: "Which regulatory and compliance systems are supported?", a: "Acernis currently integrates with BNetzA (the German Federal Network Agency) and Cadastral Maps for regulatory and compliance workflows. EMF pre-assessment and permit submissions are directly supported from the BIM model." },
          { q: "Can Acernis connect to our existing MNO systems?", a: "Yes. Acernis exposes its data via a structured API layer and connects to MNO applications, third-party applications, and field tools. The platform is designed to act as a single source of truth that feeds into — rather than replaces — your existing tool landscape." },
          { q: "How is site data kept up to date?", a: "Acernis provides structured concepts for version management and data updates — but these are always tailored together with the MNO to fit its specific processes and workflows. This collaborative setup ensures maximum buy-in from all stakeholders along the supply chain. Once in place, Acernis becomes the shared mechanism through which every party — MNO, TowerCo, contractor — keeps data current and works from the same accurate baseline." },
          { q: "Is my data secure?", a: "Acernis is designed for enterprise MNO environments, where data security is a baseline requirement. Network operators retain full data ownership. Acernis does not use customer data to train models." },
          { q: "How much can Acernis reduce costs?", a: "Acernis conservatively delivers a 10–15% reduction in rollout costs, with some deployments achieving up to 25% savings. These gains compound across large site portfolios and are driven by reduced manual work, fewer site visits, and fewer redesign cycles." },
          { q: "How quickly can we run a proof of concept?", a: "A full PoC across up to 10 network sites can typically be executed in under one month. This is designed to let your team validate the business case with real data before committing to a broader rollout." },
          { q: "Do users need a CAD license to use Acernis?", a: "No. Acernis is a web-based platform that requires no CAD software license. Every user — regardless of their technical background — can access site models, deployment instructions, and rollout data directly in the browser." },
        ],
      },
    },
    platform: {
      hero: {
        eyebrow: "Platform",
        title: "The AI-powered mobile network infrastructure platform",
        subtitle: "Built for mobile network planners and executers",
      },
      what: {
        eyebrow: "What is Acernis",
        title: "BIM technology meets telco intelligence",
        body: "Acernis was developed together with network operators and general contractors. It fits into existing supply chains, tools and workflows rather than replacing them – ensuring high adoption across all stakeholders and smooth integration into day-to-day operations.",
        points: [
          "Highly integrable and API-ready: Seamlessly connects with existing planning, EMF and coverage tools",
          "Live automation use cases: Standardized BIM data powers planning, compliance and design workflows today",
          "Built for agentic AI: The structured data foundation AI agents need to autonomously execute rollouts end-to-end",
        ],
      },
      features: {
        eyebrow: "Why Acernis",
        title: "Why teams build on Acernis",
        items: [
          { title: "Single source of truth", desc: "One central data foundation for all stakeholders" },
          { title: "No CAD license needed", desc: "Accessible to every team – MNOs, TowerCos, contractors" },
          { title: "Seamless API integration", desc: "Connects with existing tools out of the box" },
          { title: "Always up to date", desc: "Version-controlled and continuously maintained" },
          { title: "Full data ownership", desc: "Network operators retain complete control over their data" },
          { title: "BIM quality guarantee", desc: "Validated models ensuring 100% reliability for critical use cases" },
        ],
      },
    },
    useCases: {
      hero: {
        eyebrow: "Automation Use Cases",
        title: "Key use cases for efficient network rollout",
        subtitle: "10 BIM-based automation use cases spanning the full rollout workflow – from planning to compliance to design.",
      },
      cases: [
        { number: "01", title: "Coverage Planning", short: "More accurate coverage with fewer antennas", body: "Replace error-prone 2D documentation with scan-based 3D site models. Acernis feeds coverage simulations with accurate, real-world inventory data – enabling smarter antenna placement and fewer required sites.", points: ["More accurate coverage predictions", "Optimized site placement", "Faster roll-out through better upfront decisions"] },
        { number: "02", title: "Radio & Transport Concept", short: "3D concept design with early collision detection", body: "Faulty 2D documentation triggers costly rework late in the process. Acernis provides instant access to accurate, up-to-date 3D site models so concepts are validated before they enter the workflow.", points: ["Accurate concepts based on real inventory data", "Eliminate ~5% of sites with non-solvable concepts", "Save avoidable sunk costs"] },
        { number: "03", title: "Line of Sight", short: "Digital LoS analysis replaces physical field testing", body: "Physical LoS tests are mandatory for every new link – time-consuming, costly, and often unnecessary. With up-to-date 3D environment data from Acernis, digital LoS analysis replaces fieldwork in several cases.", points: ["Digital LoS validation directly from the BIM model", "Reduce physical LoS tests by up to 20% per year", "Fewer site visits, faster planning cycles"] },
        { number: "04", title: "Static Pre-Assessment", short: "Early validation of structural feasibility", body: "Structural viability is only considered late in the process. Acernis enables data-driven static pre-assessments directly from the BIM model.", points: ["Early detection of structural constraints before they cause redesigns", "Fewer iterations and faster transition to concept design", "More predictable costs and a streamlined roll-out"] },
        { number: "05", title: "EMF Pre-Assessment", short: "Early EMF compliance checks to prevent delays", body: "On many sites, achieving an EMF-compliant configuration requires multiple iterations – and in 2% of cases, no viable configuration exists at all. Acernis flags non-viable sites before sunk costs accumulate.", points: ["Avoid unnecessary site surveys and simulations", "Fewer and faster decision cycles"] },
        { number: "06", title: "Technical Site Survey", short: "Digital surveys reduce or eliminate on-site visits", body: "Every site survey ties up field teams and delays planning. With scan-based 3D BIM models, Acernis reduces the need for physical on-site surveys.", points: ["Ground based tower sites: eliminate surveys entirely", "Rooftop tower upgrades: save 20% of survey effort", "Free up field team capacity"] },
        { number: "07", title: "Concept Design", short: "3D BIM design replaces manual drawings", body: "2D site design is error-prone, slow to iterate, and hard to collaborate on. Acernis replaces manual 2D workflows with 3D BIM models – catching conflicts early and automating key design steps.", points: ["Full site redesigns completed 50% faster", "Better collaboration across all planning stakeholders"] },
        { number: "08", title: "Detailed Site Design", short: "Automated bill of materials and steel part drawings", body: "Late-stage design errors drive excess material orders, on-site rework, and unnecessary crane time. Acernis combines accurate 3D BIM models with automated loading checks.", points: ["Reduce steel over-ordering and rework by up to 30%", "Cut cherry picker and crane rental costs by up to 15%", "Non-standard metallic designs: 80% automated drawing generation", "Time saved through automated Bill of Materials"] },
        { number: "09", title: "EMF Assessment & Permit", short: "Faster, automated EMF approval using scan data", body: "Building EMF analysis models manually consumes 30–40% of total simulation time. Acernis auto-generates the EMF analysis model directly from the 3D BIM model.", points: ["Save up to 35% of simulation effort", "Faster permit submissions through accurate, BIM-derived input data", "Reduced risk of errors in the EMF model build"] },
        { number: "10", title: "Static Assessment", short: "Direct structural analysis from BIM – no separate models", body: "Creating and updating Finite Element Models manually is the biggest time sink in structural analysis. Acernis auto-generates the base FEM directly from the BIM model.", points: ["Save up to 70% of total assessment effort", "Higher model quality through standardization"] },
      ],
    },
    about: {
      hero: {
        eyebrow: "About Acernis",
        title: "Building the foundation for autonomous telco networks",
        paragraphs: [
          "Charles Ricke founded Acernis in 2018 together with friends he met during his studies in the Netherlands. We started as a drone consultancy for large infrastructure industries — getting hands-on experience at the sharp end of how physical networks are actually built.",
          "Over the following years, we expanded across the full telecom supply chain. Working with over 50 organisations — contractors, TowerCos, MNOs, and everyone in between — gave us an unusually deep understanding of every role, every workflow, and every friction point in the rollout process.",
          "That experience became the foundation for our software platform. We built it from the ground up to support the entire ecosystem: because network rollouts only work when everyone — MNOs, contractors, and suppliers — works from the same picture.",
          "Today, Acernis focuses on MNOs as the central orchestrator of network planning and deployment. Eight years in, we bring everything we've learned from across the supply chain into a single platform — so that every stakeholder can do their part, faster and with less friction.",
        ],
      },
      mission: {
        eyebrow: "Our Belief",
        title: "Ultimately, AI agents will run rollouts autonomously — with humans in the loop",
        body: "We believe the telco industry is at an inflection point. BIM technology – proven in construction and architecture – is now ready to transform how mobile networks are planned, deployed and maintained. Acernis is the platform that makes this transformation possible, starting with live automation use cases today and scaling to fully autonomous AI-driven workflows tomorrow.",
      },
      team: {
        eyebrow: "Team",
        title: "Meet the team",
        members: [
          { name: "Charles Ricke", role: "Founder & CEO", email: "charles.ricke@acernis.fr", phone: "+33 7 68 33 99 62" },
          { name: "Charles-Ed. Laguérie", role: "CFO" },
          { name: "Lars Krahnstöver", role: "CRO" },
          { name: "Amaury Bannier", role: "CPO" },
          { name: "Filip Wrzosek", role: "COO" },
          { name: "Ricardo Machado", role: "Head of Account Management" },
          { name: "Aurélien Meunieur", role: "Head of AI" },
        ],
      },
    },
    contact: {
      hero: {
        eyebrow: "Contact",
        title: "Interested in a call?",
        subtitle: "Feel free to reach out to us directly, or book a demo to see Acernis in action.",
      },
      form: {
        title: "Send us a message",
        name: "Full name",
        company: "Company",
        email: "Email address",
        message: "Message",
        send: "Send Message",
        namePlaceholder: "Your name",
        companyPlaceholder: "Your company",
        emailPlaceholder: "you@company.com",
        messagePlaceholder: "How can we help?",
      },
      direct: { title: "Or reach out directly" },
      links: { website: "More Information", app: "Sign up to Test the App" },
    },
    footer: {
      tagline: "The AI-powered telecom infrastructure platform",
      platform: "Platform",
      useCases: "Use Cases",
      about: "About",
      contact: "Contact",
      testApp: "Read the Case Study",
      rights: "All rights reserved.",
    },
  },
  de: {
    nav: {
      platform: "Plattform",
      useCases: "Use Cases",
      customers: "Kunden",
      trust: "Sicherheit",
      about: "Über uns",
      contact: "Kontakt",
      bookDemo: "Zugang anfragen",
      testApp: "Case Study lesen",
      caseStudy: "Case Study",
    },
    home: {
      hero: {
        plannerTag: "Für Mobile-Network-Planer und -Umsetzer",
        title: "Die KI-gestützte Mobilnetz-Infrastrukturplattform",
        body: "Aus Netzwerkstrategie werden sofort einsatzbereite Deployment-Anweisungen – sofort.",
        cta1: "Zugang anfragen",
        cta2: "Case Study lesen",
        demoNote: "30 Min. mit unserem Gründer — an echten Standorten, nicht nur Folien.",
      },
      problem: {
        eyebrow: "Das Problem",
        title: "Telekommunikationsnetze sind fragmentiert, manuell und datenblind.",
        body: "Jede neue Netzwerkgeneration ist ein €200Mrd.+-Projekt, das mit Tabellenkalkulationen, PDFs und Telefonaten geplant wird. Acernis baut die Dateninfrastruktur, die Automatisierung möglich macht.",
        metrics: [
          { value: "500k+", label: "Aktiv verwaltete Standorte weltweit" },
          { value: "€200Mrd.+", label: "Jährliche globale Capex für Mobilnetz-Rollouts" },
          { value: "13% CAGR", label: "Wachstumsrate der Netzwerkinvestitionen" },
          { value: "10 Monate", label: "Durchschnittliche Zeit für einen einzelnen Standort-Rollout" },
        ],
      },
      platformIntro: {
        eyebrow: "Die Acernis-Plattform",
        title: "Eine Web-App für Ihr gesamtes Netzwerk.",
        body: "Acernis hostet Ihre BIM-basierten digitalen Zwillinge — für die wichtigsten Use Cases in Netzwerkplanung und -deployment. Nutzen Sie es direkt im Browser oder verbinden Sie es über API mit Ihren bestehenden Tools.",
        closing: "Ihre Daten bleiben Ihres. Ihre BIM-Modelle bleiben präzise. Ihre Rollouts werden schneller.",
        futureTitle: "Wohin wir uns entwickeln",
        futureBody: "Acernis wird zur operativen Schicht Ihres gesamten Rollout-Prozesses — mit KI-Agenten, die Ihre Workflows kennen, die Arbeit ausführen und dabei Menschen in der Schleife lassen.",
      },
      solution: {
        eyebrow: "Der Acernis-Ansatz",
        title: "Zuerst Datenfundament, darauf Use Cases und KI-gesteuerte Workflows.",
        card1Badge: "Live",
        card1Title: "BIM-basiertes Fundament",
        card1Body: "Strukturierte, standardisierte Standortdaten – versionskontrolliert und langfristig gepflegt",
        arrow1Label: "ermöglicht",
        card2Badge: "Live",
        card2Title: "Automatisierungs-Use-Cases",
        card2Body: "Live-Use-Cases für Planung, Compliance & Design im gesamten Rollout-Workflow",
        arrow2Label: "skaliert zu",
        card3Badge: "Maßgeschneidert",
        card3Title: "KI-gesteuerte Workflows",
        card3Body: "KI-Agenten führen Use Cases autonom End-to-End durch inkl. Auftragnehmer-Koordination – Human in the Loop",
      },
      howItWorks: {
        eyebrow: "So funktioniert es",
        title: "Von chaotischen Daten zu autonomen Rollouts — in vier Schritten.",
        steps: [
          { number: "01", title: "Wir scannen Ihre Standorte", body: "Hochpräziser 3D-Scan Ihrer Netzwerkinfrastruktur. Realweltgenauigkeit, kein manueller Aufwand." },
          { number: "02", title: "Wir bauen Ihren digitalen Zwilling", body: "Jeder Standort wird zu einem strukturierten BIM-Modell — verifiziert, versionskontrolliert und KI-bereit." },
          { number: "03", title: "Agenten beginnen zu arbeiten", body: "Unsere Agenten führen Prüfungen, Pläne und Berichte direkt auf Ihren Daten durch. Kein Setup erforderlich." },
          { number: "04", title: "Sie behalten die Kontrolle", body: "Sie genehmigen. Agenten führen aus. Jede Aktion wird protokolliert, ist auditierbar und reversibel." },
        ],
      },
      platformSection: {
        eyebrow: "Plattform",
        title: "Eine Web-App für Ihr gesamtes Netzwerk.",
        body: "Acernis ist der zentrale Ort, an dem Ihr gesamtes Netzwerkteam arbeitet — Betreiber, Planer, Designer und Auftragnehmer, alle auf denselben Daten.",
        nativeAppsLabel: "Native Apps für:",
        nativeApps: ["Statische Vorprüfung", "EMF-Vorprüfung", "Sichtlinie", "Konzeptdesign", "Standortbegehung"],
        otherFeatures: ["BIM-Viewer", "Versionsverlauf", "Export-API", "Mehrbenutzerzugang", "Rollenbasierte Berechtigungen", "Offline-Modus"],
        cta: "Plattform erkunden",
      },
      useCasesSection: {
        eyebrow: "Use Cases",
        title: "Wichtigste Use Cases für effizienten Netzwerk-Rollout",
        cta: "Alle 10 Use Cases ansehen",
        items: [
          {
            number: "UC-04",
            title: "Statische Vorprüfung",
            short: "Strukturelle Machbarkeit — bevor Sie sich für einen Standort entscheiden.",
            savings: "Bis zu 80% der Bewertungszeit einsparen",
            points: [
              "Automatische Generierung aus BIM in Sekunden",
              "Frühe Erkennung struktureller Einschränkungen",
              "Verhindert Neuplanungen nachgelagert",
            ],
          },
          {
            number: "UC-05",
            title: "EMF-Vorprüfung",
            short: "Compliance-Sicherheit — bevor Sie einen Antrag stellen.",
            savings: "Versunkene Kosten bei 2% nicht machbaren Standorten vermeiden",
            points: [
              "Läuft direkt auf Ihrem digitalen Zwilling",
              "Erkennt früh nicht machbare Konfigurationen",
              "Keine zusätzlichen Untersuchungen erforderlich",
            ],
          },
        ],
      },
      customers: {
        eyebrow: "Kunden",
        title: "Entwickelt mit Europas führenden Netzbetreibern.",
        quote: "Die Acernis-Lösung und die Daten integrieren sich nahtlos in meine täglichen Workflows und Tools. Ich vertraue den Analyseergebnissen und regulatorische Strafen für Nichteinhaltung werden stark reduziert.",
        quoteAuthor: "Patrick Großilbeck",
        quoteRole: "Senior Expert Mobile Networks, Vodafone",
        metric: "€12M+",
        metricLabel: "Gesamte identifizierte Kosteneinsparungen im Vodafone-DE-Netzwerk",
        whitepaper: "Vollständige Fallstudie lesen",
        operators: ["Vodafone", "VMO2", "Trekking Telecom", "MID"],
      },
      trust: {
        eyebrow: "Vertrauen & Sicherheit",
        title: "Telko-Grade-Daten, in der EU gespeichert.",
        body: "Ihre Netzwerkdaten gehören zu den sensibelsten Infrastrukturdaten der Welt. Acernis erfüllt die Sicherheits- und Compliance-Anforderungen von Europas größten Netzbetreibern.",
        pillars: [
          { title: "In der EU gehostet", body: "Alle Daten werden auf EU-Servern gespeichert und verarbeitet, konform mit DSGVO und lokalen Telekommunikationsvorschriften." },
          { title: "Rollenbasierte Zugriffskontrolle", body: "Granulare Berechtigungen stellen sicher, dass nur die richtigen Personen die richtigen Daten sehen — bis auf Standortebene." },
          { title: "Vollständiger Audit-Trail", body: "Jede Änderung, jeder Export und jedes Zugriffsereignis wird protokolliert und ist auditierbar. Sie wissen immer, wer was wann getan hat." },
        ],
      },
      videoSection: {
        eyebrow: "Produkt-Walkthrough",
        title: "Acernis in Aktion.",
        subtitle: "Sehen Sie, wie Acernis Standortdaten in einsatzbereite Rollout-Pläne umwandelt.",
        placeholder: "Zum Abspielen klicken",
        comingSoon: "Video demnächst verfügbar",
      },
      kpis: {
        items: [
          { value: "10–15%", label: "Mindest-Kostenreduktion bei Netzwerk-Rollouts im ersten Jahr" },
          { value: "<30", label: "Tage für einen vollständigen PoC über bis zu 10 aktive Netzwerkstandorte" },
          { value: "10+", label: "API-Integrationen zu bestehenden Tools und Systemen" },
        ],
      },
      cta: {
        title: "Bereit, Ihren nächsten Planungszyklus mit Acernis durchzuführen?",
        subtitle: "Vereinbaren Sie ein 30-minütiges Gespräch mit unserem Gründer.",
        cta1: "Zugang anfragen",
        cta2: "Case Study lesen",
      },
      faq: {
        eyebrow: "FAQ",
        title: "Häufig gestellte Fragen",
        items: [
          { q: "Was macht Acernis eigentlich?", a: "Acernis ist die KI-gestützte Telco-Infrastrukturplattform für Netzwerk-Rollouts. Es erstellt präzise BIM-basierte digitale Zwillinge von Netzwerkstandorten und nutzt KI-Agenten, um End-to-End-Rollout-Workflows zu orchestrieren — von Planung und Genehmigung bis zur Auftragnehmerkoordination und Deployment-Anweisungen." },
          { q: "Wie schnell kann Acernis Deployment-Anweisungen generieren?", a: "Acernis kann eine Rollout-Entscheidung in Sekundenschnelle in einsatzbereite, standortgenaue Deployment-Anweisungen umwandeln. Sobald ein Standort auf der Plattform erfasst ist, wird das BIM-Grundmodell einmalig erstellt. Alle nachfolgende Planung und Automatisierung läuft gegen diese Live-Daten." },
          { q: "Wie läuft das Onboarding für einen neuen Standort ab?", a: "Jeder Standort wird per BIM-Erfassung onboarded — mit digitalen Bildern, 2D-Dokumentation oder 3D-Scandaten. Acernis automatisiert die Erstellung des 3D-BIM-Modells aus diesen Eingaben. Ein typischer PoC kann in weniger als einem Monat einsatzbereit sein." },
          { q: "Für wen ist Acernis entwickelt?", a: "Acernis ist primär für MNOs (Mobile-Network-Operators) und deren Ökosysteme konzipiert — einschließlich TowerCos, Auftragnehmern und Generalunternehmern. Die Plattform ist für die gesamte Lieferkette ausgelegt, nicht nur für ein einzelnes Team." },
          { q: "Welche Use Cases deckt die Plattform ab?", a: "Acernis deckt Versorgungsplanung, technische Standortbegehungen, Sichtlinienvalidierung, detailliertes Standortdesign, statische Vorab-Bewertung, EMF-Vorab-Bewertung und Genehmigung, Konzeptdesign sowie Materialmengenschätzungen ab — alles aus dem BIM-Modell heraus statt durch manuelle Feldarbeit." },
          { q: "Welche BIM-Eingabedaten akzeptiert Acernis?", a: "Acernis verarbeitet digitale Bilder, 2D-Dokumentation und 3D-Scandaten zur Erstellung von Standortmodellen. Boden-basierte Turm- und Dachstandort-Begehungen werden beide unterstützt, was die Datenerfassung vor Ort vereinfacht und bis zu 20 % Begehungsaufwand einspart." },
          { q: "Mit welchen externen Systemen integriert Acernis?", a: "Acernis integriert über API mit einer Vielzahl von Werkzeugen: Geoquellen (OpenStreetMap, Geospatial Viewer, DSM-Daten), Regulierungsplattformen (BNetzA, Liegenschaftskarten), Feldeinsatz-Tools (Kizeo Forms, Revit) sowie Drittanbieter-MNO-Anwendungen. Neue Integrationen können auf Anfrage hinzugefügt werden." },
          { q: "Funktioniert Acernis mit Revit?", a: "Ja. Revit ist eine unterstützte Integration im Feldeinsatz- und Engineering-Toolchain von Acernis und ermöglicht den Komponentendatenaustausch mit CAD/BIM- und Tragwerksplanungs-Tools." },
          { q: "Welche Regulierungs- und Compliance-Systeme werden unterstützt?", a: "Acernis integriert aktuell mit der BNetzA (Bundesnetzagentur) und Liegenschaftskarten für Regulierungs- und Compliance-Workflows. EMF-Vorab-Bewertung und Genehmigungseinreichungen werden direkt aus dem BIM-Modell unterstützt." },
          { q: "Kann Acernis mit unseren bestehenden MNO-Systemen verbunden werden?", a: "Ja. Acernis stellt seine Daten über eine strukturierte API-Schicht bereit und verbindet sich mit MNO-Anwendungen, Drittanbieter-Anwendungen und Feld-Tools. Die Plattform ist als Single Source of Truth konzipiert, die in Ihre bestehende Tool-Landschaft einfließt — und diese nicht ersetzt." },
          { q: "Wie werden Standortdaten aktuell gehalten?", a: "Acernis bietet strukturierte Konzepte für Versionsverwaltung und Datenaktualisierungen — diese werden jedoch stets gemeinsam mit dem MNO an die spezifischen Prozesse und Workflows angepasst. Dieses kollaborative Vorgehen sichert die maximale Akzeptanz aller Beteiligten entlang der Supply Chain. Einmal etabliert, wird Acernis zum gemeinsamen Mechanismus, über den jede Partei — MNO, TowerCo, Auftragnehmer — Daten aktuell hält und auf der gleichen präzisen Datenbasis arbeitet." },
          { q: "Sind meine Daten sicher?", a: "Acernis ist für Enterprise-MNO-Umgebungen konzipiert, in denen Datensicherheit eine Grundvoraussetzung ist. Netzwerkbetreiber behalten die vollständige Datenkontrolle. Acernis verwendet keine Kundendaten zum Training von Modellen." },
          { q: "Wie viel Kosten kann Acernis einsparen?", a: "Acernis liefert konservativ eine Kostenreduktion von 10–15 % bei Rollout-Kosten, in manchen Fällen bis zu 25 % Einsparungen. Diese Gewinne wirken sich kumulativ über große Standortportfolios aus und entstehen durch weniger manuelle Arbeit, weniger Standortbesuche und weniger Nachplanungszyklen." },
          { q: "Wie schnell können wir einen Proof of Concept durchführen?", a: "Ein vollständiger PoC über bis zu 10 Netzwerkstandorte kann in der Regel in weniger als einem Monat durchgeführt werden. Dies ermöglicht Ihrem Team, den Business Case mit echten Daten zu validieren, bevor ein breiterer Rollout eingeleitet wird." },
          { q: "Benötigen Nutzer eine CAD-Lizenz für Acernis?", a: "Nein. Acernis ist eine webbasierte Plattform, die keine CAD-Software-Lizenz erfordert. Jeder Nutzer — unabhängig von seinem technischen Hintergrund — kann Standortmodelle, Deployment-Anweisungen und Rollout-Daten direkt im Browser aufrufen und bearbeiten." },
        ],
      },
    },
    platform: {
      hero: {
        eyebrow: "Plattform",
        title: "Die KI-gestützte Mobilnetz-Infrastrukturplattform",
        subtitle: "Für Planer und Umsetzer von Mobilfunknetzen",
      },
      what: {
        eyebrow: "Was ist Acernis",
        title: "BIM-Technologie trifft Telko-Intelligenz",
        body: "Acernis wurde gemeinsam mit Netzbetreibern und Generalunternehmern entwickelt. Es fügt sich in bestehende Supply Chains, Tools und Workflows ein, anstatt sie zu ersetzen.",
        points: [
          "Hochgradig integrierbar und API-ready: Verbindet sich nahtlos mit bestehenden Planungs-, EMF- und Coverage-Tools",
          "Live-Automatisierungs-Use-Cases: Standardisierte BIM-Daten treiben Planungs-, Compliance- und Design-Workflows an",
          "Für agentische KI gebaut: Die strukturierte Datengrundlage für autonome End-to-End-Rollouts",
        ],
      },
      features: {
        eyebrow: "Warum Acernis",
        title: "Warum Teams auf Acernis setzen",
        items: [
          { title: "Single Source of Truth", desc: "Eine zentrale Datengrundlage für alle Stakeholder" },
          { title: "Kein CAD-Lizenz nötig", desc: "Zugänglich für alle – MNOs, TowerCos, Auftragnehmer" },
          { title: "Nahtlose API-Integration", desc: "Verbindet sich mit bestehenden Tools out of the box" },
          { title: "Immer aktuell", desc: "Versionskontrolliert und kontinuierlich gepflegt" },
          { title: "Volle Datenkontrolle", desc: "Netzbetreiber behalten die vollständige Kontrolle über ihre Daten" },
          { title: "BIM-Qualitätsgarantie", desc: "Validierte Modelle für 100% Zuverlässigkeit bei kritischen Use Cases" },
        ],
      },
    },
    useCases: {
      hero: {
        eyebrow: "Automatisierungs-Use-Cases",
        title: "Wichtigste Use Cases für effizienten Netzwerkrollout",
        subtitle: "10 BIM-basierte Automatisierungs-Use-Cases für den gesamten Rollout-Workflow – von der Planung über Compliance bis zum Design.",
      },
      cases: [
        { number: "01", title: "Coverage-Planung", short: "Genauere Abdeckung mit weniger Antennen", body: "Scanbasierte 3D-Standortmodelle ersetzen fehleranfällige 2D-Dokumentation.", points: ["Genauere Abdeckungsvorhersagen", "Optimierte Standortplatzierung", "Schnellerer Rollout"] },
        { number: "02", title: "Radio & Transport Konzept", short: "3D-Konzeptdesign mit früher Kollisionserkennung", body: "Fehlerhafte 2D-Dokumentation löst kostspielige Nacharbeit aus. Acernis bietet sofortigen Zugang zu genauen 3D-Standortmodellen.", points: ["Genaue Konzepte auf Basis realer Daten", "~5% der Standorte mit unlösbaren Konzepten eliminieren", "Versunkene Kosten vermeiden"] },
        { number: "03", title: "Sichtlinie (LoS)", short: "Digitale LoS-Analyse ersetzt physische Feldtests", body: "Physische LoS-Tests sind obligatorisch – zeitaufwändig und oft unnötig. Digitale LoS-Analyse ersetzt Feldarbeit.", points: ["Digitale LoS-Validierung aus dem BIM-Modell", "Bis zu 20% weniger physische LoS-Tests", "Weniger Standortbesuche"] },
        { number: "04", title: "Statische Vorprüfung", short: "Frühe Validierung der strukturellen Machbarkeit", body: "Strukturelle Machbarkeit wird oft erst spät berücksichtigt. Acernis ermöglicht datengestützte Vorprüfungen direkt aus dem BIM-Modell.", points: ["Früherkennung struktureller Einschränkungen", "Weniger Iterationen", "Vorhersehbarere Kosten"] },
        { number: "05", title: "EMF-Vorprüfung", short: "Frühe EMF-Compliance-Prüfungen", body: "BIM-basierte EMF-Machbarkeitsprüfungen flaggen nicht lebensfähige Standorte, bevor Kosten entstehen.", points: ["Unnötige Standortuntersuchungen vermeiden", "Weniger und schnellere Entscheidungszyklen"] },
        { number: "06", title: "Technische Standortbegehung", short: "Digitale Begehungen reduzieren Vor-Ort-Besuche", body: "Scanbasierte 3D-BIM-Modelle reduzieren den Bedarf an physischen Begehungen erheblich.", points: ["Bodenbasierte Turmstandorte: Begehungen eliminieren", "Dachturmaufrüstungen: 20% Effizienzgewinn", "Außendienstkapazitäten freisetzen"] },
        { number: "07", title: "Konzeptdesign", short: "3D-BIM ersetzt manuelle Zeichnungen", body: "2D-Design ist fehleranfällig. Acernis ersetzt manuelle 2D-Workflows durch 3D-BIM-Modelle.", points: ["Standortneugestaltungen 50% schneller", "Bessere Zusammenarbeit aller Stakeholder"] },
        { number: "08", title: "Detailliertes Standortdesign", short: "Automatisierte Stücklisten und Stahlzeichnungen", body: "Acernis kombiniert 3D-BIM-Modelle mit automatisierten Lastprüfungen für präzise Stahlplanung.", points: ["Überbestellungen bis zu 30% reduzieren", "Kranmietkosten bis zu 15% senken", "80% automatisierte Zeichnungsgenerierung", "Zeitersparnis durch automatisierte Stückliste"] },
        { number: "09", title: "EMF-Bewertung & Genehmigung", short: "Schnellere, automatisierte EMF-Genehmigung", body: "Acernis generiert das EMF-Analysemodell automatisch aus dem 3D-BIM-Modell.", points: ["Bis zu 35% Simulationsaufwand einsparen", "Schnellere Genehmigungseinreichungen", "Reduziertes Fehlerrisiko"] },
        { number: "10", title: "Statische Bewertung", short: "Direkte Strukturanalyse aus BIM", body: "Acernis generiert das FEM automatisch aus dem BIM-Modell und eliminiert den größten Zeitfresser.", points: ["Bis zu 70% des Bewertungsaufwands einsparen", "Höhere Modellqualität durch Standardisierung"] },
      ],
    },
    about: {
      hero: {
        eyebrow: "Über Acernis",
        title: "Grundlage für autonome Telco-Netzwerke aufbauen",
        paragraphs: [
          "Charles Ricke gründete Acernis 2018 gemeinsam mit Freunden, die er während seines Studiums in den Niederlanden kennenlernte. Wir starteten als Drohnen-Beratungsunternehmen für große Infrastrukturindustrien — und sammelten praxisnahe Erfahrung an der vordersten Front, wie physische Netzwerke tatsächlich gebaut werden.",
          "In den folgenden Jahren weiteten wir uns auf die gesamte Telko-Lieferkette aus. Die Zusammenarbeit mit über 50 Organisationen — Auftragnehmern, TowerCos, MNOs und allen dazwischen — gab uns ein ungewöhnlich tiefes Verständnis für jede Rolle, jeden Workflow und jeden Reibungspunkt im Rollout-Prozess.",
          "Diese Erfahrung wurde das Fundament unserer Softwareplattform. Wir haben sie von Grund auf entwickelt, um das gesamte Ökosystem zu unterstützen: denn Netzwerk-Rollouts funktionieren nur, wenn alle — MNOs, Auftragnehmer und Lieferanten — nach demselben Bild arbeiten.",
          "Heute fokussiert Acernis auf MNOs als zentralen Orchestrator der Netzwerkplanung und -umsetzung. Nach acht Jahren bringen wir alles, was wir entlang der Lieferkette gelernt haben, in eine einzige Plattform — damit jeder Beteiligte seinen Teil schneller und mit weniger Reibung leisten kann.",
        ],
      },
      mission: {
        eyebrow: "Unser Glaube",
        title: "KI-Agenten werden Rollouts autonom durchführen — mit Menschen in der Schleife",
        body: "Wir glauben, dass die Telko-Branche an einem Wendepunkt steht. BIM-Technologie – bewährt im Bau und in der Architektur – ist bereit, die Art zu transformieren, wie Mobilfunknetze geplant, eingesetzt und gepflegt werden.",
      },
      team: {
        eyebrow: "Team",
        title: "Unser Team",
        members: [
          { name: "Charles Ricke", role: "Gründer & CEO", email: "charles.ricke@acernis.fr", phone: "+33 7 68 33 99 62" },
          { name: "Charles-Ed. Laguérie", role: "CFO" },
          { name: "Lars Krahnstöver", role: "CRO" },
          { name: "Amaury Bannier", role: "CPO" },
          { name: "Filip Wrzosek", role: "COO" },
          { name: "Ricardo Machado", role: "Head of Account Management" },
          { name: "Aurélien Meunieur", role: "Head of AI" },
        ],
      },
    },
    contact: {
      hero: {
        eyebrow: "Kontakt",
        title: "Interesse an einem Gespräch?",
        subtitle: "Kontaktieren Sie uns direkt oder buchen Sie eine Demo, um Acernis in Aktion zu sehen.",
      },
      form: {
        title: "Schreiben Sie uns",
        name: "Vollständiger Name",
        company: "Unternehmen",
        email: "E-Mail-Adresse",
        message: "Nachricht",
        send: "Nachricht senden",
        namePlaceholder: "Ihr Name",
        companyPlaceholder: "Ihr Unternehmen",
        emailPlaceholder: "sie@unternehmen.com",
        messagePlaceholder: "Wie können wir helfen?",
      },
      direct: { title: "Oder direkt Kontakt aufnehmen" },
      links: { website: "Mehr Informationen", app: "App testen" },
    },
    footer: {
      tagline: "Die KI-gestützte Telco-Infrastrukturplattform",
      platform: "Plattform",
      useCases: "Use Cases",
      about: "Über uns",
      contact: "Kontakt",
      testApp: "App testen",
      rights: "Alle Rechte vorbehalten.",
    },
  },
};

export type Translations = typeof translations.en;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

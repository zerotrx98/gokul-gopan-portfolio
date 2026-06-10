"use client";

import {
  ArrowUpRight,
  Briefcase,
  CheckCircle,
  Code,
  Database,
  Download,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const contact = {
  name: "Gokul Gopan",
  role: "Flutter Developer",
  location: "Ernakulam, Kerala",
  phone: "+91 8111916593",
  email: "gokulkmlr@gmail.com",
  linkedin: "https://www.linkedin.com/in/gokulgopan1998",
  resume: "/gokul-gopan-flutter-developer-resume.pdf",
};

const stats = [
  { value: "3+", label: "Years of professional mobile app development" },
  { value: "8", label: "Enterprise Flutter projects delivered" },
  { value: "15+", label: "Client organizations served" },
  { value: "iOS + Android", label: "Cross-platform app delivery" },
];

const skills = [
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "Android", "iOS", "Reusable UI widgets"],
  },
  {
    title: "State & Architecture",
    icon: Code,
    items: ["GetX", "Bloc", "Navigation", "Modular components"],
  },
  {
    title: "Backend & Data",
    icon: Database,
    items: [".NET Web API", "REST APIs", "MSSQL", "SQLite"],
  },
  {
    title: "Cloud & Tools",
    icon: Sparkles,
    items: ["Firebase Auth", "Firestore", "Push notifications", "GitHub", "Cursor AI", "GitHub Copilot"],
  },
];

const experience = [
  {
    role: "Mobile Application Developer",
    company: "Petro Infotech",
    period: "Nov 2023 - Present",
    highlights: [
      "Handle end-to-end Flutter development, from requirements gathering to release support.",
      "Integrate Flutter applications with .NET APIs, REST services, MSSQL-backed workflows, and Firebase.",
      "Review code, fix bugs, optimize performance, and build responsive, modular user interfaces.",
    ],
  },
  {
    role: "Flutter Developer Trainee",
    company: "Magis Clouds Technologies",
    period: "Mar 2023 - Sept 2023",
    highlights: [
      "Developed Flutter features using GetX for state management and navigation.",
      "Built reusable UI components and integrated APIs into mobile app features.",
    ],
  },
  {
    role: "Flutter Developer Intern",
    company: "Soften Technologies",
    period: "Sept 2022 - Feb 2023",
    highlights: [
      "Worked on Flutter UI development, application logic, and bug fixing.",
      "Built hands-on experience across the mobile app development lifecycle.",
    ],
  },
];

const projects = [
  {
    name: "PetroHSE Mobile Application",
    summary:
      "A mobile app for EHS workflows, including inspections, audits, observations, and safety reporting, with real-time data access for safer operations.",
    clients: ["EMDAD LLC", "SOSCO", "Petrogas E&P Oman", "Petrogas E&P Netherlands"],
    tags: ["EHS", "Safety reporting", "Enterprise workflows"],
  },
  {
    name: "MobiCore",
    summary:
      "A mobile solution for managing core and sample data with smart tracking, scanning, remote access, charts, graphs, and push notifications.",
    clients: ["Petroleum Development Oman", "Shuram Oil & Gas", "Premier Corex"],
    tags: ["Scanning", "Analytics", "Push notifications"],
  },
  {
    name: "DigiHR Mobile Application",
    summary:
      "A hybrid attendance management app with face and fingerprint recognition, geolocation validation, QR attendance, and admin batch marking.",
    clients: ["CPA Oman", "SBGO", "NBGO", "Shuram Transport", "Tax Authority Oman"],
    tags: ["Attendance", "Biometrics", "Geolocation"],
  },
  {
    name: "Petro ePermit Mobile Application",
    summary:
      "A mobile permit-to-work app for real-time requests, approvals, site validations, and QR/barcode tracking.",
    clients: ["EMDAD LLC", "Petrogas E&P Oman"],
    tags: ["Permit to work", "QR tracking", "Approvals"],
  },
  {
    name: "iCDMS Mobile Application",
    summary:
      "A mobile app for corporate well and subsurface data, supporting well delivery and portfolio management with secure data access.",
    clients: ["Petrogas E&P Oman"],
    tags: ["Data management", "Portfolio workflows", "Secure access"],
  },
  {
    name: "Diglogist",
    summary:
      "A delivery and workforce management app with biometric authentication, geolocation tracking, offline attendance, QR check-ins, leave management, and English/Arabic support.",
    clients: ["Shuram Transport UAE"],
    tags: ["Logistics", "Offline mode", "Bilingual"],
  },
  {
    name: "Smart Asset Management System",
    summary:
      "An asset lifecycle management system for tracking movement, ownership, hierarchy, depreciation, warranty details, and multiple asset categories.",
    clients: ["Tax Authority, Oman"],
    tags: ["Assets", "Lifecycle", "Warranty"],
  },
  {
    name: "E-Learning Application",
    summary:
      "A mobile learning platform that supports text, images, videos, and text-to-speech for accessible professional training.",
    clients: ["EMDAD LLC"],
    tags: ["Learning", "Multimedia", "Accessibility"],
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
        <a href="#top" className="text-sm font-bold tracking-[0.35em] text-sky-200">
          GG
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          <a className="transition hover:text-foreground" href="#experience">Experience</a>
          <a className="transition hover:text-foreground" href="#projects">Projects</a>
          <a className="transition hover:text-foreground" href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <section className="grid min-h-[calc(100vh-96px)] items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div {...fadeUp} className="space-y-8">
            <Badge variant="secondary" className="border-sky-400/30 text-sky-100">
              Flutter Developer · Enterprise Mobile Apps
            </Badge>
            <div className="space-y-6">
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-balance sm:text-6xl lg:text-7xl">
                I build reliable Flutter apps for enterprise teams and field operations.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                I&apos;m {contact.name}, a {contact.role} with 3+ years of professional
                experience building Android and iOS applications with Flutter, GetX,
                REST APIs, Firebase, SQLite, and .NET/MSSQL integrations.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href={`mailto:${contact.email}`}><Mail />Email Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={contact.resume} download><Download />Download CV</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn<ArrowUpRight /></a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><MapPin className="size-4 text-sky-300" />{contact.location}</span>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone className="size-4 text-sky-300" />{contact.phone}</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <Card className="relative overflow-hidden bg-card/80 backdrop-blur">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300" />
              <CardHeader>
                <CardDescription>Profile snapshot</CardDescription>
                <CardTitle className="text-3xl">Production-ready Flutter developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-border/70 bg-secondary/60 p-4">
                      <div className="text-2xl font-black text-sky-200">{stat.value}</div>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <Separator />
                <div className="space-y-3">
                  {[
                    "End-to-end app delivery from requirements to deployment",
                    "Strong experience with enterprise and field-service mobile workflows",
                    "Comfortable working with backend teams, APIs, and production releases",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle className="mt-0.5 size-4 text-emerald-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <motion.section {...fadeUp} className="py-14">
          <Badge variant="outline" className="mb-4 border-sky-400/30 text-sky-100">Technical stack</Badge>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Skills focused on practical product delivery</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.title} className="bg-card/70">
                  <CardHeader>
                    <div className="mb-2 flex size-11 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200"><Icon className="size-5" /></div>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => <Badge key={item} variant="secondary">{item}</Badge>)}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </motion.section>

        <section id="experience" className="py-14">
          <motion.div {...fadeUp} className="mb-10 max-w-3xl">
            <Badge variant="outline" className="mb-4 border-sky-400/30 text-sky-100">Work experience</Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mobile development experience from training to production delivery</h2>
          </motion.div>
          <div className="space-y-5">
            {experience.map((job, index) => (
              <motion.div key={`${job.company}-${job.role}`} {...fadeUp} transition={{ duration: 0.55, delay: index * 0.08 }}>
                <Card className="bg-card/70">
                  <CardContent className="grid gap-6 pt-0 md:grid-cols-[0.35fr_0.65fr]">
                    <div>
                      <p className="text-sm font-semibold text-sky-200">{job.period}</p>
                      <h3 className="mt-3 text-2xl font-bold">{job.role}</h3>
                      <p className="mt-1 text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="space-y-3">
                      {job.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-sm leading-6 text-slate-200">
                          <ShieldCheck className="mt-1 size-4 shrink-0 text-emerald-300" />
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-14">
          <motion.div {...fadeUp} className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <Badge variant="outline" className="mb-4 border-sky-400/30 text-sky-100">Project portfolio</Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected enterprise mobile applications</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              These projects highlight the business context, delivery value, and client exposure behind my Flutter work.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div key={project.name} {...fadeUp} transition={{ duration: 0.55, delay: (index % 2) * 0.08 }}>
                <Card className="h-full bg-card/70 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-card">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                        <CardDescription className="mt-3 leading-6">{project.summary}</CardDescription>
                      </div>
                      <Briefcase className="size-5 shrink-0 text-sky-300" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
                    <Separator />
                    <div>
                      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-sky-100"><Users className="size-4" />Clients</div>
                      <p className="text-sm leading-6 text-muted-foreground">{project.clients.join(", ")}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.section {...fadeUp} className="py-14">
          <Card className="overflow-hidden bg-gradient-to-br from-sky-400/20 via-card to-emerald-400/10">
            <CardContent className="grid gap-8 p-6 sm:p-8 md:grid-cols-[0.6fr_0.4fr] md:p-10">
              <div>
                <Badge variant="secondary" className="mb-5">Education & training</Badge>
                <h2 className="text-3xl font-bold tracking-tight">Flutter development training with a foundation in manufacturing technology.</h2>
              </div>
              <div className="space-y-4 text-sm leading-6 text-slate-200">
                <p><span className="font-semibold text-foreground">Flutter Development Training</span><br />Soften Technologies</p>
                <p><span className="font-semibold text-foreground">Diploma in Manufacturing Technology</span><br />STED Council, New Delhi · 2020</p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        <section id="contact" className="py-14">
          <motion.div {...fadeUp} className="rounded-[2rem] border border-border/70 bg-card/80 p-8 text-center shadow-2xl shadow-sky-950/30 md:p-12">
            <Badge variant="outline" className="mb-5 border-sky-400/30 text-sky-100">Contact</Badge>
            <h2 className="mx-auto max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">Looking for a Flutter developer for enterprise mobile apps?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-muted-foreground">
              Reach out for roles involving Flutter, GetX, Bloc, REST API integrations, Firebase services, offline-capable apps, or field operations workflows.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg" className="w-full sm:w-auto"><a href={`mailto:${contact.email}`}><Mail />Email Me</a></Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto"><a href={contact.resume} download><Download />Download CV</a></Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto"><a href={`tel:${contact.phone.replaceAll(" ", "")}`}><Phone />{contact.phone}</a></Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

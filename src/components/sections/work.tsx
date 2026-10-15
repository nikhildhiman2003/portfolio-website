"use client";
import Image from "next/image";
import { useState } from "react";
import {
    AnimatePresence,
    motion,
    useReducedMotion,
} from "motion/react";
import {
    ArrowDownRight,
    ArrowUpRight,
    ExternalLink,
    MoveUpRight,
} from "lucide-react";

const projects = [
    {
        number: "01",
        title: "Haridwar Kumbh 2027",
        category: "Government / Tourism",
        description:
            "A digital experience connecting visitors with spiritual traditions, bathing dates, destinations and essential travel information.",
        image: "/assets/haridwar-kumbh.webp",
        url: "https://haridwarkumbh.uk.gov.in/",
        stack: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
        number: "02",
        title: "ITDA Service Portal",
        category: "Government / E-Governance",
        description:
            "A unified digital gateway designed to make government services more accessible through a responsive, multilingual experience.",
        image: "/assets/itda-portal.webp",
        url: "https://itda-staging.prodioslabs.com/",
        stack: ["Next.js", "React", "REST APIs", "i18next"],
    },
    {
        number: "03",
        title: "PRAYAS 2026",
        category: "Government / Innovation",
        description:
            "A digital platform for the Uttarakhand Government's web and mobile app hackathon, built around innovation and participation.",
        image: "/assets/prayas-2026.webp",
        url: "https://itda.uk.gov.in/prayas-2026",
        stack: ["Next.js", "TypeScript", "Prisma", "MongoDB"],
    },
    {
        number: "04",
        title: "Apuni Sarkar",
        category: "Government / Citizen Services",
        description:
            "A citizen-focused landing page that helps people discover online public services through a clear, responsive interface.",
        image: "/assets/apuni-sarkar.webp",
        url: "https://eservicesuk-staging.prodios.com/",
        stack: ["Next.js", "React", "Tailwind CSS"],
    },
    {
        number: "05",
        title: "NHM Training Monitoring",
        category: "Public Health / Training",
        description:
            "A digital system supporting training activities and monitoring for the National Health Mission.",
        image: "/assets/nhm.webp",
        url: "https://tms.uk.gov.in/login",
        stack: ["React", "Next.js", "REST APIs"],
    },
];

export default function Work() {
    const [activeIndex, setActiveIndex] = useState(0);
    const reduceMotion = useReducedMotion();
    const activeProject = projects[activeIndex];

    return (
        <section
            id="work"
            className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#09090b] px-5 py-20 text-white sm:px-8 sm:py-28"
        >
            {/* Ambient background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-40 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#c6ff4d]/[0.06] blur-[130px]"
            />

            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="mb-12 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#c6ff4d]" />
                            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#c6ff4d]">
                                Selected work / 2026
                            </p>
                        </div>

                        <h2 className="max-w-3xl text-[clamp(2.8rem,7vw,5.8rem)] font-medium leading-[0.94] tracking-[-0.075em]">
                            Projects built
                            <br />
                            for <span className="text-[#c6ff4d]">real impact.</span>
                        </h2>
                    </div>

                    <div className="flex max-w-xs items-start gap-3 pb-1">
                        <ArrowDownRight
                            size={19}
                            className="mt-1 shrink-0 text-[#c6ff4d]"
                        />
                        <p className="text-sm leading-6 text-white/45">
                            Digital platforms, public services and meaningful
                            experiences built for the real world.
                        </p>
                    </div>
                </div>

                {/* Main showcase */}
                <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
                    {/* Project navigation */}
                    <div className="order-2 lg:order-1">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
                                Project index
                            </span>
                            <span className="font-mono text-[10px] text-white/30">
                                05 PROJECTS
                            </span>
                        </div>

                        <div className="grid grid-cols-1">
                            {projects.map((project, index) => {
                                const isActive = index === activeIndex;

                                return (
                                    <button
                                        key={project.number}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-pressed={isActive}
                                        className={`group relative border-t py-5 pl-4 pr-2 text-left transition-colors duration-300 ${isActive
                                                ? "border-[#c6ff4d]/60"
                                                : "border-white/10 hover:border-white/30"
                                            }`}
                                    >
                                        <span
                                            className={`absolute bottom-0 left-0 top-0 w-[2px] origin-top transition-transform duration-300 ${isActive
                                                    ? "scale-y-100 bg-[#c6ff4d]"
                                                    : "scale-y-0 bg-[#c6ff4d] group-hover:scale-y-100"
                                                }`}
                                        />

                                        <div className="flex items-center justify-between gap-3">
                                            <span
                                                className={`font-mono text-[11px] ${isActive ? "text-[#c6ff4d]" : "text-white/30"
                                                    }`}
                                            >
                                                {project.number}
                                            </span>

                                            <MoveUpRight
                                                size={15}
                                                className={`transition-all duration-300 ${isActive
                                                        ? "text-[#c6ff4d]"
                                                        : "-translate-x-1 translate-y-1 text-white/20 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                                                    }`}
                                            />
                                        </div>

                                        <p
                                            className={`mt-3 text-[15px] font-medium leading-snug transition-colors sm:text-base ${isActive
                                                    ? "text-white"
                                                    : "text-white/50 group-hover:text-white/85"
                                                }`}
                                        >
                                            {project.title}
                                        </p>

                                        <p className="mt-2 text-[11px] leading-5 text-white/35">
                                            {project.category}
                                        </p>
                                    </button>
                                );
                            })}
                            <div className="border-t border-white/10" />
                        </div>

                        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/25">
                            Choose a project to explore
                        </p>
                    </div>

                    {/* Featured project */}
                    <div className="order-1 min-w-0 lg:order-2">
                        {/* Screenshot stage */}
                        <div className="group relative">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-3 -z-10 rounded-[28px] bg-[#c6ff4d]/[0.035] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                            />

                            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#111113] sm:rounded-3xl">
                                {/* Browser chrome */}
                                <div className="relative z-10 flex h-11 items-center justify-between border-b border-white/[0.08] bg-[#111113] px-4 sm:px-5">
                                    <div className="flex items-center gap-1.5">
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                        <span className="h-2 w-2 rounded-full bg-white/20" />
                                    </div>

                                    <span className="max-w-[55%] truncate rounded-md border border-white/[0.08] px-3 py-1 font-mono text-[9px] text-white/40 sm:text-[10px]">
                                        {activeProject.title}
                                    </span>

                                    <span className="font-mono text-[10px] text-[#c6ff4d]">
                                        {activeProject.number}
                                        <span className="text-white/25"> / 05</span>
                                    </span>
                                </div>

                                {/* Image preview */}
                                <div className="relative aspect-[4/3] overflow-hidden bg-[#141416] sm:aspect-[16/10] lg:aspect-[16/9]">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(198,255,77,0.07),transparent_65%)]"
                                    />

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeProject.image}
                                            initial={
                                                reduceMotion
                                                    ? false
                                                    : { opacity: 0, scale: 1.025, y: 6 }
                                            }
                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                            exit={
                                                reduceMotion
                                                    ? undefined
                                                    : { opacity: 0, scale: 0.99, y: -4 }
                                            }
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className="absolute inset-0 p-3 sm:p-5 lg:p-7"
                                        >
                                            <Image
                                                src={activeProject.image}
                                                alt={`${activeProject.title} website preview`}
                                                fill
                                                priority={activeIndex === 0}
                                                sizes="(max-width: 1024px) 100vw, 75vw"
                                                className="object-contain object-center p-3 transition-transform duration-700 group-hover:scale-[1.015] sm:p-5"
                                            />
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Overlay labels */}
                                    <div className="pointer-events-none absolute bottom-4 left-4 z-10 sm:bottom-6 sm:left-6">
                                        <span className="rounded-full border border-white/15 bg-black/50 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-white/70 backdrop-blur-md">
                                            Featured project
                                        </span>
                                    </div>

                                    <div className="pointer-events-none absolute right-4 top-4 z-10 font-mono text-[10px] text-white/50 sm:right-6 sm:top-6">
                                        UK / DIGITAL
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project information */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.number}
                                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                                transition={{ duration: 0.25 }}
                                className="mt-7 sm:mt-9"
                            >
                                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
                                    <div className="min-w-0 flex-1">
                                        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#c6ff4d]">
                                            {activeProject.category}
                                        </p>

                                        <h3 className="text-2xl font-medium tracking-[-0.055em] sm:text-3xl lg:text-4xl">
                                            {activeProject.title}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
                                            {activeProject.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {activeProject.stack.map((technology) => (
                                                <span
                                                    key={technology}
                                                    className="rounded-full border border-white/[0.12] px-3 py-1.5 text-[10px] text-white/55 transition-colors hover:border-[#c6ff4d]/40 hover:text-white/85"
                                                >
                                                    {technology}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <a
                                        href={activeProject.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex w-fit shrink-0 items-center gap-4 rounded-full border border-[#c6ff4d]/50 py-2 pl-5 pr-2 text-sm font-medium transition-all duration-300 hover:border-[#c6ff4d] hover:bg-[#c6ff4d] hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff4d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
                                    >
                                        View live site
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#c6ff4d] text-black transition-transform duration-300 group-hover:rotate-45">
                                            <ArrowUpRight size={17} />
                                        </span>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Bottom divider and navigation indicator */}
                <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-6 sm:mt-20">
                    <div className="flex items-center gap-3">
                        <span className="h-2 w-2 rounded-full bg-[#c6ff4d] shadow-[0_0_12px_rgba(198,255,77,0.6)]" />
                        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/35 sm:text-[10px]">
                            Built with purpose
                        </p>
                    </div>

                    <div className="flex items-center gap-2">
                        {projects.map((project, index) => (
                            <button
                                key={project.number}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Show ${project.title}`}
                                aria-pressed={activeIndex === index}
                                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff4d] ${activeIndex === index
                                        ? "w-8 bg-[#c6ff4d]"
                                        : "w-3 bg-white/15 hover:bg-white/40"
                                    }`}
                            />
                        ))}
                    </div>

                    <a
                        href={activeProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${activeProject.title}`}
                        className="hidden items-center gap-2 text-xs text-white/40 transition-colors hover:text-[#c6ff4d] sm:flex"
                    >
                        Explore project
                        <ExternalLink size={13} />
                    </a>
                </div>
            </div>
        </section>
    );
}

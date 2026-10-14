
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "Haridwar Kumbh 2027",
        category: " Government Tourism",
        description:
            "A digital platform for Haridwar Kumbh 2027, bringing together spiritual traditions, bathing dates, destinations, travel information, and public facilities.",
        image: "/assets/haridwar-kumbh.webp",
        url: "https://haridwarkumbh.uk.gov.in/",
        color: "#ffbc85",
        stack: ["React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
        number: "02",
        title: "ITDA Service Portal",
        category: "Government / E-Governance",
        description:
            "A unified government services portal designed to make public services more accessible through a responsive interface and multilingual support.",
        image: "/assets/itda-portal.webp",
        url: "https://itda-staging.prodioslabs.com/",
        color: "#c6ff4d",
        stack: ["Next.js", "React", "Tailwind CSS", "REST APIs", "i18next"],
    },
    {
        number: "03",
        title: "PRAYAS 2026",
        category: "Government / Innovation",
        description:
            "A digital platform for the Uttarakhand Government hackathon, supporting innovation initiatives and hackathon information.",
        image: "/assets/prayas-2026.webp",
        url: "https://itda.uk.gov.in/prayas-2026",
        color: "#c6ff4d",
        stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    },
    {
        number: "04",
        title: "Apuni Sarkar Landing Page",
        category: "Citizen Services",
        description:
            "An e-governance platform focused on making citizen services easier to discover and access through a clean, responsive experience.",
        image: "/assets/apuni-sarkar.webp",
        url: "https://eservicesuk-staging.prodios.com/",
        color: "#c5a0ff",
        stack: ["Next.js", "React", "Tailwind CSS"],
    },
    {
        number: "05",
        title: "NHM Training Monitoring System",
        category: "Public Health / Training",
        description:
            "A digital system for supporting training activities and monitoring within the National Health Mission.",
        image: "/assets/nhm.webp",
        url: "https://tms.uk.gov.in/login",
        color: "#82ddff",
        stack: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
    },
];

const AUTOPLAY_INTERVAL = 3000;

export default function Work() {
    const [activeIndex, setActiveIndex] = useState(0);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (prefersReducedMotion) return;

        const interval = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % projects.length);
        }, AUTOPLAY_INTERVAL);

        return () => window.clearInterval(interval);
    }, [prefersReducedMotion]);

    const activeProject = projects[activeIndex];

    const selectProject = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <section
            id="work"
            className="relative overflow-hidden bg-[#080808] px-5 py-20 text-white sm:px-8 sm:py-28"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 flex flex-col justify-between gap-5 sm:mb-16 sm:flex-row sm:items-end"
                >
                    <div>
                        <p className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-[#c6ff4d]">
                            <span className="h-2 w-2 rounded-full bg-[#c6ff4d]" />
                            Selected work
                        </p>

                        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
                            Things I&apos;ve
                            <span className="text-white/40"> help to built.</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-6 text-white/50 sm:text-base">
                        Digital experiences, government platforms, and products built to
                        solve real-world problems.
                    </p>
                </motion.div>

                <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div className="relative">
                        <div
                            className="relative mx-auto h-[285px] w-full max-w-[620px] sm:h-[350px]"
                            aria-label="Automatically rotating project previews"
                        >
                            {projects.map((project, index) => {
                                const total = projects.length;
                                const depth = (index - activeIndex + total) % total;
                                const isActive = depth === 0;
                                const isVisible = depth <= 2;

                                return (
                                    <motion.button
                                        key={project.number}
                                        type="button"
                                        aria-label={`Show project ${project.title}`}
                                        aria-pressed={isActive}
                                        onClick={() => selectProject(index)}
                                        initial={false}
                                        animate={{
                                            y: depth === 0 ? 0 : depth === 1 ? 24 : depth === 2 ? 44 : 56,
                                            scale: depth === 0 ? 1 : depth === 1 ? 0.96 : depth === 2 ? 0.92 : 0.88,
                                            opacity: isVisible ? (depth === 0 ? 1 : depth === 1 ? 0.72 : 0.36) : 0,
                                            zIndex: total - depth,
                                        }}
                                        transition={
                                            prefersReducedMotion
                                                ? { duration: 0 }
                                                : {
                                                    type: "spring",
                                                    stiffness: 150,
                                                    damping: 22,
                                                    mass: 0.8,
                                                }
                                        }
                                        style={{
                                            pointerEvents: isVisible ? "auto" : "none",
                                            transformOrigin: "top center",
                                        }}
                                        className="absolute left-0 top-0 w-full overflow-hidden rounded-xl border border-white/10 bg-[#111] text-left shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff4d]"
                                    >
                                        <div className="flex h-11 items-center justify-between border-b border-white/10 px-4 sm:h-12">
                                            <div className="flex items-center gap-1.5">
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                                                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                                            </div>

                                            <span className="max-w-[55%] truncate text-[10px] text-white/40 sm:text-xs">
                                                {project.title}
                                            </span>

                                            <span
                                                className="text-xs font-medium"
                                                style={{ color: project.color }}
                                            >
                                                {project.number}
                                            </span>
                                        </div>

                                        <div className="relative h-[185px] overflow-hidden bg-[#171717] sm:h-[245px]">
                                            <Image
                                                src={project.image}
                                                alt={`${project.title} website preview`}
                                                fill
                                                sizes="(max-width: 640px) 100vw, 620px"
                                                className="object-cover object-top"
                                                priority={index === 0}
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                                            {isActive && (
                                                <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
                                                    Featured project
                                                </div>
                                            )}
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>

                        <div className="mt-5 flex items-center justify-center gap-2">
                            {projects.map((project, index) => (
                                <button
                                    key={project.number}
                                    type="button"
                                    onClick={() => selectProject(index)}
                                    aria-label={`Go to project ${project.number}`}
                                    aria-current={activeIndex === index ? "true" : undefined}
                                    className="rounded-full p-1 outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff4d]"
                                >
                                    <motion.span
                                        animate={{
                                            width: activeIndex === index ? 28 : 7,
                                            backgroundColor:
                                                activeIndex === index ? project.color : "#454545",
                                        }}
                                        transition={{ duration: 0.3 }}
                                        className="block h-[7px] rounded-full"
                                    />
                                </button>
                            ))}

                            <span className="ml-2 font-mono text-xs text-white/40">
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(projects.length).padStart(2, "0")}
                            </span>
                        </div>
                    </div>

                    <div className="min-w-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeProject.number}
                                initial={
                                    prefersReducedMotion
                                        ? false
                                        : { opacity: 0, y: 12 }
                                }
                                animate={{ opacity: 1, y: 0 }}
                                exit={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 0, y: -8 }
                                }
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-5 flex items-center gap-3">
                                    <span
                                        className="h-2 w-2 rounded-full"
                                        style={{ backgroundColor: activeProject.color }}
                                    />

                                    <span
                                        className="text-xs font-medium uppercase tracking-[0.2em]"
                                        style={{ color: activeProject.color }}
                                    >
                                        {activeProject.category}
                                    </span>
                                </div>

                                <p className="mb-3 font-mono text-sm text-white/35">
                                    / {activeProject.number}
                                </p>

                                <h3 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl xl:text-5xl">
                                    {activeProject.title}
                                </h3>

                                <p className="mt-5 max-w-lg text-sm leading-7 text-white/55 sm:text-base">
                                    {activeProject.description}
                                </p>

                                <div className="mt-7">
                                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/35">
                                        Built with
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.stack.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-white/65"
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
                                    className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#c6ff4d] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#080808]"
                                >
                                    Explore project
                                    <ArrowUpRight size={17} />
                                </a>
                            </motion.div>
                        </AnimatePresence>

                        <div className="mt-10 border-t border-white/10 pt-5">
                            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-white/35">
                                Browse projects
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {projects.map((project, index) => (
                                    <button
                                        key={project.number}
                                        type="button"
                                        onClick={() => selectProject(index)}
                                        aria-pressed={activeIndex === index}
                                        className={`rounded-full border px-3 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c6ff4d] ${activeIndex === index
                                                ? "border-white/25 bg-white/10 text-white"
                                                : "border-white/10 text-white/45 hover:border-white/25 hover:text-white/80"
                                            }`}
                                    >
                                        {project.number}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

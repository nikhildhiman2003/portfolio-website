
"use client";

import { motion } from "motion/react";
import { BriefcaseBusiness, MapPin, ArrowUpRight } from "lucide-react";

const experiences = [
    {
        role: "Software Engineer",
        company: "Information Technology Development Agency (ITDA)",
        location: "Dehradun, Uttarakhand",
        period: "Feb 2026 – Present",
        type: " Government of Uttarakhand",
        description:
            "Developing and maintaining digital platforms that support government services and public information in Uttarakhand.",
        highlights: [
            "Developing responsive interfaces using Next.js, React, and Tailwind CSS.",
            "Building and maintaining government portals and citizen-facing digital experiences.",
            "Integrating REST APIs and supporting multilingual interfaces.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
        role: "Data Analyst Intern",
        company: "Internship Studio",
        location: "Remote",
        period: "Jun 2024 – Jul 2024",
        type: "Internship",
        description:
            "Gained practical experience in data analysis and visualization using commonly used analytics tools.",
        highlights: [
            "Analyzed datasets using Python, SQL, and Excel.",
            "Identified trends and generated insights from data.",
            "Practiced data visualization to communicate analytical findings.",
        ],
        stack: ["Python", "SQL", "MS Excel", "Data Analysis", "Data Visualization"],
    },
    {
        role: "Python Programming Intern",
        company: "InternPe",
        location: "Remote",
        period: "Jul 2023 – Aug 2023",
        type: "Internship",
        description:
            "Completed a four-week internship focused on Python programming and practical problem-solving.",
        highlights: [
            "Developed programming skills through hands-on Python practice.",
            "Strengthened problem-solving skills through programming tasks.",
            "Collaborated on team projects.",
        ],
        stack: ["Python", "Programming Fundamentals", "Problem Solving"],
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-2xl"
                >
                    <p className="mb-4 font-mono text-sm tracking-[0.25em] text-lime-400">
                        / EXPERIENCE
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Where I&apos;ve{" "}
                        <span className="text-lime-400">worked.</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                        My professional journey building web applications and digital
                        services, with a focus on useful, accessible user experiences.
                    </p>
                </motion.div>

                <div className="relative ml-2 border-l border-white/10 pl-7 sm:ml-4 sm:pl-10">
                    {experiences.map((experience, index) => (
                        <motion.article
                            key={experience.company}
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.55, delay: index * 0.15 }}
                            className="relative pb-12 last:pb-0"
                        >
                            <span className="absolute -left-[34px] top-1 flex size-3 items-center justify-center rounded-full bg-lime-400 ring-4 ring-[#09090b] sm:-left-[47px]">
                                <span className="size-1 rounded-full bg-black" />
                            </span>

                            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-lime-400/30 sm:p-8">
                                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                                    <div>
                                        <p className="mb-3 font-mono text-xs tracking-wide text-lime-400">
                                            {experience.period}
                                        </p>

                                        <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                            {experience.role}
                                        </h3>

                                        <p className="mt-2 text-base font-medium text-zinc-300">
                                            {experience.company}
                                        </p>

                                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin size={14} />
                                                {experience.location}
                                            </span>

                                            <span className="inline-flex items-center gap-1.5">
                                                <BriefcaseBusiness size={14} />
                                                {experience.type}
                                            </span>
                                        </div>
                                    </div>

                                    <ArrowUpRight
                                        className="hidden shrink-0 text-zinc-600 sm:block"
                                        size={22}
                                    />
                                </div>

                                <p className="mt-6 text-sm leading-7 text-zinc-400 sm:text-base">
                                    {experience.description}
                                </p>

                                <ul className="mt-5 space-y-3">
                                    {experience.highlights.map((highlight) => (
                                        <li
                                            key={highlight}
                                            className="flex gap-3 text-sm leading-6 text-zinc-400"
                                        >
                                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-400" />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-6 flex flex-wrap gap-2">
                                    {experience.stack.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

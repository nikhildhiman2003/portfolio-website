
"use client";

import { motion } from "motion/react";
import {
    Code2,
    PanelsTopLeft,
    Server,
    Database,
    Wrench,
    ChartNoAxesCombined,
} from "lucide-react";

const skillGroups = [
    {
        title: "Languages",
        description: "Core programming technologies",
        icon: Code2,
        skills: ["Python", "JavaScript", "TypeScript"],
    },
    {
        title: "Frontend Development",
        description: "Interfaces and user experiences",
        icon: PanelsTopLeft,
        skills: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend Development",
        description: "Server-side development and APIs",
        icon: Server,
        skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
        title: "Databases",
        description: "Data storage and querying",
        icon: Database,
        skills: ["MongoDB", "SQL"],
    },
    {
        title: "Tools & Workflow",
        description: "Development and collaboration",
        icon: Wrench,
        skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
        title: "Data & Analytics",
        description: "Analysis, visualization, and statistics",
        icon: ChartNoAxesCombined,
        skills: [
            "Machine Learning",
            "Data Analysis",
            "Data Visualization",
            "Power BI",
            "Statistics",
            "MS Excel",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14 max-w-2xl"
                >
                    <p className="mb-4 font-mono text-sm tracking-[0.25em] text-lime-400">
                        / SKILLS
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                        Tools of my{" "}
                        <span className="text-lime-400">trade.</span>
                    </h2>

                    <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
                        Technologies and tools I use to build web applications,
                        work with data, and solve practical engineering problems.
                    </p>
                </motion.div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, index) => {
                        const Icon = group.icon;

                        return (
                            <motion.article
                                key={group.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.5,
                                    delay: (index % 3) * 0.1,
                                }}
                                className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/30 hover:bg-white/[0.04]"
                            >
                                <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-lime-400/20 bg-lime-400/10 text-lime-400 transition-colors group-hover:bg-lime-400/15">
                                    <Icon size={21} />
                                </div>

                                <h3 className="text-lg font-semibold text-white">
                                    {group.title}
                                </h3>

                                <p className="mt-2 text-sm text-zinc-500">
                                    {group.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-xs text-zinc-300 transition-colors hover:border-lime-400/30 hover:text-lime-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

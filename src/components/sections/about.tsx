
"use client";

import { useState } from "react";
import type { PointerEvent, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
    Code2,
    Database,
    Layers3,
    BrainCircuit,
    Terminal,
    Globe,
    Sparkles,
    ChartNoAxesCombined,
    GraduationCap,
} from "lucide-react";

const skillGroups = [
    {
        title: "Frontend",
        icon: Globe,
        skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
        title: "Backend",
        icon: Layers3,
        skills: ["Node.js", "REST APIs", "Prisma"],
    },
    {
        title: "Data & Databases",
        icon: Database,
        skills: ["SQL", "PostgreSQL", "MongoDB", "Data Analysis"],
    },
    {
        title: "AI & Machine Learning",
        icon: BrainCircuit,
        skills: ["Machine Learning", "Python", "Data Visualization"],
    },
    {
        title: "Tools & Workflow",
        icon: Terminal,
        skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
];

function PremiumCard({
    children,
    className = "",
    delay = 0,
    interactive = true,
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    interactive?: boolean;
}) {
    const reducedMotion = useReducedMotion();
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
        if (reducedMotion || !interactive || event.pointerType !== "mouse") {
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;

        setTilt({
            x: (0.5 - y) * 3,
            y: (x - 0.5) * 3,
        });
    }

    function resetTilt() {
        setTilt({ x: 0, y: 0 });
    }

    return (
        <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: reducedMotion ? 0 : 0.45,
                delay: reducedMotion ? 0 : delay,
                ease: "easeOut",
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetTilt}
            style={{
                transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
            }}
            className={`relative transition-[transform,border-color,box-shadow] duration-300 ease-out ${className}`}
        >
            {children}
        </motion.div>
    );
}

export default function About() {
    const reducedMotion = useReducedMotion();

    return (
        <section
            id="about"
            className="relative isolate overflow-hidden bg-[var(--background)] px-5 py-16 text-[var(--foreground)] transition-colors duration-300 md:px-8 md:py-20"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[var(--accent-glow)] blur-[100px]"
            />

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[var(--accent-glow)] blur-[120px]"
            />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                >
                    <p className="mb-3 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]">
                        <Sparkles size={14} />
                        About me
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        Engineering ideas{" "}
                        <span className="text-[var(--muted)]">
                            into reality.
                        </span>
                    </h2>
                </motion.div>

                <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1fr] lg:gap-6">
                    <PremiumCard
                        className="group h-full overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--card-shadow)] hover:border-[var(--accent)]/40 sm:p-6"
                    >
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[var(--accent-glow)] blur-3xl"
                        />

                        <div className="relative">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--accent)]/20 bg-[var(--accent-glow)]">
                                <Code2 size={21} className="text-[var(--accent)]" />
                            </div>

                            <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                                Hi, I&apos;m Nikhil Dhiman.
                            </h3>

                            <p className="mt-2 text-sm font-medium text-[var(--accent)]">
                                Software Engineer · ITDA, Dehradun
                            </p>

                            <div className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted)]">
                                <p>
                                    I build and maintain modern web applications and
                                    digital services at the Information Technology
                                    Development Agency (ITDA), Dehradun.
                                </p>

                                <p>
                                    My focus is on responsive interfaces, reusable
                                    components, and REST API integration using React,
                                    Next.js, and Node.js.
                                </p>

                                <p>
                                    I also explore Python, SQL, data analysis, and
                                    machine learning to create data-driven solutions.
                                </p>
                            </div>

                            <p className="mt-5 border-t border-[var(--border)] pt-4 text-sm font-medium text-[var(--foreground)]">
                                Code is my tool. Data is my signal.{" "}
                                <span className="text-[var(--accent)]">
                                    AI is my next frontier.
                                </span>
                            </p>

                            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-muted)] p-3">
                                <GraduationCap
                                    size={22}
                                    className="shrink-0 text-[var(--accent)]"
                                />
                                <div className="min-w-0">
                                    <h4 className="text-sm font-semibold">
                                        B.Tech (Hons.) CSE
                                    </h4>
                                    <p className="mt-0.5 text-xs leading-5 text-[var(--muted)]">
                                        AI & Machine Learning · Quantum University
                                    </p>
                                </div>
                            </div>
                        </div>
                    </PremiumCard>

                    <div className="grid content-start gap-3 sm:grid-cols-2">
                        {skillGroups.map((group, index) => {
                            const Icon = group.icon;

                            return (
                                <PremiumCard
                                    key={group.title}
                                    delay={index * 0.05}
                                    className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 hover:border-[var(--accent)]/40 hover:shadow-[0_12px_35px_var(--accent-glow)]"
                                >
                                    <div className="relative">
                                        <div className="mb-3 flex items-center gap-2.5">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--accent)]/15 bg-[var(--accent-glow)] transition-transform duration-300 group-hover:scale-105">
                                                <Icon
                                                    size={18}
                                                    className="text-[var(--accent)]"
                                                />
                                            </div>

                                            <h3 className="text-sm font-semibold tracking-tight">
                                                {group.title}
                                            </h3>
                                        </div>

                                        <div className="flex flex-wrap gap-1.5">
                                            {group.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] px-2 py-1 text-[11px] text-[var(--muted)] transition-colors duration-200 hover:border-[var(--accent)]/40 hover:text-[var(--accent)]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </PremiumCard>
                            );
                        })}

                        <PremiumCard
                            delay={0.25}
                            interactive={false}
                            className="flex items-center gap-3 rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent-glow)] p-4 sm:col-span-2"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--accent)]/20 bg-[var(--surface)]">
                                <ChartNoAxesCombined
                                    size={21}
                                    className="text-[var(--accent)]"
                                />
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold">
                                    Building across disciplines
                                </h3>
                                <p className="mt-1 text-xs leading-5 text-[var(--muted)]">
                                    Full-stack development, analytics, and AI —
                                    focused on meaningful digital solutions.
                                </p>
                            </div>
                        </PremiumCard>
                    </div>
                </div>
            </div>
        </section>
    );
}


"use client";

import { motion } from "motion/react";
import {
    Code2,
    Database,
    Layers3,
    BrainCircuit,
    Terminal,
    Globe,
    Sparkles,
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
        skills: ["Node.js", "Express.js", "REST APIs", "Prisma"],
    },
    {
        title: "Database",
        icon: Database,
        skills: ["MongoDB", "PostgreSQL", "SQL"],
    },
    {
        title: "Tools & Workflow",
        icon: Terminal,
        skills: ["Git", "GitHub", "Bun", "Postman", "VS Code"],
    },
];

// const highlights = [
//     { value: "2+", label: "Professional roles" },
//     { value: "3+", label: "Web projects" },
//     { value: "Full-stack", label: "Development focus" },
// ];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#09090b] px-5 py-24 text-white md:px-10 md:py-32"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.25em] text-[#c6ff4d]">
                        <Sparkles size={16} />
                        Get to know me
                    </p>

                    <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                        More than code.
                        <br />
                        <span className="text-zinc-500">I build with purpose.</span>
                    </h2>
                </motion.div>

                <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 md:p-10"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#c6ff4d]/20 bg-[#c6ff4d]/10">
                            <Code2 className="text-[#c6ff4d]" size={23} />
                        </div>


                        <h3 className="text-2xl font-semibold">
                            Hi, I&apos;m Nikhil Dhiman.
                        </h3>

                        <p className="mt-3 text-sm font-medium text-[#c6ff4d]">
                            Software Engineer · ITDA, Dehradun
                        </p>

                        <div className="mt-5 space-y-4 leading-8 text-zinc-400">
                            <p>
                                I&apos;m currently working as a Software Engineer at the
                                Information Technology Development Agency (ITDA),
                                Dehradun, where I contribute to building and maintaining
                                modern web applications and digital services.
                            </p>

                            <p>
                                My work involves developing responsive user interfaces,
                                building reusable components, integrating REST APIs, and
                                creating accessible, user-friendly web experiences using
                                technologies like Next.js, React, Tailwind CSS, and Node.js.
                            </p>

                            <p>
                                I enjoy solving practical problems through clean code,
                                thoughtful UI design, and continuous learning while
                                building reliable digital solutions.
                            </p>
                        </div>


                        {/* <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            {highlights.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="text-xl font-semibold text-[#c6ff4d]">
                                        {item.value}
                                    </p>
                                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div> */}
                    </motion.div>

                    {/* Skills */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {skillGroups.map((group, index) => {
                            const Icon = group.icon;

                            return (
                                <motion.div
                                    key={group.title}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    whileHover={{ y: -4 }}
                                    className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-colors hover:border-[#c6ff4d]/30"
                                >
                                    <div className="mb-5 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6ff4d]/10">
                                            <Icon size={20} className="text-[#c6ff4d]" />
                                        </div>

                                        <h3 className="font-semibold">{group.title}</h3>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {group.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 text-xs text-zinc-400 transition-colors hover:border-[#c6ff4d]/30 hover:text-white"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            );
                        })}

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex items-center gap-4 rounded-3xl border border-[#c6ff4d]/20 bg-[#c6ff4d]/[0.04] p-6 sm:col-span-2"
                        >
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#c6ff4d]/10">
                                <BrainCircuit size={24} className="text-[#c6ff4d]" />
                            </div>

                            <div>
                                <h3 className="font-semibold">Always learning</h3>
                                <p className="mt-1 text-sm leading-6 text-zinc-400">
                                    Exploring AI, automation, and better ways to build useful
                                    software.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

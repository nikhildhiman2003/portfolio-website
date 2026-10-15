
"use client";

import { motion } from "motion/react";
import {
    ArrowDown,
    ArrowUpRight,
    // Github,
    // Linkedin,
    Sparkles,
} from "lucide-react";



export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-[#09090b] px-5 pb-20 pt-32 text-white md:px-10"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-[#c6ff4d]/10 blur-[120px] md:h-[500px] md:w-[500px]" />

                <div
                    className="absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        maskImage:
                            "linear-gradient(to bottom, black, transparent 85%)",
                    }}
                />
            </div>

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm text-zinc-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c6ff4d] opacity-60" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c6ff4d]" />
                        </span>
                        Software Engineer · India
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-[#c6ff4d]"
                    >
                        Hello, I&apos;m Nikhil Dhiman
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl"
                    >
                        I build
                        <br />
                        digital
                        <br />
                        <span className="relative inline-block text-[#c6ff4d]">
                            experiences.
                            <motion.span
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="absolute -bottom-2 left-0 h-1 origin-left rounded-full bg-[#c6ff4d]/60"
                                style={{ width: "70%" }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="mt-8 max-w-xl text-base leading-8 text-zinc-400 md:text-lg"
                    >
                        I&apos;m a Software Engineer focused on building modern,
                        responsive web applications with thoughtful UI, clean code,
                        and reliable functionality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 flex flex-wrap gap-2"
                    >


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-9 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#work"
                            className="group inline-flex items-center gap-2 rounded-full bg-[#c6ff4d] px-6 py-3.5 text-sm font-semibold text-zinc-950 transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(198,255,77,0.2)]"
                        >
                            Explore my work
                            <ArrowUpRight
                                size={17}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-[#c6ff4d]/50 hover:text-[#c6ff4d]"
                        >
                            Let&apos;s connect
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 flex items-center gap-5 text-zinc-500"
                    >
                        <span className="text-xs uppercase tracking-[0.2em]">
                            Find me on
                        </span>

                        <a
                            href="https://github.com/nikhildhiman2003"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="transition-colors hover:text-[#c6ff4d]"
                        >
                            {/* <Github size={19} /> */}
                        </a>

                        <a
                            href="https://linkedin.com/in/nikhil-dhiman-2003"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="transition-colors hover:text-[#c6ff4d]"
                        >
                            {/* <Linkedin size={19} /> */}
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                    className="relative mx-auto w-full max-w-md"
                >
                    <div className="absolute -inset-5 rounded-4xl bg-[#c6ff4d]/5 blur-2xl" />

                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/80 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                            <div className="flex gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                                <span className="h-3 w-3 rounded-full bg-[#c6ff4d]/80" />
                            </div>

                            <span className="font-mono text-xs text-zinc-500">
                                developer.ts
                            </span>
                        </div>

                        <div className="space-y-5 py-7 font-mono text-sm leading-7">
                            <p className="text-zinc-500">
                                <span className="text-[#c6ff4d]">01</span> // A little about me
                            </p>

                            <p>
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-sky-300">developer</span> = {"{"}
                            </p>

                            <p className="pl-5">
                                name: <span className="text-emerald-300">&quot;Nikhil&quot;</span>,
                            </p>

                            <p className="pl-5">
                                role: <span className="text-emerald-300">&quot;Engineer&quot;</span>,
                            </p>

                            <p className="pl-5">
                                builds: [
                                <span className="text-emerald-300">&quot;Web Apps&quot;</span>,
                                <span className="text-emerald-300">&quot;UI&quot;</span>],
                            </p>

                            <p className="pl-5">
                                mindset: <span className="text-emerald-300">&quot;Keep learning&quot;</span>
                            </p>

                            <p>{"}"}</p>

                            <div className="flex items-center gap-2 border-t border-white/10 pt-5 text-zinc-400">
                                <Sparkles size={16} className="text-[#c6ff4d]" />
                                <span>Turning ideas into reality.</span>
                            </div>
                        </div>

                        <div className="absolute -right-2 top-24 rounded-xl border border-[#c6ff4d]/20 bg-[#11130c] p-3 shadow-lg shadow-black/30 sm:-right-5">
                            <Sparkles className="text-[#c6ff4d]" size={22} />
                        </div>
                    </div>

                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-4 py-3 shadow-xl sm:-left-8"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#c6ff4d]/10">
                            <Sparkles size={19} className="text-[#c6ff4d]" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-white">Always building</p>
                            <p className="text-xs text-zinc-500">Always learning</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to about section"
                className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-zinc-500 transition-colors hover:text-[#c6ff4d] md:flex"
            >
                Scroll to explore
                <ArrowDown size={14} className="animate-bounce" />
            </a>
        </section>
    );
}

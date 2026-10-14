
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
    ArrowUpRight,
    Mail,
    // Linkedin,
    // Github,
    Copy,
    Check,
} from "lucide-react";

const EMAIL = "nikhil2003dhiman@gmail.com";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    async function copyEmail() {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            window.setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    }

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16 lg:py-32"
        >
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-12 lg:p-16"
                >
                    <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-lime-400/10 blur-[100px]" />

                    <div className="relative max-w-3xl">
                        <p className="mb-4 font-mono text-sm tracking-[0.25em] text-lime-400">
                            / CONTACT
                        </p>

                        <h2 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                            Have a project
                            <br />
                            in <span className="text-lime-400">mind?</span>
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
                            I&apos;m open to discussing software engineering opportunities,
                            interesting projects, and collaborations. Let&apos;s connect.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            <a
                                href={`mailto:${EMAIL}`}
                                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-lime-300"
                            >
                                <Mail size={17} />
                                Get in touch
                                <ArrowUpRight size={17} />
                            </a>

                            <button
                                type="button"
                                onClick={copyEmail}
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-lime-400/40 hover:text-lime-300"
                            >
                                {copied ? <Check size={17} /> : <Copy size={17} />}
                                {copied ? "Email copied" : "Copy email"}
                            </button>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-5 border-t border-white/10 pt-7">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-300"
                            >
                                LinkedIn
                                <ArrowUpRight size={14} />
                            </a>

                            <a
                                href="https://github.com/nikhildhiman2003"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-lime-300"
                            >
                                GitHub
                                <ArrowUpRight size={14} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <footer className="flex flex-col gap-3 py-8 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © 2026 Nikhil Dhiman. All rights reserved.
                    </p>
                    <p className="font-mono">Designed & built with care.</p>
                </footer>
            </div>
        </section>
    );
}


import { ArrowUpRight, Code2, MapPin, Sparkles } from "lucide-react";

const skills = ["Next.js", "React.js", "TypeScript", "Node.js", "AI / ML"];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden border-t border-white/10 px-5 py-20 md:px-8 md:py-24"
        >
            <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-primary/[0.06] blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">
                <p className="text-sm uppercase tracking-[0.22em] text-primary">
                    01 / About Me
                </p>

                <div className="mt-6 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
                    <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#111113] p-7 md:p-9">
                        <div>
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-xl font-semibold text-primary">
                                ND
                            </div>

                            <h2 className="mt-7 text-3xl font-semibold tracking-tight md:text-4xl">
                                Nikhil Dhiman
                            </h2>

                            <p className="mt-2 text-primary">Software Engineer</p>

                            <p className="mt-5 max-w-sm leading-7 text-zinc-400">
                                Building meaningful digital experiences through thoughtful
                                design, modern technologies, and practical solutions.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-zinc-400">
                            <MapPin size={17} className="text-primary" />
                            Dehradun, Uttarakhand, India
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="max-w-2xl text-3xl font-medium leading-snug tracking-tight md:text-4xl">
                            I turn complex ideas into{" "}
                            <span className="text-primary">simple digital solutions.</span>
                        </h3>

                        <p className="mt-6 leading-8 text-zinc-400">
                            I&apos;m a software engineer passionate about developing modern,
                            responsive, and user-focused web applications. I enjoy working
                            across frontend development, backend systems, and databases to
                            create reliable digital products.
                        </p>

                        <p className="mt-4 leading-8 text-zinc-400">
                            I hold a B.Tech (Hons.) in Computer Science and Engineering,
                            specializing in Artificial Intelligence and Machine Learning,
                            from Quantum University, Roorkee. I&apos;m always exploring
                            better ways to solve problems and improve my engineering skills.
                        </p>

                        <div className="mt-7">
                            <div className="mb-4 flex items-center gap-2 text-sm text-zinc-300">
                                <Code2 size={17} className="text-primary" />
                                Technologies I work with
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition hover:border-primary/40 hover:text-primary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary transition hover:gap-4"
                        >
                            Let&apos;s work together
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs text-zinc-500">
                    <Sparkles size={15} className="text-primary" />
                    Always learning. Always building.
                </div>
            </div>
        </section>
    );
}

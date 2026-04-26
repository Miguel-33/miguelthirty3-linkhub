import { useEffect } from "react";
import { motion } from "framer-motion";

const palette = {
    ink: "#264653",
    teal: "#2A9D8F",
    yellow: "#E9C46A",
    orange: "#F4A261",
    coral: "#E76F51",
    paper: "#FCFAF4",
};

const launchDate = "August 2026";

const links = [
    {
        title: "Free School-Life Tools",
        kicker: "Launching August 2026",
        desc: "Printables, templates, and bright little systems for everyday school life.",
        href: "#launch-list",
        color: palette.teal,
        highlight: true,
    },
    {
        title: "Web Design & Branding",
        kicker: "Thirty3 Digital Designs",
        desc: "Modern websites and brand visuals for small businesses ready to look serious.",
        href: "https://thirty3digitaldesigns.com",
        color: palette.ink,
    },
    {
        title: "Canva Templates",
        kicker: "Digital products",
        desc: "Editable designs for business owners, school events, and quick launches.",
        href: "#",
        color: palette.orange,
    },
    {
        title: "Request Design Help",
        kicker: "Fast lane",
        desc: "Flyers, logos, websites, social graphics, and the thing you need to look better by tomorrow.",
        href: "#",
        color: palette.coral,
    },
    {
        title: "Instagram",
        kicker: "Latest work",
        desc: "Design drops, behind-the-scenes pieces, and recent project previews.",
        href: "#",
        color: palette.yellow,
    },
];

function Arrow() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
    );
}

function MiniScene() {
    return (
        <div className="relative mx-auto mb-7 h-40 w-full max-w-sm">
            <motion.div
                initial={{ opacity: 0, y: 18, rotate: -8 }}
                animate={{ opacity: 1, y: 0, rotate: -8 }}
                transition={{ duration: 0.55 }}
                className="absolute left-2 top-5 h-28 w-28 rounded-4xl border border-black/10 bg-white p-3 shadow-xl"
            >
                <div className="h-full rounded-[1.35rem] bg-[linear-gradient(145deg,#E8F7F4,#BFEDE5)]" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 22, rotate: 7 }}
                animate={{ opacity: 1, y: 0, rotate: 7 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="absolute right-4 top-0 h-36 w-36 rounded-[2.2rem] border border-black/10 bg-white p-3 shadow-xl"
            >
                <div className="h-full rounded-3xl bg-[linear-gradient(145deg,#FBF2D9,#F4A261)]" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20, rotate: -2 }}
                animate={{ opacity: 1, y: 0, rotate: -2 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                className="absolute bottom-0 left-1/2 h-28 w-48 -translate-x-1/2 rounded-4xl border border-black/10 bg-white p-3 shadow-2xl"
            >
                <div className="flex h-full items-end rounded-[1.35rem] bg-[linear-gradient(145deg,#FBE5DF,#EAF3FB)] p-3">
                    <div className="h-3 w-16 rounded-full bg-[#264653]/20" />
                </div>
            </motion.div>

            <motion.div
                animate={{ y: [0, -5, 0], rotate: [-4, 1, -4] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/2 top-16 -translate-x-1/2 rounded-full bg-[#E76F51] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-xl"
            >
                august 2026
            </motion.div>
        </div>
    );
}

export default function MiguelThirty3LinkHub() {
    useEffect(() => {
        const existingScript = document.querySelector(
            'script[src="https://assets.mailerlite.com/js/universal.js"]'
        );

        if (existingScript) return;

        window.ml =
            window.ml ||
            function () {
                (window.ml.q = window.ml.q || []).push(arguments);
            };

        const script = document.createElement("script");
        script.src = "https://assets.mailerlite.com/js/universal.js";
        script.async = true;
        document.body.appendChild(script);

        window.ml("account", "2294241");
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#FCFAF4] px-4 py-8 text-[#264653] md:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(42,157,143,0.24),transparent_22%),radial-gradient(circle_at_92%_12%,rgba(233,196,106,0.28),transparent_20%),radial-gradient(circle_at_70%_88%,rgba(231,111,81,0.15),transparent_24%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0,transparent_72px,rgba(38,70,83,0.035)_73px,transparent_74px)]" />

            <section className="relative mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-6xl items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                    className="rounded-[2.5rem] border border-black/10 bg-white/70 p-6 shadow-[0_30px_80px_rgba(38,70,83,0.12)] backdrop-blur md:p-8"
                >
                    <div className="mb-5 inline-flex rounded-full bg-[#264653] px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white">
                        MiguelThirty3
                    </div>

                    <MiniScene />

                    <h1 className="text-center text-5xl font-black uppercase leading-[0.85] tracking-[-0.06em] md:text-6xl">
                        Bright
                        <span className="block text-transparent [-webkit-text-stroke:1.4px_#264653]">little</span>
                        links
                    </h1>

                    <p className="mx-auto mt-5 max-w-sm text-center text-sm leading-6 text-slate-600 md:text-base">
                        A bright little launch page for useful tools, design help, templates, and the creative work behind Thirty3 Digital Designs.
                    </p>

                    <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                        <span className="rounded-full bg-[#E8F7F4] px-3 py-2">Parents</span>
                        <span className="rounded-full bg-[#FBF2D9] px-3 py-2">Teachers</span>
                        <span className="rounded-full bg-[#FBE5DF] px-3 py-2">Business</span>
                    </div>

                    <div className="mt-6 rounded-3xl border border-black/10 bg-white/75 p-4 text-center shadow-sm">
                        <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Launch window
                        </div>
                        <div className="mt-1 text-lg font-black text-[#264653]">
                            {launchDate}
                        </div>
                    </div>
                </motion.div>

                <div className="space-y-3 md:space-y-4">
                    {links.map((link, i) => (
                        <motion.a
                            key={link.title}
                            href={link.href}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.45 }}
                            whileHover={{ x: 6, scale: 1.01 }}
                            className={`group relative block overflow-hidden rounded-4xl border p-5 shadow-sm transition-all md:p-6 ${link.highlight
                                ? "border-transparent text-white shadow-[0_24px_60px_rgba(42,157,143,0.26)]"
                                : "border-black/10 bg-white/85 text-[#264653] backdrop-blur"
                                }`}
                            style={link.highlight ? { backgroundColor: link.color } : undefined}
                        >
                            {!link.highlight && (
                                <div className="absolute inset-y-0 left-0 w-1.5" style={{ backgroundColor: link.color }} />
                            )}

                            <div className="relative flex items-center justify-between gap-5">
                                <div>
                                    <div className={`mb-2 text-[10px] font-black uppercase tracking-[0.22em] ${link.highlight ? "text-white/70" : "text-slate-400"}`}>
                                        {link.kicker}
                                    </div>
                                    <div
  className={`text-xl font-black tracking-tight md:text-2xl ${
    link.highlight ? "text-white" : "text-[#264653]"
  }`}
>
  {link.title}
</div>
                                    <p className={`mt-2 max-w-xl text-sm leading-6 ${link.highlight ? "text-white/82" : "text-slate-600"}`}>
                                        {link.desc}
                                    </p>
                                </div>

                                <div
                                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition group-hover:translate-x-1 ${link.highlight ? "bg-white text-[#264653]" : "bg-[#FCFAF4] text-[#264653]"
                                        }`}
                                >
                                    <Arrow />
                                </div>
                            </div>
                        </motion.a>
                    ))}

                    <motion.div
                        id="launch-list"
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.45 }}
                        className="rounded-4xl border border-black/10 bg-white/85 p-5 shadow-sm backdrop-blur md:p-6"
                    >
                        <div className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-400">
                            Get notified
                        </div>
                        <h2 className="mt-2 text-2xl font-black tracking-tight text-[#264653]">
                            Want the free tools when they launch?
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Join the early list for the parent and teacher resource drop coming in August 2026.
                        </p>

                        <div className="mt-4 overflow-hidden rounded-3xl bg-white">
                            <div className="ml-embedded" data-form="Q1CQIa"></div>
                        </div>
                    </motion.div>

                    <div className="pt-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                        © {new Date().getFullYear()} Thirty3 Digital Designs
                    </div>
                </div>
            </section>
        </main>
    );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, Github, Linkedin, Facebook } from "lucide-react";
import { defaultPortfolioSettings, PortfolioSettings } from "@/types/portfolio";

const socialIcons = {
  Facebook,
  Github,
  GitHub: Github,
  LinkedIn: Linkedin,
} as const;

const Header = ({ id, settings }: { id: string; settings?: PortfolioSettings }) => {
  const portfolio = settings ?? defaultPortfolioSettings;
  const header = portfolio.header;
  const imageUrl = header.imageUrl.trim();
  const phrases = useMemo(
    () => header.typedWords.flatMap((word) => word.split("|")).map((word) => word.trim()).filter(Boolean),
    [header.typedWords],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!phrases.length) {
      setTypedText("");
      return;
    }

    const phrase = phrases[phraseIndex % phrases.length];
    const isComplete = typedText === phrase;
    const isEmpty = typedText.length === 0;
    const delay = isDeleting ? (isEmpty ? 350 : 45) : isComplete ? 1400 : 80;

    const timer = window.setTimeout(() => {
      if (isDeleting) {
        if (isEmpty) {
          setIsDeleting(false);
          setPhraseIndex((current) => (current + 1) % phrases.length);
        } else {
          setTypedText((current) => current.slice(0, -1));
        }
      } else if (isComplete) {
        setIsDeleting(true);
      } else {
        setTypedText(phrase.slice(0, typedText.length + 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, phraseIndex, phrases, typedText]);

  return (
    <header id={id} className="relative  overflow-hidden bg-[#0c1124] px-4 py-24 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(99,102,241,0.16),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(168,85,247,0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1.5 font-serif text-sm font-bold uppercase tracking-wide text-purple-300 shadow-[0_0_24px_rgba(168,85,247,0.08)]">
            {header.badge}
          </span>
          <h1 className="mt-5 font-serif text-5xl font-black leading-[1.05] tracking-tight text-slate-50 sm:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">{header.name}</span>
          </h1>
          <p className="mt-5 flex min-h-10 items-center overflow-hidden font-serif text-2xl font-bold uppercase tracking-wide text-slate-200 sm:min-h-12 sm:text-3xl" aria-live="polite">
            <span className="mr-4 text-4xl leading-none text-purple-400 sm:text-5xl">▶</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={phraseIndex}
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -28 }}
                transition={{ duration: 0.25 }}
                className="inline-block"
              >
                {typedText}
                <span className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-slate-300 align-[-3px] sm:h-8" aria-hidden="true" />
              </motion.span>
            </AnimatePresence>
          </p>
          <p className="mt-6 max-w-3xl font-serif text-base leading-8 text-slate-400 sm:text-lg">
            {header.description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            {header.resumeUrl && (
              <a href={header.resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 px-8 py-4 font-serif font-bold text-white shadow-lg shadow-purple-900/30 transition hover:-translate-y-0.5 hover:shadow-purple-700/40">
                Download CV <Download size={19} />
              </a>
            )}
            {header.socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? ExternalLink;
              return (
                <a key={`${link.label}-${link.url}`} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 transition hover:border-purple-400 hover:text-purple-300">
                  <Icon size={19} strokeWidth={1.8} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-purple-400/30 bg-gradient-to-br from-indigo-500/30 to-purple-500/20 p-3 shadow-2xl shadow-indigo-950/50">
            {imageUrl ? (
              <img src={imageUrl} alt={header.name} className="h-full w-full rounded-[1.5rem] object-cover" />
            ) : (
              <div className="flex h-full items-center justify-center rounded-[1.5rem] bg-slate-950 text-8xl font-black text-purple-400">
                {header.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { personalData } from "../data/personal";
import { MagneticButton } from "./MagneticButton";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-28 sm:py-40 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          06 / GET IN TOUCH
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="rounded-[36px] sm:rounded-[56px] bg-[#0c0c11] border border-white/[0.12] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl">
        {/* Glow ambient background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Status availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Software Engineering Opportunities & Collaborations</span>
          </motion.div>

          {/* Dramatic Huge Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-8xl font-extrabold tracking-tighter text-white uppercase leading-[0.92]"
          >
            LET'S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-indigo-400">
              SOMETHING.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed"
          >
            Have a project, opportunity, or idea worth discussing? Let's talk.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            {/* LinkedIn Button */}
            <MagneticButton>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-mono font-semibold text-black bg-[#F5F5F5] hover:bg-white transition-all shadow-xl shadow-white/5 hover:shadow-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <LinkedinIcon className="w-4 h-4 text-black" />
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            {/* GitHub Button */}
            <MagneticButton>
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-mono font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 hover:border-white/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300" />
                <span>GITHUB</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            {/* Email Button */}
            <MagneticButton>
              <a
                href={`mailto:${personalData.socials.email}`}
                className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full text-xs sm:text-sm font-mono font-medium text-sky-300 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-500/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>EMAIL ME</span>
                <ArrowUpRight className="w-4 h-4 text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </motion.div>

          {/* Quick Copy Email Snippet */}
          <div className="pt-6 flex flex-col items-center">
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-white/20 text-xs font-mono text-zinc-400 hover:text-white transition-all group"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-medium">Email Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500 group-hover:text-sky-400 transition-colors" />
                  <span>{personalData.socials.email}</span>
                  <span className="text-[10px] text-zinc-500 bg-white/[0.05] px-1.5 py-0.5 rounded">Click to copy</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

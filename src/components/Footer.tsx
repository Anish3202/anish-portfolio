import React from "react";
import { ArrowUp, Terminal } from "lucide-react";
import { personalData } from "../data/personal";
import { GithubIcon, LinkedinIcon } from "./Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#070709] py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand info */}
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <span className="font-mono font-bold tracking-tight text-white text-base">
              ANISH NAIR
            </span>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            Software Engineer • {personalData.location}
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400 rounded"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sky-400"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>BACK TO TOP</span>
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          © 2026 Anish Nair. Built with React & TypeScript.
        </div>
        <div className="flex items-center gap-1 text-zinc-500">
          <span>Obsidian / Linear Aesthetic</span>
          <span>•</span>
          <span className="text-zinc-400">Zero Fabrications</span>
        </div>
      </div>
    </footer>
  );
};

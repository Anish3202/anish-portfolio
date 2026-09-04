import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

const aiTools = [
  {
    name: "Cursor",
    role: "Code Editor & In-Context Refactoring",
    description: "Accelerating repetitive typing, inline diff reviews, and multi-file code scaffolding.",
    badge: "IDE Integration",
  },
  {
    name: "Gemini",
    role: "Deep Systems Reasoning & API Research",
    description: "Synthesizing architectural trade-offs, documentation lookups, and algorithmic edge cases.",
    badge: "Research & Logic",
  },
  {
    name: "Claude",
    role: "Architectural Planning & Complex Refactoring",
    description: "Structuring domain boundaries, drafting Clean Architecture contracts, and test plans.",
    badge: "Architecture & Design",
  },
];

export const AiSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          06 / WORKFLOW MULTIPLIER
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="rounded-[36px] sm:rounded-[48px] bg-gradient-to-br from-[#12111d] via-[#0c0d14] to-[#090a0f] border border-purple-500/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        {/* Glow backdrop */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MODERN DEVELOPMENT PARADIGM</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white uppercase leading-[0.95] mb-6"
          >
            ENGINEERING × AI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed mb-10"
          >
            I use AI as an <span className="text-white font-medium">engineering multiplier</span> — for exploration, debugging, prototyping, refactoring and accelerating development — while keeping architecture, validation and engineering decisions <span className="text-sky-300 font-medium">human-driven</span>.
          </motion.p>
        </div>

        {/* Tools Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {aiTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * idx }}
              className="p-6 rounded-2xl bg-black/40 border border-white/[0.08] hover:border-purple-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold text-white font-mono group-hover:text-purple-300 transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-white/[0.05] text-zinc-400 border border-white/[0.08]">
                    {tool.badge}
                  </span>
                </div>
                <div className="text-xs font-mono text-zinc-300 mb-2">
                  {tool.role}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {tool.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Human Reviewed & Tested</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow Philosophy Footer */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400" />
            <span>Strict Architectural Guardrails: Zero Unverified Code in Production</span>
          </div>
          <span className="text-purple-400">Developer Discipline &gt; Raw Generation</span>
        </div>
      </div>
    </section>
  );
};

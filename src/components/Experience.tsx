import React from "react";
import { motion } from "framer-motion";
import { Trophy, Sparkles, Calendar, MapPin, ChevronRight } from "lucide-react";
import { experienceData } from "../data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          02 / CAREER & IMPACT
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
          EXPERIENCE
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl">
          Professional development journey delivering production-ready enterprise systems, APIs, database architectures, and AI-accelerated solutions.
        </p>
      </motion.div>

      {/* Vertical Timeline */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-16">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative group"
          >
            {/* Timeline Node Point */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#080808] border-2 border-sky-400 group-hover:scale-125 group-hover:bg-sky-400 transition-all duration-300 shadow-md shadow-sky-500/20" />

            {/* Experience Card Container */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0e0e12] border border-white/[0.08] group-hover:border-white/20 transition-all duration-300 backdrop-blur-md space-y-6">
              {/* Header: Role, Company, Period */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-5 border-b border-white/[0.06]">
                <div>
                  <span className="text-xs font-mono text-sky-400 tracking-wider font-semibold uppercase">
                    0{index + 1} • {exp.type}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>
                  <div className="text-base text-zinc-300 font-medium">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
                  {exp.duration && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.duration}
                    </span>
                  )}
                  {exp.location && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
                      <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                      {exp.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Key Scope & Contributions
                </div>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-sm sm:text-base text-zinc-300 flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Hackathon Winner Card Highlight */}
              {exp.hackathon && (
                <div className="relative mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-amber-500/[0.08] via-purple-500/[0.05] to-sky-500/[0.04] border border-amber-500/30 overflow-hidden shadow-xl">
                  {/* Subtle top glare */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/20">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-amber-300 uppercase">
                          <Sparkles className="w-3.5 h-3.5" />
                          {exp.hackathon.badge} {exp.hackathon.award}
                        </div>
                        <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                          {exp.hackathon.projectName}
                        </h4>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-400/10 text-amber-200 border border-amber-400/30 self-start sm:self-auto">
                      Official Hackathon Victory
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-4 leading-relaxed">
                    {exp.hackathon.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.hackathon.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/40 text-amber-200/90 border border-amber-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies strip */}
              <div className="pt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

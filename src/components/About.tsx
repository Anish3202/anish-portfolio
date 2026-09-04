import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, CheckCircle2 } from "lucide-react";
import { personalData } from "../data/personal";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          01 / IDENTITY & BACKGROUND
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      {/* Editorial Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Editorial narrative */}
        <div className="lg:col-span-7 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]"
          >
            ABOUT ME
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-zinc-300"
          >
            <p className="text-xl sm:text-2xl font-normal text-white leading-relaxed">
              I'm <span className="text-sky-300 font-medium">Anish</span>, a Software Engineer who enjoys turning complex requirements into reliable, scalable applications.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              I work across backend and frontend development, with experience building REST APIs, business applications, database-driven systems and modern React interfaces.
            </p>

            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              My primary development experience is around the <span className="text-white font-medium">.NET ecosystem, C#, ASP.NET Core, SQL Server and PostgreSQL</span>, while I also work with <span className="text-white font-medium">React, TypeScript, Python</span> and modern AI-assisted development workflows.
            </p>
          </motion.div>
        </div>

        {/* Right Column: Unified Credentials & Foundation Summary */}
        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0e0e13] border border-white/[0.08] backdrop-blur-sm space-y-6"
          >
            {/* Academic Credential */}
            <div className="flex items-start gap-4 pb-6 border-b border-white/[0.06]">
              <div className="p-3 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-400 tracking-wider uppercase">
                  Academic Foundation
                </div>
                <div className="text-lg font-bold text-white mt-1">
                  {personalData.education.degree}
                </div>
                <div className="text-sm text-zinc-400 mt-0.5">
                  {personalData.education.institution}
                </div>
              </div>
            </div>

            {/* Metrics Row: CGPA & Grad Year */}
            <div className="grid grid-cols-2 gap-4 pb-6 border-b border-white/[0.06]">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight text-sky-300">
                  {personalData.education.cgpa}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  CGPA Score
                </div>
                <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> First Class Distinction
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                  {personalData.education.graduationYear}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1 uppercase tracking-wider">
                  Graduation
                </div>
                <div className="text-[11px] text-zinc-400 mt-1">
                  Computer Engineering
                </div>
              </div>
            </div>

            {/* Location & Status Footer */}
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                {personalData.location}
              </span>
              <span className="text-zinc-400">Software Engineer</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

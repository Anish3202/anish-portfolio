import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Database, CheckCircle2, Smartphone, ExternalLink, ChevronRight, Cpu, Code2 } from "lucide-react";
import { GithubIcon } from "./Icons";
import { projectsData } from "../data/projects";
import type { Project } from "../types/portfolio";

export const Projects: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(projectsData[0].id);

  const selectedProject = projectsData.find((p) => p.id === selectedId) || projectsData[0];

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          04 / FEATURED PROJECTS
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
            FEATURED PROJECTS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl">
            Select a project from the directory below to inspect its architecture, technical stack, and engineering highlights.
          </p>
        </div>

        <span className="text-xs font-mono text-zinc-400 border border-white/[0.08] px-3.5 py-1.5 rounded-full bg-white/[0.02] self-start md:self-auto">
          {projectsData.length} PRODUCTION & ENTERPRISE PROJECTS
        </span>
      </div>

      {/* Main Interactive Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Project Directory List */}
        <div className="lg:col-span-5 flex flex-col space-y-3">
          <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider px-2 pb-1 flex items-center justify-between">
            <span>PROJECT DIRECTORY</span>
            <span>CLICK TO INSPECT</span>
          </div>

          <div className="flex flex-col space-y-2.5">
            {projectsData.map((project) => {
              const isSelected = project.id === selectedId;

              return (
                <button
                  key={project.id}
                  onClick={() => setSelectedId(project.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                    isSelected
                      ? "bg-gradient-to-r from-sky-950/40 via-zinc-900/90 to-zinc-900/90 border-sky-500/50 shadow-lg shadow-sky-950/30"
                      : "bg-[#0c0c11]/80 hover:bg-zinc-900/60 border-white/[0.08] hover:border-white/20 text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {/* Selected Indicator Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-sky-400 rounded-r-full"
                    />
                  )}

                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <span className={`text-xs font-mono font-bold tracking-widest uppercase ${isSelected ? "text-sky-400" : "text-zinc-500"}`}>
                      PROJECT {project.number}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          LIVE
                        </span>
                      )}
                      <span className="text-[11px] font-mono text-zinc-500 truncate max-w-[130px]">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <h3 className={`text-base sm:text-lg font-bold tracking-tight ${isSelected ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                      {project.title}
                    </h3>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? "text-sky-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"}`} />
                  </div>

                  {/* Primary Tech Badges Preview */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-white/[0.04]">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                          isSelected
                            ? "bg-sky-500/10 text-sky-300 border border-sky-500/20"
                            : "bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-[10px] font-mono text-zinc-500 px-1 py-0.5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Selected Project Detail Inspector */}
        <div className="lg:col-span-7 lg:sticky lg:top-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 bg-[#0e0e14]/95 border border-white/[0.12] backdrop-blur-xl shadow-2xl space-y-6"
            >
              {/* Header: Project Number, Category, and Action Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">
                      PROJECT {selectedProject.number}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs font-mono text-zinc-400">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* CTAs: Live Demo & GitHub Links */}
                <div className="flex items-center gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10"
                    >
                      <span>LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white font-mono text-xs transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>CODE</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Architecture Highlights */}
              {selectedProject.architecture && (
                <div className="space-y-3 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/[0.06]">
                  <div className="flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>Architecture & Technical Highlights</span>
                  </div>
                  <ul className="space-y-2">
                    {selectedProject.architecture.map((item, aIdx) => (
                      <li key={aIdx} className="text-xs sm:text-sm text-zinc-300 flex items-start gap-2.5">
                        <span className="text-sky-400 mt-1 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Full Technology Stack Badges */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" />
                  <span>Technologies Applied</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-200 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Blueprint Diagram Card */}
              <div className="pt-2">
                <ProjectVisualCard project={selectedProject} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

// Visual representation card for each project
const ProjectVisualCard: React.FC<{ project: Project }> = ({ project }) => {
  if (project.id === "filmwale-premiere") {
    return (
      <div className="rounded-2xl bg-[#090b10] border border-sky-500/20 p-5 font-mono text-xs text-zinc-300 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-white font-semibold">FilmWale Premier Ecosystem</span>
          </div>
          <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
            SSO + Clean Arch
          </span>
        </div>

        {/* Visual pipeline */}
        <div className="space-y-2.5">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-sky-400" />
              <span>Flutter Mobile Guest Pass</span>
            </div>
            <span className="text-emerald-400 text-[10px]">JWT SSO</span>
          </div>

          <div className="p-2.5 rounded-xl bg-sky-500/[0.04] border border-sky-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>.NET 8 Clean Architecture API</span>
            </div>
            <span className="text-sky-300 text-[10px]">CQRS / MediatR</span>
          </div>

          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span>SQL Server 2022 + EF Core</span>
            </div>
            <span className="text-zinc-400 text-[10px]">High Throughput</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
          <span>Domain Driven Design</span>
          <span className="text-sky-400 font-medium">Production Ready</span>
        </div>
      </div>
    );
  }

  if (project.id === "tanyo-ticket-management") {
    return (
      <div className="rounded-2xl bg-[#0a0a0f] border border-white/[0.1] p-5 font-mono text-xs text-zinc-300 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span className="text-white font-semibold">Tanyo SLA & Multi-Tenant Engine</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Tenant Isolated
          </span>
        </div>

        <div className="space-y-2">
          <div className="p-2.5 rounded bg-[#13131a] border border-white/[0.06] flex items-center justify-between">
            <span className="text-zinc-300">Ticket #8491 — Critical SLA</span>
            <span className="text-amber-400 text-[10px]">In Progress</span>
          </div>
          <div className="p-2.5 rounded bg-[#13131a] border border-white/[0.06] flex items-center justify-between">
            <span className="text-zinc-300">Tenant DB Connection Router</span>
            <span className="text-emerald-400 text-[10px]">EF Core 8</span>
          </div>
          <div className="p-2.5 rounded bg-[#13131a] border border-white/[0.06] flex items-center justify-between">
            <span className="text-zinc-300">Direct ADO.NET Bulk Export</span>
            <span className="text-sky-400 text-[10px]">Sub-10ms</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400 flex justify-between">
          <span>Data Isolation: Schema-per-Tenant</span>
          <span className="text-white">React 18 Dashboard</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-[#0a0a0f] border border-white/[0.1] p-5 font-mono text-xs text-zinc-300 shadow-xl space-y-4">
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
        <span className="text-white font-semibold">{project.title} Architecture</span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
          Full-Stack
        </span>
      </div>

      <div className="p-3 rounded-lg bg-[#121218] border border-white/[0.06] space-y-2">
        <div className="text-[11px] text-zinc-400">Core Technologies Applied:</div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <span key={t} className="px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.08] text-[10px]">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400 flex justify-between">
        <span>Verified Production Scope</span>
        <span className="text-emerald-400 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5" /> Deployed
        </span>
      </div>
    </div>
  );
};

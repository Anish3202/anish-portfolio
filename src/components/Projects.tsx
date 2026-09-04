import React from "react";
import { motion } from "framer-motion";
import { Layers, Database, CheckCircle2, Smartphone } from "lucide-react";
import { projectsData } from "../data/projects";
import type { Project } from "../types/portfolio";

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          04 / FEATURED WORK
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
            SELECTED WORK
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl">
            A curation of enterprise applications, CRM platforms, backend APIs, and database-driven software engineered with .NET, React, and modern architectures.
          </p>
        </div>

        <span className="text-xs font-mono text-zinc-500 border border-white/[0.08] px-3.5 py-1.5 rounded-full self-start md:self-auto">
          {projectsData.length} PRODUCTION & ENTERPRISE PROJECTS
        </span>
      </div>

      {/* Sticky Stacking Project Deck */}
      <div className="relative flex flex-col space-y-12 sm:space-y-16">
        {projectsData.map((project, idx) => {
          // Calculate sticky top offset for stacking effect
          const stickyTop = 88 + idx * 24;

          return (
            <div
              key={project.id}
              style={{ top: `${stickyTop}px` }}
              className="sticky transition-transform duration-300"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 lg:p-12 border backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden ${
                  project.id === "filmwale-premiere"
                    ? "bg-[#0d1017]/95 border-sky-500/30 shadow-sky-950/20"
                    : "bg-[#0f0f14]/95 border-white/[0.12] shadow-black/80"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Project Info */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-sky-400 uppercase">
                          PROJECT {project.number}
                        </span>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-400">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {project.description}
                    </p>

                    {/* Architecture / Scope Highlights */}
                    {project.architecture && (
                      <div className="space-y-2 p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                        <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                          Architecture Highlights
                        </div>
                        <ul className="space-y-1.5">
                          {project.architecture.slice(0, 3).map((item, aIdx) => (
                            <li
                              key={aIdx}
                              className="text-xs text-zinc-300 flex items-start gap-2"
                            >
                              <span className="text-sky-400 mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Status */}
                    <div className="pt-2">
                      <span className="text-xs font-mono text-zinc-500">
                        {project.id === "filmwale-premiere" ? "Flagship Enterprise Architecture" : "Verified Enterprise Production System"}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Visual Technical Graphic */}
                  <div className="lg:col-span-5">
                    <ProjectVisualCard project={project} />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
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

  if (project.id === "johnson-control") {
    return (
      <div className="rounded-2xl bg-[#0a0a0f] border border-white/[0.1] p-5 font-mono text-xs text-zinc-300 shadow-xl space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
          <span className="text-white font-semibold">Enterprise Backend & Cloud</span>
          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
            PostgreSQL • Azure
          </span>
        </div>

        <div className="p-3 rounded-lg bg-[#14141d] border border-white/[0.06] space-y-2 text-[11px]">
          <div className="flex justify-between text-zinc-400">
            <span>Container Deployment</span>
            <span className="text-sky-400">Kubernetes Pods</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>Query Tuning</span>
            <span className="text-emerald-400">B-Tree Indexes</span>
          </div>
          <div className="flex justify-between text-zinc-400">
            <span>API Workflow</span>
            <span className="text-purple-400">Jira Sprint Delivery</span>
          </div>
        </div>

        <div className="pt-2 border-t border-white/[0.06] text-[11px] text-zinc-400 flex justify-between">
          <span>Enterprise Maintenance</span>
          <span className="text-white">Continuous CI/CD</span>
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
          {project.technologies.slice(0, 4).map((t) => (
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

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Cpu, Database, Server, Layers, Sparkles, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

export const HeroVisual: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"api" | "architecture" | "ai">("api");

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Ambient glow underneath visual */}
      <div className="absolute -inset-1 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 -z-10" />

      {/* Main Terminal / Architecture Card */}
      <div className="relative rounded-2xl bg-[#0e0e11]/90 border border-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#131317] border-b border-white/[0.08]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
            <span className="ml-2 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              system-runtime.net8
            </span>
          </div>

          {/* Interactive Mode Tabs */}
          <div className="flex items-center bg-[#09090b] rounded-lg p-0.5 border border-white/[0.06]">
            <button
              onClick={() => setActiveTab("api")}
              className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                activeTab === "api"
                  ? "bg-white/10 text-white font-medium shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              API.cs
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                activeTab === "architecture"
                  ? "bg-white/10 text-white font-medium shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Topology
            </button>
            <button
              onClick={() => setActiveTab("ai")}
              className={`px-2.5 py-1 text-[11px] font-mono rounded transition-all ${
                activeTab === "ai"
                  ? "bg-white/10 text-white font-medium shadow"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              AI Agent
            </button>
          </div>
        </div>

        {/* Tab 1: Code / API View */}
        {activeTab === "api" && (
          <div className="p-5 sm:p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto select-none">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-[11px] text-zinc-500">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                POST /api/v1/events/checkin • 200 OK (14ms)
              </span>
              <span className="text-zinc-500 hidden sm:inline">C# 12 • ASP.NET Core 8</span>
            </div>

            <pre className="text-zinc-300">
              <code>
                <span className="text-purple-400">[HttpPost]</span>{"\n"}
                <span className="text-purple-400">[Authorize(Policy = </span>
                <span className="text-amber-300">"PremiereAccess"</span>
                <span className="text-purple-400">)]</span>{"\n"}
                <span className="text-blue-400">public async Task</span>&lt;
                <span className="text-sky-300">IActionResult</span>&gt;{" "}
                <span className="text-amber-200">ProcessCheckIn</span>(
                <br className="sm:hidden" />
                <span className="text-sky-300">CheckInCommand</span> command,{" "}
                <span className="text-blue-400">CancellationToken</span> ct) {"{\n"}
                {"  "}<span className="text-zinc-500">// Clean Architecture CQRS Dispatch</span>{"\n"}
                {"  "}<span className="text-blue-400">var</span> result ={" "}
                <span className="text-blue-400">await</span> _mediator.
                <span className="text-amber-200">Send</span>(command, ct);{"\n"}
                {"\n"}
                {"  "}<span className="text-blue-400">if</span> (!result.IsSuccess) {"\n"}
                {"    "}<span className="text-blue-400">return</span>{" "}
                <span className="text-amber-200">BadRequest</span>(result.Error);{"\n"}
                {"\n"}
                {"  "}<span className="text-blue-400">return</span>{" "}
                <span className="text-amber-200">Ok</span>(
                <span className="text-blue-400">new</span> {"{\n"}
                {"    "}TicketId = result.Value.Id,{"\n"}
                {"    "}Status = <span className="text-amber-300">"Verified"</span>,{"\n"}
                {"    "}Timestamp = <span className="text-sky-300">DateTimeOffset</span>.UtcNow{"\n"}
                {"  "});{"\n"}
                {"}"}
              </code>
            </pre>

            {/* Bottom runtime telemetry strip */}
            <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <Database className="w-3 h-3 text-sky-400" />
                  EF Core: 0.9ms
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  JWT Validated
                </span>
              </div>
              <span className="text-zinc-500">Thread Pool: Healthy</span>
            </div>
          </div>
        )}

        {/* Tab 2: Clean Architecture System Topology */}
        {activeTab === "architecture" && (
          <div className="p-5 sm:p-6 select-none">
            <div className="text-[11px] font-mono text-zinc-400 mb-4 flex items-center justify-between border-b border-white/[0.06] pb-2">
              <span>SYSTEM ARCHITECTURE DIAGRAM</span>
              <span className="text-sky-400 font-mono">Clean Architecture 4-Tier</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {/* Layer 1 */}
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-sky-500/10 text-sky-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">PRESENTATION LAYER</div>
                    <div className="text-[11px] text-zinc-400">React 18 + Vite / Flutter Mobile App</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
                  Client & UI
                </span>
              </div>

              {/* Layer 2 */}
              <div className="p-3 rounded-lg bg-white/[0.03] border border-indigo-500/20 bg-indigo-500/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-indigo-500/10 text-indigo-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">API & APPLICATION</div>
                    <div className="text-[11px] text-zinc-400">.NET 8 Web API • CQRS • MediatR • Auth</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  Core Logic
                </span>
              </div>

              {/* Layer 3 */}
              <div className="p-3 rounded-lg bg-white/[0.03] border border-purple-500/20 bg-purple-500/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-purple-500/10 text-purple-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">DOMAIN & RULES</div>
                    <div className="text-[11px] text-zinc-400">Pure Entities • Aggregates • Domain Events</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Zero Dep
                </span>
              </div>

              {/* Layer 4 */}
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.08] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-xs">INFRASTRUCTURE & PERSISTENCE</div>
                    <div className="text-[11px] text-zinc-400">EF Core 8 • ADO.NET • SQL Server / PostgreSQL</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  Data Tier
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: AI Agent Telemetry */}
        {activeTab === "ai" && (
          <div className="p-5 sm:p-6 font-mono select-none">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06] text-xs">
              <span className="flex items-center gap-1.5 text-purple-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                CorpAdmin AI Agent — Payroll & Expense Intelligence
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                Hackathon Winner
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded bg-[#16161b] border border-white/[0.06] flex items-center justify-between">
                <span className="text-zinc-400">Step 1: Ingest Relational Payroll Records</span>
                <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 1,280 Rows
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#16161b] border border-white/[0.06] flex items-center justify-between">
                <span className="text-zinc-400">Step 2: AI Variance & Anomaly Detection</span>
                <span className="text-sky-400 flex items-center gap-1 text-[11px]">
                  <Activity className="w-3.5 h-3.5" /> 99.4% Accuracy
                </span>
              </div>
              <div className="p-2.5 rounded bg-[#16161b] border border-white/[0.06] flex items-center justify-between">
                <span className="text-zinc-400">Step 3: Executive Intelligence Summary</span>
                <span className="text-purple-400 text-[11px]">Generated (0.4s)</span>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-sky-500/[0.04] border border-sky-500/20 text-[11px] text-zinc-300">
              <span className="text-sky-400 font-medium">Human-in-the-Loop Safeguard:</span> All AI-detected payroll anomalies trigger verified review flags before accounting dispatch.
            </div>
          </div>
        )}

        {/* Floating live badge */}
        <motion.div
          animate={{ y: [0, -4, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181f]/90 border border-white/15 text-[11px] font-mono text-zinc-300 shadow-xl backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>99.9% Uptime Architecture</span>
        </motion.div>
      </div>
    </div>
  );
};

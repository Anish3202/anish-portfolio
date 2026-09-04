import React, { useState } from "react";
import { motion } from "framer-motion";
import { Server, Layout, Database, ShieldCheck, Cloud, Sparkles, Cpu } from "lucide-react";
import { skillCategories } from "../data/skills";

const categoryIcons: Record<string, React.ReactNode> = {
  backend: <Server className="w-5 h-5 text-sky-400" />,
  frontend: <Layout className="w-5 h-5 text-indigo-400" />,
  databases: <Database className="w-5 h-5 text-emerald-400" />,
  "auth-security": <ShieldCheck className="w-5 h-5 text-amber-400" />,
  "cloud-devops": <Cloud className="w-5 h-5 text-cyan-400" />,
  "ai-tools": <Sparkles className="w-5 h-5 text-purple-400" />,
  integrations: <Cpu className="w-5 h-5 text-rose-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          03 / CAPABILITIES & TOOLS
        </span>
        <div className="h-px bg-white/10 flex-1" />
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95]">
            SKILLS
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl">
            Technical competencies centered around enterprise .NET systems, relational databases, modern React interfaces, cloud platforms, and modern AI engineering workflows.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 bg-[#121216] p-1.5 rounded-2xl border border-white/[0.08] backdrop-blur-md">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              selectedCategory === "all"
                ? "bg-white text-black font-semibold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            All Areas ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.id
                  ? "bg-white text-black font-semibold shadow"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Masonry Layout to eliminate empty space */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {displayedCategories.map((category, catIdx) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.06 }}
            className={`break-inside-avoid mb-6 p-6 sm:p-7 rounded-3xl bg-[#0e0e12] border transition-all duration-300 group ${
              category.id === "backend"
                ? "border-sky-500/30 hover:border-sky-500/50 bg-gradient-to-b from-[#101420] to-[#0e0e12]"
                : category.id === "ai-tools"
                ? "border-purple-500/30 hover:border-purple-500/50 bg-gradient-to-b from-[#181122] to-[#0e0e12]"
                : "border-white/[0.08] hover:border-white/20"
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                {categoryIcons[category.id] || <Server className="w-5 h-5 text-white" />}
              </div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                {category.skills.length} Technologies
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-1.5">
              {category.name}
            </h3>
            <p className="text-xs text-zinc-400 mb-5 leading-relaxed">
              {category.description}
            </p>

            {/* Skills Badges wrap snugly without dead space */}
            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                    skill.featured
                      ? "bg-white/[0.08] text-white border border-white/20 hover:border-sky-400/50 hover:bg-sky-500/10"
                      : "bg-white/[0.03] text-zinc-400 border border-white/[0.06] hover:text-zinc-200"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { philosophyItems } from "../data/personal";
import { Target, Layers, Zap, Rocket } from "lucide-react";

export const Philosophy: React.FC = () => {
  const renderIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-sky-400" />;
      case 1:
        return <Layers className="w-6 h-6 text-indigo-400" />;
      case 2:
        return <Zap className="w-6 h-6 text-amber-400" />;
      case 3:
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      default:
        return <Target className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Section Header Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs text-sky-400 font-semibold tracking-widest uppercase">
          05 / PRINCIPLES & MINDSET
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
          HOW I THINK
        </h2>
        <p className="text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl">
          Core engineering values that guide how I architect systems, write code, collaborate with teams, and solve business challenges.
        </p>
      </motion.div>

      {/* 4 Large Philosophy Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {philosophyItems.map((item, idx) => (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 sm:p-10 rounded-[32px] bg-[#0d0d12] border border-white/[0.08] hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white/20 group-hover:text-sky-400 transition-colors">
                  {item.number}
                </span>
                <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  {renderIcon(idx)}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight mb-2">
                {item.title}
              </h3>

              <div className="text-sm sm:text-base font-medium text-sky-300/90 mb-4 font-mono">
                {item.tagline}
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>ENGINEERING AXIOM {item.number}</span>
              <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors">Practical Execution</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

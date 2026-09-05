import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  const [mouseCoord, setMouseCoord] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    setMouseCoord({ x: clientX, y: clientY });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[94vh] lg:min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle interactive spotlight glow that follows cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-20 transition duration-300 -z-10"
        style={{
          background: `radial-gradient(700px circle at ${mouseCoord.x}px ${mouseCoord.y}px, rgba(99, 102, 241, 0.12), rgba(56, 189, 248, 0.04) 40%, transparent 80%)`,
        }}
      />

      {/* Oversized background typography reminiscent of reference design */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center -z-10 select-none overflow-hidden opacity-[0.035]">
        <span className="text-[18vw] font-extrabold tracking-tighter text-white whitespace-nowrap uppercase">
          ANISH NAIR
        </span>
      </div>

      {/* Main Grid: Left side text / positioning & Right side 3D Character */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Personal Brand, Engineering × AI, and Professional Summary */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 z-10">
          {/* Location & Status Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-zinc-200">Based in Ahmedabad, India</span>
            <span className="text-zinc-600">•</span>
            <span className="text-sky-400 font-medium">B.Tech CE (9.36 CGPA)</span>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-1"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[0.95] select-none">
              ANISH NAIR
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-zinc-400 tracking-tight">
              Software Engineer
            </div>
          </motion.div>

          {/* ENGINEERING × AI Section Branding */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-2 pt-1 border-t border-white/[0.06] w-full"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MODERN DEVELOPMENT PARADIGM</span>
            </div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-purple-300 uppercase font-mono">
              ENGINEERING × AI
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-400">
              Building with modern technologies and AI-assisted workflows.
            </p>
          </motion.div>

          {/* Proper Professional Summary */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl"
          >
            Software Engineer focused on building scalable web applications, enterprise systems, and AI-assisted solutions. Experienced across <span className="text-white font-medium">.NET, React, SQL, APIs</span>, and modern development workflows, with a strong focus on using AI tools to accelerate engineering, problem-solving, and product development.
          </motion.p>

          {/* Core Technology Badges including GitHub Copilot and Google Antigravity */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-wrap gap-2 pt-1"
          >
            {[
              ".NET 8",
              "C#",
              "ASP.NET Core",
              "React",
              "TypeScript",
              "SQL Server",
              "PostgreSQL",
              "REST APIs",
              "Cursor",
              "Claude",
              "GitHub Copilot",
              "Google Antigravity",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/[0.08]"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Custom 3D Character (Unboxed & Integrated Seamlessly) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center relative select-none"
        >
          {/* Subtle atmospheric backlighting behind character */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none -z-10" />

          {/* 3D Character Image with floating motion */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
            className="relative max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] w-full"
          >
            <img
              src="/anish-3d-character.jpg"
              alt="Anish Nair - 3D Character"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)] filter brightness-[1.02]"
              loading="eager"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

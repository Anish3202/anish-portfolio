import React from "react";

const rowOne = [
  ".NET",
  "ASP.NET CORE",
  "C#",
  "REACT",
  "TYPESCRIPT",
  "SQL SERVER",
  "POSTGRESQL",
  "REST APIs",
];

const rowTwo = [
  "ENTITY FRAMEWORK",
  "ADO.NET",
  "PYTHON",
  "FLUTTER",
  "GIT",
  "AZURE",
  "KUBERNETES",
  "AI",
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden border-y border-white/[0.08] bg-[#09090b]/60 backdrop-blur-sm">
      {/* Edge gradient masks for seamless fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[#080808] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[#080808] to-transparent z-10" />

      <div className="flex flex-col gap-5 select-none">
        {/* Row 1: Leftward Scroll */}
        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 gap-6 animate-marquee-left group-hover:[animation-play-state:paused] items-center">
            {[...rowOne, ...rowOne, ...rowOne, ...rowOne].map((tech, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center gap-6 text-zinc-400 group-hover:text-zinc-300 transition-colors"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold tracking-tight text-zinc-300 hover:text-white transition-colors">
                  {tech}
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-500/40" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Scroll */}
        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 gap-6 animate-marquee-right group-hover:[animation-play-state:paused] items-center">
            {[...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo].map((tech, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center gap-6 text-zinc-400 group-hover:text-zinc-300 transition-colors"
              >
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold tracking-tight text-zinc-400 hover:text-white transition-colors">
                  {tech}
                </span>
                <span className="w-2 h-2 rounded-full bg-purple-500/40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

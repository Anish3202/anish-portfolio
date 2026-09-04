import type { PersonalInfo, PhilosophyItem } from "../types/portfolio";

export const personalData: PersonalInfo = {
  name: "Anish Nair",
  title: "Software Engineer",
  positioning: "Software Engineer building scalable web applications, APIs, and AI-powered solutions.",
  location: "Ahmedabad, Gujarat, India",
  education: {
    degree: "B.Tech in Computer Engineering",
    institution: "Silver Oak University",
    cgpa: "9.36",
    graduationYear: "2024",
  },
  socials: {
    github: "https://github.com/Anish3202",
    linkedin: "https://linkedin.com/in/anish-nair-165124215",
    email: "anishnair2312@gmail.com",
  },
  stats: [
    {
      value: "9.36",
      label: "CGPA",
      description: "Silver Oak University, Computer Engineering",
    },
    {
      value: "2024",
      label: "Graduate",
      description: "B.Tech in Computer Engineering",
    },
    {
      value: ".NET",
      label: "Primary Backend",
      description: "C#, ASP.NET Core, EF Core, REST APIs",
    },
    {
      value: "REACT",
      label: "Frontend",
      description: "TypeScript, Modern UI, State & APIs",
    },
  ],
};

export const philosophyItems: PhilosophyItem[] = [
  {
    number: "01",
    title: "BUILD WITH PURPOSE",
    tagline: "Good software solves a real problem.",
    description:
      "Technology exists to serve practical operational and user needs. Every line of code, endpoint contract, and architectural boundary should directly translate to business value and intuitive user experiences.",
  },
  {
    number: "02",
    title: "KEEP SYSTEMS MAINTAINABLE",
    tagline: "Clean architecture and clear boundaries matter.",
    description:
      "Well-structured boundaries between Domain, Application, Infrastructure, and UI layers enable systems to evolve smoothly over time. Explicit contracts, testability, and separation of concerns prevent technical debt.",
  },
  {
    number: "03",
    title: "LEARN FAST",
    tagline: "Modern engineering means continuously learning new tools and approaches.",
    description:
      "From deep .NET and SQL internals to emerging AI workflows and frontend frameworks, staying adaptable and curious allows engineers to select the best tool for the problem rather than defaulting to habit.",
  },
  {
    number: "04",
    title: "SHIP",
    tagline: "Ideas become valuable when they become working software.",
    description:
      "Progress is measured by reliable, deployed software in production. Rapid iteration with robust testing, predictable CI/CD pipelines, and disciplined execution turns technical strategy into real impact.",
  },
];

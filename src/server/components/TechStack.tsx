import { setPageContext } from "../context";
import { tags } from "client:script/tech-stack";

const categories = [
  "Tous",
  "Langages",
  "Frontend",
  "Backend",
  "Framework",
  "Styling",
  "Database",
  "ORM",
  "DevOps",
  "Outils",
  "Autres",
] as const;

type Tech = {
  name: string;
  category: (typeof categories)[number];
  icon: string;
  color: string;
};

const technologies: Tech[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Langages",
    icon: "📘",
    color: "text-blue-600",
  },

  { name: "Lua", category: "Langages", icon: "🌊", color: "text-blue-400" },

  {
    name: "Elysia.js",
    category: "Framework",
    icon: "🌿",
    color: "text-green-400",
  },

  // Frontend
  { name: "React", category: "Frontend", icon: "⚛️", color: "text-blue-400" },
  { name: "Angular", category: "Frontend", icon: "🅰️", color: "text-red-600" },

  // Backend
  { name: "NodeJS", category: "Backend", icon: "🟢", color: "text-green-500" },
  { name: "Bun", category: "Backend", icon: "🍞", color: "text-yellow-500" },
  { name: "Caddy", category: "DevOps", icon: "🏰", color: "text-green-600" },

  // Frameworks
  {
    name: "NextJS",
    category: "Framework",
    icon: "▲",
    color: "text-foreground",
  },
  { name: "tRPC", category: "Framework", icon: "🔌", color: "text-sky-400" },
  {
    name: "Directus",
    category: "Framework",
    icon: "⚙️",
    color: "text-gray-500",
  },
  {
    name: "GraphQL",
    category: "Framework",
    icon: "🔺",
    color: "text-pink-500",
  },
  {
    name: "Astro",
    category: "Framework",
    icon: "🚀",
    color: "text-orange-400",
  },
  {
    name: "Symfony",
    category: "Framework",
    icon: "🕊️",
    color: "text-gray-700",
  },

  // Styling
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "🎨",
    color: "text-cyan-400",
  },
  { name: "DaisyUI", category: "Styling", icon: "🌼", color: "text-pink-400" },

  // Databases
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    color: "text-blue-700",
  },
  {
    name: "SQL Server",
    category: "Database",
    icon: "🗄️",
    color: "text-red-500",
  },

  // ORM
  { name: "Sequelize", category: "ORM", icon: "🐬", color: "text-blue-500" },
  { name: "Prisma", category: "ORM", icon: "🔷", color: "text-indigo-400" },
  { name: "Drizzle", category: "ORM", icon: "🌦️", color: "text-teal-400" },

  // DevOps
  { name: "Docker", category: "DevOps", icon: "🐳", color: "text-blue-500" },

  // Tools / Editors
  { name: "Git", category: "Outils", icon: "🔗", color: "text-orange-600" },
  { name: "VSCode", category: "Outils", icon: "💠", color: "text-blue-500" },
  { name: "Neovim", category: "Outils", icon: "✨", color: "text-green-500" },
  { name: "Ghostty", category: "Outils", icon: "👻", color: "text-purple-400" },
  { name: "Tmux", category: "Outils", icon: "🔲", color: "text-green-400" },
  { name: "Nix", category: "Langages", icon: "❄️", color: "text-blue-400" },

  { name: "C#", category: "Langages", icon: "♯", color: "text-purple-500" },
  {
    name: "Plausible",
    category: "Outils",
    icon: "📊",
    color: "text-indigo-500",
  },

  {
    name: "Dotnet",
    category: "Framework",
    icon: "🟣",
    color: "text-purple-600",
  },
];

export const TechStack = () => {
  setPageContext({ headTags: [tags] });

  const selected = "bg-gray-950 text-gray-300";
  const unselected = "bg-gray-400 text-gray-950 font-medium";

  return (
    <div id="tech-stack">
      <ul
        id="tech-stack-categories"
        class="flex gap-3 flex-wrap mb-5"
        data-style-selected={selected}
        data-style-unselected={unselected}
      >
        {categories.map((c) => {
          return (
            <li
              class={`cursor-pointer rounded px-3 py-1 ${c === "Tous" ? selected : unselected}`}
              data-category
            >
              {c}
            </li>
          );
        })}
      </ul>
      <ul
        id="tech-stack-technologies"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {technologies.map((t) => (
          <li
            data-tech-category={t.category}
            class="border border-gray-500 rounded-xl px-3 py-1"
          >
            {t.icon} {t.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

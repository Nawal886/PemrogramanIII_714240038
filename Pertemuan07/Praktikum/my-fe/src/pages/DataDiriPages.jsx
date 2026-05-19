import { useState } from "react";

const personalInfo = [
  { icon: "🆔", label: "NPM", value: "714240038" },
  { icon: "👤", label: "Nama Lengkap", value: "Nawal" },
  { icon: "🏫", label: "Kelas", value: "D4 TI 2C" },
  { icon: "📚", label: "Program Studi", value: "D4 Teknik Informatika" },
  { icon: "💻", label: "Mata Kuliah", value: "Pemrograman III - Web Service" },
  { icon: "📅", label: "Pertemuan", value: "Pertemuan 7 — Axios + Layout" },
];

const techStack = [
  { name: "React", color: "from-cyan-400 to-blue-500", icon: "⚛️" },
  { name: "Vite", color: "from-purple-400 to-violet-600", icon: "⚡" },
  { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500", icon: "🎨" },
  { name: "Axios", color: "from-blue-400 to-indigo-600", icon: "🔗" },
  { name: "REST API", color: "from-emerald-400 to-green-600", icon: "🌐" },
  { name: "Component Layout", color: "from-amber-400 to-orange-500", icon: "🧩" },
];

const skills = [
  { label: "React", percent: 75 },
  { label: "Tailwind CSS", percent: 80 },
  { label: "REST API", percent: 70 },
  { label: "Axios", percent: 65 },
];

export default function DataDiriPage() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="space-y-6">
      {/* ─── Profile Hero Card ─── */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 text-white shadow-xl sm:p-8">
        {/* Decorative blurs */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative flex flex-col items-center gap-5 sm:flex-row sm:items-center">
          {/* Avatar with animated ring */}
          <div className="relative">
            <div className="absolute -inset-1 animate-spin rounded-full bg-gradient-to-tr from-blue-400 via-indigo-400 to-purple-500 opacity-70 blur-sm" style={{ animationDuration: "6s" }} />
            <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-4xl font-black text-white ring-4 ring-white/20 sm:h-28 sm:w-28">
              N
            </div>
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Nawal
            </h2>
            <p className="text-sm text-blue-200/80">
              Mahasiswa D4 Teknik Informatika
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2 sm:justify-start">
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-medium text-blue-200 ring-1 ring-blue-400/30">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Aktif
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-200 ring-1 ring-indigo-400/30">
                📖 Semester 4
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Info Grid ─── */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {personalInfo.map((item, idx) => (
          <div
            key={item.label}
            className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50"
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            {/* Hover gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 transition-all duration-300 group-hover:from-blue-50/60 group-hover:to-indigo-50/40" />

            <div className="relative">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-base transition-colors group-hover:bg-blue-100">
                  {item.icon}
                </span>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400 group-hover:text-blue-500 transition-colors">
                  {item.label}
                </p>
              </div>
              <p className="pl-10 text-sm font-semibold text-slate-800">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ─── Two Column: Tech Stack & Skills ─── */}
      <div className="grid gap-5 lg:grid-cols-2">
        {/* Tech Stack */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-sm text-white">
              🚀
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
              Teknologi yang Dipelajari
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {techStack.map((tech) => (
              <button
                type="button"
                key={tech.name}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className={`group relative overflow-hidden rounded-xl border p-3 text-left transition-all duration-300 ${
                  hoveredTech === tech.name
                    ? "border-transparent shadow-lg scale-[1.03]"
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} transition-opacity duration-300 ${
                    hoveredTech === tech.name ? "opacity-10" : "opacity-0"
                  }`}
                />
                <div className="relative flex flex-col items-center gap-1.5">
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">
                    {tech.name}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Skill Progress */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-sm text-white">
              📊
            </span>
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700">
              Skill Progress
            </h3>
          </div>

          <div className="space-y-4">
            {skills.map((skill) => (
              <div key={skill.label}>
                <div className="mb-1.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-600">{skill.label}</span>
                  <span className="font-bold text-slate-800">{skill.percent}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-slate-50 p-3">
            <p className="text-center text-xs text-slate-500">
              📈 Terus belajar dan tingkatkan kemampuan!
            </p>
          </div>
        </div>
      </div>

      {/* ─── Quote / Motivation Card ─── */}
      <div className="relative overflow-hidden rounded-2xl border border-blue-200/60 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 p-5">
        <div className="pointer-events-none absolute -right-8 -top-8 text-7xl opacity-10">
          💡
        </div>
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-500">
            Topik Pembelajaran
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Pada pertemuan ke-7 ini, kita mempelajari penggunaan <strong>Axios</strong> untuk
            mengambil data dari REST API dan menerapkan <strong>Component Layout</strong> di React
            untuk membangun antarmuka yang terstruktur dan reusable.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {["GET Request", "State Management", "Sidebar Layout", "Reusable Component"].map(
              (topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-blue-600 shadow-sm ring-1 ring-blue-200/60"
                >
                  {topic}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// components/Stats.tsx
import homeContent from "@/content/home";

export default function Stats() {
  return (
    <section className="stats-wrapper">
      <div className="stats-grid">
        {homeContent.stats.map((stat) => (
          <div key={stat.id} className={`stat-card ${stat.theme}`}>
            {/* SVG ICONS – unchanged, matched by ID */}
            {stat.id === "students" && (
              <svg
                className="w-10 h-10 mx-auto mb-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
              </svg>
            )}

            {stat.id === "teachers" && (
              <svg
                className="w-10 h-10 mx-auto mb-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4" />
                <circle cx="9" cy="7" r="4" />
                <circle cx="17" cy="7" r="4" />
              </svg>
            )}

            {stat.id === "classes" && (
              <svg
                className="w-10 h-10 mx-auto mb-3 text-blue-900"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path d="M3 10l9-5 9 5-9 5-9-5z" />
                <path d="M12 15v6" />
              </svg>
            )}

            {stat.id === "established" && (
              <svg
                className="w-10 h-10 mx-auto mb-3 text-yellow-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            )}

            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

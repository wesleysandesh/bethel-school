const stats = [
  {
    value: "500+",
    label: "Students",
    bg: "bg-blue-900",
    icon: (
      <svg
        className="w-10 h-10 text-white mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
      </svg>
    ),
  },
  {
    value: "30+",
    label: "Qualified Teachers",
    bg: "bg-yellow-400",
    icon: (
      <svg
        className="w-10 h-10 text-white mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4" />
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="7" r="4" />
      </svg>
    ),
  },
  {
    value: "Nursery – High School",
    label: "Classes",
    bg: "bg-blue-100",
    icon: (
      <svg
        className="w-10 h-10 text-blue-900 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path d="M3 10l9-5 9 5-9 5-9-5z" />
        <path d="M12 15v6" />
      </svg>
    ),
  },
  {
    value: "Established 2005",
    label: "Years of Excellence",
    bg: "bg-yellow-100",
    icon: (
      <svg
        className="w-10 h-10 text-yellow-700 mx-auto mb-4"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
];

export default function Stats() {
  return (
    <section className="relative -mt-20 z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-2xl p-8 text-center shadow-lg`}
            >
              {item.icon}
              <div className="text-2xl font-bold text-blue-900">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-700">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

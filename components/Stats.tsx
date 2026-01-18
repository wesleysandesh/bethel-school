export default function Stats() {
  return (
    <section className="stats-wrapper">
      <div className="stats-grid">
        {/* Students */}
        <div className="stat-card stat-blue">
          <svg
            className="w-10 h-10 text-white mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ marginTop: "15px" }}
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
          </svg>
          <h2>500+</h2>
          <p>Students</p>
        </div>

        {/* Teachers */}
        <div className="stat-card stat-yellow">
          <svg
            className="w-10 h-10 text-white mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ marginTop: "15px" }}
          >
            <path d="M17 20h5v-2a4 4 0 00-5-4M9 20H4v-2a4 4 0 015-4" />
            <circle cx="9" cy="7" r="4" />
            <circle cx="17" cy="7" r="4" />
          </svg>
          <h2>30+</h2>
          <p>Qualified Teachers</p>
        </div>

        {/* Classes */}
        <div className="stat-card stat-lightblue">
          <svg
            className="w-10 h-10 text-blue-900 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ marginTop: "15px" }}
          >
            <path d="M3 10l9-5 9 5-9 5-9-5z" />
            <path d="M12 15v6" />
          </svg>
          <h2>Nursery – High School</h2>
          {/* <p>Classes</p> */}
        </div>

        {/* Established */}
        <div className="stat-card stat-cream" style={{ fontWeight: "600" }}>
          <svg
            className="w-10 h-10 text-yellow-600 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            style={{ marginTop: "15px" }}
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <h2>Established 2016</h2>
          {/* <p>Years of Excellence</p> */}
        </div>
      </div>
    </section>
  );
}

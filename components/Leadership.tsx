import homeContent from "@/content/home";

export default function Leadership() {
  const leadership = homeContent.leadership;

  return (
    <section className="leadership-section">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-900">
          {leadership.title}
        </h2>

        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          {leadership.subtitle}
        </p>

        <div className="leadership-grid mt-12">
          {leadership.members.map((member, index) => (
            <div key={index} className="leadership-card">
              <img
                src={member.image}
                alt={member.name}
                className="leadership-image"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

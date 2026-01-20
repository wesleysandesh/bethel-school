import activities from "@/content/activities.json";
import PageBanner from "@/components/PageBanner";

export default function ActivitiesPage() {
  return (
    <main className="bg-white">
      <PageBanner title={activities.title} subtitle="Home / Activities" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <p className="text-gray-700">{activities.intro}</p>
        </div>

        {/* Activity Categories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
            Our Activities
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {activities.categories.map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-xl p-6 text-center shadow-sm"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-12">
            Activity Highlights
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.highlights.map((h, i) => (
              <div
                key={i}
                className="border border-blue-100 rounded-xl p-8 text-center bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{h.icon}</div>
                <p className="text-blue-900 font-medium">{h.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing Note */}
        <section className="bg-blue-900 rounded-xl p-10 text-center text-white">
          <p className="max-w-4xl mx-auto opacity-95">
            {activities.closingNote}
          </p>
        </section>
      </section>
    </main>
  );
}

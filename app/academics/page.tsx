import academics from "@/content/academics.json";
import PageBanner from "@/components/PageBanner";

export default function AcademicsPage() {
  return (
    <main className="bg-white">
      <PageBanner title={academics.title} subtitle="Home / Academics" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <p className="text-gray-700">{academics.intro}</p>
        </div>

        {/* Academic Levels */}
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {academics.levels.map((level, i) => (
            <div
              key={i}
              className="bg-blue-50 rounded-xl p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-blue-900">
                {level.name}
              </h3>
              <p className="mt-3 text-gray-700 text-sm">{level.description}</p>
            </div>
          ))}
        </section>

        {/* Highlights & Methodology */}
        <section className="grid gap-10 md:grid-cols-2">
          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Curriculum Highlights
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {academics.highlights.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Teaching Methodology
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {academics.methodology.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}

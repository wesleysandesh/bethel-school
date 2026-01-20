import about from "@/content/about.json";
import PageBanner from "@/components/PageBanner";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Page Banner */}
      <PageBanner title={about.title} subtitle="Home / About" />

      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="max-w-6xl mx-auto mb-12">
          <p className="text-gray-700 text-justify leading-relaxed">
            {about.intro}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-12"></div>

        {/* Vision & Mission */}
        {/* Vision & Mission */}
        <section className="mt-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Vision */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎯</span>
                <h3 className="text-xl font-semibold text-blue-900">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{about.vision}</p>
            </div>

            {/* Mission */}
            <div className="bg-blue-50 rounded-xl p-8 shadow-sm hover:shadow-md transition border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🚀</span>
                <h3 className="text-xl font-semibold text-blue-900">
                  Our Mission
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {about.mission.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </section>
      <div className="max-w-6xl mx-auto mt-2 mb-16 border-t border-gray-100" />
      {/* History / Timeline */}
      <section className="mt-5">
        <h2 className="text-2xl font-semibold text-blue-900 text-center mb-12">
          Our Journey
        </h2>

        <div className="relative max-w-6xl mx-auto">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-blue-200" />

          <div className="space-y-8 md:space-y-10">
            {about.history.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div className="md:w-1/2 px-6">
                  <div className="bg-white rounded-xl shadow-sm border border-blue-50 p-6">
                    <span className="text-sm font-semibold text-blue-700">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-10 mb-16 border-t border-gray-100" />

        {/* Values */}
        <div className="mt-16 mb-16 text-center">
          <h2 className="text-xl font-semibold text-blue-900">Our Values</h2>

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {about.values.map((v, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

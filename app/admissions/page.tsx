import admissions from "@/content/admissions.json";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export default function AdmissionsPage() {
  return (
    <main className="bg-white">
      <PageBanner title={admissions.title} subtitle="Home / Admissions" />

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Intro */}
        <div className="max-w-5xl mx-auto text-center mb-14">
          <p className="text-gray-700">{admissions.intro}</p>
        </div>

        {/* Admission Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-10">
            Admission Process
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {admissions.process.map((p, i) => (
              <div
                key={i}
                className="bg-blue-50 rounded-xl p-6 text-center shadow-sm"
              >
                <span className="text-sm font-semibold text-blue-700">
                  {p.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-blue-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-gray-700 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility & Documents */}
        <section className="grid gap-10 md:grid-cols-2 mb-16">
          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Eligibility
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {admissions.eligibility.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Required Documents
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {admissions.documents.map((doc, i) => (
                <li key={i}>{doc}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 rounded-xl p-10 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">{admissions.cta.title}</h3>
          <p className="mb-6 opacity-90">{admissions.cta.description}</p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md"
          >
            {admissions.cta.buttonText}
          </Link>
        </section>
      </section>
    </main>
  );
}

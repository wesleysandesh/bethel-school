import gallery from "@/content/gallery.json";
import PageBanner from "@/components/PageBanner";

export default function GalleryPage() {
  return (
    <main className="bg-white">
      {/* Banner */}
      <PageBanner title={gallery.title} subtitle="Home / Gallery" />

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        {/* Intro */}
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10">
          {gallery.intro}
        </p>

        {/* Sections */}
        {gallery.sections.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-10 text-center">
              {section.title}
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {section.items.map((item, j) => (
                <div
                  key={j}
                  className="bg-white rounded-xl border border-blue-100 shadow-sm overflow-hidden"
                >
                  {/* Image placeholder */}
                  {/* <div className="h-48 bg-blue-50 flex items-center justify-center text-blue-300 text-sm">
                    Image coming soon
                  </div> */}
                  <div className="h-48 w-full overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Title */}
                  <div className="p-4 text-center font-semibold text-blue-900">
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

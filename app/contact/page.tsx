import contact from "@/content/contact.json";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Page Banner */}
      <PageBanner title={contact.title} subtitle="Home / Contact" />

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>

            <p className="text-gray-700 mb-4">
              <strong>Address:</strong>
              <br />
              {contact.address}
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Phone:</strong>
              <br />
              {contact.phone}
            </p>

            <p className="text-gray-700 mb-4">
              <strong>Email:</strong>
              <br />
              {contact.email}
            </p>

            <p className="text-gray-700">
              <strong>Office Hours:</strong>
              <br />
              {contact.hours}
            </p>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden border border-blue-100 shadow-sm h-[320px] md:h-[380px]">
            <iframe
              src="https://www.google.com/maps?q=Bapatla,Andhra%20Pradesh&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

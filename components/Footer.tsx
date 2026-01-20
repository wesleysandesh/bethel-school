import footer from "@/content/footer.json";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-3">
        {/* School Info */}
        <div>
          <h3 className="text-xl font-bold mb-2">{footer.schoolName}</h3>
          <p className="text-sm text-blue-100">
            {footer.tagline}
            <br />
            {footer.location}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-blue-100">
            {footer.quickLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="hover:text-yellow-300 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>

          <p className="text-sm text-blue-100 space-y-1">
            📍 {footer.contact.address}
            <br />
            <a
              href={`tel:${footer.contact.phone}`}
              className="hover:text-yellow-300 transition"
            >
              📞 {footer.contact.phone}
            </a>
            <br />
            <a
              href={`mailto:${footer.contact.email}`}
              className="hover:text-yellow-300 transition"
            >
              ✉️ {footer.contact.email}
            </a>
          </p>

          {/* School Timings */}
          <div className="mt-4 text-sm text-blue-100">
            <strong className="block text-white">
              {footer.schoolTimings.label}
            </strong>
            {footer.schoolTimings.days}
            <br />
            {footer.schoolTimings.time}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-blue-800 text-center py-3 text-sm text-blue-200">
        © {new Date().getFullYear()} {footer.schoolName}. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";
import homeContent from "@/content/home";

export default function Hero() {
  return (
    <section className="relative h-[55vh] sm:h-[60vh] md:h-[85vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={homeContent.image}
        alt="Bethel High School"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2">
            {homeContent.title}
          </h1>

          <p className="text-xs sm:text-sm md:text-lg text-yellow-300 font-semibold mb-1">
            {homeContent.subtitle}
          </p>

          <p className="text-[11px] sm:text-xs md:text-base text-white mb-4">
            {homeContent.location}
          </p>
          <Link href="/contact">
            <button
              className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-black
               font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md
               transition-colors"
            >
              {homeContent.cta}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] sm:h-[75vh] md:h-[70vh] w-full">
      <Image
        src="/images/hero-school.png"
        alt="Bethel High School Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Lighter overlay */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-7xl mx-auto px-6 text-center sm:text-left pt-24 sm:pt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Bethel High School
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-yellow-300">
            Nurturing Young Minds with Care, Discipline & Values
          </p>

          <p className="mt-2 text-sm sm:text-base text-white">
            Nursery to High School | Bapatla, Andhra Pradesh
          </p>

          <div className="mt-6">
            <a
              href="/admissions"
              className="inline-block bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
            >
              Admissions Open
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

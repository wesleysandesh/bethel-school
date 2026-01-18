// components/Hero.tsx
export default function Hero() {
  return (
    <section
      className="hero h-[70vh] md:h-[85vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/images/hero-school.png')" }}
    >
      <div className="hero-content px-4">
        <h1 className="text-2xl md:text-5xl font-bold text-white mb-3">
          Bethel High School
        </h1>

        <p className="text-sm md:text-lg text-yellow-300 font-semibold mb-2">
          Nurturing Young Minds with Care, Discipline & Values
        </p>

        <p className="text-xs md:text-base text-white mb-6">
          Nursery to High School | Bapatla, Andhra Pradesh
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md">
          Admissions Open
        </button>
      </div>
    </section>
  );
}

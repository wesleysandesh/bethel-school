import homeContent from "@/content/home";

export default function Hero() {
  return (
    <section
      className="hero bg-cover bg-center flex items-center justify-center text-center
                 h-[55vh] sm:h-[60vh] md:h-[85vh]"
      style={{ backgroundImage: `url('${homeContent.image}')` }}
    >
      <div className="hero-content px-4 max-w-3xl">
        <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-white mb-2">
          {homeContent.title}
        </h1>

        <p className="text-xs sm:text-sm md:text-lg text-yellow-300 font-semibold mb-1">
          {homeContent.subtitle}
        </p>

        <p className="text-[11px] sm:text-xs md:text-base text-white mb-4">
          {homeContent.location}
        </p>

        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black
                           font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md"
        >
          {homeContent.cta}
        </button>
      </div>
    </section>
  );
}


export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-103.75px)] flex-col items-center justify-center gap-10 overflow-hidden bg-gray-100 px-6 py-12 text-gray-900 sm:px-10 min-[740px]:min-h-[calc(100svh-87.8px)] min-[740px]:flex-row min-[740px]:justify-between min-[740px]:gap-8 min-[740px]:px-12 xl:min-h-[calc(100svh-119.7px)] xl:px-20"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fuchsia-200/40 blur-3xl sm:h-80 sm:w-80"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex w-full max-w-xl flex-col items-start gap-6 min-[740px]:w-1/2">
        <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-fuchsia-800 shadow-sm sm:text-sm">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-green-500"
          />
          Fresh from our farm
        </span>

        <h1
          id="hero-title"
          className="font-poppins text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl min-[740px]:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          Growing{" "}
          <span className="text-fuchsia-700">Freshness,</span>
          <br />
          Harvesting
          <br />
          Happiness.
        </h1>

        <p className="max-w-lg text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
          Growing fresh, juicy tomatoes with care and passion,
          bringing the natural taste of our farm straight to
          your table.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-4">
          <a
            href="/product"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fuchsia-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-700/20 transition duration-300 hover:-translate-y-1 hover:bg-fuchsia-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-700 focus-visible:ring-offset-2"
          >
            Explore Our Product
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="mt-3 flex items-center gap-3 text-sm text-gray-500">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-fuchsia-400"
          />
          Freshness you can trust
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative flex w-full items-center justify-center min-[740px]:w-1/2">
        <div
          aria-hidden="true"
          className="absolute h-64 w-64 rounded-full bg-green-200/50 blur-2xl sm:h-80 sm:w-80 xl:h-96 xl:w-96"
        />

        <img
          src="/images/hero-img-2.png"
          alt="Fresh, farm-grown tomatoes and vegetables"
          fetchPriority="high"
          decoding="async"
          className="relative z-10 h-auto w-full max-w-xs object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105 sm:max-w-sm min-[740px]:max-w-md xl:max-w-lg"
        />
      </div>
    </section>
  );
}

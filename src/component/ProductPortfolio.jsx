
import product_portfolio from "../data/product";

export default function ProductPortfolio() {
  return (
    <section
      aria-labelledby="portfolio-title"
      className="relative overflow-hidden bg-white py-16 sm:py-20 xl:py-24"
    >
      {/* Section Heading */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 text-center">
        <span className="rounded-full bg-green-100 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-green-700 sm:text-sm">
          What We Grow
        </span>

        <h2
          id="portfolio-title"
          className="font-poppins text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl"
        >
          Our Product{" "}
          <span className="text-green-700">Portfolio</span>
        </h2>

        <p className="max-w-xl font-mono text-sm leading-7 text-gray-600 sm:text-base">
          Explore our wide range of high-quality farm products,
          grown with care and delivered with freshness.
        </p>
      </div>

      {/* Product Cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 px-5 sm:mt-14 sm:px-8 md:grid-cols-2 xl:grid-cols-3 xl:px-10">
        {product_portfolio.map((item) => (
          <article
            key={item.id}
            style={{ backgroundColor: item.bg }}
            className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-3xl border border-black/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8"
          >
            {/* Decorative Circle */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/30 transition-transform duration-500 group-hover:scale-125"
            />

            {/* Product Information */}
            <div className="relative z-10">
              <h3 className="font-poppins text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {item.name}
              </h3>

              <p className="mt-3 max-w-sm font-mono text-sm leading-7 text-gray-700">
                {item.description}
              </p>
            </div>

            {/* Product Image and Action */}
            <div className="relative z-10 mt-auto flex items-end justify-between gap-4 pt-8">
              <a
                href="/vegitable"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-800 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-700 focus-visible:ring-offset-2"
                aria-label={`View products in ${item.name}`}
              >
                View Products
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                decoding="async"
                className="h-28 w-28 shrink-0 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-36 sm:w-36"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

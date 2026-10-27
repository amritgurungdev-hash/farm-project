
import serve from "../data/serve";

export default function Serve() {
  return (
    <section
      aria-labelledby="serve-title"
      className="overflow-hidden bg-white px-5 py-16 font-poppins sm:px-8 sm:py-20 xl:px-20"
    >
      {/* Section Heading */}
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
        <span className="rounded-full bg-green-100 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-green-800 sm:text-sm">
          Our Partners
        </span>

        <h2
          id="serve-title"
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl"
        >
          Who We <span className="text-green-700">Serve</span>
        </h2>

        <p className="max-w-2xl font-mono text-sm leading-7 text-gray-600 sm:text-base">
          We provide reliable vegetable solutions to a wide
          range of businesses, delivering quality and freshness
          they can count on.
        </p>
      </div>

      {/* Audience Cards */}
      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:mt-14 sm:grid-cols-2 xl:grid-cols-3">
        {serve.map((item) => (
          <article
            key={item.id}
            style={{ backgroundColor: item.bg }}
            className="group flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-black/5 p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6"
          >
            {/* Card Title */}
            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
              {item.title}
            </h3>

            {/* Description and Image */}
            <div className="mt-4 flex flex-1 items-center justify-between gap-3">
              <p className="min-w-0 flex-1 font-mono text-sm leading-7 text-gray-700">
                {item.description}
              </p>

              <div className="flex w-2/5 shrink-0 items-center justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-auto max-h-36 w-full object-contain transition-transform duration-500 group-hover:scale-110 sm:max-h-40"
                />
              </div>
            </div>

            {/* Decorative Accent */}
            <div
              aria-hidden="true"
              className="mt-5 h-1 w-12 rounded-full bg-green-700/60 transition-all duration-300 group-hover:w-20"
            />
          </article>
        ))}
      </div>
    </section>
  );
}

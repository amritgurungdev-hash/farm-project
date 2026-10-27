
export default function AboutInfo() {
  return (
    <section
      aria-labelledby="about-title"
      className="overflow-hidden bg-white px-5 py-16 font-poppins sm:px-8 sm:py-20 lg:px-16 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center gap-4 text-center sm:mb-16">
          <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-green-800 sm:text-sm">
            Our Story
          </span>

          <h2
            id="about-title"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl"
          >
            About <span className="text-green-700">Us</span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Growing quality vegetables with care, dedication,
            and a commitment to a fresher future.
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12 xl:gap-16">
          {/* Farm Image */}
          <div className="relative mx-auto w-full max-w-xl md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-28 w-28 rounded-3xl bg-green-200 sm:-right-4 sm:-top-4 sm:h-36 sm:w-36"
            />

            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/4] md:aspect-[4/5] xl:aspect-[5/4]"
                src="/images/farm-img.jpg"
                alt="Farm landscape representing Ashima Ekikrit Krishi Farm"
                loading="lazy"
                decoding="async"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-16 sm:p-8 sm:pt-20">
                <p className="text-xl font-bold text-white sm:text-2xl">
                  Rooted in Agriculture
                </p>
                <p className="mt-2 text-sm leading-6 text-white/90">
                  Dedicated to growing fresh, quality vegetables.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 -z-10 h-24 w-24 rounded-3xl bg-lime-200 sm:-bottom-4 sm:-left-4 sm:h-32 sm:w-32"
            />
          </div>

          {/* Introduction Text */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
              Growing Freshness, Building Trust
            </h3>

            <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Ashima Ekikrit Krishi Farm is a Nepali vegetable
              producer and supplier serving domestic markets.
              Our customer-focused approach and commitment to
              quality help us meet the needs of customers in
              the food and beverage industry.
            </p>

            <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Our primary products include tomatoes, green
              chillies, spinach, and carrots, with a particular
              focus on tomato cultivation and production.
              Starting with tomato farming in Lamjung, we have
              gradually expanded our product range and
              agricultural operations.
            </p>

            <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We aim to strengthen our position in Nepal's
              agricultural sector through modern farming
              techniques, responsible crop management, careful
              harvesting, and consistent attention to product
              quality.
            </p>

            <div className="mt-2 flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4 sm:p-5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-700 text-lg text-white"
              >
                ✓
              </span>

              <div>
                <h4 className="font-bold text-green-900">
                  Our Commitment
                </h4>
                <p className="mt-1 text-sm leading-6 text-green-800">
                  Fresh produce, responsible farming, and a
                  dependable experience for our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mt-16 border-t border-gray-100 pt-12 sm:mt-20 sm:pt-16">
          <div className="mb-8 max-w-3xl">
            <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
              Our Approach to <span className="text-green-700">Farming</span>
            </h3>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              We are dedicated to cultivating and supplying
              fresh vegetables while improving agricultural
              productivity and maintaining product quality
              throughout the growing season.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-green-100 bg-green-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
                <span aria-hidden="true">🌱</span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                Responsible Cultivation
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                We focus on crop management, careful cultivation,
                and responsible farming practices to support
                healthy plant growth and consistent produce
                quality.
              </p>
            </article>

            <article className="rounded-2xl border border-lime-100 bg-lime-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-700 text-xl text-white">
                <span aria-hidden="true">🥕</span>
              </div>

              <h4 className="text-lg font-bold text-gray-900 sm:text-xl">
                Freshness and Quality
              </h4>

              <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
                From cultivation to harvesting and handling,
                we aim to preserve the freshness of our
                vegetables and provide a reliable supply for
                our customers.
              </p>
            </article>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 rounded-3xl bg-green-800 px-6 py-8 text-center text-white sm:mt-16 sm:px-12 sm:py-10">
          <h3 className="text-2xl font-extrabold sm:text-3xl">
            Growing Today for a Fresher Tomorrow
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-green-50 sm:text-base sm:leading-8">
            With a passion for agriculture and a commitment to
            customer satisfaction, we continue working toward
            a stronger and more sustainable future for vegetable
            production.
          </p>
        </div>
      </div>
    </section>
  );
}

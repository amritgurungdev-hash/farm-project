
const partnerBenefits = [
  {
    number: "01",
    title: "Reliable Quality",
    description:
      "We focus on consistent product quality and careful handling to support your business needs.",
  },
  {
    number: "02",
    title: "Long-Term Partnership",
    description:
      "We aim to build lasting business relationships through dependable service and collaboration.",
  },
  {
    number: "03",
    title: "Growing Together",
    description:
      "Our agricultural operations focus on meeting customer requirements as their businesses grow.",
  },
];

export default function Partner() {
  return (
    <section
      aria-labelledby="partner-title"
      className="overflow-hidden bg-green-50/70 px-5 py-16 font-poppins sm:px-8 sm:py-20 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col gap-5">
          <span className="w-fit rounded-full border border-green-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-green-800 sm:text-sm">
            Built on Trust
          </span>

          <h2
            id="partner-title"
            className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl xl:text-5xl"
          >
            Why Partner With{" "}
            <span className="text-green-700">
              Ashimta Ekikrit Krishi Farm?
            </span>
          </h2>

          <p className="max-w-4xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            <strong className="font-semibold text-gray-900">
              Ashimta Ekikrit Krishi Farm
            </strong>{" "}
            aims to be more than a vegetable supplier. We strive
            to become a long-term business partner for brands
            in the food and beverage industry. Through our
            commitment to quality, careful agricultural
            practices, and customer-focused service, we work
            to support our partners' changing needs.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-3">
          {partnerBenefits.map((benefit) => (
            <article
              key={benefit.number}
              className="group rounded-2xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 font-mono text-sm font-bold text-green-800 transition-colors duration-300 group-hover:bg-green-700 group-hover:text-white">
                {benefit.number}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {benefit.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-5 h-1 w-10 rounded-full bg-green-600 transition-all duration-300 group-hover:w-16"
              />
            </article>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="mt-8 rounded-2xl bg-green-800 px-6 py-7 text-white sm:px-9 sm:py-8">
          <h3 className="text-xl font-bold sm:text-2xl">
            Let's Grow Together
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-green-50 sm:text-base sm:leading-8">
            We welcome opportunities to build strong business
            relationships and supply quality vegetables to
            customers across our target markets.
          </p>
        </div>
      </div>
    </section>
  );
}

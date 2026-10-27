
const qualityItems = [
  "Raw material inspection",
  "In-process quality control",
  "Advanced lab testing",
  "Hygiene & sanitation",
  "Batch traceability",
  "Cold chain management",
  "International standards",
  "Continuous improvement",
];

export default function QualityCertifications() {
  return (
    <section
      aria-labelledby="quality-title"
      className="overflow-hidden bg-gray-50 px-5 py-16 text-gray-900 sm:px-8 sm:py-20 md:px-10 xl:px-20 xl:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-10 xl:gap-20">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest text-green-800 sm:text-sm">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-green-500"
            />
            Our Commitment
          </span>

          <h2
            id="quality-title"
            className="font-poppins text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl xl:text-5xl"
          >
            Quality &{" "}
            <span className="text-green-700">Certifications</span>
          </h2>

          <p className="max-w-xl font-mono text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Quality is built into every stage of our process.
            From careful raw material inspection to final
            delivery, we focus on consistency, safety, and
            freshness.
          </p>

          {/* Quality Checklist */}
          <ul className="mt-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {qualityItems.map((item) => (
              <li
                key={item}
                className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-green-200 hover:shadow-md"
              >
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700 transition-colors group-hover:bg-green-700 group-hover:text-white"
                >
                  ✓
                </span>

                <span className="font-mono text-sm leading-6 text-gray-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center gap-3 border-l-4 border-green-600 py-1 pl-4">
            <p className="font-mono text-sm font-medium leading-6 text-gray-600">
              Every step matters. Every batch counts.
            </p>
          </div>
        </div>

        {/* Quality Image */}
        <div className="relative mx-auto w-full max-w-xl md:max-w-none">
          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="absolute -right-4 -top-4 h-32 w-32 rounded-3xl bg-green-200/60 sm:-right-5 sm:-top-5 sm:h-40 sm:w-40"
          />

          <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-3xl bg-lime-200/60 sm:-bottom-5 sm:-left-5 sm:h-40 sm:w-40" />

          <div className="relative overflow-hidden rounded-3xl border border-white shadow-xl">
            <img
              src="/images/lab-img.jpg"
              alt="Quality inspection and testing in a laboratory"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/4] md:aspect-[4/5] xl:aspect-[5/4]"
            />

            {/* Image Caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-5 pt-16 sm:p-7 sm:pt-20">
              <p className="font-poppins text-lg font-semibold text-white sm:text-xl">
                Quality at Every Step
              </p>
              <p className="mt-1 font-mono text-sm text-white/85">
                Careful checks from farm to delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

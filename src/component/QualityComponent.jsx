
import quality from "../data/Quality";

export default function QualityComponent() {
  return (
    <section className="font-poppins mt-10 px-4">
      <h2 className="text-center text-4xl font-bold text-green-600">
        Our Main Principles
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-10">
        {quality.map((item) => (
          <div
            key={item.name}
            className="flex w-full max-w-xl flex-col gap-4 rounded-lg p-6 shadow-md md:w-[calc(50%-1.25rem)]"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              {item.name}
            </h3>

            <p className="leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        ))}
      <h1></h1>

      </div>
    </section>
  );
}

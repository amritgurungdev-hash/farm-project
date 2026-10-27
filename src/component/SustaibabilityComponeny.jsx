export default function SustaibabilityComponeny() {
  return (
    <section className="flex flex-col gap-8 px-5 py-12 font-poppins sm:px-8 lg:px-16 xl:px-24">
      <h2 className="text-center text-3xl font-extrabold text-green-600 sm:text-4xl">
        About Us
      </h2>

      <div className="grid grid-cols-1 mt-10 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <img
          className="h-64 w-full rounded-xl object-cover shadow-md sm:h-80 md:h-full md:min-h-[400px]"
          src="/images/sustainability.jpg"
          alt="Ashima Ekikrit Krishi Farm"
        />

        <div className="flex flex-col gap-5 text-base leading-7 text-gray-700">
          <p>
           Sustainability is at the heart of <b>Ashmita Ekikrit Krishi Farm</b> and is committed to supplying our customers in the most sustainable way possible. As a part of the farmer’s fair trade association, our operations are built on supporting farmer networks and sustainable organic practices.



          </p>

          
          <p>

          Our team strives hard to minimize the use of natural resources, is focused on efficient supply chain management and makes concerted efforts to increase our efficiency and recycle to prevent environmental harm.
          </p>

          <p>
            We are dedicated to achieving <b>100% sustainability</b>  by recycling and converting fruit wastes into valuable products without affecting the environment. We are passionate about introducing new sustainable initiatives by keeping the farmers in our close circle.

          We aim to become an environmentally responsible manufacturer by implementing sustainability in various departments, including sourcing, processing, environment, and supply chain
          </p>

        </div>
      </div>

      <div className="flex flex-col gap-5 text-base leading-7 text-gray-700">


        <p>
          Our approach to sustainability extends beyond energy generation. Through our advanced biogas and UASB systems, we convert vegitable processing waste into usable energy, effectively reducing <b>waste</b>  disposal and promoting a circular economy. In parallel, we follow structured waste <b>management practices</b>  focused on reducing, reusing, and recycling resources at every stage of production. These initiatives reflect our ongoing commitment to minimizing environmental impact while delivering high-quality vegitable solutions to our global partners.
        </p>
      </div>
    </section>
  );
}

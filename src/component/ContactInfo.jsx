
const contactGroups = [
  {
    title: "Phone Number",
    icon: "fa-solid fa-phone",
    items: [
      { label: "General Inquiry", value: "+9846060228", href: "tel:+9846060228" },
      { label: "Sales Inquiry", value: "+9806508640", href: "tel:+9806508640" },
      { label: "Export Inquiry", value: "+9808702113", href: "tel:+9808702113" },
      { label: "HR Inquiry", value: "+9806508640", href: "tel:+9806508640" },
    ],
  },
  {
    title: "Email Address",
    icon: "fa-solid fa-envelope",
    items: [
      { label: "General Inquiry", value: "info@ashmitaekikrit.com", href: "mailto:info@ashmitaekikrit.com" },
      { label: "Sales Inquiry", value: "sales@ashmitaekikrit.com", href: "mailto:sales@ashmitaekikrit.com" },
      { label: "Export Inquiry", value: "Export@ashmitaekikrit.com", href: "mailto:Export@ashmitaekikrit.com" },
      { label: "HR Inquiry", value: "hr@ashmitaekikrit.com", href: "mailto:hr@ashmitaekikrit.com" },
    ],
  },
];

export default function ContactInfo() {
  return (
    <section
      aria-labelledby="contact-info-title"
      className="bg-gradient-to-b from-green-50/70 to-white px-5 py-16 font-poppins sm:px-8 sm:py-20 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16">
          <span className="rounded-full border border-green-200 bg-white px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-green-800 sm:text-sm">
            Get In Touch
          </span>

          <h2
            id="contact-info-title"
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl xl:text-5xl"
          >
            Contact <span className="text-green-700">Information</span>
          </h2>

          <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Have questions about our products or services?
            Reach out to the appropriate team. We look forward
            to hearing from you.
          </p>
        </div>

        {/* Phone and Email Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:gap-8">
          {contactGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
                  <i className={group.icon} aria-hidden="true" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {group.title}
                </h3>
              </div>

              <div className="flex flex-col gap-5">
                {group.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col gap-1 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {item.label}
                    </span>

                    <a
                      href={item.href}
                      className="break-words text-sm font-medium text-gray-800 transition-colors hover:text-green-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 sm:text-base"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </article>
          ))}

          {/* WhatsApp Card */}
          <article className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700">
                <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  WhatsApp
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Connect with us directly
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/9846060228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
            >
              <i className="fa-brands fa-whatsapp" aria-hidden="true" />
              +9846060228
              <span aria-hidden="true">↗</span>
            </a>
          </article>

          {/* Office Address Card */}
          <article className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-2xl text-green-700">
                <i className="fa-solid fa-location-dot" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Our Head Office
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Visit our location
                </p>
              </div>
            </div>

            <p className="text-base leading-7 text-gray-700">
              Maping Village,
              <br />
              Lamjung, Nepal
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

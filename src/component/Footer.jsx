
import { useState } from "react";

export default function Footer() {
  const [formMessage, setFormMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormMessage(
      "Your details are valid, but newsletter registration is not connected yet."
    );
  };

  const inputStyle =
    "w-full rounded-xl border border-green-700 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-lime-300 focus:ring-2 focus:ring-lime-300/40";

  const socialLinks = [
    { name: "Facebook", icon: "fa-facebook" },
    { name: "Instagram", icon: "fa-instagram" },
    { name: "LinkedIn", icon: "fa-linkedin" },
    { name: "YouTube", icon: "fa-youtube" },
    { name: "X", icon: "fa-square-x-twitter" },
  ];

  return (
    <footer className="mt-16 overflow-hidden bg-green-900 font-poppins text-white sm:mt-20">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-2 xl:grid-cols-3 xl:gap-16 xl:px-10">

        {/* Company Information */}
        <div className="flex flex-col items-start gap-5">
          <a
            href="/"
            aria-label="Ashimata Integrated Krishi Farm homepage"
            className="inline-block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            <img
              className="w-36 rounded-lg bg-white p-2 sm:w-40"
              src="/images/logo-eng.png"
              alt="Ashimata Integrated Krishi Farm"
              loading="lazy"
            />
          </a>

          <p className="max-w-md text-sm leading-7 text-green-50/90">
            Ashimata Integrated Krishi Farm is a manufacturer,
            supplier, and exporter of vegetables. We focus on
            delivering high-quality, safe, and consistent
            products to food and beverage industries across
            domestic markets.
          </p>

          <h2 className="text-sm font-bold uppercase tracking-widest text-lime-300">
            Connect With Us
          </h2>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                title={`${social.name} — add your profile URL`}
                onClick={(event) => event.preventDefault()}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-700 bg-green-800 text-lg text-green-50 transition duration-300 hover:-translate-y-1 hover:border-lime-400 hover:bg-lime-400 hover:text-green-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <i
                  className={`fa-brands ${social.icon}`}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-start gap-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Get In Touch
            </p>

            <h2 className="text-2xl font-bold">
              Official Info
            </h2>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-800 text-lime-300">
              <i
                className="fa-solid fa-location-dot"
                aria-hidden="true"
              />
            </span>

            <div>
              <h3 className="font-semibold">Our Location</h3>
              <p className="mt-1 text-sm leading-6 text-green-50/90">
                Maping Village, Lamjung, Nepal
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-800 text-lime-300">
              <i className="fa-solid fa-phone" aria-hidden="true" />
            </span>

            <div>
              <h3 className="font-semibold">Phone</h3>

              <div className="mt-2 flex flex-col gap-2 text-sm text-green-50/90">
                <a
                  className="transition hover:text-lime-300"
                  href="tel:+9846060228"
                >
                  +9846060228
                </a>

                <a
                  className="transition hover:text-lime-300"
                  href="tel:+9806508640"
                >
                  +9806508640
                </a>

                <a
                  className="transition hover:text-lime-300"
                  href="tel:+9809702113"
                >
                  +9809702113
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-800 text-lime-300">
              <i
                className="fa-solid fa-envelope"
                aria-hidden="true"
              />
            </span>

            <div className="min-w-0">
              <h3 className="font-semibold">Email</h3>

              <div className="mt-2 flex flex-col gap-2 break-all text-sm text-green-50/90">
                <a
                  className="transition hover:text-lime-300"
                  href="mailto:amrit222457@gmail.com"
                >
                  amrit222457@gmail.com
                </a>

                <a
                  className="transition hover:text-lime-300"
                  href="mailto:ashimataekirirt@mail.com"
                >
                  ashimataekirirt@mail.com
                </a>

                <a
                  className="transition hover:text-lime-300"
                  href="mailto:theamritgrg@gmail.com"
                >
                  theamritgrg@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-lime-300">
              Stay Updated
            </p>

            <h2 className="text-2xl font-bold">
              Join Our Newsletter
            </h2>

            <p className="mt-3 text-sm leading-7 text-green-50/90">
              Get updates about our farm, products, and latest
              news delivered to your inbox.
            </p>
          </div>

          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="footer-first-name"
                  className="mb-1.5 block text-xs font-medium text-green-50"
                >
                  First Name
                </label>

                <input
                  id="footer-first-name"
                  className={inputStyle}
                  placeholder="First name"
                  type="text"
                  name="firstName"
                  autoComplete="given-name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="footer-last-name"
                  className="mb-1.5 block text-xs font-medium text-green-50"
                >
                  Last Name
                </label>

                <input
                  id="footer-last-name"
                  className={inputStyle}
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  autoComplete="family-name"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="footer-company"
                className="mb-1.5 block text-xs font-medium text-green-50"
              >
                Company Name
              </label>

              <input
                id="footer-company"
                className={inputStyle}
                placeholder="Your company"
                type="text"
                name="company"
                autoComplete="organization"
                required
              />
            </div>

            <div>
              <label
                htmlFor="footer-email"
                className="mb-1.5 block text-xs font-medium text-green-50"
              >
                Company Email
              </label>

              <input
                id="footer-email"
                className={inputStyle}
                placeholder="you@company.com"
                type="email"
                name="email"
                autoComplete="email"
                required
              />
            </div>

            <button
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-lime-400 px-5 py-3.5 text-sm font-bold text-green-950 transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-green-900"
              type="submit"
            >
              Subscribe
              <i
                className="fa-solid fa-arrow-right"
                aria-hidden="true"
              />
            </button>

            {formMessage && (
              <p
                role="status"
                aria-live="polite"
                className="text-sm leading-6 text-lime-200"
              >
                {formMessage}
              </p>
            )}

            <p className="text-xs leading-5 text-green-100/70">
              We respect your privacy and use your information
              only for its intended purpose.
            </p>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-green-700 bg-green-950/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-green-100/70 sm:flex-row sm:px-8 sm:text-sm xl:px-10">
          <p>
            © {new Date().getFullYear()} Ashimata Integrated
            Krishi Farm. All rights reserved.
          </p>

          <a
            href="/"
            className="transition hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          >
            Freshness from our farm to your table.
          </a>
        </div>
      </div>
    </footer>
  );
}

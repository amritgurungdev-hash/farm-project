
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpen((current) => (current === name ? null : name));
  };

  const closeMenus = () => {
    setOpen(null);
    setMenuOpen(false);
  };

  const linkStyle =
    "inline-flex items-center py-2 text-sm font-semibold text-gray-700 transition-colors duration-200 hover:text-green-700 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 min-[740px]:py-3 xl:text-base";

  const dropdownStyle =
    "z-50 mt-2 w-full overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-lg min-[740px]:absolute min-[740px]:left-0 min-[740px]:top-full min-[740px]:mt-1 min-[740px]:w-56";

  const dropdownLinkStyle =
    "block px-5 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-green-50 hover:text-green-800 focus-visible:bg-green-50 focus-visible:outline-none";

  const arrow = (name) => (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`h-4 w-4 transition-transform duration-200 ${
        open === name ? "rotate-180" : ""
      }`}
    >
      <path
        d="m5 7.5 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <nav
      aria-label="Main navigation"
      className="relative z-50 border-b border-gray-100 bg-white font-poppins shadow-sm"
    >
      <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between px-5 py-3 sm:px-8 xl:px-16">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenus}
          aria-label="Go to homepage"
          className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
        >
          <img
            className="h-auto w-20 object-contain sm:w-24 xl:w-28"
            src="/images/logo-eng.png"
            alt="Website logo"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-gray-800 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 min-[740px]:hidden"
          onClick={() => {
            setMenuOpen((current) => !current);
            setOpen(null);
          }}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="main-navigation-links"
        >
          {menuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          id="main-navigation-links"
          className={`${
            menuOpen ? "flex" : "hidden"
          } w-full flex-col items-stretch gap-2 border-t border-gray-100 pt-4 min-[740px]:flex min-[740px]:w-auto min-[740px]:flex-row min-[740px]:items-center min-[740px]:gap-5 min-[740px]:border-0 min-[740px]:pt-0 xl:gap-7`}
        >
          <a className={linkStyle} href="/" onClick={closeMenus}>
            Home
          </a>

          <a className={linkStyle} href="/about" onClick={closeMenus}>
            About Us
          </a>

          {/* Product Dropdown */}
          <div className="relative flex flex-wrap items-center gap-2 min-[740px]:gap-1">
            <a
              className={linkStyle}
              href="/product"
              onClick={closeMenus}
            >
              Product
            </a>

            <button
              type="button"
              onClick={() => toggleDropdown("product")}
              aria-label="Toggle product submenu"
              aria-expanded={open === "product"}
              aria-controls="product-dropdown"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              {arrow("product")}
            </button>

            {open === "product" && (
              <div id="product-dropdown" className={dropdownStyle}>
                <a
                  className={dropdownLinkStyle}
                  href="/vegitable"
                  onClick={closeMenus}
                >
                  Vegetables
                </a>
                <a
                  className={dropdownLinkStyle}
                  href="/spices"
                  onClick={closeMenus}
                >
                  Spices
                </a>
              </div>
            )}
          </div>

          <a
            className={linkStyle}
            href="/achivement"
            onClick={closeMenus}
          >
            Achievement
          </a>

          {/* Quality Dropdown */}
          <div className="relative flex flex-wrap items-center gap-2 min-[740px]:gap-1">
            <a
              className={linkStyle}
              href="/quality"
              onClick={closeMenus}
            >
              Quality
            </a>

            <button
              type="button"
              onClick={() => toggleDropdown("quality")}
              aria-label="Toggle quality submenu"
              aria-expanded={open === "quality"}
              aria-controls="quality-dropdown"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-green-50 hover:text-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600"
            >
              {arrow("quality")}
            </button>

            {open === "quality" && (
              <div id="quality-dropdown" className={dropdownStyle}>
                <a
                  className={dropdownLinkStyle}
                  href="/sustainability"
                  onClick={closeMenus}
                >
                  Sustainability
                </a>
              </div>
            )}
          </div>

          <a
            className={linkStyle}
            href="/contact-us"
            onClick={closeMenus}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

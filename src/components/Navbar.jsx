import React, { useState } from "react";

const navItems = [
  "Home(01)",
  "About(02)",
  "Service(03)",
  "Project(04)",
  "Blog(05)",
  "Contact(06)",
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 h-[80px] border-b border-[#666666] bg-[#0d0d0d] text-white sm:h-[90px] lg:h-[101px]">
      <div
        className="
          mx-auto flex h-full
          w-[calc(100%-32px)]
          max-w-[1512px]
          items-center justify-between
          sm:w-[calc(100%-40px)]
          lg:w-[calc(100%-48px)]
        "
      >
        {/* ================= LOGO ================= */}
        <a
          href="#"
          className="
            select-none
            text-[22px]
            font-bold
            leading-none
            tracking-[-1.2px]
            sm:text-[25px]
            lg:text-[27px]
            lg:tracking-[-1.5px]
          "
        >
          PrimeDecor
        </a>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-[16px] md:flex lg:gap-[20px]">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="
                whitespace-nowrap
                text-[14px]
                font-medium
                tracking-[-0.3px]
                transition-opacity
                duration-300
                hover:opacity-60
                lg:text-[17px]
                lg:tracking-[-0.5px]
              "
            >
              {item}
            </a>
          ))}
        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="
            relative
            flex
            h-[40px]
            w-[40px]
            items-center
            justify-center
            md:hidden
          "
        >
          <span
            className={`
              absolute
              block
              h-[2px]
              w-[25px]
              bg-white
              transition-transform
              duration-300
              ${menuOpen ? "rotate-45" : "-translate-y-[4px]"}
            `}
          />

          <span
            className={`
              absolute
              block
              h-[2px]
              w-[25px]
              bg-white
              transition-transform
              duration-300
              ${menuOpen ? "-rotate-45" : "translate-y-[4px]"}
            `}
          />
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        className={`
          absolute
          left-0
          top-full
          w-full
          overflow-hidden
          border-b
          border-[#666666]
          bg-[#0d0d0d]
          transition-all
          duration-500
          ease-in-out
          md:hidden
          ${
            menuOpen
              ? "max-h-[500px] opacity-100"
              : "pointer-events-none max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-[16px] py-[20px] sm:px-[20px]">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#666666]
                py-[17px]
                text-[16px]
                font-medium
                tracking-[-0.4px]
                transition-opacity
                duration-300
                hover:opacity-60
                last:border-b-0
              "
            >
              <span>{item}</span>

              <span className="text-[14px] opacity-50">
                →
              </span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
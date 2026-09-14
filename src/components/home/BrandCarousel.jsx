import React from "react";

const brands = [
  { name: "Energy", logo: "◈" },
  { name: "Shutterframe", logo: "⬡" },
  { name: "Renaissance", logo: "ℝ" },
  { name: "Screentime", logo: "◐" },
  { name: "Meta", logo: "∞" },
  { name: "Netflix", logo: "N" },
  { name: "Adobe", logo: "A" },
  { name: "Spotify", logo: "●" },
];

/* =========================================================
   BRAND CARD
========================================================= */

const BrandCard = ({ brand }) => {
  return (
    <div
      className="
        flex
        shrink-0
        items-center
        justify-center
        gap-2
        rounded-2xl
        bg-[#1b1b1b]
        text-[#777]

        w-[75vw]
        h-[190px]

        sm:w-[300px]
        sm:h-[220px]

        md:w-[330px]
        md:h-[240px]

        lg:w-[367px]
        lg:h-[265px]
        lg:rounded-3xl
      "
    >
      {/* LOGO */}

      <span
        className="
          text-3xl
          font-bold
          opacity-70

          sm:text-4xl
          md:text-5xl
        "
      >
        {brand.logo}
      </span>

      {/* BRAND NAME */}

      <span
        className="
          text-xl
          font-bold
          tracking-tight

          sm:text-2xl
          md:text-3xl
          lg:text-[32px]
        "
      >
        {brand.name}
      </span>
    </div>
  );
};

/* =========================================================
   BRANDS CAROUSEL
========================================================= */

export default function BrandsCarousel() {
  const infiniteBrands = [...brands, ...brands];

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0d0d0d]

        px-4
        py-12

        sm:px-6
        sm:py-14

        md:px-10
        md:py-16

        lg:px-20
        lg:py-16
      "
    >
      {/* =====================================================
          MAIN CONTAINER
          IMPORTANT: relative
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1600px]
        "
      >
        {/* ===================================================
            MOBILE / TABLET TITLE
        =================================================== */}

        <div
          className="
            mb-8
            block

            sm:mb-10

            lg:hidden
          "
        >
          <h2
            className="
              font-bold
              leading-[0.9]
              tracking-[-0.06em]
              text-white

              text-[52px]

              sm:text-[64px]

              md:text-[72px]
            "
          >
            100+
            <br />
            Brands
          </h2>

          <p
            className="
              mt-5
              max-w-[320px]
              font-medium
              leading-[1.3]
              text-white/60

              text-[14px]

              sm:text-[16px]
            "
          >
            From First-Time Homeowners to
            <br />
            Global Brands.
          </p>
        </div>

        {/* ===================================================
            CAROUSEL AREA
        =================================================== */}

        <div
          className="
            relative
            w-full
            overflow-hidden
          "
        >
          {/* =================================================
              MOVING TRACK
          ================================================= */}

          <div
            className="
              brands-track
              flex
              w-max
              gap-4

              sm:gap-5

              lg:gap-6
            "
          >
            {infiniteBrands.map((brand, index) => (
              <BrandCard
                key={`${brand.name}-${index}`}
                brand={brand}
              />
            ))}
          </div>

          {/* =================================================
              DESKTOP ORANGE CARD

              IMPORTANT:
              It is now relative to CAROUSEL AREA,
              not the Hero section.
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute

              left-0
              top-0

              z-20

              hidden

              lg:flex
              lg:w-[381px]
              lg:h-[265px]

              flex-col
              justify-between

              rounded-3xl
              bg-[#e45a27]

              px-[30px]
              py-[38px]
            "
          >
            {/* TITLE */}

            <h2
              className="
                text-[50px]
                font-bold
                leading-[0.95]
                tracking-[-0.05em]
                text-white
              "
            >
              100+
              <br />
              Brands
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                max-w-[280px]
                text-[18px]
                font-medium
                leading-[1.3]
                text-white
              "
            >
              From First-Time Homeowners to
              <br />
              Global Brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
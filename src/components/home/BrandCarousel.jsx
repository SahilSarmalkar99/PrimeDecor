import React from "react";

const brands = [
  {
    name: "Energy",
    logo: "◈",
  },
  {
    name: "Shutterframe",
    logo: "⬡",
  },
  {
    name: "Renaissance",
    logo: "ℝ",
  },
  {
    name: "Screentime",
    logo: "◐",
  },
  {
    name: "Meta",
    logo: "∞",
  },
  {
    name: "Netflix",
    logo: "N",
  },
  {
    name: "Adobe",
    logo: "A",
  },
  {
    name: "Spotify",
    logo: "●",
  },
];

const BrandCard = ({ brand }) => {
  return (
    <div
      className="rounded-3xl
        shrink-0
        w-[280px]
        sm:w-[320px]
        lg:w-[367px]
        h-[220px]
        sm:h-[240px]
        lg:h-[265px]
        bg-[#1b1b1b]
        flex items-center justify-center
        gap-3
        text-[#777]
      "
    >
      <span className="text-4xl sm:text-5xl font-bold opacity-70">
        {brand.logo}
      </span>

      <span
        className="
          text-2xl
          sm:text-3xl
          lg:text-[32px]
          font-bold
          tracking-tight
        "
      >
        {brand.name}
      </span>
    </div>
  );
};

export default function BrandsCarousel() {
  // Duplicate the array so the animation can loop seamlessly.
  const infiniteBrands = [...brands, ...brands];

  return (
    <section className="w-full bg-[#0d0d0d] py-16  px-20 overflow-hidden">
      <div className="relative w-full max-w-[1600px] mx-auto">

        {/* =====================================================
            MOVING CAROUSEL
        ====================================================== */}
        <div className="overflow-hidden">
          <div className="brands-track flex gap-6 lg:gap-6 ">
            {infiniteBrands.map((brand, index) => (
              <BrandCard
                key={`${brand.name}-${index}`}
                brand={brand}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            FIXED ORANGE CARD
            This sits ABOVE the moving cards.
        ====================================================== */}
        <div
          className="
            absolute
            z-20
            left-0
            top-0
            rounded-3xl
            w-[58%]
            sm:w-[45%]
            lg:w-[381px]

            h-[220px]
            sm:h-[240px]
            lg:h-[265px]

            bg-[#e45a27]

            px-7
            sm:px-8
            lg:px-[30px]

            py-8
            sm:py-9
            lg:py-[38px]

            flex
            flex-col
            justify-between

            pointer-events-none
          "
        >
          <h2
            className="
              text-white
              font-bold
              leading-[0.98]
              tracking-[-0.04em]

              text-[42px]
              sm:text-[48px]
              lg:text-[50px]
            "
          >
            100+
            <br />
            Brands
          </h2>

          <p
            className="
              text-white
              font-medium
              leading-[1.35]

              text-[15px]
              sm:text-[17px]
              lg:text-[18px]

              max-w-[280px]
            "
          >
            From First-Time Homeowners to
            <br className="hidden sm:block" />
            Global Brand.
          </p>
        </div>

      </div>
    </section>
  );
}
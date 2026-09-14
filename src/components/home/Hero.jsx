import React from "react";
import useTextReveal from "../../hooks/useTextReveal";
import HoverImageReveal from "./HoverImageReveal";
import useLineReveal from "../../hooks/useLineReveal";

export default function Hero() {
  /* =========================================================
     TEXT REVEAL
  ========================================================= */

  const heroRef = useTextReveal({
    selector: "p,[data-text-reveal]",

    duration: 2,

    stagger: 0.25,

    ease: "power4.out",

    start: "top 85%",
  });

  const gridRef = useLineReveal({
  duration: 5,
  stagger: 0.4,
  start: "top 85%",
});

  return (
    <div ref={gridRef} className="min-h-screen overflow-x-hidden bg-[#101010] text-white">
      {/* =====================================================
          HERO
      ===================================================== */}

      <main>
        <section
          ref={heroRef}
          className="
            prime-hero-shell
            mx-auto
            w-[calc(100%-32px)]
            overflow-hidden
            border-x
            border-[#666666]

            sm:w-[calc(100%-40px)]

            lg:w-[calc(100%-250px)]
            lg:max-w-[1512px]
          "
        >
          {/* =================================================
              BIG TYPOGRAPHY
          ================================================= */}

          <div
            className="
              prime-hero-type
              relative
              z-10
              h-[300px]
              pt-[65px]
              font-[font2]

              sm:h-[360px]
              sm:pt-[80px]

              md:h-[400px]
              md:pt-[90px]

              lg:h-[474px]
              lg:pt-[100px]
            "
          >
            {/* =================================================
                INTERIOR ©
            ================================================= */}

            <div
              data-text-reveal
              className="
                prime-hero-title
                ml-[15px]
                whitespace-nowrap
                text-[clamp(45px,10.7vw,171px)]
                font-black
                uppercase
                leading-[0.84]
                tracking-[-0.04em]

                sm:ml-[20px]

                lg:ml-[30px]
              "
            >
              INTERIOR

              <span
                className="
                  ml-[2px]
                  inline-flex
                  h-[0.8em]
                  w-[0.8em]
                  translate-y-[0.03em]
                  items-center
                  justify-center
                  align-top
                  text-[0.43em]
                  font-extrabold
                  tracking-[-0.02em]

                  sm:ml-[3px]

                  lg:ml-[4px]
                "
              >
                ©
              </span>
            </div>

            {/* =================================================
                STUDIO
            ================================================= */}

            <div
              data-text-reveal
              className="
                prime-hero-title
                ml-[35%]
                whitespace-nowrap
                text-[clamp(45px,10.7vw,171px)]
                font-black
                uppercase
                leading-[0.84]
                tracking-[-0.04em]

                sm:ml-[40%]

                md:ml-[44%]

                lg:ml-[48.2%]
              "
            >
              STUDIO
            </div>
          </div>

          {/* =================================================
              IMAGE ROW
          ================================================= */}

          <HoverImageReveal />

          {/* =================================================
              BOTTOM / SERVICES
          ================================================= */}

          <div
            className="
              min-h-[500px]
              border-t
              border-[#666666]
              px-[18px]
              py-[25px]

              sm:px-[24px]
              sm:py-[30px]

              lg:min-h-[316px]
              lg:px-[24px]
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-[55px]

                lg:grid-cols-2
                lg:gap-10
              "
            >
              {/* =================================================
                  LEFT SERVICES
              ================================================= */}

              <div className="flex flex-col gap-[24px] sm:gap-[28px]">
                {/* SERVICE 01 */}

                <span
                  data-text-reveal
                  className="
                    text-[16px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.5px]
                    text-[#d0ccc9]

                    sm:text-[18px]

                    lg:text-[20px]
                    lg:tracking-[-0.7px]
                  "
                >
                  Residential Interiors
                </span>

                {/* SERVICE 02 */}

                <span
                  data-text-reveal
                  className="
                    text-[16px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.5px]
                    text-[#d0ccc9]

                    sm:text-[18px]

                    lg:text-[20px]
                    lg:tracking-[-0.7px]
                  "
                >
                  Spatial Planning & Architecture
                </span>

                {/* SERVICE 03 */}

                <span
                  data-text-reveal
                  className="
                    text-[16px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.5px]
                    text-[#d0ccc9]

                    sm:text-[18px]

                    lg:text-[20px]
                    lg:tracking-[-0.7px]
                  "
                >
                  Material Curation
                </span>

                {/* SERVICE 04 */}

                <span
                  data-text-reveal
                  className="
                    text-[16px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.5px]
                    text-[#d0ccc9]

                    sm:text-[18px]

                    lg:text-[20px]
                    lg:tracking-[-0.7px]
                  "
                >
                  Custom Furniture & Millwork
                </span>

                {/* SERVICE 05 */}

                <span
                  data-text-reveal
                  className="
                    text-[16px]
                    font-medium
                    leading-[1.2]
                    tracking-[-0.5px]
                    text-[#d0ccc9]

                    sm:text-[18px]

                    lg:text-[20px]
                    lg:tracking-[-0.7px]
                  "
                >
                  Lighting & Styling
                </span>
              </div>

              {/* =================================================
                  RIGHT CONTENT
              ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  items-start

                  lg:items-end
                "
              >
                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p
                  className="
                    max-w-[560px]
                    text-left
                    text-[20px]
                    font-medium
                    leading-[1.3]
                    tracking-[-0.8px]
                    text-[#d0ccc9]

                    sm:text-[22px]

                    lg:text-right
                    lg:text-[25px]
                    lg:leading-[1.25]
                    lg:tracking-[-1px]
                  "
                >
                  Interior architecture and design for those who believe a
                  room should feel like a conversation, not a statement.
                </p>

                {/* =================================================
                    BUTTON
                ================================================= */}

                <button
                  type="button"
                  className="
                    mt-[28px]
                    flex
                    h-[60px]
                    w-[230px]
                    items-center
                    justify-center
                    gap-[10px]
                    bg-[#e35b28]
                    text-[17px]
                    font-semibold
                    tracking-[-0.5px]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#f06a35]

                    sm:mt-[32px]
                    sm:h-[65px]
                    sm:w-[250px]
                    sm:text-[18px]

                    lg:h-[70px]
                    lg:w-[267px]
                    lg:text-[20px]
                  "
                >
                  <span>Contact with Us</span>

                  <span
                    className="
                      text-[24px]
                      font-light
                      leading-none

                      lg:text-[28px]
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          EMPTY GRID SECTION
      ===================================================== */}

      <div
      
        className="
          h-[80px]
          w-full
          border-t
          border-[#666666]

          sm:h-[90px]

          lg:h-[101px]
        "
      />
    </div>
  );
}
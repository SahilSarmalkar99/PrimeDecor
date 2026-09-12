import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#101010] text-white">
      

      {/* ================= HERO ================= */}
      <main>
        <section
          className="
            mx-auto
            w-[calc(100%-250px)]
            max-w-[1512px]
            overflow-hidden
            border-x
            border-[#383838]
            
          "
        >
          {/* BIG TYPOGRAPHY */}
          <div
            className="font-[font2]
              relative
              z-10
              h-[474px]
              pt-[100px]
            "
          >
            {/* INTERIOR */}
            <div
              className="
                ml-[30px]
                whitespace-nowrap
                text-[clamp(80px,10.7vw,171px)]
                font-black
                uppercase
                leading-[0.84]
              "
            >
              INTERIOR
              <span
                className="
                  ml-[4px]
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
                "
              >
                ©
              </span>
            </div>

            {/* STUDIO */}
            <div
              className="
                ml-[48.2%]
                whitespace-nowrap
                text-[clamp(80px,10.7vw,171px)]
                font-black
                uppercase
                leading-[0.84]
              "
            >
              STUDIO
            </div>
          </div>

          {/* ================= IMAGE ROW ================= */}
          <div className="border-t border-[#383838]">
            <div
              className="
                mx-auto
                aspect-[742/386]
                w-[49.2%]
                overflow-hidden
              "
            >
              <img
                src="/hero.avif"
                alt="Luxury interior"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>

          {/* ================= BOTTOM / SERVICES ================= */}
          <div
            className="
    min-h-[316px]
    border-t
    border-[#383838]
    px-[24px]
    py-[30px]
    lg:px-[24px]
  "
          >
            <div
              className="
      grid
      grid-cols-1
      gap-10
      lg:grid-cols-2
    "
            >
              {/* ================= LEFT ================= */}
              <div className="flex flex-col gap-[28px]">
                <span
                  className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.7px]
          text-[#d0ccc9]
        "
                >
                  Residential Interiors
                </span>

                <span
                  className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.7px]
          text-[#d0ccc9]
        "
                >
                  Spatial Planning & Architecture
                </span>

                <span
                  className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.7px]
          text-[#d0ccc9]
        "
                >
                  Material Curation
                </span>

                <span
                  className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.7px]
          text-[#d0ccc9]
        "
                >
                  Custom Furniture & Millwork
                </span>

                <span
                  className="
          text-[20px]
          font-medium
          leading-none
          tracking-[-0.7px]
          text-[#d0ccc9]
        "
                >
                  Lighting & Styling
                </span>
              </div>

              {/* ================= RIGHT ================= */}
              <div
                className="
        flex
        flex-col
        items-start
        lg:items-end
      "
              >
                {/* Description */}
                <p
                  className="
          max-w-[560px]
          text-left
          text-[25px]
          font-medium
          leading-[1.25]
          tracking-[-1px]
          text-[#d0ccc9]
          lg:text-right
        "
                >
                  Interior architecture and design for those who believe a room
                  should feel like a conversation, not a statement.
                </p>

                {/* Button */}
                <button
                  className="
          mt-[32px]
          flex
          h-[70px]
          w-[267px]
          items-center
          justify-center
          gap-[12px]
          bg-[#e35b28]
          text-[20px]
          font-semibold
          tracking-[-0.5px]
          text-white
          transition-all
          duration-300
          hover:bg-[#f06a35]
        "
                >
                  <span>Contact with Us</span>

                  <span
                    className="
            text-[28px]
            font-light
            leading-none
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
          {/* ================= EMPTY GRID SECTION ================= */}
<div
  className="
    h-[101px]
    w-full
    border-t
    border-[#383838]
  "
></div>
    </div>
  );
}

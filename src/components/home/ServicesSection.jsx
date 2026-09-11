import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const services = [
  {
    number: "01",
    title: "Renovation",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=90&w=1200&auto=format&fit=crop",
    description:
      'Custom pieces that fit your space — and your life — perfectly. No more compromising on size, style, or comfort because something wasn\'t "off the shelf."',
  },

  {
    number: "02",
    title: "Interior Design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=90&w=1200&auto=format&fit=crop",
    description:
      "Thoughtful interiors designed around how you live, combining material, light, furniture, and architecture into one cohesive space.",
  },

  {
    number: "03",
    title: "Furniture",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=1200&auto=format&fit=crop",
    description:
      "Custom furniture designed specifically for your space, balancing comfort, function, proportion, and timeless materials.",
  },

  {
    number: "04",
    title: "Architectural",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=90&w=1200&auto=format&fit=crop",
    description:
      "Architectural solutions that connect structure, material, light, and landscape to create spaces with character.",
  },

  {
    number: "05",
    title: "Decoration",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=90&w=1200&auto=format&fit=crop",
    description:
      "A considered layer of objects, textures, artwork, and details that gives every room its own personality.",
  },

  {
    number: "06",
    title: "Space Planning",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1200&auto=format&fit=crop",
    description:
      "Smart spatial planning that improves flow, function, proportion, and the overall experience of your home.",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const leftViewportRef = useRef(null);
  const leftTrackRef = useRef(null);

  /*
   * Height of ONE complete service item.
   *
   * This is important because the whole left side
   * moves exactly one item at a time.
   */
  const getItemHeight = () => {
    if (window.innerWidth < 640) {
      return 570;
    }

    if (window.innerWidth < 1024) {
      return 680;
    }

    return 720;
  };

  const handleHover = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);

    /*
     * Move the complete LEFT TRACK vertically.
     *
     * 01 = 0
     * 02 = -1 item
     * 03 = -2 items
     * 04 = -3 items
     * ...
     */

    gsap.to(leftTrackRef.current, {
      y: () => -(index * getItemHeight()),
      duration: 0.8,
      ease: "power3.inOut",
      overwrite: true,
    });
  };

  /*
   * Refresh position when screen is resized.
   */
  useLayoutEffect(() => {
    const update = () => {
      gsap.set(leftTrackRef.current, {
        y: -(activeIndex * getItemHeight()),
      });
    };

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, [activeIndex]);

  return (
    <section
      className="
        w-full
        bg-[#f5f3ef]
        font-[font2]
        px-[7.5%]

        pt-[110px]
        pb-[120px]

        lg:px-[7.5%]

        md:px-[6%]
        md:pt-[90px]

        sm:px-[6%]
        sm:pt-[75px]
        sm:pb-[90px]

        max-sm:px-[6%]
        max-sm:pt-[60px]
        max-sm:pb-[70px]
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          mb-[150px]

          lg:mb-[130px]
          md:mb-[110px]
          sm:mb-[80px]
          max-sm:mb-[65px]
        "
      >
        <div
          className="
            mb-[38px]

            text-[#9b958a]

            font-semibold
            leading-none

            text-[18px]

            md:text-[16px]
            sm:text-[15px]
            max-sm:text-[14px]
          "
        >
          (SERVICE)
        </div>

        <h2
          className="
            m-0

            text-[#1c1b1a]

            font-black
            uppercase

            tracking-[-0.055em]
            leading-[0.88]

            text-[clamp(52px,6.2vw,96px)]
          "
        >
          OUR SERVICE
        </h2>
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div
        className="
          grid

          grid-cols-[38%_1fr]

          gap-[9%]

          lg:grid-cols-[38%_1fr]
          lg:gap-[8%]

          md:grid-cols-[38%_1fr]
          md:gap-[6%]

          sm:grid-cols-1
          sm:gap-[70px]

          max-sm:grid-cols-1
          max-sm:gap-[55px]
        "
      >
        {/* =================================================
            LEFT VIEWPORT

            IMPORTANT:
            This container clips the moving vertical track.
        ================================================== */}

        <div
          ref={leftViewportRef}
          className="
            relative

            w-full

            h-[720px]

            lg:h-[680px]
            md:h-[650px]

            overflow-hidden
          "
        >
          {/* =================================================
              VERTICAL SERVICE TRACK
          ================================================== */}

          <div
            ref={leftTrackRef}
            className="
              absolute

              top-0
              left-0

              w-full

              will-change-transform
            "
          >
            {services.map((service, index) => (
              <div
                key={service.number}
                className="
                  service-left-item

                  w-full

                  h-[720px]

                  lg:h-[680px]
                  md:h-[650px]

                  sm:h-[570px]
                  max-sm:h-[540px]

                  flex
                  flex-col
                "
              >
                {/* =========================================
                    IMAGE
                ========================================== */}

                <div
                  className="
                    relative

                    w-full

                    h-[470px]

                    lg:h-[440px]
                    md:h-[420px]

                    sm:h-[370px]
                    max-sm:h-[350px]

                    overflow-hidden

                    shrink-0
                  "
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      absolute
                      inset-0

                      w-full
                      h-full

                      object-cover

                      transition-transform
                      duration-700
                    "
                  />
                </div>

                {/* =========================================
                    SERVICE TITLE
                ========================================== */}

                <div
                  className="
                    pt-[30px]

                    sm:pt-[25px]
                    max-sm:pt-[22px]
                  "
                >
                  <h3
                    className="
                      m-0

                      text-[#111]

                      font-bold
                      uppercase

                      tracking-[-0.035em]
                      leading-[1]

                      text-[clamp(23px,2.1vw,34px)]
                    "
                  >
                    ( {service.title.toUpperCase()} SERVICE )
                  </h3>

                  {/* =====================================
                      DESCRIPTION
                  ====================================== */}

                  <p
                    className="
                      mt-[25px]

                      max-w-[500px]

                      text-[#9a958a]

                      font-medium

                      leading-[1.35]

                      text-[clamp(17px,1.3vw,22px)]

                      sm:mt-[18px]
                      max-sm:mt-[16px]
                    "
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =================================================
            RIGHT SERVICE LIST
        ================================================== */}

        <div className="w-full">
          {services.map((service, index) => {
            const active = index === activeIndex;

            return (
              <button
                key={service.number}
                type="button"
                onMouseEnter={() => handleHover(index)}
                onFocus={() => handleHover(index)}
                onClick={() => handleHover(index)}
                className="
                  group

                  relative

                  w-full

                  flex
                  items-start
                  justify-between

                  py-[27px]

                  lg:py-[25px]
                  md:py-[23px]

                  sm:py-[21px]
                  max-sm:py-[20px]

                  border-0
                  border-b
                  border-[#dedbd4]

                  bg-transparent

                  text-left

                  cursor-pointer

                  outline-none
                "
              >
                {/* ACTIVE BORDER */}

                <span
                  className={`
                    absolute
                    left-0
                    bottom-0

                    h-[2px]

                    bg-[#1c1b1a]

                    transition-all
                    duration-500

                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />

                {/* SERVICE NAME */}

                <span
                  className={`
                    font-bold

                    tracking-[-0.045em]
                    leading-[0.95]

                    text-[clamp(40px,4vw,66px)]

                    transition-colors
                    duration-300

                    ${active ? "text-[#1c1b1a]" : "text-[#898378]"}
                  `}
                >
                  {service.title}
                </span>

                {/* NUMBER */}

                <span
                  className={`
                    ml-4

                    shrink-0

                    font-bold

                    tracking-[-0.04em]
                    leading-none

                    text-[clamp(20px,2vw,34px)]

                    transition-colors
                    duration-300

                    ${active ? "text-[#1c1b1a]" : "text-[#898378]"}
                  `}
                >
                  {service.number}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

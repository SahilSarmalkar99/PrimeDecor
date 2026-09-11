import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../../assets/process/img1.avif";
import img2 from "../../assets/process/img2.avif";
import img3 from "../../assets/process/img3.avif";
import img4 from "../../assets/process/img4.avif";
import img5 from "../../assets/process/img5.avif";
import bg from "../../assets/process/bg.webp";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    title: "DISCOVERY & LISTENING",
    description:
      "WE SIT (VIRTUALLY OR IN-PERSON) FOR 90 MINUTES. YOU TALK. WE SKETCH. WE LEAVE WITH YOUR WISHLIST, NON-NEGOTIABLES, AND ONE THING THAT SURPRISED YOU ABOUT YOUR OWN SPACE.",
    image: img1,
  },

  {
    number: "02",
    title: "CONCEPT & SPATIAL STRATEGY",
    description:
      "WE DELIVER TWO DISTINCT DESIGN DIRECTIONS. EACH INCLUDES FLOOR PLANS, MATERIAL PALETTES, LIGHTING CONCEPTS, AND A ROUGH BUDGET. YOU CHOOSE THE SOUL OF YOUR PROJECT.",
    image: img2,
  },

  {
    number: "03",
    title: "DEVELOPMENT & DOCUMENTATION",
    description:
      "EVERY DRAWER, EVERY OUTLET, EVERY FINISH. WE PRODUCE CONSTRUCTION-READY DRAWINGS, MILLWORK ELEVATIONS, AND A BOUND SPECIFICATION BOOK. YOUR CONTRACTOR WILL THANK US.",
    image: img3,
  },

  {
    number: "04",
    title: "PROJECT MANAGEMENT",
    description:
      "WE ORDER, TRACK, STORE, AND STAGE EVERYTHING. YOU DON'T ANSWER DELIVERY CALLS OR SIGN FOR PALLETS. OUR VENDORS KNOW US. YOUR WEEKENDS STAY YOURS.",
    image: img4,
  },

  {
    number: "05",
    title: "INSTALLATION & THE REVEAL",
    description:
      "OUR TEAM INSTALLS FOR 3–5 DAYS. ART, FURNITURE, LIGHTING, AND EVERY FINAL DETAIL COME TOGETHER.",
    image: img5,
  },
];

export default function ProcessSection() {
  const sectionRef = useRef(null);
  const cardsTrackRef = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = cardsTrackRef.current;

      gsap.to(track, {
        y: () => {
          return window.innerWidth < 640 ? -1500 : -1850;
        },

        ease: "none",

        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          /*
           * The section remains pinned while the user
           * scrolls through this distance.
           */
          end: () => {
            return window.innerWidth < 640 ? "+=1800" : "+=2500";
          },

          scrub: 1,

          pin: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
    relative
    w-full

    h-[1100px]

    lg:h-[1100px]
    md:h-[900px]
    sm:h-[800px]
    max-sm:h-[760px]

    overflow-hidden

    bg-black
  "
    >
      {/* =====================================================
          FIXED BACKGROUND
      ====================================================== */}

      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt=""
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            scale-[1.08]
          "
        />

        <div
          className="
            absolute
            inset-0

            bg-black/65
          "
        />
      </div>

      {/* =====================================================
          CENTER TITLE
          
          ALSO FIXED
      ====================================================== */}

      <div
        className="
          absolute
          z-10

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-full

          text-center

          pointer-events-none

          px-5
        "
      >
        <div
          className="
            mb-5

            text-white

            font-semibold

            text-[14px]
            sm:text-[16px]
          "
        >
          (PROCESS)
        </div>

        <h2
          className="
            m-0

            text-white

            font-black
            uppercase

            tracking-[-0.06em]
            leading-[0.82]

            whitespace-nowrap

            text-[clamp(55px,9vw,150px)]
          "
        >
          HOW DO WE WORK
        </h2>
      </div>

      {/* =====================================================
    MOVING CARDS
====================================================== */}

      <div
        ref={cardsTrackRef}
        className="
    absolute
    z-20
    top-0
    left-0
    w-full

    will-change-transform

    pointer-events-none
  "
      >
        <div
          className="
      relative

      w-full

      h-[2800px]

      max-sm:h-[2300px]
    "
        >
          {cards.map((card, index) => (
            <ProcessCard key={card.number} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CARD
============================================================ */

function ProcessCard({ card, index }) {
  /*
   * -------------------------------------------------------
   * STAGGERED POSITIONS
   *
   * These are intentionally NOT a normal grid.
   *
   * 01 -> left / top
   * 02 -> right / lower
   * 03 -> left / middle
   * 04 -> right / lower
   * 05 -> left / lower
   * -------------------------------------------------------
   */

  const positions = [
    {
      left: "8%",
      top: "0px",
    },

    {
      right: "13%",
      top: "500px",
    },

    {
      left: "16%",
      top: "910px",
    },

    {
      right: "3%",
      top: "1520px",
    },

    {
      left: "8%",
      top: "1740px",
    },
  ];

  const position = positions[index];

  return (
    <article
      className="
        absolute

        w-[480px]
        h-[575px]

        lg:w-[460px]
        lg:h-[560px]

        md:w-[400px]
        md:h-[510px]

        sm:w-[330px]
        sm:h-[450px]

        max-sm:w-[82vw]
        max-sm:h-[500px]

        overflow-hidden

        bg-black

        text-white
      "
      style={{
        left: position.left,
        right: position.right,
        top: position.top,
      }}
    >
      {/* =================================================
          IMAGE
      ================================================== */}

      <img
        src={card.image}
        alt={card.title}
        className="
          absolute
          inset-0

          w-full
          h-full

          object-cover
        "
      />

      {/* =================================================
          DARK OVERLAY
      ================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-black/45
        "
      />

      {/* =================================================
          CARD CONTENT
      ================================================== */}

      <div
        className="
          relative
          z-10

          flex
          flex-col
          justify-between

          w-full
          h-full

          p-[28px]

          lg:p-[27px]

          md:p-[25px]

          sm:p-[22px]

          max-sm:p-[24px]
        "
      >
        {/* NUMBER */}

        <div
          className="
            font-bold

            leading-none

            tracking-[-0.05em]

            text-[62px]

            lg:text-[58px]

            md:text-[52px]

            sm:text-[46px]

            max-sm:text-[48px]
          "
        >
          {card.number}
        </div>

        {/* BOTTOM CONTENT */}

        <div>
          {/* TITLE */}

          <h3
            className="
              m-0

              max-w-[95%]

              font-bold
              uppercase

              tracking-[-0.04em]

              leading-[1.02]

              text-[36px]

              lg:text-[34px]

              md:text-[30px]

              sm:text-[27px]

              max-sm:text-[28px]
            "
          >
            {card.title}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              mt-[90px]

              max-w-[95%]

              font-medium

              uppercase

              leading-[1.35]

              text-white/65

              text-[16px]

              lg:text-[15px]

              md:text-[14px]

              sm:text-[13px]

              max-sm:mt-[55px]
              max-sm:text-[13px]
            "
          >
            {card.description}
          </p>
        </div>
      </div>
    </article>
  );
}

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import brand1 from "../../../public/brand-1.mp4";
import brand2 from "../../../public/brand-2.mp4";
import brand from "../../../public/brand-3.mp4";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   CARD DATA
========================================================= */

const cards = [
  {
    video: brand2,
    number: "85",
    suffix: "(+Projects)",
    text: "Spaces transformed worldwide.",
  },

  {
    video: brand1,
    number: "3",
    suffix: "(Cont.)",
    text: "Design without borders—bringing thoughtful interiors.",
  },

  {
    video: brand,
    number: "10",
    suffix: "(+yrs.)",
    text: "Crafting comfort with confidence",
  },

  {
    video: brand1,
    number: "100",
    suffix: "(+ Brands)",
    text: "Trusted by the best brands across three continents.",
  },

  {
    video: brand2,
    number: "50",
    suffix: "(+ Repeat)",
    text: "Because one project is never enough.",
  },
];

/* =========================================================
   PLUS ICON
========================================================= */

function Plus({ className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`
        absolute
        font-[font2]
        text-[27px]
        font-light
        leading-none
        text-white
        ${className}
      `}
    >
      +
    </span>
  );
}

/* =========================================================
   PAUSE BUTTON
========================================================= */

function PauseButton() {
  return (
    <div
      className="
        flex
        h-[30px]
        w-[30px]
        items-center
        justify-center
        border
        border-white/30
        bg-black/20
      "
    >
      <div className="flex gap-[3px]">
        <span className="h-[9px] w-[2px] bg-white" />
        <span className="h-[9px] w-[2px] bg-white" />
      </div>
    </div>
  );
}

/* =========================================================
   CARD
========================================================= */

function Card({ card, cardRef, mobile = false }) {
  return (
    <div
      ref={cardRef}
      className={`
        brand-card
        overflow-hidden
        bg-black
        select-none

        ${
          mobile
            ? `
              relative
              left-auto
              top-auto
              mx-auto
              w-full
              max-w-[360px]
              translate-x-0
              translate-y-0
            `
            : `
              absolute
              left-1/2
              top-[10vh]
              z-20
              -translate-x-1/2
              -translate-y-1/2
              transform-gpu
              will-change-transform
            `
        }
      `}
    >
      {/* ===================================================
          VIDEO
      =================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* ===================================================
          DARK OVERLAY
      =================================================== */}

      <div className="absolute inset-0 bg-black/10" />

      {/* ===================================================
          TOP LEFT PLUS
      =================================================== */}

      <Plus
        className="
          left-[20px]
          top-[22px]

          sm:left-[26px]
          sm:top-[28px]

          lg:left-[38px]
          lg:top-[40px]
        "
      />

      {/* ===================================================
          TOP RIGHT PLUS
      =================================================== */}

      <Plus
        className="
          right-[20px]
          top-[22px]

          sm:right-[26px]
          sm:top-[28px]

          lg:right-[38px]
          lg:top-[40px]
        "
      />

      {/* ===================================================
          CENTER CONTENT
      =================================================== */}

      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          items-center
          justify-center
          px-6
          text-center

          sm:px-8

          lg:px-[35px]
        "
      >
        {/* NUMBER */}

        <div className="flex items-baseline">
          <span
            className="
              font-[font2]
              text-[clamp(40px,9vw,60px)]
              font-medium
              leading-none
              tracking-[-0.07em]
            "
          >
            {card.number}
          </span>

          <span
            className="
              ml-[3px]
              font-[font2]
              text-[clamp(18px,4vw,29px)]
              font-medium
              leading-none
              tracking-[-0.05em]
            "
          >
            {card.suffix}
          </span>
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            mt-6
            max-w-[280px]
            font-[font2]
            text-[clamp(16px,4vw,24px)]
            font-medium
            leading-[1.2]
            tracking-[-0.04em]

            sm:mt-7
          "
        >
          {card.text}
        </p>
      </div>

      {/* ===================================================
          BOTTOM LEFT PLUS
      =================================================== */}

      <Plus
        className="
          bottom-[22px]
          left-[20px]

          sm:bottom-[28px]
          sm:left-[26px]

          lg:bottom-[39px]
          lg:left-[38px]
        "
      />

      {/* ===================================================
          PAUSE BUTTON
      =================================================== */}

      <div
        className="
          absolute
          bottom-[22px]
          right-[20px]

          sm:bottom-[28px]
          sm:right-[26px]

          lg:bottom-[39px]
          lg:right-[38px]
        "
      >
        <PauseButton />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

export default function BrandSection() {
  const sectionRef = useRef(null);

  /* Desktop refs */
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP ONLY
         GSAP CARD ANIMATION
      ===================================================== */

      mm.add("(min-width: 1025px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        /* ---------------------------------------------------
           INITIAL STACK
        --------------------------------------------------- */

        gsap.set(cardEls, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1.18,
          opacity: 1,
          force3D: true,
          transformOrigin: "center center",
        });

        /* ---------------------------------------------------
           Z INDEX
        --------------------------------------------------- */

        gsap.set(card1.current, {
          zIndex: 20,
        });

        gsap.set(card2.current, {
          zIndex: 30,
        });

        gsap.set(card3.current, {
          zIndex: 50,
        });

        gsap.set(card4.current, {
          zIndex: 30,
        });

        gsap.set(card5.current, {
          zIndex: 20,
        });

        /* ---------------------------------------------------
           DESKTOP TIMELINE
        --------------------------------------------------- */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        /* ===================================================
           PHASE 1
           ALL CARDS MOVE DOWN
        =================================================== */

        tl.to(
          cardEls,
          {
            y: "70vh",
            scale: 1,
            duration: 2.2,
            ease: "power2.inOut",
          },
          0
        );

        /* ===================================================
           INNER LEFT
        =================================================== */

        tl.to(
          card2.current,
          {
            x: "-20vw",
            y: "80vh",
            rotation: -14,
            scale: 1,
            duration: 2.2,
            ease: "power3.inOut",
          },
          1.5
        );

        /* ===================================================
           INNER RIGHT
        =================================================== */

        tl.to(
          card4.current,
          {
            x: "20vw",
            y: "80vh",
            rotation: 14,
            scale: 1,
            duration: 2.2,
            ease: "power3.inOut",
          },
          1.5
        );

        /* ===================================================
           CENTER
        =================================================== */

        tl.to(
          card3.current,
          {
            x: 0,
            y: "70vh",
            rotation: 0,
            scale: 1,
            duration: 2.2,
            ease: "power3.inOut",
          },
          1.5
        );

        /* ===================================================
           OUTER LEFT
        =================================================== */

        tl.to(
          card1.current,
          {
            x: "-40vw",
            y: "100vh",
            rotation: -27,
            scale: 1,
            duration: 2.5,
            ease: "power3.inOut",
          },
          2
        );

        /* ===================================================
           OUTER RIGHT
        =================================================== */

        tl.to(
          card5.current,
          {
            x: "40vw",
            y: "100vh",
            rotation: 27,
            scale: 1,
            duration: 2.5,
            ease: "power3.inOut",
          },
          2
        );

        /* ===================================================
           FINAL ARC REFINEMENT
        =================================================== */

        tl.to(
          card1.current,
          {
            x: "-40vw",
            y: "100vh",
            rotation: -32,
            duration: 1.8,
            ease: "power2.inOut",
          },
          4.2
        );

        tl.to(
          card5.current,
          {
            x: "40vw",
            y: "100vh",
            rotation: 32,
            duration: 1.8,
            ease: "power2.inOut",
          },
          4.2
        );

        /* ===================================================
           FINAL HOLD
        =================================================== */

        tl.to(
          {},
          {
            duration: 3,
          },
          5.5
        );

        /* ===================================================
           SCROLL TRIGGER
        =================================================== */

        const trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
          animation: tl,
          invalidateOnRefresh: true,
          anticipatePin: 0,
          fastScrollEnd: false,
          preventOverlaps: true,
        });

        return () => {
          trigger.kill();
          tl.kill();
        };
      });

      /* =====================================================
         TABLET
         NO CARD GSAP
      ===================================================== */

      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        gsap.set(cardEls, {
          clearProps: "all",
        });

        return () => {
          gsap.set(cardEls, {
            clearProps: "all",
          });
        };
      });

      /* =====================================================
         MOBILE
         NO CARD GSAP
      ===================================================== */

      mm.add("(max-width: 768px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        gsap.set(cardEls, {
          clearProps: "all",
        });

        return () => {
          gsap.set(cardEls, {
            clearProps: "all",
          });
        };
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-[#0d0d0d]
        text-white

        min-h-screen

        lg:min-h-[180vh]
      "
    >
      {/* =====================================================
          DESKTOP LEFT CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          left-[7.5vw]
          top-[15vh]
          z-40
          hidden
          w-[360px]
          lg:block
        "
      >
        <p
          className="
            mb-[30px]
            font-[font2]
            text-[18px]
            font-semibold
            leading-none
          "
        >
          (BRANDS)
        </p>

        <h2
          className="
            font-[font2]
            text-[clamp(40px,3.2vw,61px)]
            font-black
            leading-[1.04]
            tracking-[-0.065em]
          "
        >
          From First-Time
          <br />
          Homeowners to
          <br />
          Global Brands —
          <br />
          The People and
          <br />
          Partners Who
          <br />
          Trust Us With
          <br />
          Their Spaces.
        </h2>
      </div>

      {/* =====================================================
          DESKTOP RIGHT CONTENT
      ===================================================== */}

      <div
        className="
          absolute
          right-[7.5vw]
          top-[15vh]
          z-40
          hidden
          w-[370px]
          lg:block
        "
      >
        <h3
          className="
            font-[font2]
            text-[clamp(28px,2.2vw,42px)]
            font-medium
            leading-[1.15]
            tracking-[-0.06em]
          "
        >
          We don’t decorate. We
          <br />
          translate.
        </h3>

        <p
          className="
            mt-[28px]
            font-[font2]
            text-[20px]
            leading-[1.4]
            tracking-[-0.03em]
            text-white/40
          "
        >
          Every home has a rhythm. We listen before we sketch.
        </p>

        <p
          className="
            mt-[27px]
            font-[font2]
            text-[20px]
            leading-[1.4]
            tracking-[-0.03em]
            text-white/40
          "
        >
          Our studio blends raw materiality with quiet luxury—
          creating interiors that age like good wood, not fast
          fashion.
        </p>
      </div>

      {/* =====================================================
          MOBILE / TABLET CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          w-full
          px-5
          pt-8

          sm:px-8
          sm:pt-10

          md:px-10
          md:pt-12

          lg:hidden
        "
      >
        <p
          className="
            font-[font2]
            text-[12px]
            font-semibold
            leading-none
          "
        >
          (BRANDS)
        </p>

        <h2
          className="
            mt-4
            max-w-[500px]
            font-[font2]
            text-[clamp(30px,7vw,56px)]
            font-black
            leading-[0.98]
            tracking-[-0.06em]
          "
        >
          From First-Time
          <br />
          Homeowners to
          <br />
          Global Brands —
          <br />
          The People and
          <br />
          Partners Who
          <br />
          Trust Us With
          <br />
          Their Spaces.
        </h2>
      </div>

      {/* =====================================================
          DESKTOP CARDS
      ===================================================== */}

      <div className="hidden lg:block">
        <Card card={cards[0]} cardRef={card1} />
        <Card card={cards[1]} cardRef={card2} />
        <Card card={cards[2]} cardRef={card3} />
        <Card card={cards[3]} cardRef={card4} />
        <Card card={cards[4]} cardRef={card5} />
      </div>

      {/* =====================================================
          TABLET / MOBILE CARDS
          NORMAL VERTICAL FLOW
      ===================================================== */}

      <div
        className="
          relative
          z-20
          mt-12
          flex
          w-full
          flex-col
          gap-5
          px-5

          sm:mt-14
          sm:px-8
          sm:gap-6

          md:mt-16
          md:px-10

          lg:hidden
        "
      >
        <Card card={cards[0]} mobile />
        <Card card={cards[1]} mobile />
        <Card card={cards[2]} mobile />
        <Card card={cards[3]} mobile />
        <Card card={cards[4]} mobile />
      </div>

      {/* =====================================================
          MOBILE / TABLET BOTTOM CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-40
          mt-12
          px-5
          pb-14

          sm:mt-14
          sm:px-8
          sm:pb-16

          md:px-10
          md:pb-20

          lg:hidden
        "
      >
        <p
          className="
            max-w-[500px]
            font-[font2]
            text-[15px]
            leading-[1.35]
            text-white/45

            sm:text-[17px]

            md:text-[18px]
          "
        >
          We don’t decorate. We translate.
        </p>
      </div>

      {/* =====================================================
          CARD RESPONSIVENESS
      ===================================================== */}

      <style>{`
        /* ===================================================
           DESKTOP
        =================================================== */

        .brand-card {
          width: clamp(
            280px,
            18.5vw,
            350px
          );

          aspect-ratio: 0.72;

          height: auto;

          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;

          perspective: 1000px;
        }

        /* ===================================================
           TABLET
        =================================================== */

        @media (min-width: 769px) and (max-width: 1024px) {
          .brand-card {
            width: min(360px, 70vw);
            aspect-ratio: 0.72;
          }
        }

        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 768px) {
          .brand-card {
            width: min(360px, 88vw);
            aspect-ratio: 0.72;
            height: auto;

            position: relative;
            left: auto;
            top: auto;

            transform: none !important;

            opacity: 1 !important;
          }
        }

        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 480px) {
          .brand-card {
            width: min(340px, 88vw);
          }
        }

        /* ===================================================
           VERY SMALL DEVICES
        =================================================== */

        @media (max-width: 360px) {
          .brand-card {
            width: 90vw;
          }
        }

        /* ===================================================
           REDUCED MOTION
        =================================================== */

        @media (prefers-reduced-motion: reduce) {
          .brand-card {
            will-change: auto;
          }
        }
      `}</style>
    </section>
  );
}
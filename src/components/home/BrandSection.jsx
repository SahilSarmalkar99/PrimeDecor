import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   CARD DATA
========================================================= */

const cards = [
  {
    video: "/brand-1.mp4",
    number: "85",
    suffix: "(+Projects)",
    text: "Spaces transformed worldwide.",
  },

  {
    video: "/brand-2.mp4",
    number: "3",
    suffix: "(Cont.)",
    text: "Design without borders—bringing thoughtful interiors.",
  },

  {
    video: "/brand-3.mp4",
    number: "10",
    suffix: "(+yrs.)",
    text: "Crafting comfort with confidence",
  },

  {
    video: "/brand-4.mp4",
    number: "100",
    suffix: "(+ Brands)",
    text: "Trusted by the best brands across three continents.",
  },

  {
    video: "/brand-5.mp4",
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

function Card({ card, cardRef }) {
  return (
    <div
      ref={cardRef}

      className="
        brand-card

        absolute

        left-1/2
        top-[50vh]

        z-20

        -translate-x-1/2
        -translate-y-1/2

        overflow-hidden

        bg-black

        will-change-transform

        transform-gpu

        select-none
      "
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
        <source
          src={card.video}
          type="video/mp4"
        />
      </video>


      {/* ===================================================
          DARK OVERLAY
      =================================================== */}

      <div
        className="
          absolute
          inset-0

          bg-black/10
        "
      />


      {/* ===================================================
          TOP LEFT PLUS
      =================================================== */}

      <Plus
        className="
          left-[38px]
          top-[40px]
        "
      />


      {/* ===================================================
          TOP RIGHT PLUS
      =================================================== */}

      <Plus
        className="
          right-[38px]
          top-[40px]
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

          px-[35px]

          text-center
        "
      >

        {/* NUMBER */}

        <div
          className="
            flex
            items-baseline
          "
        >

          <span
            className="
              font-[font2]

              text-[clamp(42px,3.2vw,60px)]

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

              text-[clamp(20px,1.5vw,29px)]

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
            mt-[28px]

            max-w-[280px]

            font-[font2]

            text-[clamp(17px,1.35vw,24px)]

            font-medium

            leading-[1.2]

            tracking-[-0.04em]
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
          bottom-[39px]
          left-[38px]
        "
      />


      {/* ===================================================
          PAUSE BUTTON
      =================================================== */}

      <div
        className="
          absolute
          bottom-[39px]
          right-[38px]
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

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);


  /* =======================================================
     GSAP
  ======================================================= */

  useLayoutEffect(() => {

    const section = sectionRef.current;

    if (!section) {
      return;
    }


    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia();


      /* =====================================================
         DESKTOP / TABLET
      ===================================================== */

      mm.add("(min-width: 769px)", () => {

        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];


        /* ===================================================
           INITIAL STACK

           All cards are exactly together.
           
           Card 3 is the visible/front card.
        =================================================== */

        gsap.set(cardEls, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1.18,
          opacity: 1,

          force3D: true,

          transformOrigin:
            "center center",
        });


        /* ===================================================
           Z INDEX
        =================================================== */

        gsap.set(card1.current, {
          zIndex: 20,
        });

        gsap.set(card2.current, {
          zIndex: 30,
        });

        gsap.set(card3.current, {
          zIndex: 50,
          scale: 1.18,
        });

        gsap.set(card4.current, {
          zIndex: 30,
        });

        gsap.set(card5.current, {
          zIndex: 20,
        });


        /* ===================================================
           MASTER TIMELINE

           BIG INITIAL CARD
           -> MOVE DOWN TO 50VH + SHRINK
           -> SLOW SEPARATION
           -> WIDE SEMICIRCLE
        =================================================== */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        /* ALL CARDS MOVE DOWN TOGETHER + SHRINK */
        tl.to(
          cardEls,
          {
            y: "50vh",
            scale: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0
        );

        /* INNER LEFT */
        tl.to(
          card2.current,
          {
            x: "-20vw",
            y: "50vh",
            rotation: -14,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          1.5
        );

        /* INNER RIGHT */
        tl.to(
          card4.current,
          {
            x: "20vw",
            y: "50vh",
            rotation: 14,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          3
        );

        /* CENTER */
        tl.to(
          card3.current,
          {
            x: 0,
            y: "50vh",
            rotation: 0,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          3
        );

        /* OUTER LEFT */
        tl.to(
          card1.current,
          {
            x: "-36vw",
            y: "54vh",
            rotation: -27,
            scale: 1,
            duration: 2,
            ease: "power3.out",
          },
          2
        );

        /* OUTER RIGHT */
        tl.to(
          card5.current,
          {
            x: "36vw",
            y: "54vh",
            rotation: 27,
            scale: 1,
            duration: 2,
            ease: "power3.out",
          },
          3.6
        );

        /* FINAL ARC */
        tl.to(
          card1.current,
          {
            x: "-41vw",
            y: "56vh",
            rotation: -32,
            duration: 1,
            ease: "power2.out",
          },
          4
        );

        tl.to(
          card5.current,
          {
            x: "41vw",
            y: "56vh",
            rotation: 32,
            duration: 1,
            ease: "power2.out",
          },
          4
        );

        /* Hold the completed arc for the second half of the scroll. */
        tl.to({}, { duration: 5 }, 5);


        /* ===================================================
           SCROLLTRIGGER
           
           NO PIN.
           
           The section's own height creates the scroll.
        =================================================== */

        const trigger =
          ScrollTrigger.create({

            trigger: section,

            start: "top top",

            end: "bottom bottom",

            scrub: 1,

            animation: tl,

            invalidateOnRefresh: true,

          });


        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });


        return () => {

          trigger.kill();

          tl.kill();

        };

      });


      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 768px)", () => {

        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];


        /* ===================================================
           INITIAL
        =================================================== */

        gsap.set(cardEls, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0.94,
          opacity: 1,

          force3D: true,

          transformOrigin:
            "center center",
        });


        /* ===================================================
           Z INDEX
        =================================================== */

        gsap.set(card1.current, {
          zIndex: 20,
        });

        gsap.set(card2.current, {
          zIndex: 30,
        });

        gsap.set(card3.current, {
          zIndex: 50,
          scale: 0.98,
        });

        gsap.set(card4.current, {
          zIndex: 30,
        });

        gsap.set(card5.current, {
          zIndex: 20,
        });


        /* ===================================================
           MOBILE TIMELINE

           BIG INITIAL CARD
           -> MOVE DOWN + SHRINK
           -> SLOW SEMICIRCLE
        =================================================== */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        /* MOVE DOWN + SHRINK */
        tl.to(
          cardEls,
          {
            y: "30vh",
            scale: 0.76,
            duration: 1.5,
            ease: "power2.inOut",
          },
          0
        );

        /* INNER LEFT */
        tl.to(
          card2.current,
          {
            x: "-30vw",
            y: "30vh",
            rotation: -12,
            scale: 0.76,
            duration: 1.5,
            ease: "power3.out",
          },
          1.5
        );

        /* INNER RIGHT */
        tl.to(
          card4.current,
          {
            x: "30vw",
            y: "30vh",
            rotation: 12,
            scale: 0.76,
            duration: 1.5,
            ease: "power3.out",
          },
          1.5
        );

        /* CENTER */
        tl.to(
          card3.current,
          {
            x: 0,
            y: "30vh",
            rotation: 0,
            scale: 0.86,
            duration: 1.5,
            ease: "power3.out",
          },
          3
        );

        /* OUTER LEFT */
        tl.to(
          card1.current,
          {
            x: "-60vw",
            y: "34vh",
            rotation: -23,
            scale: 0.68,
            duration: 2,
            ease: "power3.out",
          },
          2
        );

        /* OUTER RIGHT */
        tl.to(
          card5.current,
          {
            x: "60vw",
            y: "34vh",
            rotation: 23,
            scale: 0.68,
            duration: 2,
            ease: "power3.out",
          },
          2
        );

        /* FINAL ARC */
        tl.to(
          card1.current,
          {
            x: "-67vw",
            y: "36vh",
            rotation: -28,
            duration: 1,
            ease: "power2.out",
          },
          4
        );

        tl.to(
          card5.current,
          {
            x: "67vw",
            y: "36vh",
            rotation: 28,
            duration: 1,
            ease: "power2.out",
          },
          4
        );


        /* Hold the completed arc for the second half of the scroll. */
        tl.to({}, { duration: 5 }, 5);


        /* ===================================================
           SCROLLTRIGGER

           NO PIN HERE EITHER.
        =================================================== */

        const trigger =
          ScrollTrigger.create({

            trigger: section,

            start: "top top",

            end: "bottom bottom",

            scrub: 1,

            animation: tl,

            invalidateOnRefresh: true,

          });


        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });


        return () => {

          trigger.kill();

          tl.kill();

        };

      });


      return () => {
        mm.revert();
      };

    }, section);


    return () => {
      ctx.revert();
    };

  }, []);


  /* =========================================================
     JSX
  ========================================================= */

  return (
    <section
      ref={sectionRef}

      className="
        relative

        h-[150vh]



        w-full

        overflow-hidden

        bg-[#0d0d0d]

        text-white
      "
    >

      {/* =====================================================
          LEFT CONTENT
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
          RIGHT CONTENT
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
          Every home has a rhythm. We listen
          before we sketch.
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
          Our studio blends raw materiality with
          quiet luxury—creating interiors that age
          like good wood, not fast fashion.
        </p>

      </div>


      {/* =====================================================
          MOBILE TOP CONTENT
      ===================================================== */}

      <div
        className="
          absolute

          left-0
          top-0

          z-40

          w-full

          px-5
          pt-7

          lg:hidden
        "
      >

        <p
          className="
            font-[font2]

            text-[12px]

            font-semibold
          "
        >
          (BRANDS)
        </p>


        <h2
          className="
            mt-4

            max-w-[310px]

            font-[font2]

            text-[clamp(28px,8vw,42px)]

            font-black

            leading-[0.98]

            tracking-[-0.06em]
          "
        >
          From First-Time
          Homeowners to
          Global Brands —
        </h2>

      </div>


      {/* =====================================================
          CARDS
      ===================================================== */}

      <Card
        card={cards[0]}
        cardRef={card1}
      />

      <Card
        card={cards[1]}
        cardRef={card2}
      />

      <Card
        card={cards[2]}
        cardRef={card3}
      />

      <Card
        card={cards[3]}
        cardRef={card4}
      />

      <Card
        card={cards[4]}
        cardRef={card5}
      />


      {/* =====================================================
          MOBILE BOTTOM TEXT
      ===================================================== */}

      <div
        className="
          absolute

          left-5
          right-5

          top-[95vh]

          z-40

          lg:hidden
        "
      >

        <p
          className="
            font-[font2]

            text-[15px]

            leading-[1.35]

            text-white/45
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

          width:
            clamp(
              280px,
              18.5vw,
              350px
            );

          aspect-ratio:
            0.72;

          height: auto;

          backface-visibility:
            hidden;

          -webkit-backface-visibility:
            hidden;

          perspective:
            1000px;
        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1024px) {

          .brand-card {

            width:
              min(
                340px,
                36vw
              );
          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 768px) {

          .brand-card {

            width:
              min(
                300px,
                72vw
              );

            aspect-ratio:
              0.72;
          }

        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 480px) {

          .brand-card {

            width:
              min(
                285px,
                72vw
              );
          }

        }

      `}</style>

    </section>
  );
}
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

function Card({ card, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="
        brand-card
        absolute
        left-1/2
        top-[10vh]
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
          left: clamp(20px, 7vw, 38px)
          top: clamp(22px, 7vw, 40px)
        "
      />

      {/* ===================================================
          TOP RIGHT PLUS
      =================================================== */}

      <Plus
        className="
          right: clamp(20px, 7vw, 38px)
          top: clamp(22px, 7vw, 40px)
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

        <div className="flex items-baseline">
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
          bottom: clamp(22px, 7vw, 39px)
          left: clamp(20px, 7vw, 38px)
        "
      />

      {/* ===================================================
          PAUSE BUTTON
      =================================================== */}

      <div
        className="
          absolute
          bottom: clamp(22px, 7vw, 39px)
          right: clamp(20px, 7vw, 38px)
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

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 1025px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        /* ===================================================
           INITIAL STACK

           KEEPING YOUR ORIGINAL VALUES
        =================================================== */

        gsap.set(cardEls, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1.18,
          opacity: 1,

          force3D: true,

          transformOrigin: "center center",
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
        });

        gsap.set(card4.current, {
          zIndex: 30,
        });

        gsap.set(card5.current, {
          zIndex: 20,
        });

        /* ===================================================
           DESKTOP TIMELINE

           IMPORTANT:

           Horizontal distances are NOT changed.

           INNER:
             -20vw
             +20vw

           OUTER:
             -41vw
             +41vw

           Only the Y positions are corrected so the
           cards form a symmetrical arc.
        =================================================== */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        /* ===================================================
           PHASE 1
           ALL CARDS MOVE DOWN TOGETHER
        =================================================== */

        tl.to(
          cardEls,
          {
            y: "70vh",
            scale: 1,

            duration: 2.2,

            ease: "power2.inOut",
          },
          0,
        );

        /* ===================================================
           PHASE 2
           INNER LEFT
        =================================================== */

        tl.to(
          card2.current,
          {
            x: "-20vw",

            /*
              Inner card is slightly lower than center.
              This creates the upper part of the arc.
            */
            y: "80vh",

            rotation: -14,

            scale: 1,

            duration: 2.2,

            ease: "power3.inOut",
          },
          1.5,
        );

        /* ===================================================
           PHASE 2
           INNER RIGHT
        =================================================== */

        tl.to(
          card4.current,
          {
            x: "20vw",

            /*
              EXACT MIRROR OF CARD 2
            */
            y: "80vh",

            rotation: 14,

            scale: 1,

            duration: 2.2,

            ease: "power3.inOut",
          },
          1.5,
        );

        /* ===================================================
           PHASE 3
           CENTER CARD

           CENTER = TOP OF SEMICIRCLE
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
          1.5,
        );

        /* ===================================================
           PHASE 4
           OUTER LEFT
        =================================================== */

        tl.to(
          card1.current,
          {
            x: "-40vw",

            /*
              LOWEST POINT OF THE ARC
            */
            y: "100vh",

            rotation: -27,

            scale: 1,

            duration: 2.5,

            ease: "power3.inOut",
          },
          2,
        );

        /* ===================================================
           PHASE 4
           OUTER RIGHT

           IMPORTANT BUG FIX:

           Your previous code had:

             y: "56vh"

           here.

           That destroyed the symmetry.

           It is now exactly:

             y: "76vh"
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
          2,
        );

        /* ===================================================
   PHASE 5
   FINAL ARC REFINEMENT

   KEEPING YOUR CUSTOM POSITIONS:
   INNER  = 80vh
   OUTER  = 100vh
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
          4.2,
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
          4.2,
        );

        /* ===================================================
           FINAL HOLD

           Gives the user enough time to see the completed
           semicircle before the section finishes.
        =================================================== */

        tl.to(
          {},
          {
            duration: 3,
          },
          5.5,
        );

        /* ===================================================
           SCROLL TRIGGER

           scrub 1.5 = smoother than 1

           No pin added.
           No change to your overall scroll behavior.
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

        requestAnimationFrame(() => {
          ScrollTrigger.refresh();
        });

        return () => {
          trigger.kill();
          tl.kill();
        };
      });

      /* =====================================================
         TABLET

         RESPONSIVE BEHAVIOUR:
         Cards are shown ONE BY ONE on smaller screens.
         The desktop 80vh / 100vh arc is intentionally kept
         only for desktop.
      ===================================================== */

      mm.add("(min-width: 769px) and (max-width: 1024px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        /*
          One-card-at-a-time layout.

          Keep every card in the same center position.
          GSAP controls which card is visible.
        */

        gsap.set(cardEls, {
          x: 0,
          y: "50vh",
          rotation: 0,
          scale: 0.82,
          opacity: 0,
          force3D: true,
          transformOrigin: "center center",
        });

        gsap.set(card1.current, {
          opacity: 1,
          y: "50vh",
          zIndex: 50,
        });

        gsap.set(card2.current, { zIndex: 40 });
        gsap.set(card3.current, { zIndex: 30 });
        gsap.set(card4.current, { zIndex: 20 });
        gsap.set(card5.current, { zIndex: 10 });

        /*
          ONE-BY-ONE TIMELINE

          Each card gets its own scroll moment:
            Card 1
              ↓
            Card 2
              ↓
            Card 3
              ↓
            Card 4
              ↓
            Card 5

          No side-by-side cards on tablet.
        */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        const showNextCard = (current, next, position) => {
          tl.to(
            current,
            {
              y: "43vh",
              opacity: 0,
              scale: 0.78,
              duration: 0.7,
              ease: "power2.inOut",
            },
            position
          );

          tl.fromTo(
            next,
            {
              y: "57vh",
              opacity: 0,
              scale: 0.78,
              rotation: 0,
            },
            {
              y: "50vh",
              opacity: 1,
              scale: 0.82,
              rotation: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            position + 0.15
          );
        };

        /*
          Small hold before first transition.
        */

        tl.to({}, { duration: 0.8 });

        showNextCard(card1.current, card2.current, 0.8);
        tl.to({}, { duration: 0.65 });

        showNextCard(card2.current, card3.current, 2.3);
        tl.to({}, { duration: 0.65 });

        showNextCard(card3.current, card4.current, 3.8);
        tl.to({}, { duration: 0.65 });

        showNextCard(card4.current, card5.current, 5.3);

        /*
          Final hold.
        */

        tl.to({}, { duration: 1.2 });

        const trigger = ScrollTrigger.create({
          trigger: section,

          start: "top top",

          /*
            More scroll length so every card has enough
            breathing room.
          */

          end: "+=430%",

          scrub: 1.4,

          animation: tl,

          invalidateOnRefresh: true,

          fastScrollEnd: false,

          anticipatePin: 1,
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

         ONE CARD AT A TIME

         No semicircle on mobile.
         This keeps the section clean and usable on phones.
      ===================================================== */

      mm.add("(max-width: 768px)", () => {
        const cardEls = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        /*
          Responsive card position.

          Cards remain centered horizontally and are shown
          one at a time.
        */

        gsap.set(cardEls, {
          x: 0,
          y: "48vh",
          rotation: 0,
          scale: 0.84,
          opacity: 0,
          force3D: true,
          transformOrigin: "center center",
        });

        /*
          Only first card is visible initially.
        */

        gsap.set(card1.current, {
          opacity: 1,
          y: "48vh",
          scale: 0.84,
          zIndex: 50,
        });

        gsap.set(card2.current, { zIndex: 40 });
        gsap.set(card3.current, { zIndex: 30 });
        gsap.set(card4.current, { zIndex: 20 });
        gsap.set(card5.current, { zIndex: 10 });

        /*
          ONE-BY-ONE MOBILE TIMELINE

          The movement is deliberately vertical and subtle.
          No cards overlap each other.
        */

        const tl = gsap.timeline({
          defaults: {
            ease: "none",
          },
        });

        /*
          Initial hold.
        */

        tl.to({}, { duration: 0.9 });

        const showNextCard = (current, next, position) => {
          /*
            Current card leaves upward slightly.
          */

          tl.to(
            current,
            {
              y: "40vh",
              opacity: 0,
              scale: 0.78,
              duration: 0.65,
              ease: "power2.inOut",
            },
            position
          );

          /*
            Next card enters from below.
          */

          tl.fromTo(
            next,
            {
              y: "56vh",
              opacity: 0,
              scale: 0.78,
              rotation: 0,
            },
            {
              y: "48vh",
              opacity: 1,
              scale: 0.84,
              rotation: 0,
              duration: 0.7,
              ease: "power2.out",
            },
            position + 0.12
          );
        };

        /*
          Card 1 → Card 2
        */

        showNextCard(
          card1.current,
          card2.current,
          0.9
        );

        tl.to({}, { duration: 0.75 });

        /*
          Card 2 → Card 3
        */

        showNextCard(
          card2.current,
          card3.current,
          2.45
        );

        tl.to({}, { duration: 0.75 });

        /*
          Card 3 → Card 4
        */

        showNextCard(
          card3.current,
          card4.current,
          4
        );

        tl.to({}, { duration: 0.75 });

        /*
          Card 4 → Card 5
        */

        showNextCard(
          card4.current,
          card5.current,
          5.55
        );

        /*
          Keep final card visible for a while.
        */

        tl.to({}, { duration: 1.5 });

        const trigger = ScrollTrigger.create({
          trigger: section,

          start: "top top",

          /*
            Long enough for all five cards to be viewed
            individually.
          */

          end: "+=520%",

          scrub: 1.25,

          animation: tl,

          invalidateOnRefresh: true,

          fastScrollEnd: false,

          anticipatePin: 1,
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
    }, sectionRef);

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
    min-h-[180vh]
    w-full
    overflow-hidden
    bg-[#0d0d0d]
    text-white
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
          Our studio blends raw materiality with quiet luxury—creating interiors
          that age like good wood, not fast fashion.
        </p>
      </div>

      {/* =====================================================
          MOBILE / TABLET TOP CONTENT
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
          <br />
          Homeowners to
          <br />
          Global Brands —
        </h2>
      </div>

      {/* =====================================================
          CARDS
      ===================================================== */}

      <Card card={cards[0]} cardRef={card1} />

      <Card card={cards[1]} cardRef={card2} />

      <Card card={cards[2]} cardRef={card3} />

      <Card card={cards[3]} cardRef={card4} />

      <Card card={cards[4]} cardRef={card5} />

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
           LARGE DESKTOP
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
            width: min(
              360px,
              46vw
            );

            aspect-ratio: 0.72;
          }

          /*
            Keep tablet content clear of the centered card.
          */
        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 768px) {
          .brand-card {
            width: min(
              320px,
              78vw
            );

            aspect-ratio: 0.72;
          }
        }


        /* ===================================================
           SMALL MOBILE
        =================================================== */

        @media (max-width: 480px) {
          .brand-card {
            width: min(
              285px,
              72vw
            );

            aspect-ratio: 0.72;
          }
        }


        /* ===================================================
           VERY SMALL DEVICES
        =================================================== */

        @media (max-width: 360px) {
          .brand-card {
            width: 76vw;
          }
        }


        /* ===================================================
           REDUCE MOTION
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

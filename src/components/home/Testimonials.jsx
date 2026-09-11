import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import client4 from "../../assets/testimonials/client4.avif";

gsap.registerPlugin(ScrollTrigger);

/* =========================================================
   TESTIMONIAL DATA
========================================================= */

const testimonials = [
  {
    number: "01/04",
    category: "Lighting Design",
    background: "#ffffff",
    text: `“They didn’t just design our home. They taught us how to live in it. Every corner has a purpose now. We wake up every morning feeling like the house was built just for us — because it was.”`,
    name: "Jennifer Caldwell",
    role: "Homeowner, Austin, TX",
  },

  {
    number: "02/04",
    category: "Lighting Design",
    background: "#9b8db8",
    text: `“They didn’t just design our home. They taught us how to live in it. Every corner has a purpose now. We wake up every morning feeling like the house was built just for us — because it was.”`,
    name: "Jennifer Caldwell",
    role: "Homeowner, Austin, TX",
  },

  {
    number: "03/04",
    category: "Interior Design",
    background: "#d8cfc2",
    text: `“Every little detail was considered. The space feels effortless, but you can see the thought behind everything. It is exactly what we imagined and somehow even better.”`,
    name: "Sophia Williams",
    role: "Homeowner, Los Angeles, CA",
  },

  {
    number: "04/04",
    category: "Residential Design",
    background: null,
    text: `“They didn’t just design our home. They taught us how to live in it. Every corner has a purpose now. We wake up every morning feeling like the house was built just for us — because it was.”`,
    name: "Jennifer Caldwell",
    role: "Homeowner, Austin, TX",
    image: client4,
  },
];


/* =========================================================
   EXIT DIRECTIONS
   Each card leaves in a different direction.
========================================================= */

const exitDirections = [
  {
    x: -1.25,
    y: -1.05,
    rotation: -10,
  },

  {
    x: 1.25,
    y: -0.9,
    rotation: 9,
  },

  {
    x: -1.2,
    y: 1.15,
    rotation: -8,
  },
];


/* =========================================================
   STAR
========================================================= */

function StarIcon({ dark = true }) {
  return (
    <div
      className={`testimonial-star ${
        dark ? "text-[#1c1a18]" : "text-white"
      }`}
    >
      ✱
    </div>
  );
}


/* =========================================================
   DOTS
========================================================= */

function Dots({ dark = true }) {
  return (
    <div
      className={`flex items-center gap-[5px] ${
        dark ? "text-[#1c1a18]" : "text-white"
      }`}
    >
      <span className="block h-[6px] w-[6px] bg-current" />
      <span className="block h-[6px] w-[6px] bg-current" />
      <span className="block h-[6px] w-[6px] bg-current" />
      <span className="block h-[6px] w-[6px] bg-current" />
    </div>
  );
}


/* =========================================================
   TESTIMONIAL CARD
========================================================= */

function TestimonialCard({ testimonial, index }) {
  const isLast = index === testimonials.length - 1;

  return (
    <article
      className="testimonial-card absolute left-1/2 top-1/2 overflow-hidden"
      data-index={index}
      style={{
        backgroundColor: testimonial.background || "transparent",
      }}
    >

      {/* =================================================
          CARD 4 — IMAGE BACKGROUND
      ================================================= */}

      {isLast ? (
        <>
          <img
            src={testimonial.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            draggable="false"
          />

          {/* subtle image overlay */}
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 flex h-full flex-col justify-between p-[7%] text-white">

            {/* TOP */}
            <div className="flex items-start justify-between">
              <StarIcon dark={false} />
              <Dots dark={false} />
            </div>


            {/* BOTTOM */}
            <div>

              <p className="testimonial-text mb-7 max-w-[96%] font-medium">
                {testimonial.text}
              </p>

              <div>
                <h3 className="testimonial-name font-medium">
                  {testimonial.name}
                </h3>

                <p className="testimonial-role mt-1 text-white/70">
                  {testimonial.role}
                </p>
              </div>

            </div>

          </div>
        </>
      ) : (

        /* =================================================
           CARDS 1–3 — SOLID COLORS
        ================================================= */

        <div
          className="relative flex h-full flex-col p-[7%] text-[#1c1a18]"
          style={{
            backgroundColor: testimonial.background,
          }}
        >

          {/* TOP */}
          <div className="flex items-start justify-between">

            <StarIcon />

            <Dots />

          </div>


          {/* BOTTOM CONTENT */}
          <div className="mt-auto">

            <p className="testimonial-text font-medium">
              {testimonial.text}
            </p>


            {/* PERSON */}
            <div className="mt-8 flex items-center gap-4">

              {/* 
                Your first 3 cards currently don't have
                person images, so we don't render a broken
                <img src={null} />.
              */}

              <div>

                <h3 className="testimonial-name font-medium">
                  {testimonial.name}
                </h3>

                <p className="testimonial-role mt-1">
                  {testimonial.role}
                </p>

              </div>

            </div>

          </div>

        </div>
      )}

    </article>
  );
}


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Testimonials() {

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const cardsRef = useRef(null);


  useLayoutEffect(() => {

    const section = sectionRef.current;
    const pin = pinRef.current;
    const cardsContainer = cardsRef.current;

    if (!section || !pin || !cardsContainer) {
      return;
    }


    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(".testimonial-card");

      const counter = section.querySelector(
        ".testimonial-counter"
      );

      const category = section.querySelector(
        ".testimonial-category"
      );


      if (!cards.length) {
        return;
      }


      /* =====================================================
         RESPONSIVE VALUES
      ===================================================== */

      const getValues = () => {

        const width = window.innerWidth;

        /* MOBILE */
        if (width < 640) {

          return {
            stackOffset: 11,

            scaleStep: 0.025,

            exitX: width * 1.15,

            exitY: window.innerHeight * 0.95,

            scrollLength: window.innerHeight * 4.2,

            scrub: 0.8,
          };
        }


        /* TABLET */
        if (width < 1024) {

          return {
            stackOffset: 14,

            scaleStep: 0.03,

            exitX: width * 1.15,

            exitY: window.innerHeight * 0.9,

            scrollLength: window.innerHeight * 4.5,

            scrub: 0.9,
          };
        }


        /* DESKTOP */
        return {

          stackOffset: 17,

          scaleStep: 0.035,

          exitX: width * 1.25,

          exitY: window.innerHeight * 0.95,

          scrollLength: window.innerHeight * 4.8,

          scrub: 1,
        };
      };


      /* =====================================================
         INITIAL CARD POSITION
      ===================================================== */

      const values = getValues();


      /*
        All cards start at the exact center.

        Card 1:
          scale 1
          y 0
          z-index highest

        Card 2:
          scale slightly smaller
          y slightly lower

        Card 3:
          smaller again
          y lower

        Card 4:
          smallest
          y lower
      */

      cards.forEach((card, index) => {

        gsap.set(card, {

          xPercent: -50,

          yPercent: -50,

          x: 0,

          y: index * values.stackOffset,

          scale: 1 - index * values.scaleStep,

          rotation:
            index === 0
              ? 0
              : index % 2 === 0
                ? -1
                : 1,

          opacity: 1,

          zIndex: cards.length - index,

          transformOrigin: "center center",

          force3D: true,
        });

      });


      /* =====================================================
         MASTER TIMELINE
      ===================================================== */

      const tl = gsap.timeline({

        defaults: {
          ease: "none",
        },

        scrollTrigger: {

          trigger: pin,

          start: "top top",

          end: () => {

            const current = getValues();

            return `+=${current.scrollLength}`;
          },

          scrub: () => getValues().scrub,

          pin: true,

          pinSpacing: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,


          /* ================================================
             COUNTER UPDATE
          ================================================ */

          onUpdate: (self) => {

            const progress = self.progress;

            const transitions = testimonials.length - 1;


            const currentIndex = Math.min(

              testimonials.length - 1,

              Math.floor(
                progress * transitions + 0.0001
              )

            );


            if (counter) {

              counter.textContent =
                testimonials[currentIndex].number;
            }


            if (category) {

              category.textContent =
                testimonials[currentIndex].category;
            }

          },

        },

      });


      /* =====================================================
         CARD TRANSITIONS
      ===================================================== */

      cards.forEach((card, index) => {

        /*
          Card 1 does not have a previous card.
        */
        if (index === 0) {
          return;
        }


        const previousCard = cards[index - 1];

        const direction =
          exitDirections[index - 1];


        const currentValues = getValues();


        const start = index - 1;

        const duration = 1;


        /* ==================================================
           PREVIOUS CARD FLIES AWAY
        ================================================== */

        tl.to(

          previousCard,

          {

            x:
              direction.x *
              currentValues.exitX,

            y:
              direction.y *
              currentValues.exitY,

            rotation:
              direction.rotation,

            scale: 0.9,

            opacity: 1,

            duration,

            ease: "none",

          },

          start

        );


        /* ==================================================
           NEXT CARD COMES TO FRONT
        ================================================== */

        tl.to(

          card,

          {

            x: 0,

            y: 0,

            scale: 1,

            rotation: 0,

            opacity: 1,

            zIndex: cards.length + 10,

            duration,

            ease: "none",

          },

          start

        );


        /*
          The cards behind the newly active card
          should remain stacked.
        */

        cards.forEach((behindCard, behindIndex) => {

          if (
            behindIndex > index
          ) {

            const depth =
              behindIndex - index;

            tl.to(

              behindCard,

              {

                y:
                  depth *
                  currentValues.stackOffset,

                scale:
                  1 -
                  depth *
                  currentValues.scaleStep,

                opacity: 1,

                zIndex:
                  cards.length -
                  behindIndex,

                duration,

                ease: "none",

              },

              start

            );

          }

        });

      });


      /* =====================================================
         INITIAL COUNTER
      ===================================================== */

      if (counter) {
        counter.textContent =
          testimonials[0].number;
      }

      if (category) {
        category.textContent =
          testimonials[0].category;
      }


      /* =====================================================
         REFRESH
      ===================================================== */

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

    }, section);


    /* =======================================================
       CLEANUP
    ======================================================= */

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
      className="relative w-full overflow-hidden bg-[#f5f3ef]"
    >

      {/* =====================================================
          PINNED AREA

          IMPORTANT:
          This has a real height.
          Previously your section was being pinned at
          height: 0px because its children were absolute.
      ===================================================== */}

      <div
        ref={pinRef}
        className="
          relative
          h-screen
          min-h-[650px]
          w-full
          overflow-hidden
        "
      >


        {/* =================================================
            TOP HEADER
        ================================================= */}

        <div
          className="
            absolute
            left-0
            top-0
            z-30
            w-full
            px-5
            pt-5
            sm:px-7
            sm:pt-7
            md:px-10
            md:pt-9
            lg:px-12
            lg:pt-10
          "
        >

          {/* Eyebrow */}

          <div
            className="
              text-center
              font-[font2]
              text-[10px]
              tracking-[0.08em]
              text-[#817b70]
              sm:text-[11px]
              md:text-[12px]
            "
          >
            (TESTIMONIAL)
          </div>


          {/* Heading */}

          <h2
            className="
              mt-2
              text-center
              font-[font2]
              text-[18px]
              font-bold
              uppercase
              leading-none
              tracking-[-0.055em]
              text-[#1c1a18]
              sm:text-[24px]
              md:text-[30px]
              lg:text-[36px]
            "
          >
            WHAT OUR CLIENT SAYING
          </h2>

        </div>


        {/* =================================================
            CARD STACK
        ================================================= */}

        <div
          ref={cardsRef}
          className="
            absolute
            left-1/2
            top-1/2
            z-10
            h-0
            w-0
          "
        >

          {testimonials.map(
            (testimonial, index) => (

              <TestimonialCard
                key={testimonial.number}
                testimonial={testimonial}
                index={index}
              />

            )
          )}

        </div>


        {/* =================================================
            BOTTOM META
        ================================================= */}

        <div
          className="
            absolute
            bottom-0
            left-0
            z-30
            flex
            w-full
            items-end
            justify-between
            px-5
            pb-5
            sm:px-7
            sm:pb-7
            md:px-10
            md:pb-9
            lg:px-12
            lg:pb-10
          "
        >

          {/* COUNTER */}

          <div
            className="
              testimonial-counter
              font-[font2]
              text-[11px]
              font-semibold
              tracking-[-0.02em]
              text-[#817b70]
              sm:text-[12px]
              md:text-[13px]
            "
          >
            01/04
          </div>


          {/* CATEGORY */}

          <div
            className="
              testimonial-category
              text-right
              font-[font2]
              text-[11px]
              font-semibold
              tracking-[-0.02em]
              text-[#817b70]
              sm:text-[12px]
              md:text-[13px]
            "
          >
            Lighting Design
          </div>

        </div>

      </div>

    </section>
  );
}
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
    image: client4,
  },

  {
    number: "02/04",
    category: "Lighting Design",
    background: "#9b8db8",
    text: `“They didn’t just design our home. They taught us how to live in it. Every corner has a purpose now. We wake up every morning feeling like the house was built just for us — because it was.”`,
    name: "Jennifer Caldwell",
    role: "Homeowner, Austin, TX",
    image: client4,
  },

  {
    number: "03/04",
    category: "Interior Design",
    background: "#d8cfc2",
    text: `“Every little detail was considered. The space feels effortless, but you can see the thought behind everything. It is exactly what we imagined and somehow even better.”`,
    name: "Sophia Williams",
    role: "Homeowner, Los Angeles, CA",
    image: client4,
  },

  {
    number: "04/04",
    category: "Residential Design",
    background: "#ffffff",
    text: `“They didn’t just design our home. They taught us how to live in it. Every corner has a purpose now. We wake up every morning feeling like the house was built just for us — because it was.”`,
    name: "Jennifer Caldwell",
    role: "Homeowner, Austin, TX",
    image: client4,
  },
];


/* =========================================================
   EXIT DIRECTIONS
========================================================= */

const exitDirections = [
  {
    x: -1,
    y: -1,
    rotation: -10,
  },

  {
    x: 1,
    y: -1,
    rotation: 10,
  },

  {
    x: -1,
    y: 1,
    rotation: -9,
  },
];


/* =========================================================
   STAR
========================================================= */

function StarIcon() {
  return (
    <div
      aria-hidden="true"
      className="
        testimonial-star
        text-[#1c1a18]
      "
    >
      ✱
    </div>
  );
}


/* =========================================================
   DOTS
========================================================= */

function Dots() {
  return (
    <div
      aria-hidden="true"
      className="
        flex
        items-center
        gap-[5px]
        text-[#817b70]
      "
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

function TestimonialCard({
  testimonial,
  index,
}) {
  return (
    <article
      className="
        testimonial-card
        absolute
        left-1/2
        top-1/2

        overflow-hidden

        rounded-none

        will-change-transform

        select-none
      "

      data-index={index}

      style={{
        backgroundColor: testimonial.background,
      }}
    >

      {/* ===================================================
          INNER
      =================================================== */}

      <div
        className="
          relative

          flex
          h-full
          w-full

          flex-col
          justify-between

          text-[#1c1a18]
        "
      >

        {/* =================================================
            TOP
        ================================================= */}

        <div
          className="
            flex
            w-full
            items-start
            justify-between
          "
        >
          <StarIcon />

          <Dots />
        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="testimonial-bottom">

          {/* =================================================
              QUOTE
          ================================================= */}

          <p
            className="
              testimonial-text

              font-[font2]
              font-medium

              tracking-[-0.035em]
            "
          >
            {testimonial.text}
          </p>


          {/* =================================================
              PERSON
          ================================================= */}

          <div
            className="
              testimonial-person

              flex
              items-center
            "
          >

            {/* AVATAR */}

            <div
              className="
                testimonial-avatar

                relative
                shrink-0
                overflow-hidden

                bg-[#dedbd5]
              "
            >
              <img
                src={testimonial.image}
                alt=""
                draggable="false"

                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover
                "
              />
            </div>


            {/* NAME */}

            <div className="min-w-0">

              <h3
                className="
                  testimonial-name

                  font-[font2]
                  font-medium

                  leading-none
                  tracking-[-0.035em]
                "
              >
                {testimonial.name}
              </h3>


              <p
                className="
                  testimonial-role

                  mt-[6px]

                  font-[font2]
                  font-normal

                  leading-none

                  text-[#817b70]
                "
              >
                {testimonial.role}
              </p>

            </div>

          </div>

        </div>

      </div>

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


    /* =====================================================
       GSAP CONTEXT
    ===================================================== */

    const ctx = gsap.context(() => {

      const cards = gsap.utils.toArray(
        ".testimonial-card"
      );

      const counter =
        section.querySelector(
          ".testimonial-counter"
        );

      const category =
        section.querySelector(
          ".testimonial-category"
        );


      if (!cards.length) {
        return;
      }


      /* ===================================================
         RESPONSIVE VALUES
      =================================================== */

      const getValues = () => {

        const width = window.innerWidth;
        const height = window.innerHeight;


        /* -----------------------------------------------
           MOBILE
        ----------------------------------------------- */

        if (width < 640) {

          return {

            stackOffset: 8,

            scaleStep: 0.022,

            exitX: width * 1.25,

            exitY: height * 0.95,

            scrollLength:
              height * 4.5,

            scrub: 0.65,
          };
        }


        /* -----------------------------------------------
           TABLET
        ----------------------------------------------- */

        if (width < 1024) {

          return {

            stackOffset: 11,

            scaleStep: 0.025,

            exitX: width * 1.3,

            exitY: height * 0.95,

            scrollLength:
              height * 4.7,

            scrub: 0.75,
          };
        }


        /* -----------------------------------------------
           DESKTOP
        ----------------------------------------------- */

        return {

          stackOffset: 15,

          scaleStep: 0.03,

          exitX: width * 1.28,

          exitY: height * 0.95,

          scrollLength:
            height * 4.9,

          scrub: 0.85,
        };
      };


      /* ===================================================
         SET INITIAL STACK
      =================================================== */

      const setInitialStack = () => {

        const values = getValues();


        cards.forEach((card, index) => {

          gsap.set(card, {

            xPercent: -50,

            yPercent: -50,

            x: 0,

            y:
              index *
              values.stackOffset,

            scale:
              1 -
              index *
              values.scaleStep,

            rotation:
              index === 0
                ? 0
                : index % 2 === 0
                  ? -1
                  : 1,

            opacity: 1,

            zIndex:
              cards.length -
              index,

            transformOrigin:
              "center center",

            force3D: true,
          });
        });
      };


      setInitialStack();


      /* ===================================================
         MASTER TIMELINE
      =================================================== */

      const tl = gsap.timeline({
        defaults: {
          ease: "none",
        },

        scrollTrigger: {

          trigger: pin,

          start: "top top",

          end: () => {
            return `+=${getValues().scrollLength}`;
          },

          scrub: () => {
            return getValues().scrub;
          },

          pin: true,

          pinSpacing: true,

          anticipatePin: 1,

          invalidateOnRefresh: true,


          /* ===============================================
             COUNTER + CATEGORY
          =============================================== */

          onUpdate: (self) => {

            const progress =
              self.progress;


            const totalTransitions =
              testimonials.length - 1;


            /*
             * Convert scroll progress
             * into current card index.
             */

            const rawIndex =
              progress *
              totalTransitions;


            const activeIndex =
              Math.min(
                testimonials.length - 1,

                Math.max(
                  0,

                  Math.floor(
                    rawIndex + 0.00001
                  )
                )
              );


            if (counter) {

              counter.textContent =
                testimonials[
                  activeIndex
                ].number;
            }


            if (category) {

              category.textContent =
                testimonials[
                  activeIndex
                ].category;
            }
          },
        },
      });


      /* ===================================================
         CARD TRANSITIONS
         
         IMPORTANT:
         
         Each transition is completely reversible.
         
         Scrolling DOWN:
         active card tears/falls away.
         
         Scrolling UP:
         exact same animation reverses,
         bringing the card back.
      =================================================== */

      cards.forEach((card, index) => {

        if (index === 0) {
          return;
        }


        const outgoing =
          cards[index - 1];


        const incoming =
          cards[index];


        const direction =
          exitDirections[
            index - 1
          ];


        const start =
          index - 1;


        /* =================================================
           OUTGOING CARD
        ================================================= */

        tl.to(
          outgoing,
          {
            x:
              direction.x *
              getValues().exitX,

            y:
              direction.y *
              getValues().exitY,

            rotation:
              direction.rotation,

            scale: 0.92,

            opacity: 1,

            duration: 1,

            ease: "none",
          },
          start
        );


        /* =================================================
           INCOMING CARD
           
           It starts behind and rises to the center.
        ================================================= */

        tl.to(
          incoming,
          {
            x: 0,

            y: 0,

            scale: 1,

            rotation: 0,

            opacity: 1,

            duration: 1,

            ease: "none",
          },
          start
        );


        /* =================================================
           REBUILD REMAINING STACK
        ================================================= */

        cards.forEach(
          (behindCard, behindIndex) => {

            if (
              behindIndex <= index
            ) {
              return;
            }


            const depth =
              behindIndex -
              index;


            tl.to(
              behindCard,
              {
                x: 0,

                y:
                  depth *
                  getValues()
                    .stackOffset,

                scale:
                  1 -
                  depth *
                  getValues()
                    .scaleStep,

                rotation:
                  behindIndex % 2 === 0
                    ? -1
                    : 1,

                opacity: 1,

                duration: 1,

                ease: "none",
              },

              start
            );
          }
        );


        /* =================================================
           Z-INDEX FIX
           
           This is important for reverse scrolling.
           
           We use .set() instead of permanently changing
           zIndex inside the tween.
        ================================================= */

        tl.set(
          outgoing,
          {
            zIndex:
              cards.length -
              index +
              10,
          },
          start
        );


        tl.set(
          incoming,
          {
            zIndex:
              cards.length -
              index +
              20,
          },
          start + 0.98
        );


        cards.forEach(
          (behindCard, behindIndex) => {

            if (
              behindIndex <= index
            ) {
              return;
            }


            tl.set(
              behindCard,
              {
                zIndex:
                  cards.length -
                  behindIndex,
              },
              start + 0.98
            );
          }
        );
      });


      /* ===================================================
         INITIAL META
      =================================================== */

      if (counter) {

        counter.textContent =
          testimonials[0].number;
      }


      if (category) {

        category.textContent =
          testimonials[0].category;
      }


      /* ===================================================
         RESPONSIVE REFRESH
      =================================================== */

      let resizeTimer;


      const refresh = () => {

        clearTimeout(
          resizeTimer
        );


        resizeTimer =
          setTimeout(() => {

            setInitialStack();

            ScrollTrigger.refresh();

          }, 100);
      };


      window.addEventListener(
        "resize",
        refresh
      );


      requestAnimationFrame(() => {

        ScrollTrigger.refresh();

      });


      /* ===================================================
         CLEANUP
      =================================================== */

      return () => {

        clearTimeout(
          resizeTimer
        );

        window.removeEventListener(
          "resize",
          refresh
        );

        tl.kill();
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
        testimonial-section

        relative
        w-full

        overflow-hidden

        bg-[#f5f3ef]
      "
    >

      {/* =====================================================
          PINNED AREA
      ===================================================== */}

      <div
        ref={pinRef}

        className="
          relative

          h-[100svh]

          min-h-[620px]

          w-full

          overflow-hidden
        "
      >

        {/* ===================================================
            HEADER
        =================================================== */}

        <div
          className="
            absolute
            left-0
            top-0

            z-40

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

          {/* EYEBROW */}

          <div
            className="
              text-center

              font-[font2]

              text-[10px]

              font-medium

              tracking-[0.08em]

              text-[#817b70]

              sm:text-[11px]

              md:text-[12px]
            "
          >
            (TESTIMONIAL)
          </div>


          {/* HEADING */}

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


        {/* ===================================================
            CARD STACK
        =================================================== */}

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
                key={
                  testimonial.number
                }

                testimonial={
                  testimonial
                }

                index={index}
              />

            )
          )}

        </div>


        {/* ===================================================
            SIDE INFORMATION
        =================================================== */}

        <div
          className="
            pointer-events-none

            absolute
            left-0
            top-1/2

            z-40

            flex

            w-full

            -translate-y-1/2

            items-center
            justify-between

            px-6

            sm:px-10

            md:px-16

            lg:px-24
          "
        >

          {/* COUNTER */}

          <div
            className="
              testimonial-counter

              font-[font2]

              text-[12px]

              font-semibold

              leading-none

              tracking-[-0.02em]

              text-[#817b70]

              sm:text-[13px]

              md:text-[14px]

              lg:text-[15px]
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

              text-[12px]

              font-semibold

              leading-none

              tracking-[-0.02em]

              text-[#817b70]

              sm:text-[13px]

              md:text-[14px]

              lg:text-[15px]
            "
          >
            Lighting Design
          </div>

        </div>

      </div>


      {/* =====================================================
          CARD STYLES
      ===================================================== */}

      <style>{`

        /* ===================================================
           DESKTOP
        =================================================== */

        .testimonial-card {
          width: 410px;
          height: 526px;

          aspect-ratio: 410 / 526;
        }


        .testimonial-card > div {
          padding: 20px;
        }


        /* ===================================================
           STAR
        =================================================== */

        .testimonial-star {
          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;

          justify-content: flex-start;

          font-family: Arial, sans-serif;

          font-size: 47px;

          line-height: 1;

          transform:
            translateY(-3px);

          user-select: none;
        }


        /* ===================================================
           BOTTOM
        =================================================== */

        .testimonial-bottom {
          width: 100%;
        }


        /* ===================================================
           TEXT
        =================================================== */

        .testimonial-text {
          width: 100%;

          max-width: 365px;

          margin: 0;

          font-size: 24px;

          line-height: 1.34;
        }


        /* ===================================================
           PERSON
        =================================================== */

        .testimonial-person {
          margin-top: 32px;

          gap: 10px;
        }


        /* ===================================================
           AVATAR
        =================================================== */

        .testimonial-avatar {
          width: 56px;

          height: 56px;
        }


        /* ===================================================
           NAME
        =================================================== */

        .testimonial-name {
          font-size: 24px;
        }


        /* ===================================================
           ROLE
        =================================================== */

        .testimonial-role {
          font-size: 13px;
        }


        /* ===================================================
           TABLET
        =================================================== */

        @media (max-width: 1023px) {

          .testimonial-card {

            width:
              min(
                410px,
                calc(100vw - 80px)
              );

            height: auto;

            aspect-ratio:
              410 / 526;
          }


          .testimonial-card > div {
            padding: 5%;
          }


          .testimonial-star {

            font-size:
              clamp(
                36px,
                5vw,
                47px
              );
          }


          .testimonial-text {

            font-size:
              clamp(
                20px,
                3vw,
                24px
              );
          }


          .testimonial-name {

            font-size:
              clamp(
                19px,
                2.7vw,
                24px
              );
          }

        }


        /* ===================================================
           MOBILE
        =================================================== */

        @media (max-width: 639px) {

          .testimonial-card {

            width:
              calc(100vw - 32px);

            height: auto;

            aspect-ratio:
              410 / 526;
          }


          .testimonial-card > div {

            padding: 18px;
          }


          .testimonial-star {

            width: 40px;

            height: 40px;

            font-size: 39px;

            transform:
              translateY(-2px);
          }


          .testimonial-text {

            max-width: 100%;

            font-size:
              clamp(
                18px,
                5.4vw,
                23px
              );

            line-height: 1.32;

            letter-spacing:
              -0.035em;
          }


          .testimonial-person {

            margin-top: 24px;

            gap: 9px;
          }


          .testimonial-avatar {

            width: 48px;

            height: 48px;
          }


          .testimonial-name {

            font-size:
              clamp(
                18px,
                5vw,
                22px
              );
          }


          .testimonial-role {

            margin-top: 5px;

            font-size: 11px;
          }


          .testimonial-section h2 {

            font-size: 17px;
          }

        }


        /* ===================================================
           VERY SMALL MOBILE
        =================================================== */

        @media (max-width: 380px) {

          .testimonial-card {

            width:
              calc(100vw - 24px);
          }


          .testimonial-card > div {

            padding: 15px;
          }


          .testimonial-text {

            font-size: 17px;

            line-height: 1.3;
          }


          .testimonial-person {

            margin-top: 18px;
          }


          .testimonial-avatar {

            width: 44px;

            height: 44px;
          }


          .testimonial-name {

            font-size: 17px;
          }


          .testimonial-role {

            font-size: 10px;
          }

        }

      `}</style>

    </section>
  );
}
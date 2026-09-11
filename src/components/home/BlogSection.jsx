import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import blog1 from "../../assets/blog/blog.webp";


gsap.registerPlugin(ScrollTrigger);

const blogs = [
  {
    date: "Jul 14, 2026",
    title: "Why We Spec Venetian Plaster (And You Should Too)",
    image: blog1,
  },
  {
    date: "Jul 14, 2026",
    title: "From Dark Box to Light Loft: A Brooklyn Brownstone",
    image: blog1,
  },
  {
    date: "Jul 14, 2026",
    title: "The 5 Most Overused Interior Clichés (And What to Do Instead)",
    image: blog1,
  },
];

export default function BlogSection() {
  const sectionRef = useRef(null);

  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 768px)", () => {
        /*
         * CARD 1
         *
         * Moves upward while scrolling down.
         */

        gsap.to(card1Ref.current, {
          y: -180,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 1,

            invalidateOnRefresh: true,
          },
        });

        /*
         * CARD 2
         *
         * Moves slightly slower.
         */

        gsap.to(card2Ref.current, {
          y: -330,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 1.1,

            invalidateOnRefresh: true,
          },
        });

        /*
         * CARD 3
         *
         * Moves upward more aggressively.
         */

        gsap.to(card3Ref.current, {
          y: -240,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 1.2,

            invalidateOnRefresh: true,
          },
        });
      });

      /* =====================================================
         MOBILE
      ===================================================== */

      mm.add("(max-width: 767px)", () => {
        gsap.to(card1Ref.current, {
          y: -60,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 0.8,

            invalidateOnRefresh: true,
          },
        });

        gsap.to(card2Ref.current, {
          y: -100,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 0.9,

            invalidateOnRefresh: true,
          },
        });

        gsap.to(card3Ref.current, {
          y: -75,

          ease: "none",

          scrollTrigger: {
            trigger: sectionRef.current,

            start: "top bottom",

            end: "bottom top",

            scrub: 1,

            invalidateOnRefresh: true,
          },
        });
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

        bg-black

        text-white
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-20

          w-full

          px-[8%]

          pt-[80px]
          md:pt-[90px]
          lg:pt-[110px]

          pb-[70px]
          md:pb-[90px]
        "
      >
        <div
          className="
            flex
            items-start
            justify-between

            gap-10
          "
        >
          {/* LEFT */}

          <div>
            {/* LABEL */}

            <div
              className="
                mb-[28px]

                text-white

                font-semibold

                text-[14px]
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              (BLOG)
            </div>

            {/* TITLE */}

            <h2
              className="
                m-0

                text-white

                uppercase

                font-black

                tracking-[-0.065em]

                leading-[0.86]

                text-[clamp(50px,6.5vw,105px)]
              "
            >
              LATEST INSIGHTS
            </h2>
          </div>

          {/* BUTTON */}

          <a
            href="#blogs"
            className="
              shrink-0

              flex
              items-center
              justify-center
              gap-4

              bg-[#e45b2a]

              px-[28px]
              sm:px-[35px]
              lg:px-[40px]

              h-[58px]
              sm:h-[62px]
              lg:h-[66px]

              mt-[25px]
              lg:mt-[35px]

              text-white

              font-semibold

              text-[14px]
              sm:text-[15px]
              lg:text-[16px]

              transition-transform
              duration-300

              hover:scale-[1.03]
            "
          >
            <span>SEE ALL THE BLOGS</span>

            <span
              className="
                text-[22px]

                leading-none
              "
            >
              →
            </span>
          </a>
        </div>
      </div>

      {/* =====================================================
          BLOG GRID
      ===================================================== */}

      <div
        id="blogs"
        className="
          relative

          px-[8%]

          pb-[160px]

          md:pb-[220px]
        "
      >
        <div
          className="
            grid

            grid-cols-1
            md:grid-cols-3

            gap-[24px]
            lg:gap-[24px]

            items-start
          "
        >
          {/* =================================================
              CARD 1
          ================================================= */}

          <div
            ref={card1Ref}
            className="
              relative

              md:mt-[0px]

              will-change-transform
            "
          >
            <BlogCard blog={blogs[0]} />
          </div>

          {/* =================================================
              CARD 2
          ================================================= */}

          <div
            ref={card2Ref}
            className="
              relative

              md:mt-[120px]

              will-change-transform
            "
          >
            <BlogCard blog={blogs[1]} />
          </div>

          {/* =================================================
              CARD 3
          ================================================= */}

          <div
            ref={card3Ref}
            className="
              relative

              md:mt-[20px]

              will-change-transform
            "
          >
            <BlogCard blog={blogs[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BLOG CARD
============================================================ */

function BlogCard({ blog }) {
  return (
    <article
      className="
        group

        w-full

        bg-[#181818]

        border
        border-white/20

        overflow-hidden

        transition-colors
        duration-300

        hover:border-white/40
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div
        className="
          relative

          w-full

          aspect-[0.92]

          overflow-hidden

          bg-[#222]
        "
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            transition-transform
            duration-700
            ease-out

            group-hover:scale-[1.035]
          "
        />
      </div>

      {/* =====================================================
          CARD INFORMATION
      ===================================================== */}

      <div
        className="
          px-[24px]
          sm:px-[26px]
          lg:px-[28px]

          pt-[24px]
          lg:pt-[27px]

          pb-[30px]
          lg:pb-[34px]
        "
      >
        {/* DATE */}

        <div
          className="
            mb-[24px]

            text-white/40

            font-medium

            text-[14px]
            lg:text-[15px]
          "
        >
          {blog.date}
        </div>

        {/* TITLE */}

        <h3
          className="
            m-0

            text-white

            font-medium

            tracking-[-0.035em]

            leading-[1.08]

            text-[26px]

            sm:text-[28px]

            lg:text-[30px]
          "
        >
          {blog.title}
        </h3>
      </div>
    </article>
  );
}

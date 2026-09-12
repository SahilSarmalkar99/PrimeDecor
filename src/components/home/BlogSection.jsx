import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import blog1 from "../../assets/blog/blog.webp";

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   BLOG DATA
========================================================= */

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


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function BlogSection() {
  const sectionRef = useRef(null);

  /*
   * IMPORTANT:
   * These refs point to the IMAGES,
   * not the cards.
   */
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();


      /* =====================================================
         DESKTOP
      ===================================================== */

      mm.add("(min-width: 768px)", () => {
        /*
         * ONLY THE IMAGE MOVES.
         *
         * The card wrapper remains completely stationary.
         */

        gsap.to(image1Ref.current, {
          yPercent: -18,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top bottom",

            end: "bottom top",

            scrub: 1,

            invalidateOnRefresh: true,
          },
        });


        gsap.to(image2Ref.current, {
          yPercent: -28,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top bottom",

            end: "bottom top",

            scrub: 1.1,

            invalidateOnRefresh: true,
          },
        });


        gsap.to(image3Ref.current, {
          yPercent: -22,

          ease: "none",

          scrollTrigger: {
            trigger: section,

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
        /*
         * Smaller image movement on mobile.
         */

        gsap.to(image1Ref.current, {
          yPercent: -8,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top bottom",

            end: "bottom top",

            scrub: 0.8,

            invalidateOnRefresh: true,
          },
        });


        gsap.to(image2Ref.current, {
          yPercent: -11,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top bottom",

            end: "bottom top",

            scrub: 0.9,

            invalidateOnRefresh: true,
          },
        });


        gsap.to(image3Ref.current, {
          yPercent: -9,

          ease: "none",

          scrollTrigger: {
            trigger: section,

            start: "top bottom",

            end: "bottom top",

            scrub: 1,

            invalidateOnRefresh: true,
          },
        });
      });


      return () => mm.revert();
    }, section);


    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={sectionRef}
      className="
        blog-section
        relative
        w-full
        overflow-hidden
        bg-black
        text-white
        font-[font2]
      "
    >

      {/* =====================================================
          BACKGROUND GRID / HORIZONTAL LINES
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-[400px]
          z-0
        "
      >
        <div
          className="
            absolute
            left-0
            top-[580px]
            h-px
            w-full
            bg-white/20
          "
        />

        <div
          className="
            absolute
            left-0
            top-[648px]
            h-px
            w-full
            bg-white/20
          "
        />
      </div>


      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          w-full
          px-[8%]
          pt-[80px]
          pb-[70px]
          md:pt-[90px]
          md:pb-[90px]
          lg:pt-[110px]
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

          {/* =================================================
              LEFT HEADER
          ================================================= */}

          <div>

            <div
              className="
                mb-[28px]
                font-[font2]
                text-[14px]
                font-semibold
                text-white
                sm:text-[15px]
                lg:text-[16px]
              "
            >
              (BLOG)
            </div>


            <h2
              className="
                m-0
                font-[font2]
                text-[clamp(50px,6.5vw,105px)]
                font-black
                uppercase
                leading-[0.86]
                tracking-[-0.065em]
                text-white
              "
            >
              LATEST INSIGHTS
            </h2>

          </div>


          {/* =================================================
              BUTTON
          ================================================= */}

          <a
            href="#blogs"
            className="
              mt-[25px]
              flex
              h-[58px]
              shrink-0
              items-center
              justify-center
              gap-4
              bg-[#e45b2a]
              px-[28px]
              font-[font2]
              text-[14px]
              font-semibold
              text-white
              transition-transform
              duration-300
              hover:scale-[1.03]
              sm:h-[62px]
              sm:px-[35px]
              sm:text-[15px]
              lg:mt-[35px]
              lg:h-[66px]
              lg:px-[40px]
              lg:text-[16px]
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
          z-10
          px-[8%]
          pb-[160px]
          md:pb-[220px]
        "
      >

        <div
          className="
            grid
            grid-cols-1
            items-start
            gap-x-[24px]
            gap-y-[80px]
            md:grid-cols-3
            md:gap-y-0
            lg:gap-x-[24px]
          "
        >

          {/* =================================================
              CARD 1
          ================================================= */}

          <div
            className="
              relative
              z-10
              md:mt-0
            "
          >
            <BlogCard
              blog={blogs[0]}
              imageRef={image1Ref}
              imageMove="first"
            />
          </div>


          {/* =================================================
              CARD 2
          ================================================= */}

          <div
            className="
              relative
              z-10
              md:mt-[120px]
            "
          >
            <BlogCard
              blog={blogs[1]}
              imageRef={image2Ref}
              imageMove="second"
            />
          </div>


          {/* =================================================
              CARD 3
          ================================================= */}

          <div
            className="
              relative
              z-10
              md:mt-[20px]
            "
          >
            <BlogCard
              blog={blogs[2]}
              imageRef={image3Ref}
              imageMove="third"
            />
          </div>

        </div>

      </div>


      {/* =====================================================
          BOTTOM BORDER
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          bottom-0
          left-0
          z-20
          h-px
          w-full
          bg-white/25
        "
      />

    </section>
  );
}


/* ============================================================
   BLOG CARD
============================================================ */

function BlogCard({ blog, imageRef }) {
  return (
    <article
      className="
        group
        relative
        w-full
        overflow-hidden
        border
        border-white/20
        bg-[#181818]
      "
    >
      {/* =====================================================
          IMAGE WINDOW
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
          ref={imageRef}
          src={blog.image}
          alt={blog.title}
          draggable="false"
          className="
            absolute
            left-0
            top-0
            h-[125%]
            w-full
            max-w-none
            object-cover
            will-change-transform
          "
        />
      </div>


      {/* =====================================================
          CARD INFORMATION
          THIS DOES NOT MOVE
      ===================================================== */}

      <div
        className="
          relative
          border-t
          border-white/20
          px-[20px]
          pb-[28px]
          pt-[20px]
          sm:px-[24px]
          sm:pb-[30px]
          sm:pt-[22px]
          lg:px-[28px]
          lg:pb-[34px]
          lg:pt-[24px]
        "
      >
        {/* DATE */}

        <div
          className="
            mb-[22px]
            font-[font2]
            text-[13px]
            font-medium
            leading-none
            text-white/40
            sm:text-[14px]
            lg:text-[15px]
          "
        >
          {blog.date}
        </div>


        {/* TITLE */}

        <h3
          className="
            m-0
            max-w-[95%]
            font-[font2]
            text-[23px]
            font-medium
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            sm:text-[25px]
            lg:text-[29px]
          "
        >
          {blog.title}
        </h3>
      </div>
    </article>
  );
}
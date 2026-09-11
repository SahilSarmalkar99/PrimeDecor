import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: (
      <>
        THE HUDSON
        <br />
        PERCH
      </>
    ),
    description:
      "Warm walnut, floor-to-ceiling steel, and a skyline that never sleeps.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=90&w=1600&auto=format&fit=crop",
  },

  {
    title: <>CLAY & LIGHT</>,
    description:
      "Hand-troweled plaster, desert hues, and a courtyard that frames the sunset.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=90&w=1600&auto=format&fit=crop",
  },

  {
    title: (
      <>
        MONOCHROM
        <br />E MIDTOWN
      </>
    ),
    description:
      "Blackened steel, fluted glass, and silence designed for deep work.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1600&auto=format&fit=crop",
  },

  {
    title: (
      <>
        DESERT
        <br />
        HOUSE
      </>
    ),
    description:
      "Raw stone, warm timber, and open spaces shaped around the desert light.",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=90&w=1600&auto=format&fit=crop",
  },

  {
    title: (
      <>
        THE
        <br />
        COURTYARD
      </>
    ),
    description:
      "Natural textures, quiet geometry, and a private courtyard at the heart of the home.",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=90&w=1600&auto=format&fit=crop",
  },

  {
    title: (
      <>
        OAK &
        <br />
        CONCRETE
      </>
    ),
    description:
      "Soft oak, sculptural concrete, and carefully framed views create a calm modern retreat.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=90&w=1600&auto=format&fit=crop",
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const stages = gsap.utils.toArray(".project-stage");

      stages.forEach((stage) => {
        const movingContent = stage.querySelector(".project-moving-content");

        /*
         * ------------------------------------------------------
         * IMAGE + TEXT MOVE TOGETHER
         * ------------------------------------------------------
         *
         * Starts above the project card
         * ↓
         * passes through the center
         * ↓
         * exits below the project card
         *
         * Because scrub is enabled, the scrollbar directly
         * controls the position.
         */

        gsap.fromTo(
          movingContent,
          {
            y: () => -window.innerHeight * 0.95,
          },
          {
            y: () => window.innerHeight * 0.95,

            ease: "none",

            scrollTrigger: {
              trigger: stage,

              start: "top bottom",

              end: "bottom top",

              scrub: true,

              invalidateOnRefresh: true,
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
    relative
    z-50
    w-full

    bg-[#f5f3ef]

    px-[7.5%]
    pt-[84px]
    pb-[115px]

    md:px-[7.5%]
    md:pt-[70px]
    md:pb-[90px]

    sm:px-[6%]
    sm:pt-[55px]
    sm:pb-[70px]

    max-sm:px-[6%]
    max-sm:pt-[45px]
    max-sm:pb-[55px]
  "
      >
        <div className="w-full">
          {/* WORKS */}
          <div
            className="
        mb-[38px]

        text-[#9b958a]
        font-semibold
        leading-none

        text-[18px]
        sm:text-[16px]
        max-sm:text-[14px]
      "
          >
            (WORKS)
          </div>

          {/* HEADING + BUTTON */}
          <div
            className="
        flex
        items-center
        justify-between

        gap-8

        max-sm:flex-col
        max-sm:items-start
      "
          >
            {/* HEADING */}
            <h1
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
              LATEST PROJECTS
            </h1>

            {/* SEE ALL PROJECTS BUTTON */}
            <a
              href="#projects"
              className="
          group
          shrink-0

          flex
          items-center
          justify-center
          gap-5

          w-[263px]
          h-[70px]

          bg-[#e45a27]
          text-white

          text-[19px]
          font-semibold

          transition-all
          duration-300

          hover:bg-[#d34f20]
        "
            >
              <span>See All Projects</span>

              <span
                className="
            text-[29px]
            font-normal
            leading-none

            transition-transform
            duration-300

            group-hover:translate-x-1
          "
              >
                →
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          PROJECTS SECTION
      ====================================================== */}

      <section
        ref={sectionRef}
        id="works"
        className="
          w-full
          bg-[#f5f3ef]

          px-[5%]
          sm:px-[6%]
          lg:px-[7.5%]
        "
      >
        {/* PROJECT CARDS */}

        <div
          className="
            flex
            flex-col

            gap-[28px]
            sm:gap-[30px]
            lg:gap-[32px]

            pb-[28px]
            sm:pb-[40px]
            lg:pb-[50px]
          "
        >
          {projects.map((project, index) => (
            <ProjectStage key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

/* ============================================================
   PROJECT STAGE
============================================================ */

function ProjectStage({ project }) {
  return (
    <div
      className="
        project-stage

        relative

        w-full

        h-[calc(100vh-110px)]

        min-h-[620px]

        overflow-hidden

        bg-[#222]

        rounded-none
      "
    >
      {/* =====================================================
          BLURRED BACKGROUND
          
          THIS DOES NOT MOVE.
      ====================================================== */}

      <div
        className="
          absolute
          inset-0

          overflow-hidden
        "
      >
        <img
          src={project.image}
          alt=""
          className="
            absolute
            inset-[-8%]
            w-full
            h-full
            object-cover
            scale-[1.08]
            blur-[15px]
          "
        />

        {/* DARK OVERLAY */}

        <div
          className="
            absolute
            inset-0

            bg-black/35
          "
        />
      </div>

      {/* =====================================================
          MOVING CONTENT
          
          IMAGE + LEFT TEXT + RIGHT TEXT
          ALL MOVE TOGETHER.
      ====================================================== */}

      <div
        className="
          project-moving-content

          absolute

          z-20

          left-0
          top-0

          w-full
          h-full

          flex
          items-center
          justify-center

          pointer-events-none
        "
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <div
          className="
            absolute

            left-[7%]
            sm:left-[8%]
            lg:left-[15%]

            top-1/2

            -translate-y-1/2

            w-[28%]
            sm:w-[30%]
            lg:w-[31%]

            text-white
          "
        >
          <h2
            className="
              uppercase

              font-bold

              tracking-[-0.045em]

              leading-[0.93]

              md:text-[40px]
              text-[24px]
            "
          >
            {project.title}
          </h2>
        </div>

        {/* =================================================
            CENTER CLEAR IMAGE
        ================================================== */}

        <div
          className="
            relative

            w-[250px]
            h-[360px]

            sm:w-[300px]
            sm:h-[430px]

            md:w-[340px]
            md:h-[480px]

            shrink-0
          "
        >
          <img
            src={project.image}
            alt=""
            className="
              w-full
              h-full

              object-cover
            "
          />
        </div>

        {/* =================================================
            RIGHT CONTENT
        ================================================== */}

        <div
          className="
            absolute

            right-[7%]
            sm:right-[8%]
            lg:right-[5%]

            top-1/2

            -translate-y-1/2

            w-[27%]
            sm:w-[28%]
            lg:w-[29%]

            text-white
          "
        >
          <p
            className="
              font-medium

              leading-[1.25]

              text-[clamp(17px,1.6vw,27px)]
            "
          >
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

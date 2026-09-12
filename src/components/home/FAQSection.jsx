import React, { useRef, useState } from "react";
import gsap from "gsap";

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    number: "01",
    question: "How does your design process start?",
    answer:
      "We start with a conversation about your space, lifestyle, needs, and vision. From there, we develop a clear design direction and roadmap for the project.",
  },

  {
    number: "02",
    question: "Do you work remotely or only on-site?",
    answer:
      "Both. We have teams in NYC, LA, and Chicago, but we’ve completed full projects in Miami, Aspen, and even Paris using our remote material-sampling and 3D walkthrough system.",
  },

  {
    number: "03",
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary depending on the size and complexity of the space. During our initial consultation, we establish a realistic schedule for design, sourcing, and installation.",
  },

  {
    number: "04",
    question: "Can I use my existing furniture?",
    answer:
      "Absolutely. We love incorporating meaningful pieces into a new design. We evaluate what you already own and determine what can be restored, repositioned, or integrated into the new space.",
  },

  {
    number: "05",
    question: "Do you offer e-design / online-only packages?",
    answer:
      "Yes. Our remote design process allows us to work with clients outside our local markets through virtual consultations, digital presentations, material samples, and 3D walkthroughs.",
  },

  {
    number: "06",
    question: "How does your design process start?",
    answer:
      "We begin by understanding how you live and what you want your space to feel like. Then we translate that into a thoughtful design direction.",
  },
];


/* =========================================================
   MAIN FAQ SECTION
========================================================= */

export default function FAQSection() {
  return (
    <section
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
          z-10
          px-5
          pb-[70px]
          pt-[85px]

          sm:px-8
          sm:pb-[85px]
          sm:pt-[100px]

          md:px-[7%]
          md:pb-[105px]
          md:pt-[125px]

          lg:px-[8%]
          lg:pb-[115px]
          lg:pt-[145px]
        "
      >

        {/* FAQ LABEL */}

        <div
          className="
            mb-[18px]
            text-center

            font-[font2]
            text-[11px]
            font-semibold
            uppercase
            leading-none
            tracking-[-0.02em]

            text-white

            sm:mb-[21px]
            sm:text-[13px]

            md:mb-[24px]
            md:text-[14px]

            lg:text-[15px]
          "
        >
          (FAQ)
        </div>


        {/* MAIN HEADING */}

        <h2
          className="
            m-0
            w-full

            text-center

            font-[font2]
            text-[clamp(40px,7.3vw,108px)]
            font-black
            uppercase
            leading-[0.84]
            tracking-[-0.07em]

            text-white
          "
        >
          QUESTION AND ANSWER
        </h2>

      </div>


      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1280px]

          px-4
          pb-[100px]

          sm:px-6
          sm:pb-[120px]

          md:px-[5%]
          md:pb-[150px]

          lg:px-0
          lg:pb-[180px]
        "
      >

        <div className="w-full">

          {faqs.map((faq) => (
            <FAQItem
              key={faq.number}
              faq={faq}
            />
          ))}

        </div>

      </div>

    </section>
  );
}


/* =========================================================
   FAQ ITEM
========================================================= */

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const itemRef = useRef(null);
  const answerRef = useRef(null);
  const arrowRef = useRef(null);

  /*
   * Used to distinguish mobile click interaction.
   */
  const isMobile = () => {
    return window.matchMedia("(max-width: 767px)").matches;
  };


  /* =======================================================
     OPEN
  ======================================================= */

  const openItem = () => {
    if (isOpen) return;

    setIsOpen(true);

    const item = itemRef.current;
    const answer = answerRef.current;
    const arrow = arrowRef.current;

    if (!item || !answer || !arrow) return;

    gsap.killTweensOf([
      item,
      answer,
      arrow,
    ]);


    /* -----------------------------------------------
       DARKER BOX
    ----------------------------------------------- */

    gsap.to(item, {
      backgroundColor: "#151515",
      borderColor: "#303030",

      duration: 0.35,

      ease: "power2.out",
    });


    /* -----------------------------------------------
       ANSWER
    ----------------------------------------------- */

    gsap.to(answer, {
      height: "auto",

      opacity: 1,

      marginTop: 18,

      y: 0,

      duration: 0.5,

      ease: "power3.out",
    });


    /* -----------------------------------------------
       ARROW
    ----------------------------------------------- */

    gsap.to(arrow, {
      y: -3,

      rotation: 180,

      duration: 0.45,

      ease: "power3.out",
    });
  };


  /* =======================================================
     CLOSE
  ======================================================= */

  const closeItem = () => {
    if (!isOpen) return;

    setIsOpen(false);

    const item = itemRef.current;
    const answer = answerRef.current;
    const arrow = arrowRef.current;

    if (!item || !answer || !arrow) return;

    gsap.killTweensOf([
      item,
      answer,
      arrow,
    ]);


    /* -----------------------------------------------
       RESTORE BOX
    ----------------------------------------------- */

    gsap.to(item, {
      backgroundColor: "#0c0c0c",
      borderColor: "#202020",

      duration: 0.3,

      ease: "power2.out",
    });


    /* -----------------------------------------------
       HIDE ANSWER
    ----------------------------------------------- */

    gsap.to(answer, {
      height: 0,

      opacity: 0,

      marginTop: 0,

      y: -8,

      duration: 0.4,

      ease: "power3.inOut",
    });


    /* -----------------------------------------------
       ARROW
    ----------------------------------------------- */

    gsap.to(arrow, {
      y: 0,

      rotation: 0,

      duration: 0.35,

      ease: "power3.out",
    });
  };


  /* =======================================================
     HOVER ENTER
  ======================================================= */

  const handleMouseEnter = () => {
    /*
     * Hover is only used on desktop.
     */
    if (!isMobile()) {
      openItem();
    }
  };


  /* =======================================================
     HOVER LEAVE
  ======================================================= */

  const handleMouseLeave = () => {
    /*
     * Hover close is only used on desktop.
     */
    if (!isMobile()) {
      closeItem();
    }
  };


  /* =======================================================
     CLICK / TAP
  ======================================================= */

  const handleClick = () => {
    /*
     * On mobile:
     * tap = toggle.
     *
     * On desktop:
     * hover controls the state.
     */
    if (!isMobile()) return;

    if (isOpen) {
      closeItem();
    } else {
      openItem();
    }
  };


  return (
    <div
      ref={itemRef}

      className="
        faq-item

        relative
        mb-[3px]
        w-full
        overflow-hidden

        border
        border-[#202020]

        bg-[#0c0c0c]

        transition-colors
        duration-300
      "

      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      {/* ===================================================
          QUESTION BUTTON
      =================================================== */}

      <button
        type="button"

        onClick={handleClick}

        aria-expanded={isOpen}

        className="
          group
          flex
          w-full
          cursor-pointer
          items-center

          border-0
          bg-transparent
          p-0

          text-left

          outline-none
        "
      >

        {/* =================================================
            NUMBER
        ================================================= */}

        <div
          className="
            w-[68px]
            shrink-0

            pl-[16px]

            font-[font2]
            text-[15px]
            font-semibold
            leading-none
            tracking-[-0.03em]

            text-[#aaa49b]

            sm:w-[90px]
            sm:pl-[20px]
            sm:text-[17px]

            md:w-[145px]
            md:pl-[24px]
            md:text-[19px]

            lg:w-[260px]
            lg:pl-[24px]
            lg:text-[21px]
          "
        >
          ({faq.number})
        </div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            min-w-0
            flex-1

            py-[25px]
            pr-[10px]

            sm:py-[29px]
            sm:pr-[16px]

            md:py-[32px]
            md:pr-[24px]

            lg:py-[34px]
            lg:pr-[28px]
          "
        >

          {/* QUESTION */}

          <div
            className={`
              font-[font2]

              text-[19px]
              font-medium
              leading-[1.08]

              tracking-[-0.045em]

              transition-colors
              duration-300

              sm:text-[23px]

              md:text-[28px]

              lg:text-[32px]

              ${
                isOpen
                  ? "text-white"
                  : "text-[#b5afa6]"
              }

              group-hover:text-white
            `}
          >
            {faq.question}
          </div>


          {/* =================================================
              ANSWER
          ================================================= */}

          <div
            ref={answerRef}

            className="
              faq-answer

              overflow-hidden

              font-[font2]
              text-[12px]
              font-normal
              leading-[1.5]

              tracking-[-0.01em]

              text-[#969087]

              sm:text-[13px]

              md:max-w-[900px]
              md:text-[14px]

              lg:text-[15px]
            "

            style={{
              height: 0,
              opacity: 0,
              marginTop: 0,
              transform: "translateY(-8px)",
            }}
          >
            {faq.answer}
          </div>

        </div>


        {/* =================================================
            ARROW BOX
        ================================================= */}

        <div
          className="
            mr-[10px]

            flex
            h-[44px]
            w-[44px]
            shrink-0

            items-center
            justify-center

            bg-[#df5b2b]

            sm:mr-[14px]
            sm:h-[48px]
            sm:w-[48px]

            md:mr-[18px]
            md:h-[52px]
            md:w-[52px]

            lg:mr-[22px]
            lg:h-[54px]
            lg:w-[54px]
          "
        >

          <span
            ref={arrowRef}

            className="
              block

              font-[font2]
              text-[21px]
              font-normal
              leading-none

              text-white

              will-change-transform
            "
          >
            ↓
          </span>

        </div>

      </button>

    </div>
  );
}
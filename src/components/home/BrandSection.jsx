import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

function Plus() {
  return (
    <span className="absolute text-[27px] font-light leading-none text-white">
      +
    </span>
  );
}

function PauseButton() {
  return (
    <div className="flex h-[30px] w-[30px] items-center justify-center border border-white/30 bg-black/20">
      <div className="flex gap-[3px]">
        <span className="h-[9px] w-[2px] bg-white" />
        <span className="h-[9px] w-[2px] bg-white" />
      </div>
    </div>
  );
}

function Card({ card, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="
        absolute
        left-1/2
        top-1/2
        z-20
        aspect-[0.72]
        w-[clamp(280px,18.5vw,350px)]
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        bg-black
        will-change-transform
      "
    >
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={card.video} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Top left + */}
      <Plus className="left-[38px] top-[40px]" />

      {/* Top right + */}
      <span className="absolute right-[38px] top-[40px] text-[27px] font-light leading-none text-white">
        +
      </span>

      {/* CONTENT */}
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
        <div className="flex items-baseline">
          <span
            className="
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
              text-[clamp(20px,1.5vw,29px)]
              font-medium
              leading-none
              tracking-[-0.05em]
            "
          >
            {card.suffix}
          </span>
        </div>

        <p
          className="
            mt-[28px]
            max-w-[280px]
            text-[clamp(17px,1.35vw,24px)]
            font-medium
            leading-[1.2]
            tracking-[-0.04em]
          "
        >
          {card.text}
        </p>
      </div>

      {/* Bottom left + */}
      <span className="absolute bottom-[39px] left-[38px] text-[27px] font-light leading-none text-white">
        +
      </span>

      {/* Pause */}
      <div className="absolute bottom-[39px] right-[38px]">
        <PauseButton />
      </div>
    </div>
  );
}

export default function BrandSection() {
  const sectionRef = useRef(null);

  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);
  const card4 = useRef(null);
  const card5 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==================================================
      // DESKTOP
      // ==================================================

      mm.add("(min-width: 769px)", () => {
        const cards = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        /*
         * INITIAL STATE
         *
         * All cards are stacked around the center.
         */

        gsap.set(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0.92,
        });

        gsap.set(card3.current, {
          scale: 1,
          zIndex: 30,
        });

        gsap.set(card2.current, {
          zIndex: 24,
        });

        gsap.set(card4.current, {
          zIndex: 24,
        });

        gsap.set(card1.current, {
          zIndex: 20,
        });

        gsap.set(card5.current, {
          zIndex: 20,
        });

        // ==================================================
        // TIMELINE
        // ==================================================

        const tl = gsap.timeline();

        /*
         * -----------------------------------------------
         * PHASE 1
         * CENTER CARD MOVES DOWN
         * -----------------------------------------------
         */

        tl.to(
          card3.current,
          {
            y: "16vh",
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );

        /*
         * -----------------------------------------------
         * PHASE 2
         * INNER LEFT / RIGHT CARDS COME OUT
         * -----------------------------------------------
         */

        tl.to(
          card2.current,
          {
            x: "-21vw",
            y: "1vh",
            rotation: -17,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          0.15
        );

        tl.to(
          card4.current,
          {
            x: "21vw",
            y: "1vh",
            rotation: 17,
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          },
          0.15
        );

        /*
         * -----------------------------------------------
         * PHASE 3
         * OUTER LEFT / RIGHT CARDS COME OUT
         * -----------------------------------------------
         */

        tl.to(
          card1.current,
          {
            x: "-42vw",
            y: "10vh",
            rotation: -34,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          0.45
        );

        tl.to(
          card5.current,
          {
            x: "42vw",
            y: "10vh",
            rotation: 34,
            scale: 1,
            duration: 1.5,
            ease: "power3.out",
          },
          0.45
        );

        /*
         * -----------------------------------------------
         * FINAL SMALL MOVEMENT
         *
         * Gives the same spread as your screenshot.
         * -----------------------------------------------
         */

        tl.to(
          card1.current,
          {
            x: "-44vw",
            y: "12vh",
            rotation: -36,
            duration: 0.5,
            ease: "power2.out",
          },
          1.7
        );

        tl.to(
          card5.current,
          {
            x: "44vw",
            y: "12vh",
            rotation: 36,
            duration: 0.5,
            ease: "power2.out",
          },
          1.7
        );

        /*
         * SCROLLTRIGGER
         */

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2400",
          scrub: 1.3,
          animation: tl,
        });
      });

      // ==================================================
      // MOBILE
      // ==================================================

      mm.add("(max-width: 768px)", () => {
        const cards = [
          card1.current,
          card2.current,
          card3.current,
          card4.current,
          card5.current,
        ];

        gsap.set(cards, {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 0.75,
        });

        gsap.set(card3.current, {
          scale: 0.85,
          zIndex: 30,
        });

        const tl = gsap.timeline();

        /*
         * Center moves down
         */

        tl.to(
          card3.current,
          {
            y: "25vh",
            scale: 0.85,
            duration: 1,
          },
          0
        );

        /*
         * Inner cards
         */

        tl.to(
          card2.current,
          {
            x: "-39vw",
            y: "2vh",
            rotation: -14,
            scale: 0.72,
            duration: 1.3,
          },
          0.15
        );

        tl.to(
          card4.current,
          {
            x: "39vw",
            y: "2vh",
            rotation: 14,
            scale: 0.72,
            duration: 1.3,
          },
          0.15
        );

        /*
         * Outer cards
         */

        tl.to(
          card1.current,
          {
            x: "-78vw",
            y: "10vh",
            rotation: -28,
            scale: 0.65,
            duration: 1.4,
          },
          0.45
        );

        tl.to(
          card5.current,
          {
            x: "78vw",
            y: "10vh",
            rotation: 28,
            scale: 0.65,
            duration: 1.4,
          },
          0.45
        );

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",

          scrub: 1,
          animation: tl,
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
        h-screen
        min-h-[1650px]
        w-full
        overflow-hidden
        bg-[#0d0d0d]
        text-white
      "
    >

      {/* ==================================================
          LEFT TEXT
      ================================================== */}

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
        <p className="mb-[30px] text-[18px] font-semibold">
          (BRANDS)
        </p>

        <h2
          className="
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


      {/* ==================================================
          RIGHT TEXT
      ================================================== */}

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


      {/* ==================================================
          FIVE CARDS
      ================================================== */}

      <Card card={cards[0]} cardRef={card1} />
      <Card card={cards[1]} cardRef={card2} />
      <Card card={cards[2]} cardRef={card3} />
      <Card card={cards[3]} cardRef={card4} />
      <Card card={cards[4]} cardRef={card5} />


      
    </section>
  );
}
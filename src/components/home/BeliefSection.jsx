import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeliefSection() {
  const sectionRef = useRef(null);
  const squareRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const images = [
        image1Ref.current,
        image2Ref.current,
        image3Ref.current,
        image4Ref.current,
      ];

      // Initial state
      gsap.set(images, {
        opacity: 1,
        scale: 1,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 100,
        scale: 0.9,
      });

      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP
      // ==========================================

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline();

        /*
          4 images move away from the center
          toward the four corners.
        */

        tl.to(image1Ref.current, {
          x: "-42vw",
          y: "-38vh",
          rotate: -18,
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        tl.to(image2Ref.current, {
          x: "42vw",
          y: "-38vh",
          rotate: 18,
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        tl.to(image3Ref.current, {
          x: "-42vw",
          y: "38vh",
          rotate: 18,
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        tl.to(image4Ref.current, {
          x: "42vw",
          y: "38vh",
          rotate: -18,
          scale: 0.7,
          opacity: 0,
          duration: 1,
          ease: "power3.inOut",
        }, 0);

        // Text comes after images disappear
        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
        }, 0.72);

        // Slightly hide the square itself
        tl.to(squareRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        }, 0.65);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 1.2,
          animation: tl,
          anticipatePin: 1,
        });
      });


      // ==========================================
      // MOBILE
      // ==========================================

      mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline();

        tl.to(image1Ref.current, {
          x: "-48vw",
          y: "-30vh",
          rotate: -15,
          scale: 0.65,
          opacity: 0,
          duration: 1,
        }, 0);

        tl.to(image2Ref.current, {
          x: "48vw",
          y: "-30vh",
          rotate: 15,
          scale: 0.65,
          opacity: 0,
          duration: 1,
        }, 0);

        tl.to(image3Ref.current, {
          x: "-48vw",
          y: "30vh",
          rotate: 15,
          scale: 0.65,
          opacity: 0,
          duration: 1,
        }, 0);

        tl.to(image4Ref.current, {
          x: "48vw",
          y: "30vh",
          rotate: -15,
          scale: 0.65,
          opacity: 0,
          duration: 1,
        }, 0);

        tl.to(squareRef.current, {
          scale: 0.85,
          opacity: 0,
          duration: 0.5,
        }, 0.65);

        tl.to(textRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }, 0.72);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 1,
          animation: tl,
          anticipatePin: 1,
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
        flex
        h-screen
        min-h-[650px]
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#fafaf9]
        text-[#171717]
      "
    >

      {/* =====================================
          DOT BACKGROUND
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-60
          [background-image:radial-gradient(#dededc_1.5px,transparent_1.5px)]
          [background-size:23px_23px]
        "
      />


      {/* =====================================
          IMAGE SQUARE
      ====================================== */}

      <div
        ref={squareRef}
        className="
          absolute
          left-1/2
          top-1/2
          h-[min(42vw,600px)]
          w-[min(42vw,600px)]
          -translate-x-1/2
          -translate-y-1/2
        "
      >

        {/* Image 1 - Top Left */}
        <div
          ref={image1Ref}
          className="
            absolute
            left-0
            top-0
            h-[clamp(150px,19vw,280px)]
            w-[clamp(150px,19vw,280px)]
            overflow-hidden
          "
        >
          <img
            src="/interior-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* Image 2 - Top Right */}
        <div
          ref={image2Ref}
          className="
            absolute
            right-0
            top-0
            h-[clamp(150px,19vw,280px)]
            w-[clamp(150px,19vw,280px)]
            overflow-hidden
          "
        >
          <img
            src="/interior-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* Image 3 - Bottom Left */}
        <div
          ref={image3Ref}
          className="
            absolute
            bottom-0
            left-0
            h-[clamp(150px,19vw,280px)]
            w-[clamp(150px,19vw,280px)]
            overflow-hidden
          "
        >
          <img
            src="/interior-3.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>


        {/* Image 4 - Bottom Right */}
        <div
          ref={image4Ref}
          className="
            absolute
            bottom-0
            right-0
            h-[clamp(150px,19vw,280px)]
            w-[clamp(150px,19vw,280px)]
            overflow-hidden
          "
        >
          <img
            src="/interior-4.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

      </div>


      {/* =====================================
          TEXT
      ====================================== */}

      <div
        ref={textRef}
        className="
          relative
          z-10
          w-full
          max-w-[1500px]
          px-5
          text-center
          opacity-0
        "
      >
        <h2
          className="
            mx-auto
            max-w-[1200px]
            text-[clamp(38px,6.1vw,88px)]
            font-black
            uppercase
            leading-[1.02]
            tracking-[-0.075em]
          "
        >
          WE BELIEVE GREAT DESIGN IS
          <br />
          FELT, NOT JUST SEEN.
        </h2>
      </div>




    </section>
  );
}
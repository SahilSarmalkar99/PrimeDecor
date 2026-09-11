import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import showreel from "../../assets/showreel/showreel.mp4";

gsap.registerPlugin(ScrollTrigger);

export default function ShowreelSection() {
  const sectionRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 2}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          topTextRef.current,
          {
            xPercent: -130,
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.to(
          bottomTextRef.current,
          {
            xPercent: 130,
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.fromTo(
          videoWrapperRef.current,
          {
            width: "30vw",
            height: "16.9vw",
          },
          {
            width: "100vw",
            height: "100vh",
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.to(
          videoRef.current,
          {
            scale: 1.05,
            ease: "none",
            duration: 1,
          },
          0
        );
      });

      mm.add("(max-width: 767px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 1.6}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(
          topTextRef.current,
          {
            xPercent: -120,
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.to(
          bottomTextRef.current,
          {
            xPercent: 120,
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.fromTo(
          videoWrapperRef.current,
          {
            width: "72vw",
            height: "40.5vw",
          },
          {
            width: "100vw",
            height: "100vh",
            ease: "none",
            duration: 1,
          },
          0
        );

        tl.to(
          videoRef.current,
          {
            scale: 1.04,
            ease: "none",
            duration: 1,
          },
          0
        );
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#101010] font-[font2]"
    >
      {/* TOP TEXT */}

      <div
        ref={topTextRef}
        className="absolute left-[8%] top-[15%] z-30 whitespace-nowrap pointer-events-none"
      >
        <div className="mb-[26px] text-[14px] font-semibold leading-none text-white sm:text-[15px] md:text-[16px]">
          (SHOWREEL)
        </div>

        <h2 className="m-0 text-[clamp(52px,7vw,80px)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-white">
          EVERY SPACE
        </h2>
      </div>

      {/* VIDEO */}

      <div
        ref={videoWrapperRef}
        className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-black"
      >
        <video
          ref={videoRef}
          src={showreel}
          autoPlay
          muted
          loop
          playsInline
          className="block h-full w-full object-cover"
        />

        <button
          type="button"
          aria-label="Pause video"
          className="absolute bottom-[12px] right-[12px] z-30 flex h-[26px] w-[26px] items-center justify-center bg-white text-[9px] font-bold text-[#e05a2a] sm:h-[30px] sm:w-[30px] sm:text-[10px]"
          onClick={() => {
            if (!videoRef.current) return;

            if (videoRef.current.paused) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }}
        >
          II
        </button>
      </div>

      {/* BOTTOM TEXT */}

      <div
        ref={bottomTextRef}
        className="absolute bottom-[20%] right-[8%] z-30 whitespace-nowrap pointer-events-none"
      >
        <h2 className="m-0 text-[clamp(52px,7vw,80px)] font-black uppercase leading-[0.84] tracking-[-0.065em] text-white">
          HAS A VOICE.
        </h2>
      </div>
    </section>
  );
}
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HoverImageReveal = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const blocksRef = useRef([]);
  const timelineRef = useRef(null);

  const isHoverImageRef = useRef(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const blocks = blocksRef.current;

    if (!container || !image || !blocks.length) return;

    const ctx = gsap.context(() => {
      // =====================================================
      // INITIAL STATE
      // =====================================================

      // Black blocks start above the image
      gsap.set(blocks, {
        yPercent: -100,
      });

      // Image starts hidden below
      gsap.set(image, {
        x: 0,
        y: 0,
        yPercent: 100,
        scale: 1,
        opacity: 0,
      });

      // =====================================================
      // IMAGE SCROLL REVEAL
      // =====================================================

      gsap.to(image, {
        yPercent: 0,
        opacity: 1,
        duration: 1.8,
        ease: "power4.out",

        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      });

      // =====================================================
      // MOUSE ENTER
      // =====================================================

      const handleMouseEnter = () => {
        // Kill previous hover animation
        timelineRef.current?.kill();

        const tl = gsap.timeline();

        timelineRef.current = tl;

        // ---------------------------------------------------
        // STEP 1
        // BLACK BLOCKS COME DOWN
        // One by one
        // ---------------------------------------------------

        tl.to(blocks, {
          yPercent: 0,
          duration: 0.45,
          ease: "power3.inOut",
          stagger: 0.08,
        });

        // ---------------------------------------------------
        // STEP 2
        // CHANGE IMAGE WHILE COMPLETELY COVERED
        // ---------------------------------------------------

        tl.call(() => {
          image.src = "/hero-hover.avif";

          isHoverImageRef.current = true;

          // Slightly enlarge image so movement
          // never reveals empty edges
          gsap.set(image, {
            scale: 1.12,
            x: 0,
            y: 0,
          });
        });

        // ---------------------------------------------------
        // STEP 3
        // BLACK BLOCKS GO UP
        // One by one
        // ---------------------------------------------------

        tl.to(blocks, {
          yPercent: -100,
          duration: 0.45,
          ease: "power3.inOut",

          stagger: {
            each: 0.08,
            from: "end",
          },
        });
      };

      // =====================================================
      // MOUSE LEAVE
      // =====================================================

      const handleMouseLeave = () => {
        timelineRef.current?.kill();

        isHoverImageRef.current = false;

        const tl = gsap.timeline();

        timelineRef.current = tl;

        // ---------------------------------------------------
        // STEP 1
        // CENTER IMAGE
        // ---------------------------------------------------

        tl.to(image, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });

        // ---------------------------------------------------
        // STEP 2
        // BLACK BLOCKS COME DOWN
        // One by one
        // ---------------------------------------------------

        tl.to(blocks, {
          yPercent: 0,
          duration: 0.45,
          ease: "power3.inOut",
          stagger: 0.08,
        });

        // ---------------------------------------------------
        // STEP 3
        // RESTORE ORIGINAL IMAGE
        // ---------------------------------------------------

        tl.call(() => {
          image.src = "/hero.avif";

          gsap.set(image, {
            x: 0,
            y: 0,
            scale: 1,
          });
        });

        // ---------------------------------------------------
        // STEP 4
        // BLACK BLOCKS GO UP AGAIN
        // ---------------------------------------------------

        tl.to(blocks, {
          yPercent: -100,
          duration: 0.45,
          ease: "power3.inOut",

          stagger: {
            each: 0.08,
            from: "end",
          },
        });
      };

      // =====================================================
      // CURSOR FOLLOW
      // =====================================================

      const handleMouseMove = (e) => {
        // Cursor movement only affects hover image
        if (!isHoverImageRef.current) return;

        const rect = container.getBoundingClientRect();

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const x = (mouseX - centerX) / centerX;
        const y = (mouseY - centerY) / centerY;

        const moveX = x * 18;
        const moveY = y * 18;

        gsap.to(image, {
          x: moveX,
          y: moveY,
          duration: 0.7,
          ease: "power3.out",
          overwrite: "auto",
        });
      };

      // =====================================================
      // EVENTS
      // =====================================================

      container.addEventListener("mouseenter", handleMouseEnter);

      container.addEventListener("mouseleave", handleMouseLeave);

      container.addEventListener("mousemove", handleMouseMove);

      // =====================================================
      // CLEANUP
      // =====================================================

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);

        container.removeEventListener("mouseleave", handleMouseLeave);

        container.removeEventListener("mousemove", handleMouseMove);

        timelineRef.current?.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="border-t border-[#666666]">
      <div
        ref={containerRef}
        className="
          relative
          mx-auto
          aspect-[742/386]
          w-full
          overflow-hidden

          sm:w-[85%]

          md:w-[70%]

          lg:w-[49.2%]
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <img
          ref={imageRef}
          src="/hero.avif"
          alt="Luxury interior"
          className="
            absolute
            inset-0
            block
            h-full
            w-full
            object-cover
            will-change-transform
          "
        />

        {/* =================================================
            BLACK REVEAL BLOCKS
        ================================================= */}

        <div
          className="
    pointer-events-none
    absolute
    inset-0
    z-10
    m-0
    w-full
    p-0
  "
        >
          {[0, 1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                blocksRef.current[index] = el;
              }}
              className="
        absolute
        top-0
        h-full
        w-[20%]
        m-0
        p-0
        bg-black
        will-change-transform
      "
              style={{
                left: `${index * 20}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoverImageReveal;

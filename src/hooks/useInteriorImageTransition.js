import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-driven image transition.
 *
 * The current image scales/fades while a grid of rectangular masks
 * reveals the next image. The animation is isolated here so the page
 * component stays clean.
 *
 * Usage:
 * const stageRef = useRef(null);
 * useInteriorImageTransition(stageRef, { images: [...] });
 */
export default function useInteriorImageTransition(
  stageRef,
  {
    images = [],
    triggerStart = "top top",
    scrollDistance = 1150,
  } = {}
) {
  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage || images.length < 2) return;

    const ctx = gsap.context(() => {
      const image = stage.querySelector(".transition-image");
      const boxes = stage.querySelector(".transition-boxes");
      if (!image || !boxes) return;

      // Build a 5 x 7 grid of independent rectangular masks.
      const cols = 7;
      const rows = 5;
      const boxCount = cols * rows;

      boxes.innerHTML = "";
      const fragments = Array.from({ length: boxCount }, (_, index) => {
        const el = document.createElement("div");
        el.className = "absolute overflow-hidden";
        el.style.width = `${100 / cols}%`;
        el.style.height = `${100 / rows}%`;
        el.style.left = `${(index % cols) * (100 / cols)}%`;
        el.style.top = `${Math.floor(index / cols) * (100 / rows)}%`;
        el.style.opacity = "0";
        el.style.backgroundSize = `${cols * 100}% ${rows * 100}%`;
        boxes.appendChild(el);
        return el;
      });

      const state = { progress: 0, index: 0 };

      const setFragmentImage = (nextIndex) => {
        const next = images[nextIndex % images.length];

        fragments.forEach((fragment, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          fragment.style.backgroundImage = `url("${next}")`;
          fragment.style.backgroundPosition = `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`;
        });

        return next;
      };

      // Initial fragment image.
      setFragmentImage(1);

      const changeImage = (nextIndex) => {
        const next = setFragmentImage(nextIndex);

        gsap.set(fragments, {
          opacity: 0,
          scale: 0.96,
          transformOrigin: "center",
        });

        // Reveal the new image through staggered rectangles.
        gsap.to(fragments, {
          opacity: 1,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: {
            each: 0.025,
            from: "random",
          },
          onComplete: () => {
            image.src = next;
            gsap.set(fragments, { opacity: 0 });
          },
        });
      };

      const transition = gsap.timeline({ paused: true })
        .to(image, {
          scale: 0.94,
          opacity: 0.12,
          duration: 0.42,
          ease: "power2.out",
        })
        .to(fragments, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power3.out",
          stagger: {
            each: 0.018,
            from: "random",
          },
        }, "-=0.18");

      ScrollTrigger.create({
        trigger: stage,
        start: triggerStart,
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;
          const targetIndex = Math.min(
            images.length - 1,
            Math.floor(p * images.length)
          );

          // Animate the main transition once per image boundary.
          if (targetIndex !== state.index && targetIndex > 0) {
            state.index = targetIndex;
            changeImage(targetIndex);
          }

          transition.progress(Math.min(1, (p % (1 / images.length)) * images.length));

          // Subtle continuous movement makes the transition feel less static.
          gsap.set(image, {
            scale: 1.02 - p * 0.08,
            yPercent: p * -3,
          });
        },
      });

      ScrollTrigger.refresh();
    }, stage);

    return () => ctx.revert();
  }, [stageRef, images, triggerStart, scrollDistance]);
}

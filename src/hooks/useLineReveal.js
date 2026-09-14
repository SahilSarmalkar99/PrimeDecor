import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const useLineReveal = (options = {}) => {
  const ref = useRef(null);
  const {
    duration = 0.9,
    stagger = 0.05,
    ease = "power3.out",
    start = "top 90%",
  } = options;
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    /* * --------------------------------------------- * REDUCED MOTION * --------------------------------------------- */ if (
      prefersReducedMotion
    )
      return;
    /* * --------------------------------------------- * GET ALL ELEMENTS * --------------------------------------------- */ const elements =
      [root, ...Array.from(root.querySelectorAll("*"))];
    /* * --------------------------------------------- * FIND ELEMENTS WITH BORDERS * --------------------------------------------- */ const borderedElements =
      elements.filter((element) => {
        const style = window.getComputedStyle(element);
        return (
          parseFloat(style.borderTopWidth) > 0 ||
          parseFloat(style.borderRightWidth) > 0 ||
          parseFloat(style.borderBottomWidth) > 0 ||
          parseFloat(style.borderLeftWidth) > 0
        );
      });
    if (!borderedElements.length) return;
    const ctx = gsap.context(() => {
      borderedElements.forEach((element, elementIndex) => {
        const style = window.getComputedStyle(element);
        const topWidth = parseFloat(style.borderTopWidth);
        const rightWidth = parseFloat(style.borderRightWidth);
        const bottomWidth = parseFloat(style.borderBottomWidth);
        const leftWidth = parseFloat(style.borderLeftWidth);
        const hasTop = topWidth > 0;
        const hasRight = rightWidth > 0;
        const hasBottom = bottomWidth > 0;
        const hasLeft = leftWidth > 0;
        /* * --------------------------------------------- * MAKE POSITIONING CONTEXT * --------------------------------------------- */ const computedPosition =
          style.position;
        if (computedPosition === "static") {
          element.style.position = "relative";
        }
        /* * --------------------------------------------- * CREATE LINES * --------------------------------------------- */ const lines =
          [];
        /* * TOP * LEFT → RIGHT */ if (hasTop) {
          const line = document.createElement("span");
          line.setAttribute("data-gsap-border-line", "top");
          Object.assign(line.style, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: `${topWidth}px`,
            background: style.borderTopColor,
            pointerEvents: "none",
            zIndex: "9999",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          });
          element.appendChild(line);
          lines.push({ element: line, axis: "x" });
        }
        /* * RIGHT * TOP → BOTTOM */ if (hasRight) {
          const line = document.createElement("span");
          line.setAttribute("data-gsap-border-line", "right");
          Object.assign(line.style, {
            position: "absolute",
            right: "0",
            top: "0",
            width: `${rightWidth}px`,
            height: "100%",
            background: style.borderRightColor,
            pointerEvents: "none",
            zIndex: "9999",
            transformOrigin: "center top",
            transform: "scaleY(0)",
          });
          element.appendChild(line);
          lines.push({ element: line, axis: "y" });
        }
        /* * BOTTOM * LEFT → RIGHT */ if (hasBottom) {
          const line = document.createElement("span");
          line.setAttribute("data-gsap-border-line", "bottom");
          Object.assign(line.style, {
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: `${bottomWidth}px`,
            background: style.borderBottomColor,
            pointerEvents: "none",
            zIndex: "9999",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          });
          element.appendChild(line);
          lines.push({ element: line, axis: "x" });
        }
        /* * LEFT * TOP → BOTTOM */ if (hasLeft) {
          const line = document.createElement("span");
          line.setAttribute("data-gsap-border-line", "left");
          Object.assign(line.style, {
            position: "absolute",
            left: "0",
            top: "0",
            width: `${leftWidth}px`,
            height: "100%",
            background: style.borderLeftColor,
            pointerEvents: "none",
            zIndex: "9999",
            transformOrigin: "center top",
            transform: "scaleY(0)",
          });
          element.appendChild(line);
          lines.push({ element: line, axis: "y" });
        }
        /* * --------------------------------------------- * IMPORTANT * * Hide ONLY the original borders. * All other styling remains untouched. * --------------------------------------------- */ const originalColors =
          {
            top: element.style.borderTopColor,
            right: element.style.borderRightColor,
            bottom: element.style.borderBottomColor,
            left: element.style.borderLeftColor,
          };
        if (hasTop) {
          element.style.borderTopColor = "transparent";
        }
        if (hasRight) {
          element.style.borderRightColor = "transparent";
        }
        if (hasBottom) {
          element.style.borderBottomColor = "transparent";
        }
        if (hasLeft) {
          element.style.borderLeftColor = "transparent";
        }
        /* * --------------------------------------------- * ANIMATE * --------------------------------------------- */ lines.forEach(
          ({ element: line, axis }, lineIndex) => {
            gsap.to(line, {
              ...(axis === "x" ? { scaleX: 1 } : { scaleY: 1 }),
              duration,
              delay: elementIndex * stagger + lineIndex * 0.03,
              ease,
              scrollTrigger: {
                trigger: element,
                start,
                toggleActions: "play none none none",
                once: true,
              },
            });
          },
        );
        /* * --------------------------------------------- * STORE CLEANUP DATA * --------------------------------------------- */ element.__gsapLineReveal =
          { lines, originalPosition: element.style.position, originalColors };
      });
      /* * Recalculate all ScrollTrigger positions * after the lines have been inserted. */ requestAnimationFrame(
        () => {
          ScrollTrigger.refresh();
        },
      );
    }, root);
    /* * --------------------------------------------- * CLEANUP * --------------------------------------------- */ return () => {
      ctx.revert();
      borderedElements.forEach((element) => {
        const data = element.__gsapLineReveal;
        if (!data) return;
        /* * Remove generated lines. */ data.lines.forEach(
          ({ element: line }) => {
            line.remove();
          },
        );
        /* * Restore original position. */ element.style.position =
          data.originalPosition;
        /* * Restore original border colors. */ element.style.borderTopColor =
          data.originalColors.top;
        element.style.borderRightColor = data.originalColors.right;
        element.style.borderBottomColor = data.originalColors.bottom;
        element.style.borderLeftColor = data.originalColors.left;
        delete element.__gsapLineReveal;
      });
    };
  }, [duration, stagger, ease, start]);
  return ref;
};
export default useLineReveal;

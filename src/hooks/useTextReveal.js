import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTextReveal = (options = {}) => {
  const ref = useRef(null);

  const {
    selector = "h1,h2,h3,h4,h5,h6,p,[data-text-reveal]",
    duration = 1.2,
    stagger = 0.06,
    ease = "power4.out",
    start = "top 85%",
  } = options;

  useLayoutEffect(() => {
    const root = ref.current;

    if (!root) return;

    const elements = Array.from(root.querySelectorAll(selector));

    if (!elements.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const originals = new Map();

    const escapeHTML = (value) =>
      value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const wrapWords = (node) => {
      /* ================= TEXT NODE ================= */

      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent
          .split(/(\s+)/)
          .map((word) => {
            if (word.trim() === "") {
              return word;
            }

            return `
              <span
                class="word-wrapper"
                style="
                  display:inline-block;
                  overflow:hidden;
                  vertical-align:top;
                "
              >
                <span
                  class="word"
                  style="
                    display:inline-block;
                    opacity:0;
                    transform:translateY(120%);
                    filter:blur(10px);
                    will-change:transform,opacity,filter;
                  "
                >
                  ${escapeHTML(word)}
                </span>
              </span>
            `;
          })
          .join("");
      }

      /* ================= BR ================= */

      if (node.nodeName === "BR") {
        return "<br/>";
      }

      /* ================= ELEMENT NODE ================= */

      if (node.nodeType === Node.ELEMENT_NODE) {
        const tag = node.tagName.toLowerCase();

        const attrs = Array.from(node.attributes)
          .filter((attr) => attr.name !== "style")
          .map(
            (attr) =>
              `${attr.name}="${escapeHTML(attr.value)}"`
          )
          .join(" ");

        const childrenHTML = Array.from(node.childNodes)
          .map(wrapWords)
          .join("");

        return `
          <${tag}${attrs ? ` ${attrs}` : ""}>
            ${childrenHTML}
          </${tag}>
        `;
      }

      return "";
    };

    const ctx = gsap.context(() => {
      elements.forEach((element) => {
        /* Save original HTML */
        originals.set(element, element.innerHTML);

        /* Convert text into animated words */
        element.innerHTML = Array.from(element.childNodes)
          .map(wrapWords)
          .join("");

        const words = element.querySelectorAll(".word");

        if (!words.length) return;

        gsap.to(words, {
          y: "0%",
          opacity: 1,
          filter: "blur(0px)",

          duration,
          stagger,

          ease,

          overwrite: "auto",

          scrollTrigger: {
            trigger: element,

            start,

            toggleActions: "play none none none",

            once: true,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();

      originals.forEach((html, element) => {
        element.innerHTML = html;
      });
    };
  }, [selector, duration, stagger, ease, start]);

  return ref;
};

export default useTextReveal;
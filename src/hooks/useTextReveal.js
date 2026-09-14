import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useTextReveal = (options = {}) => {
  const ref = useRef(null);

  const {
    selector = "h1,h2,h3,h4,h5,h6,p,[data-text-reveal]",
    duration = 1.5,
    stagger = 0.06,
    ease = "power4.out",
    start = "top 85%",
  } = options;

  useLayoutEffect(() => {
    const root = ref.current;

    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    /*
     * If the user prefers reduced motion,
     * don't modify the DOM at all.
     */
    if (prefersReducedMotion) return;

    // --------------------------------------------------
    // Find all target elements
    // --------------------------------------------------

    const selectedElements = Array.from(
      root.querySelectorAll(selector)
    );

    if (!selectedElements.length) return;

    /*
     * Prevent nested matching elements from being
     * animated twice.
     *
     * Example:
     *
     * <h2>
     *   Hello <span data-text-reveal>world</span>
     * </h2>
     *
     * Only the outer target is processed.
     */
    const elements = selectedElements.filter((element) => {
      return !selectedElements.some(
        (parent) =>
          parent !== element && parent.contains(element)
      );
    });

    // --------------------------------------------------
    // Store everything we modify
    // --------------------------------------------------

    const cleanupItems = [];

    // --------------------------------------------------
    // Check whether a node should be ignored
    // --------------------------------------------------

    const shouldIgnoreNode = (node) => {
      const parent = node.parentElement;

      if (!parent) return true;

      const tagName = parent.tagName.toLowerCase();

      /*
       * Never touch these elements.
       *
       * This prevents breaking scripts, styles,
       * SVG internals, textarea content, etc.
       */
      return [
        "script",
        "style",
        "noscript",
        "textarea",
        "input",
        "select",
        "option",
      ].includes(tagName);
    };

    // --------------------------------------------------
    // Create one animated word
    // --------------------------------------------------

    const createWordWrapper = (text) => {
      const wrapper = document.createElement("span");
      const word = document.createElement("span");

      /*
       * These styles belong ONLY to our animation
       * wrappers.
       *
       * The original text element's styles remain
       * completely untouched.
       */
      wrapper.style.display = "inline-block";
      wrapper.style.overflow = "hidden";
      wrapper.style.verticalAlign = "top";

      word.style.display = "inline-block";
      word.style.opacity = "0";
      word.style.transform = "translateY(120%)";
      word.style.filter = "blur(10px)";
      word.style.willChange = "transform, opacity, filter";

      word.textContent = text;

      wrapper.appendChild(word);

      return {
        wrapper,
        word,
      };
    };

    // --------------------------------------------------
    // Process text nodes
    // --------------------------------------------------

    const processTextNode = (textNode) => {
      if (
        !textNode.textContent ||
        !textNode.textContent.trim() ||
        shouldIgnoreNode(textNode)
      ) {
        return [];
      }

      const fragment = document.createDocumentFragment();
      const createdWrappers = [];

      /*
       * Split into:
       *
       * "Hello"
       * " "
       * "beautiful"
       * " "
       * "world"
       *
       * Whitespace is kept exactly as it originally was.
       */
      const parts = textNode.textContent.split(/(\s+)/);

      parts.forEach((part) => {
        if (!part) return;

        /*
         * Keep whitespace as a normal text node.
         *
         * This prevents changing the original spacing.
         */
        if (/^\s+$/.test(part)) {
          fragment.appendChild(
            document.createTextNode(part)
          );
          return;
        }

        const { wrapper, word } =
          createWordWrapper(part);

        fragment.appendChild(wrapper);

        createdWrappers.push({
          wrapper,
          word,
        });
      });

      /*
       * Replace only this text node.
       *
       * Parent element, classes, styles, attributes,
       * links, spans, strong tags, etc. remain untouched.
       */
      textNode.parentNode.replaceChild(
        fragment,
        textNode
      );

      return createdWrappers;
    };

    // --------------------------------------------------
    // Process one element
    // --------------------------------------------------

    const processElement = (element) => {
      const textNodes = [];

      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode(node) {
            /*
             * Ignore text inside our own animation
             * wrappers if the hook somehow runs again.
             */
            if (
              node.parentElement?.classList.contains(
                "text-reveal-word"
              )
            ) {
              return NodeFilter.FILTER_REJECT;
            }

            return NodeFilter.FILTER_ACCEPT;
          },
        }
      );

      let currentNode;

      while ((currentNode = walker.nextNode())) {
        textNodes.push(currentNode);
      }

      const words = [];

      textNodes.forEach((textNode) => {
        const created = processTextNode(textNode);

        created.forEach((item) => {
          item.wrapper.classList.add(
            "text-reveal-word-wrapper"
          );

          item.word.classList.add(
            "text-reveal-word"
          );

          words.push(item.word);

          cleanupItems.push(item);
        });
      });

      if (!words.length) return;

      // ------------------------------------------------
      // GSAP animation
      // ------------------------------------------------

      gsap.fromTo(
        words,
        {
          y: "120%",
          opacity: 0,
          filter: "blur(10px)",
        },
        {
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
        }
      );
    };

    // --------------------------------------------------
    // GSAP context
    // --------------------------------------------------

    const ctx = gsap.context(() => {
      elements.forEach(processElement);
    }, root);

    // --------------------------------------------------
    // Cleanup
    // --------------------------------------------------

    return () => {
      /*
       * Kill ScrollTriggers / GSAP animations first.
       */
      ctx.revert();

      /*
       * Restore original text nodes.
       *
       * We don't restore innerHTML because that could
       * destroy changes made by React or other code.
       */
      cleanupItems.reverse().forEach(({ wrapper, word }) => {
        if (!wrapper.parentNode) return;

        const textNode = document.createTextNode(
          word.textContent || ""
        );

        wrapper.parentNode.replaceChild(
          textNode,
          wrapper
        );
      });

      /*
       * Merge adjacent text nodes so the DOM returns
       * as close as possible to its original structure.
       */
      elements.forEach((element) => {
        element.normalize();
      });
    };
  }, [
    selector,
    duration,
    stagger,
    ease,
    start,
  ]);

  return ref;
};

export default useTextReveal;

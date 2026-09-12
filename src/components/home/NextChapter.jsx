import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";


/* =========================================================
   IMAGES
========================================================= */

// Change these imports to your actual image files.

import image1 from "../../assets/gallery/image1.avif";
import image2 from "../../assets/gallery/image2.avif";
import image3 from "../../assets/gallery/image3.avif";
import image4 from "../../assets/gallery/image4.avif";
import image5 from "../../assets/gallery/image5.avif";



/* =========================================================
   GALLERY DATA
========================================================= */

const galleryImages = [
  {
    src: image1,
    width: 350,
    height: 520,
    top: 0,
  },

  {
    src: image2,
    width: 350,
    height: 445,
    top: 0,
  },

  {
    src: image3,
    width: 350,
    height: 525,
    top: 0,
  },

  {
    src: image4,
    width: 350,
    height: 525,
    top: 0,
  },

  {
    src: image5,
    width: 350,
    height: 410,
    top: 0,
  },

  
];


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function NextChapter() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;


    const ctx = gsap.context(() => {

      /* ===================================================
         GET ORIGINAL ITEMS
      =================================================== */

      const originalItems = gsap.utils.toArray(
        ".chapter-gallery-item"
      );

      if (!originalItems.length) return;


      /* ===================================================
         DUPLICATE ITEMS
         
         We duplicate the complete sequence so that when
         the first group moves away, the second group is
         already visible.
      =================================================== */

      const clones = originalItems.map((item) => {
        const clone = item.cloneNode(true);

        clone.setAttribute(
          "aria-hidden",
          "true"
        );

        track.appendChild(clone);

        return clone;
      });


      /* ===================================================
         ALL ITEMS
      =================================================== */

      const allItems = [
        ...originalItems,
        ...clones,
      ];


      /* ===================================================
         POSITION / DIMENSIONS
      =================================================== */

      const setupItems = () => {

        const isMobile =
          window.innerWidth < 640;

        const isTablet =
          window.innerWidth >= 640 &&
          window.innerWidth < 1024;


        allItems.forEach((item, index) => {

          const originalIndex =
            index % galleryImages.length;

          const data =
            galleryImages[originalIndex];


          /*
           * Responsive scaling.
           *
           * Desktop = original size
           * Tablet = smaller
           * Mobile = smaller again
           */

          let scale = 1;

          if (isTablet) {
            scale = 0.78;
          }

          if (isMobile) {
            scale = 0.55;
          }


          item.style.width =
            `${data.width * scale}px`;

          item.style.height =
            `${data.height * scale}px`;


          /*
           * Different vertical offsets.
           *
           * This prevents the carousel from looking
           * like a straight uniform row.
           */

          const offsets = [
            0,
            35,
            -5,
            35,
            0,
            25,
            -15,
          ];

          const offset =
            offsets[
              originalIndex %
              offsets.length
            ];


          item.style.transform =
            `translateY(${offset * scale}px)`;
        });
      };


      setupItems();


      /* ===================================================
         CALCULATE ONE GROUP WIDTH
      =================================================== */

      const getGroupWidth = () => {

        let width = 0;

        originalItems.forEach(
          (item, index) => {

            const rect =
              item.getBoundingClientRect();

            width += rect.width;

            /*
             * Gap between images.
             */

            width +=
              window.innerWidth < 640
                ? 12
                : window.innerWidth < 1024
                  ? 16
                  : 20;
          }
        );


        return width;
      };


      /* ===================================================
         INFINITE LOOP
      =================================================== */

      let groupWidth =
        getGroupWidth();


      /*
       * Start at 0.
       */

      gsap.set(track, {
        x: 0,
      });


      /*
       * Linear continuous movement.
       */

      const speed =
        window.innerWidth < 640
          ? 35
          : window.innerWidth < 1024
            ? 45
            : 55;


      const animation = gsap.to(
        track,
        {
          x: -groupWidth,

          duration:
            groupWidth / speed,

          ease: "none",

          repeat: -1,

          modifiers: {

            x: (value) => {

              const x =
                parseFloat(value);


              /*
               * When the first group has
               * completely moved away,
               * wrap back to the beginning.
               */

              const wrapped =
                gsap.utils.wrap(
                  -groupWidth,
                  0,
                  x
                );


              return `${wrapped}px`;
            },
          },
        }
      );


      /* ===================================================
         RESIZE
      =================================================== */

      const handleResize = () => {

        animation.kill();

        setupItems();

        groupWidth =
          getGroupWidth();


        const newSpeed =
          window.innerWidth < 640
            ? 35
            : window.innerWidth < 1024
              ? 45
              : 55;


        gsap.set(track, {
          x: 0,
        });


        gsap.to(track, {
          x: -groupWidth,

          duration:
            groupWidth / newSpeed,

          ease: "none",

          repeat: -1,

          modifiers: {

            x: (value) => {

              const x =
                parseFloat(value);

              const wrapped =
                gsap.utils.wrap(
                  -groupWidth,
                  0,
                  x
                );

              return `${wrapped}px`;
            },
          },
        });
      };


      window.addEventListener(
        "resize",
        handleResize
      );


      /* ===================================================
         CLEANUP
      =================================================== */

      return () => {

        animation.kill();

        window.removeEventListener(
          "resize",
          handleResize
        );

        clones.forEach((clone) => {
          clone.remove();
        });
      };

    }, section);


    return () => {
      ctx.revert();
    };

  }, []);


  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >

        <div
          className="
            absolute
            -right-[15%]
            top-[-20%]
            h-[140%]
            w-[55%]
            rotate-[12deg]
            bg-gradient-to-l
            from-[#171717]
            via-[#090909]
            to-transparent
            opacity-60
            blur-[25px]
          "
        />

        <div
          className="
            absolute
            left-[5%]
            bottom-[-40%]
            h-[100%]
            w-[40%]
            rotate-[-12deg]
            bg-[#090909]
            opacity-70
            blur-[30px]
          "
        />

      </div>


      {/* ===================================================
          CONTENT
      =================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[1500px]
          flex-col
          items-center

          px-5
          pb-[70px]
          pt-[100px]

          sm:px-8
          sm:pb-[90px]
          sm:pt-[115px]

          md:px-10
          md:pb-[110px]
          md:pt-[135px]

          lg:pb-[130px]
          lg:pt-[150px]
        "
      >

        {/* =================================================
            HEADING
        ================================================= */}

        <h2
          className="
            m-0
            max-w-[1000px]

            text-center

            font-[font2]
            text-[clamp(42px,7vw,90px)]
            font-black
            uppercase
            leading-[0.9]
            tracking-[-0.065em]

            bg-gradient-to-r
            from-[#9b9283]
            via-[#e56b32]
            to-[#dba38c]

            bg-clip-text
            text-transparent
          "
        >
          YOUR NEXT CHAPTER
          <br />

          STARTS WITH A WALL.
        </h2>


        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-[28px]

            max-w-[500px]

            text-center

            font-[font2]
            text-[14px]
            font-medium
            leading-[1.45]
            tracking-[-0.02em]

            text-white

            sm:mt-[30px]
            sm:text-[15px]

            md:mt-[32px]
            md:text-[16px]
          "
        >
          Tell us about your space. We’ll send you a design
          direction mood board within 5 days.
        </p>


        {/* =================================================
            CTA
        ================================================= */}

        <a
          href="#contact"
          className="
            group
            mt-[32px]

            flex
            min-h-[56px]
            items-center
            justify-center
            gap-3

            bg-[#df5b2b]

            px-[28px]

            font-[font2]
            text-[13px]
            font-semibold
            uppercase
            leading-none
            tracking-[-0.01em]

            text-white

            transition-transform
            duration-300

            hover:scale-[1.03]

            sm:mt-[35px]
            sm:min-h-[58px]
            sm:px-[32px]
            sm:text-[14px]

            md:min-h-[60px]
            md:px-[35px]
          "
        >

          <span>
            START A CONVERSATION
          </span>

          <span
            className="
              text-[20px]
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


      {/* ===================================================
          INFINITE IMAGE CAROUSEL
      =================================================== */}

      <div
        className="
          relative
          z-10

          mt-[20px]

          w-full
          overflow-hidden

          pb-[18px]

          sm:mt-[30px]
          sm:pb-[25px]

          md:mt-[35px]
          md:pb-[30px]

          lg:mt-[45px]
          lg:pb-[40px]
        "
      >

        {/* =================================================
            TRACK
        ================================================= */}

        <div
          ref={trackRef}
          className="
            flex
            w-max
            items-start
            gap-[12px]

            will-change-transform

            sm:gap-[16px]

            md:gap-[20px]
          "
        >

          {galleryImages.map(
            (image, index) => (

              <div
                key={`image-${index}`}
                className="
                  chapter-gallery-item

                  relative
                  shrink-0
                  overflow-hidden

                  bg-[#111]
                "
                style={{
                  width:
                    `${image.width}px`,

                  height:
                    `${image.height}px`,
                }}
              >

                <img
                  src={image.src}
                  alt=""
                  draggable="false"

                  className="
                    block
                    h-full
                    w-full
                    object-cover

                    select-none
                  "
                />

              </div>

            )
          )}

        </div>

      </div>


      {/* ===================================================
          BOTTOM SPACE
      =================================================== */}

      <div
        className="
          relative
          z-10
          h-[30px]
          w-full

          sm:h-[40px]

          md:h-[50px]
        "
      />

    </section>
  );
}
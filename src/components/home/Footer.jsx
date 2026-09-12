import React, { useState } from "react";

/* =========================================================
   DATA
========================================================= */

const menuLinks = [
  "Home",
  "About",
  "Work",
  "Service",
  "Blog",
  "Contact",
];

const cmsLinks = [
  "Service Details",
  "Work Details",
  "Blog Details",
];

const socialLinks = [
  "Instagram",
  "Facebook",
  "LinkedIn",
];


/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Subscribed:", email);

    setEmail("");
  };

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        text-white
      "
    >

      {/* =====================================================
          FULL WIDTH TOP BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-px
          w-full
          bg-[#292929]
        "
      />


      {/* =====================================================
          MAIN CENTERED GRID
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1280px]

          border-l
          border-r
          border-[#292929]
        "
      >

        {/* ===================================================
            TOP ROW
        =================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1

            md:grid-cols-3
          "
        >

          {/* =================================================
              MENU
          ================================================= */}

          <FooterCell
            className="
              min-h-[340px]

              border-b
              border-[#292929]

              md:border-b-0
              md:border-r
            "
          >

            <FooterHeading>
              (MENU)
            </FooterHeading>

            <nav
              className="
                mt-[28px]

                flex
                flex-col
                gap-[8px]

                sm:mt-[31px]
                sm:gap-[9px]
              "
            >
              {menuLinks.map((link) => (
                <FooterLink
                  key={link}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </FooterLink>
              ))}
            </nav>

          </FooterCell>


          {/* =================================================
              CMS
          ================================================= */}

          <FooterCell
            className="
              min-h-[280px]

              border-b
              border-[#292929]

              md:border-b-0
              md:border-r
            "
          >

            <FooterHeading>
              (CMS)
            </FooterHeading>

            <nav
              className="
                mt-[28px]

                flex
                flex-col
                gap-[9px]

                sm:mt-[31px]
              "
            >
              {cmsLinks.map((link) => (
                <FooterLink
                  key={link}
                  href="#"
                >
                  {link}
                </FooterLink>
              ))}
            </nav>

          </FooterCell>


          {/* =================================================
              OTHER PAGES
          ================================================= */}

          <FooterCell
            className="
              min-h-[230px]

              border-b
              border-[#292929]

              md:border-b-0
            "
          >

            <FooterHeading>
              (OTHER PAGES)
            </FooterHeading>

            <nav
              className="
                mt-[28px]

                flex
                flex-col
              "
            >
              <FooterLink href="#">
                404
              </FooterLink>
            </nav>

          </FooterCell>

        </div>


        {/* ===================================================
            FULL WIDTH HORIZONTAL LINE
        =================================================== */}

        <FullWidthLine
          top="340px"
        />


        {/* ===================================================
            EMPTY MIDDLE ROW
        =================================================== */}

        <div
          className="
            h-[64px]
            w-full
          "
        />


        {/* ===================================================
            FULL WIDTH SECOND LINE
        =================================================== */}

        <FullWidthLine
          top="404px"
        />


        {/* ===================================================
            BOTTOM FOOTER ROW
        =================================================== */}

        <div
          className="
            grid
            w-full
            grid-cols-1

            md:grid-cols-3
          "
        >

          {/* =================================================
              CONTACT
          ================================================= */}

          <FooterCell
            className="
              min-h-[300px]

              border-b
              border-[#292929]

              md:min-h-[250px]
              md:border-b-0
              md:border-r
            "
          >

            <FooterHeading>
              (CONTACT)
            </FooterHeading>

            <div
              className="
                mt-[27px]

                flex
                flex-col
                gap-[7px]

                font-[font2]
                text-[20px]
                font-semibold
                leading-[1.22]
                tracking-[-0.04em]

                text-[#625e57]

                sm:mt-[30px]
                sm:text-[21px]

                md:text-[22px]

                lg:text-[23px]
              "
            >

              <p
                className="
                  m-0
                  max-w-[340px]
                "
              >
                401 Broadway, Suite 4N, New
                <br />
                York, NY 10013
              </p>

              <a
                href="tel:+1234567890"
                className="
                  w-fit
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                +1 (234) 567-890
              </a>

              <a
                href="mailto:info@interior.com"
                className="
                  w-fit
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                info@interior.com
              </a>

            </div>

          </FooterCell>


          {/* =================================================
              SOCIAL MEDIA
          ================================================= */}

          <FooterCell
            className="
              min-h-[270px]

              border-b
              border-[#292929]

              md:min-h-[250px]
              md:border-b-0
              md:border-r
            "
          >

            <FooterHeading>
              (SOCIAL MEDIA)
            </FooterHeading>

            <nav
              className="
                mt-[27px]

                flex
                flex-col
                gap-[8px]

                font-[font2]
                text-[20px]
                font-semibold
                leading-[1.12]
                tracking-[-0.04em]

                text-[#625e57]

                sm:text-[21px]
                md:text-[22px]
                lg:text-[23px]
              "
            >

              {socialLinks.map((social) => (
                <a
                  key={social}
                  href="#"
                  className="
                    w-fit

                    transition-all
                    duration-300

                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {social}
                </a>
              ))}

            </nav>

          </FooterCell>


          {/* =================================================
              SUBSCRIBE
          ================================================= */}

          <FooterCell
            className="
              min-h-[270px]
            "
          >

            <FooterHeading>
              (SUBSCRIBE)
            </FooterHeading>

            <form
              onSubmit={handleSubmit}

              className="
                mt-[44px]

                w-full
                max-w-[365px]
              "
            >

              <div
                className="
                  flex
                  w-full
                  items-center

                  border-b
                  border-[#7b7b7b]

                  pb-[17px]
                "
              >

                <input
                  type="email"
                  value={email}

                  onChange={(e) =>
                    setEmail(e.target.value)
                  }

                  placeholder="Enter Your Email"

                  aria-label="Enter Your Email"

                  className="
                    min-w-0
                    flex-1

                    border-0
                    bg-transparent
                    p-0

                    font-[font2]
                    text-[14px]
                    font-semibold
                    leading-none
                    tracking-[-0.025em]

                    text-white

                    outline-none

                    placeholder:text-white
                  "
                />

                <button
                  type="submit"
                  aria-label="Subscribe"

                  className="
                    ml-[15px]

                    flex
                    h-[24px]
                    w-[24px]
                    shrink-0

                    items-center
                    justify-center

                    border-0
                    bg-transparent
                    p-0

                    font-[font2]
                    text-[22px]
                    font-normal
                    leading-none

                    text-white

                    transition-transform
                    duration-300

                    hover:translate-x-1
                  "
                >
                  →
                </button>

              </div>

            </form>

          </FooterCell>

        </div>


        {/* ===================================================
            LINE ABOVE LEGAL ROW
        =================================================== */}

        <FullWidthLine
          top="auto"
          extraClass="relative mt-0"
        />


        {/* ===================================================
            LEGAL / META ROW
        =================================================== */}

        <div
          className="
            relative
            flex
            min-h-[62px]
            w-full

            items-center

            border-b
            border-[#292929]

            px-[30px]

            font-[font2]

            sm:px-[30px]

            md:min-h-[56px]
          "
        >

          {/* =================================================
              DESIGNED BY
          ================================================= */}

          <div
            className="
              w-1/3

              font-[font2]
              text-[11px]
              font-semibold
              leading-[1.1]
              tracking-[-0.03em]

              text-white

              sm:text-[12px]

              md:text-[13px]

              lg:text-[14px]
            "
          >
            Designed by &amp; Developed by
            Artificer Design Agency LLC
          </div>


          {/* =================================================
              PRIVACY
          ================================================= */}

          <div
            className="
              flex
              w-1/3
              justify-center
            "
          >

            <a
              href="#privacy"
              className="
                font-[font2]
                text-[11px]
                font-semibold
                leading-none

                tracking-[-0.03em]

                text-white

                transition-opacity
                duration-300

                hover:opacity-60

                sm:text-[12px]

                md:text-[13px]

                lg:text-[14px]
              "
            >
              Privacy Policy
            </a>

          </div>


          {/* =================================================
              TERMS
          ================================================= */}

          <div
            className="
              flex
              w-1/3
              justify-end
            "
          >

            <a
              href="#terms"
              className="
                font-[font2]
                text-[11px]
                font-semibold
                leading-none

                tracking-[-0.03em]

                text-white

                transition-opacity
                duration-300

                hover:opacity-60

                sm:text-[12px]

                md:text-[13px]

                lg:text-[14px]
              "
            >
              Terms &amp; Conditions
            </a>

          </div>

        </div>


        {/* ===================================================
            PRIMEDECOR BRAND
        =================================================== */}

        <div
          className="
            relative
            flex
            w-full

            items-center
            justify-center

            overflow-hidden

            border-b
            border-[#292929]

            px-[8px]

            py-[32px]

            sm:px-[12px]
            sm:py-[38px]

            md:py-[45px]

            lg:py-[48px]
          "
        >

          <div
            className="
              w-full

              overflow-hidden

              text-center

              font-[font2]

              text-[clamp(55px,11.8vw,175px)]

              font-black

              uppercase

              leading-[0.78]

              tracking-[-0.09em]

              text-white

              whitespace-nowrap
            "
          >
            PRIMEDECOR
            <sup
              className="
                relative
                top-[-0.48em]

                ml-[2px]

                font-[font2]
                text-[0.28em]
                font-black

                tracking-[-0.05em]
              "
            >
              ®
            </sup>
          </div>

        </div>


        {/* ===================================================
            FINAL EMPTY SPACE / GRID AREA
        =================================================== */}

        <div
          className="
            h-[45px]
            w-full

            sm:h-[55px]

            md:h-[65px]
          "
        />

      </div>


      {/* =====================================================
          FINAL FULL VIEWPORT BORDER
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0

          h-px
          w-full

          bg-[#292929]
        "
      />

    </footer>
  );
}


/* =========================================================
   FOOTER CELL
========================================================= */

function FooterCell({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        relative

        px-[30px]
        py-[35px]

        sm:px-[30px]
        sm:py-[38px]

        md:px-[30px]
        md:py-[38px]

        lg:px-[30px]
        lg:py-[38px]

        ${className}
      `}
    >
      {children}
    </div>
  );
}


/* =========================================================
   FOOTER HEADING
========================================================= */

function FooterHeading({ children }) {
  return (
    <div
      className="
        font-[font2]

        text-[12px]
        font-semibold

        uppercase
        leading-none

        tracking-[-0.025em]

        text-white

        sm:text-[13px]

        md:text-[14px]

        lg:text-[15px]
      "
    >
      {children}
    </div>
  );
}


/* =========================================================
   FOOTER LINK
========================================================= */

function FooterLink({
  children,
  href,
}) {
  return (
    <a
      href={href}

      className="
        block
        w-fit

        font-[font2]

        text-[21px]
        font-semibold

        leading-[1.08]

        tracking-[-0.04em]

        text-[#625e57]

        transition-all
        duration-300

        hover:translate-x-1
        hover:text-white

        sm:text-[22px]

        md:text-[23px]

        lg:text-[24px]
      "
    >
      {children}
    </a>
  );
}


/* =========================================================
   FULL WIDTH LINE
========================================================= */

function FullWidthLine({
  top = "auto",
  extraClass = "",
}) {
  return (
    <div
      aria-hidden="true"

      className={`
        pointer-events-none

        absolute

        left-1/2

        z-10

        h-px

        w-screen

        -translate-x-1/2

        bg-[#292929]

        ${top !== "auto" ? `top-[${top}]` : ""}

        ${extraClass}
      `}
    />
  );
}
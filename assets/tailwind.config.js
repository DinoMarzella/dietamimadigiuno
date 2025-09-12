

/** @type {import('tailwindcss').Config} */

function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}



module.exports = {
  content: [
    "../layout/*.liquid",
    "../templates/*.*",
    "../sections/*.liquid",
    "../snippets/*.liquid",
    "../assets/*.js",
    "../assets/*.css",
    "../assets/*.scss",
    "../assets/*.liquid",
    "../locales/*.json",
    "../config/*.json",
  ],
  theme: {
    extend: {
      colors: {
        primary: withOpacityValue("--color-primary"),
        contrast: withOpacityValue("--color-contrast"),
        notice: withOpacityValue("--color-accent"),
        shopPay: "var(--color-shop-pay)",
        buttonColor: "#73994a",
        prolon_green: "#73984a",
        prolon_orange: "#73994a",
        prolon_light_orange: "rgb(252 212 165 / 30%)",
        prolon_brown: "#9a6142",
        prolon_light_brown: "rgb(154 97 66 / .4)",
        prolon_dark_orange: "#73994a",
        prolon_primary: "#73984a",
        // prolon_primary: '#317040',
        prolon_light_primary: "#F4F7F1",
        prolon_dark_primary: "#365f44",

        prolon_light_primary_hover: "#cfdbc8",
        prolon_secondary: "#73994a",
        prolon_dark_secondary: "#73994a",

        prolon: "#73994a",
        prolon_1: "#78A117",
        prolon_primary: "#73984a",

        prolon_secondary: "#f7931d",
        prolon_orange: "#f7931d",
        prolon_green: "#73984a",
        cart: "#f2f1f58f",
      },
      screens: {
        sm: "32em",
        md: "48em",
        lg: "64em",
        xl: "80em",
        "2xl": "96em",
        "sm-max": { max: "48em" },
        "sm-only": { min: "32em", max: "48em" },
        "md-only": { min: "48em", max: "64em" },
        "lg-only": { min: "64em", max: "80em" },
        "xl-only": { min: "80em", max: "96em" },
        "2xl-only": { min: "96em" },
        m: { max: "767px" },
        d: { min: "768px" },
        mh900: { raw: "(min-height: 980px)" },
      },
      spacing: {
        nav: "var(--height-nav)",
        screen: "var(--screen-height, 100vh)",
        90: "22rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        140: "35rem",
        160: "40rem",
        200: "50rem",
      },
      height: {
        screen: "var(--screen-height, 100vh)",
        "screen-no-nav":
          "calc(var(--screen-height, 100vh) - var(--height-nav))",
      },
      width: {
        mobileGallery: "calc(100vw - 3rem)",
      },
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"],
        avant: ["ITC Avant Garde Gothic", "sans-serif"],
        quincy: ["Quincy CF", "serif"],
        interstate: ["interstate", "sans-serif"],
        interCondensed: ["interstate-condensed", "sans-serif"],
        harmonia: ["ITC Avant Garde Gothic", "sans-serif"],
        sans: [
          "ITC Avant Garde Gothic",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: ["Avenir Next", "ui-serif"],
      },
      zIndex: {
        1000: 1000,
        950: 950,
      },
      fontSize: {
        display: ["var(--font-size-display)", "1.1"],
        heading: ["var(--font-size-heading)", "1.25"],
        lead: ["var(--font-size-lead)", "1.333"],
        copy: ["var(--font-size-copy)", "1.5"],
        fine: ["var(--font-size-fine)", "1.333"],
        28: "28px",
        40: "40px",
        64: "64px",
      },
      maxWidth: {
        "prose-narrow": "45ch",
        "prose-wide": "80ch",
        container: "1520px",
      },
      boxShadow: {
        border: "inset 0px 0px 0px 1px rgb(var(--color-primary) / 0.08)",
        darkHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.4)",
        lightHeader: "inset 0px -1px 0px 0px rgba(21, 21, 21, 0.05)",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

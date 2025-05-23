/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: true,
  content: [
    "./src/**/*.{html,ts,css,scss,sass}",
    "./flexy-demy-ui/**/*/*.{html,ts,css,scss,sass}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "721px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1800px",
      },
      spacing: {
        52: "52px",
        70: "70px",
        34: "34px",
        82: "82px",
        50: "50%",
        "below-logo": "82px",
      },
      animation: {
        horizontalBounce: "horizontalBounce 2s ease-in-out infinite",
      },
      colors: {
        primary: "var(--color-primary)",
        button: "var(--button)",
        white: "var(--color-white)",
        whiteDark: "var(--color-white-dark)",
        textColor: "var(--text-color)",
        textFade: "var(--text-fade)",
        tableHeader: "var(--table-header-color)",
        accent: "var(--color-accent)",
        "accent-2": "var(--color-accent-2)",
        "subject-primary": "#2c3e50",
        "subject-meta": "#7f8c8d",
        "subject-not-started": "#e74c3c",
        "subject-completed": "#2ecc71",
        "subject-starflow": "#3498db",
      },
      fontSize: {
        sidebar: "var(--side-bar-font-size)",
        tableHeader: "var(--table-header-font-size)",
      },
      backgroundColor: {
        auth: "var(--auth-background)",
        dashboardBg: "var(--dashboard-background)",
      },
      display: ["table-row"],
    },
    variants: {
      extend: {
        translate: ["hover"],
        shadow: ["hover"],
      },
    },
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
  important: true,
};

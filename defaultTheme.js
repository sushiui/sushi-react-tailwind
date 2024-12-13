const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  extend: {
    width: {
      "status-icon-xs": "10px",
      "status-icon-sm": "14px",
      "status-icon-base": "20px",
      "status-icon-lg": "24px",
      "status-icon-xl": "30px",
    },
    height: {
      "status-icon-xs": "10px",
      "status-icon-sm": "14px",
      "status-icon-base": "20px",
      "status-icon-lg": "24px",
      "status-icon-xl": "30px",
    },
    minHeight: {
      "30px": "30px",
      "280px": "280px",
    },
    maxHeight: {
      128: "32rem",
      "9.0072e15px": "9.0072e15px",
    },
    fontSize: {
      ...defaultTheme.fontSize,
      base: ["14px", "145%"],
      "5px": "5px",
      "14px": "14px",
      "15px": "15px",
      "16px": "16px",
    },
    fontFamily: {
      sarabun: ["Sarabun", ...defaultTheme.fontFamily.sans],
    },
    opacity: {
      35: ".35",
    },
    colors: {
      light: {
        95: '#f3f3f3',
      },
      dark: {
        6: "rgba(0,0,0,0.06)",
        10: "rgba(0,0,0,0.10)",
        35: "rgba(0,0,0,0.35)",
        45: "rgba(0, 0, 0, 0.45)",
        900: "#000000",
      },
      // https://coolors.co/gradient-maker/ffffff-fef4e9-feecd3-fde3bc-fddba6-fcd28f-fcca79-fcc162-fcb94b-fcb034?position=0,10,20,30,40,50,60,70,80,90&opacity=100,100,100,100,100,100,100,100,100,100&type=linear&rotation=90
      primary: {
        50: "#fef3e6",
        100: "#FEF4E9",
        200: "#feecd3",
        300: "#fde3bc",
        400: "#fddba6",
        500: "#fcd28f",
        600: "#fcca79",
        700: "#fcc162",
        800: "#fcb94b",
        900: "#fcb034",
      },
      secondary: {
        100: "#f2f2f3",
        800: "#e5e5e6",
      },
      gray: {
        100: "#97989b",
        800: "#646568",
      },
      green: {
        100: "#d9e77e",
        800: "#bfd629",
      },
      link: {
        900: "#00a7cc",
      },
      danger: {
        900: "#b60000",
      },
      warning: {
        30: "#fff6cc",
      },
      status: {
        disable: "#E6E6E6",
        "wait-for-action": "#9DA6AD",
        "work-in-progress": "#0064C5",
        remind: "#E55F14",
        complete: "#006600",
        urgent: "#B60000",
        "wait-for-uncontrol": "#FFD200",
        end: "#9DA6AD",
        "need-urgent-action": "#B60000",
      },
      notification: {
        "icon-error": "#B60000",
        "icon-success": "#006600",
        "icon-info": "#0064C5",
        "icon-warning": "#FFD200",
      },
    },
    lineHeight: {
      141: "141%",
    },
    boxShadow: {
      10: "0 0 0 1px rgba(0,0,0,0.10)",
    },
    keyframes: {
      fadeIn: {
        from: { background: "rgba(17, 24, 39, .0)" },
        to: { background: "rgba(17, 24, 39, .4)" },
      },
      zoomIn: {
        "0%": { transform: "scale(0.5)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      "fade-in": "fadeIn .3s",
      "zoom-in": "zoomIn .3s",
    },
    inset: {
      "-20px": "-20px",
    },
    borderRadius: {
      "4px": "4px",
      "6px": "6px",
    },
    borderWidth: {
      "1px": "1px",
      "5px": "5px",
    },
    spacing: {
      "2px": "2px",
      "4px": "4px",
      "5px": "5px",
      "6px": "6px",
      "6.5px": "6.5px",
      "7px": "7px",
      "10px": "10px",
      "11px": "11px",
      "16px": "16px",
      "20px": "20px",
      "22px": "22px",
      "25px": "25px",
      "30px": "30px",
      "34px": "34px",
      "100px": "100px",
      "268px": "268px",
      "300px": "300px",
      "10%": "10%",
      "50%": "50%",
      "100%": "100%",
      "150%": "150%",
    },
    zIndex: {
      9999: "9999",
      "1px": "1px",
    },
    lineHeight: {
      "24px": "24px",
      1.5715: "1.5715",
    },
  },
};

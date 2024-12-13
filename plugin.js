const defaultSushiTheme = require("./defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = plugin(
  function ({ addBase, theme, addComponents }) {
    addComponents([
      {
        ".ss-menu": {
          ".ss-selected": {
            position: "relative",
            backgroundColor: theme("colors.primary.50"),
            borderRadius: "4px",
            "&::after": {
              content: '""!important',
              position: "absolute!important",
              backgroundColor: theme("colors.primary.900"),
              width: "4px",
              borderRadius: "2px",
              height: "1.25rem",
              top: "50%",
              transform: "translateY(-50%)",
              right: "8px",
            },
          },
          "&.rc-menu-inline": {
            ".rc-menu-item,.rc-menu-submenu-title": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "5px",

              wordBreak: "normal",
              whiteSpace: "pre-line",
            },
            ".rc-menu-item-bold": {
              fontWeight: "bold",
            },
            "ul > li": {
              fontWeight: "normal !important",
              margin: "5px 0",
            },
            ".rc-menu-submenu-title": {
              cursor: "pointer",
              padding: "8px 8px !important",
              "&:hover": {
                backgroundColor: theme("colors.primary.50"),
                borderRadius: "4px",
              },
            },
            ".rc-menu-submenu-disabled > .rc-menu-submenu-title:hover": {
              backgroundColor: "inherit",
              cursor: "default",
            },
            ".rc-menu-hidden": {
              display: "none",
            },
            ".rc-menu-item": {
              "&:hover": {
                backgroundColor: theme("colors.primary.50"),
                borderRadius: "4px",
              },
            },
            ".rc-menu-item-disabled:hover": {
              backgroundColor: "inherit",
              cursor: "default",
            },
          },
        },
      },
      {
        "input[type='radio']:checked": {
          backgroundColor: theme("colors.primary.900"),
        },
      },
      {
        ".ss-table": {
          table: {
            width: "100%",
            borderCollapse: "collapse",
            overflow: "hidden",
            borderRadius: "8px",
          },
          "table > thead.rc-table-thead": {
            textAlign: "left",
            backgroundColor: theme("colors.dark.10"),
          },
          "table > thead > tr > th": {
            padding: "8px",
            borderRight: "2px solid white",
            borderBottom: "2px solid white",
          },
          "tbody.rc-table-tbody > tr.rc-table-row > td.rc-table-cell, tbody.rc-table-tbody > tr.rc-table-placeholder > td.rc-table-cell": {
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: theme("colors.dark.6"),
            padding: "8px",
          },
          "tbody.rc-table-tbody > tr.rc-table-row:first-child > td.rc-table-cell": {
            paddingTop: "6px",
          },
          ".last-th": {
            borderRight: "0px",
          },
          ".rc-table-cell-ellipsis": {
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            wordBreak: "keep-all",
          },
        },
      },
      {
        ".ss-table-error": {
          "tbody.rc-table-tbody > tr.rc-table-row > td.rc-table-cell, tbody.rc-table-tbody > tr.rc-table-placeholder > td.rc-table-cell": {
            backgroundColor: "#f6d5e1",
          },
        },
      },
      {
        ".ss-dropdown": {
          ".ss-select": {
            width: "100%",
            height: "100%",
            position: "relative",
            cursor: "pointer",
          },
          ".ss-select-selection-search-input": {
            height: "100%",
            cursor: "pointer",
          },
          ".ss-select-selection-placeholder": {
            alignSelf: "center",
            color: "rgba(0,0,0,0.37)",
            width: "100%",
          },
          ".ss-select-selector": {
            backgroundColor: "#fff",
            position: "relative",
            boxShadow: "0 0 0 1px rgba(0,0,0,0.10)",
            borderRadius: "0.25rem",
            width: "100%",
            height: "100%",
            padding: "4px 12px 4px 11px",
            display: "flex",
            paddingBottom: "4px",
          },
          ".ss-select-open": {
            ".ss-select-selector": {
              "&:focus-within": {
                borderBottom: "2px solid #fcb034",
                paddingBottom: "2px",
              },
            },
          },
          ".ss-select-selection-item": {
            position: "relative",
            flex: 1,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            alignSelf: "center",
            paddingLeft: "1px",
          },
          ".ss-select-selection-search-input": {
            position: "absolute",
            top: "0",
            bottom: "0",
            right: "25px",
            left: "12px",
            background: "transparent",
          },
          ".ss-select-arrow": {
            position: "absolute",
            top: "50%",
            right: "12px",
            display: "flex",
            alignItems: "center",
            height: "12px",
            marginTop: "-6px",
            textAlign: "center",
            pointerEvents: "none",
          },
          ".ss-select-disabled": {
            ".ss-select-selector": {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              color: "rgba(0, 0, 0, 0.35)",
              cursor: "default",
            },
            ".ss-select": {
              cursor: "default",
            },
            ".ss-select-selection-search-input": {
              cursor: "default",
            },
          },
          ".ss-select-show-arrow": {
            ".ss-select-selection-placeholder": {
              paddingRight: "20px",
            },
            ".ss-select-selection-item": {
              paddingRight: "20px",
            },
          },
        },
        ".ss-dropdown-error": {
          ".ss-select-selector": {
            paddingBottom: "2px",
            borderBottom: "2px solid #b60000",
            ".ss-select-selection-item": {
              color: "#b60000",
            },
          },
          ".ss-select-open": {
            ".ss-select-selector": {
              "&:focus-within": {
                borderBottom: "2px solid #b60000",
              },
            },
          },
        },
        ".ss-dropdown-warning": {
          ".ss-select-selector": {
            backgroundColor: theme("colors.warning.30"),
          },
        },
      },
      {
        ".ss-dropdown-no-border": {
          ".ss-select-selector": {
            boxShadow: "none",
          },
        },
      },
      {
        ".ss-dropdown-no-ellipsis": {
          ".ss-select-selection-item": {
            whiteSpace: "unset",
          },
        },
      },
      {
        ".ss-dropdown-show-search": {
          ".ss-select-selection-search-input": {
            border: "none",
            outline: "none",
            width: "100%",
            appearance: "none",
            "&::-webkit-search-cancel-button": {
              display: "none",
              appearance: "none",
            },
          },
        },
      },
      {
        ".ss-select-dropdown": {
          cursor: "pointer",
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          zIndex: "1",
          overflow: "hidden",
          borderRadius: "0.25rem",
          outline: "none",
          boxShadow: "0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%), 0 9px 28px 8px rgb(0 0 0 / 5%)",
          ".ss-select-item-option-content": {
            padding: "6px 12px",
            width: "100%",
            zIndex: "1",
            backgroundColor: "#fff",
            "&:hover": {
              backgroundColor: theme("colors.primary.50"),
            },
          },
          ".ss-select-item-option-selected": {
            ".ss-select-item-option-content": {
              backgroundColor: theme("colors.primary.50"),
            },
          },
          ".ss-select-item-option-state-icon": {
            display: "none",
          },
        },
      },
      {
        ".ss-select-dropdown-hidden": {
          display: "none",
        },
      },
    ]);
  },
  {
    darkMode: "class",
    theme: {
      extend: {
        ...defaultSushiTheme.extend,
      },
    },
  }
);

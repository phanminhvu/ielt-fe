import { createTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Theme {}
  interface ThemeOptions {}
}

declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme {}
}
//
declare module "@mui/material/styles" {
  interface CustomTheme {
    custom?: {
      background: {
        exam: string;
        exercises: string;
        pageNumber: string;
        black: string;
        white: string;
        btnShowModal: string;
        questionItemMultichoose: string;
        noteReading: {
          optionNote: string;
          header: string;
          content: string;
        };
      };
      border: {
        input: {
          main: string;
          bottom: string;
        };
        noteReading: {
          optionItem: string;
        };
        primary: string;
        second: string;
      };
      button: {
        background: {
          main: string;
        };
      };
      text: {
        titleLogin: string;
        btnSubmit: string;
      };
      boxShadow: {
        exercises: string;
        card: string;
        optionNote: string;
        btnSubmit: string;
        nextPage: string;
      };
      flexBox: {
        flexBetweenCenter: {
          display: string;
          justifyContent: string;
          alignItems: string;
        };
        flexCenterCenter: {
          display: string;
          justifyContent: string;
          alignItems: string;
        };
        flexBetWeen: {
          display: string;
          justifyContent: string;
        };
        flexAlignItemsCenter: {
          display: string;
          alignItems: string;
        };
        flexJusCenter: {
          display: string;
          justifyContent: string;
        };
        flexColCenter: {
          display: string;
          alignItems: string;
          flexDirection: string;
        };
      };
      heightHeaderLogo: number;
      heightHeaderExam: number;
      heightHeaderExamListening: number;
    };
  }
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleIntroPage: React.CSSProperties;
    title: React.CSSProperties;
    title32bold: React.CSSProperties;

    cardTitle: React.CSSProperties;
    subCardTitle: React.CSSProperties;
    subtitle: React.CSSProperties;

    subIntroPage: React.CSSProperties;
    descSmallCard: React.CSSProperties;
    descMedium: React.CSSProperties;
    sub20Bold: React.CSSProperties;
    descNormal: React.CSSProperties;
    desc14medium: React.CSSProperties;
    desc16: React.CSSProperties;
    descSmall: React.CSSProperties;
    textTrue: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    titleIntroPage?: React.CSSProperties;

    title?: React.CSSProperties;
    title32bold: React.CSSProperties;

    cardTitle?: React.CSSProperties;
    subCardTitle: React.CSSProperties;
    subtitle: React.CSSProperties;

    subIntroPage: React.CSSProperties;
    descSmallCard: React.CSSProperties;
    descMedium: React.CSSProperties;
    sub20Bold: React.CSSProperties;
    descNormal: React.CSSProperties;
    desc14medium: React.CSSProperties;
    desc16: React.CSSProperties;
    descSmall: React.CSSProperties;
    textTrue: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleIntroPage: true;

    title: true;
    title32bold: true;

    cardTitle: true;
    subCardTitle: true;
    subIntroPage: true;
    descSmallCard: true;
    descMedium: true;
    sub20Bold: true;
    descNormal: true;
    desc14medium: true;
    desc16: true;
    descSmall: true;
    subtitle: true;
    textTrue: true;
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1080,
      xl: 1300,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#65748B",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeSmall: {
          padding: "6px 16px",
        },
        sizeMedium: {
          padding: "8px 20px",
        },
        sizeLarge: {
          padding: "11px 24px",
        },
        textSizeSmall: {
          padding: "7px 12px",
        },
        textSizeMedium: {
          padding: "9px 16px",
        },
        textSizeLarge: {
          padding: "12px 16px",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: "32px 24px",
          "&:last-child": {
            paddingBottom: "32px",
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
        subheaderTypographyProps: {
          variant: "body2",
        },
      },
      styleOverrides: {
        root: {
          padding: "32px 24px",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          display: "flex",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        body: {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          minHeight: "100%",
          width: "100%",
        },
        "#__next": {
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#E6E8F0",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: "auto",
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: "none",
          "& + &": {
            marginLeft: 24,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // color: "#65748B",
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          ".MuiTableCell-root": {
            color: "#374151",
          },
          borderBottom: "none",
          "& .MuiTableCell-root": {
            borderBottom: "none",
            fontSize: "12px",
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: 0.5,
            textTransform: "uppercase",
          },
          "& .MuiTableCell-paddingCheckbox": {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
  },
  custom: {
    background: {
      exam: "#dbe5f5",
      exercises: "#dde3ee",
      pageNumber: "#000000",
      white: "#fff",
      black: "#000000",
      questionItemMultichoose: "#f7f9fb",
      btnShowModal: "#6aade4",
      noteReading: {
        optionNote: "#eee",
        header: "#db0",
        content: "#fff046",
      },
    },
    border: {
      input: {
        main: " #e3f2fd",
        bottom: "#ccc",
      },
      noteReading: {
        optionItem: "#ddd",
      },
      primary: "#ccc",
      second: "#333",
    },
    button: {
      background: {
        main: "#104AC6",
      },
    },
    text: {
      titleLogin: "#0b2283",
      btnSubmit: "#1e415b",
    },
    boxShadow: {
      exercises: "0 0.0714em 0.214em rgb(0 0 0 / 25%)",
      card: "rgba(0, 0, 0, 0.30) 0px 5px 15px",
      optionNote: "0 2px 5px rgb(0 0 0 / 50%)",
      btnSubmit: "0 1px 1px rgb(0 0 0 / 50%)",
      nextPage:
        "rgba(0, 0, 0, 0.03) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.03) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.03) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.02) 0px 2px 1px, rgba(0, 0, 0, 0.01) 0px 4px 2px, rgba(0, 0, 0, 0.01) 0px 8px 4px, rgba(0, 0, 0, 0.01) 0px 16px 8px, rgba(0, 0, 0, 0.01) 0px 32px 16px",
    },
    flexBox: {
      flexBetweenCenter: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      flexCenterCenter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      flexBetWeen: {
        display: "flex",
        justifyContent: "space-between",
      },
      flexAlignItemsCenter: {
        display: "flex",
        alignItems: "center",
      },
      flexJusCenter: {
        display: "flex",
        justifyContent: "center",
      },
      flexColCenter: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
    },
    heightHeaderLogo: 80,
    heightHeaderExam: 60,
    heightHeaderExamListening: 77,
  },

  palette: {
    action: {
      active: "#6B7280",
      focus: "rgba(55, 65, 81, 0.12)",
      hover: "rgba(55, 65, 81, 0.04)",
      selected: "rgba(55, 65, 81, 0.08)",
      disabledBackground: "rgba(55, 65, 81, 0.12)",
      disabled: "rgba(55, 65, 81, 0.26)",
    },
    background: {
      default: "#F9FAFC",
      paper: "#FFFFFF",
    },
    divider: "#E6E8F0",
    primary: {
      main: "#104AC6",
      light: "#828DF8",
      dark: "#3832A0",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#10B981",
      light: "#3FC79A",
      dark: "#0B815A",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#14B8A6",
      light: "#43C6B7",
      dark: "#0E8074",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#2196F3",
      light: "#64B6F7",
      dark: "#0B79D0",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFB020",
      light: "#FFBF4C",
      dark: "#B27B16",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#FFB020",
      light: "#DA6868",
      dark: "#922E2E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#65748B",
      disabled: "rgba(55, 65, 81, 0.48)",
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    "none",
    "0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
    "0px 1px 2px rgba(100, 116, 139, 0.12)",
    "0px 1px 4px rgba(100, 116, 139, 0.12)",
    "0px 1px 5px rgba(100, 116, 139, 0.12)",
    "0px 1px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 6px rgba(100, 116, 139, 0.12)",
    "0px 3px 6px rgba(100, 116, 139, 0.12)",
    "0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
    "0px 5px 12px rgba(100, 116, 139, 0.12)",
    "0px 5px 14px rgba(100, 116, 139, 0.12)",
    "0px 5px 15px rgba(100, 116, 139, 0.12)",
    "0px 6px 15px rgba(100, 116, 139, 0.12)",
    "0px 7px 15px rgba(100, 116, 139, 0.12)",
    "0px 8px 15px rgba(100, 116, 139, 0.12)",
    "0px 9px 15px rgba(100, 116, 139, 0.12)",
    "0px 10px 15px rgba(100, 116, 139, 0.12)",
    "0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
    "0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
    "0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
    "0px 25px 50px rgba(100, 116, 139, 0.25)",
  ],
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: "Arial",
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.57,
    },
    subtitle: {
      fontSize: "32px",
      color: "#000000",
      fontWeight: 700,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.5px",
      lineHeight: 2.5,
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },
    h1: {
      fontWeight: 700,
      fontSize: "3.5rem",
      lineHeight: 1.375,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.375,
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.25rem",
      lineHeight: 1.375,
    },
    h4: {
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.375,
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.375,
    },
    h6: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.375,
    },
    titleIntroPage: {
      fontSize: "48px",
      color: "#000000 ",
      fontWeight: 700,
    },
    title: {
      fontSize: "36px",
      color: "#000000",
      fontWeight: 700,
    },
    title32bold: {
      fontSize: "32px",
      color: "#000000",
      fontWeight: 700,
    },
    cardTitle: {
      fontSize: "24px",
      color: "#36373B",
      fontWeight: 700,
    },
    subCardTitle: {
      fontSize: "16px",
      color: "#36373B",
      fontWeight: 500,
    },
    subIntroPage: {
      fontSize: "20px",
      color: "#36373B",
      fontWeight: 300,
      paddingBottom: "30px",
    },
    descSmallCard: {
      fontSize: "16px",
      color: "#36373B",
      fontWeight: 300,
    },
    descMedium: {
      fontSize: "18px",
      color: "#36373B",
    },
    sub20Bold: {
      fontSize: "20px",
      fontWeight: 700,
    },
    descNormal: {
      fontSize: "18px",
      color: "#5B5C61",
      fontWeight: 300,
      paddingBottom: "20px",
    },
    desc14medium: {
      fontSize: "14px",
      color: "#114AC6",
      fontWeight: 500,
    },
    desc16: {
      fontSize: "16px",
      fontWeight: 300,
    },
    descSmall: {
      fontSize: "14px",
      fontWeight: 300,
    },
    textTrue: {
      fontSize: "20px",
      fontWeight: 600,
      color: "green",
    },
  },
});

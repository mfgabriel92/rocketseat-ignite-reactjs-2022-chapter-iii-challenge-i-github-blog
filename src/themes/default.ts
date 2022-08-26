import { extendTheme } from "@chakra-ui/react";

const defaultTheme = extendTheme({
  colors: {
    gray: {
      100: "#E7EDF4",
      200: "#C3D4E3",
      300: "#AFC2D4",
      400: "#7B96B2",
      500: "#3A536B",
      600: "#1C2F41",
      700: "#112131",
      800: "#0B1B2B",
      900: "#071422",
    },
    blue: {
      500: "#3294F8",
    },
    black: {
      500: "#040F1A",
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.900",
        fontFamily: "Nunito",
        lineHeight: "160%",
        color: "gray.100",
      },
    },
  },
  textStyles: {
    titleS: {
      fontSize: "lg",
      fontWeight: 700,
      lineHeight: "130%",
    },
    titleM: {
      fontSize: "xl",
      fontWeight: 700,
      lineHeight: "130%",
    },
    titleL: {
      fontSize: "2xl",
      fontWeight: 700,
      lineHeight: "130%",
    },
    textS: {
      fontSize: "sm",
      color: "gray.400",
    },
    textM: {
      fontSize: "md",
      color: "gray.300",
    },
    link: {
      fontSize: "xs",
      color: "blue.500",
      cursor: "pointer",
    },
  },
});

export { defaultTheme };

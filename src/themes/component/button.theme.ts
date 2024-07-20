export default {
  baseStyle: {
    borderRadius: "16px",
    boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
    transition: ".25s all ease",
    boxSizing: "border-box",
    _focus: {
      boxShadow: "none",
    },
    _active: {
      boxShadow: "none",
    },
  },
  variants: {
    brand: {
      bg: "brand.900",
      color: "white",
      height: "50",
      fontWeight: "500",
      fontSize: "sm",
      _hover: {
        _disabled: {
          bg: "brand.900",
        },
      },
    },
    clear_button: {
      width: "fit-content",
      height: "fit-content",
      backgroundColor: "transparent",
      color: "#8C88A9",
      borderRadius: "6px",
      fontWeight: "400",
      padding: ".5rem 1.2rem",
      _hover: {},
    },
    save_button: {
      width: "fit-content",
      height: "fit-content",
      backgroundColor: "#7163D0",
      color: "white",
      borderRadius: "6px",
      fontWeight: "400",
      padding: ".5rem 1.2rem",
      _hover: {},
    },
  },
  sizes: {},
};

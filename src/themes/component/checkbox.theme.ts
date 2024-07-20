export default {
  baseStyle: {
    control: {
      borderRadius: "none",
      _checked: {
        bg: "brand.900",
        borderColor: "brand.900",
        _hover: {
          bg: "brand.900",
          borderColor: "brand.900",
        },
        _disabled: {
          bg: "brand.900",
          borderColor: "brand.900",
          opacity: ".4",
        },
      },
      _disabled: {
        borderColor: "gray.500",
        opacity: ".4",
      },
      borderColor: "gray.500",
    },
    icon: {
      color: "white.900",
    },
    container: {},
    label: {
      color: "red",
    },
  },
  variants: {},
  sizes: {},
  defaultProps: {},
};

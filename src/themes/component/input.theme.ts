export default {
  baseStyle: {
    field: {
      fontWeight: 400,
      borderRadius: "8px",
    },
  },
  variants: {
    main: {
      field: {
        bg: "transparent",
        border: "1px solid",
        color: "secondaryGray.900",
        borderColor: "secondaryGray.100",
        borderRadius: "16px",
        fontSize: "sm",
        p: "20px",
        _placeholder: { color: "secondaryGray.400" },
      },
    },
    auth: {
      field: {
        fontSize: "sm",
        fontWeight: "500",
        color: "navy.700",
        bg: "transparent",
        border: "1px solid",
        borderColor: "gray.500",
        borderRadius: "16px",
        _placeholder: { color: "gray.500", fontWeight: "400" },
        height: "3rem",
      },
    },
    authSecondary: {
      field: {
        bg: "transparent",
        border: "1px solid",
        borderColor: "secondaryGray.100",
        borderRadius: "16px",
        _placeholder: { color: "secondaryGray.600" },
      },
    },
    search: {
      field: {
        border: "none",
        py: "11px",
        borderRadius: "inherit",
        _placeholder: { color: "secondaryGray.600" },
      },
    },
  },
};

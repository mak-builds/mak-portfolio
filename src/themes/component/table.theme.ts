export default {
  baseStyle: {},
  variants: {
    users: {
      table: {
        height: "fit-content",
        padding: "1rem",
        position: "relative",
      },
      thead: {
        position: "sticky",
        top: 0,
        backgroundColor: "white.900",
      },
      tbody: {},
      th: {
        fontFamily: "inherit",
        color: "gray.400",
        fontWeight: "bold",
        borderBottom: "1px solid",
        borderColor: "gray.200",
        fontSize: "xs",
        minWidth: "150px",
      },
      td: {
        fontSize: "md",
        color: "secondaryGray.900",
        maxWidth: "200px",
        whiteSpace: "nowrap",
        overflowX: "hidden",
        textOverflow: "ellipsis",
      },
      tr: {
        borderBottom: "1px solid",
        borderColor: "gray.200",
        _hover: {
          bgColor: " #f4f7fe",
        },
      },
    },
  },
  sizes: {},
};

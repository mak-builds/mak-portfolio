import { Box, FlexProps, BoxProps, Flex } from "@chakra-ui/react";

interface ContainerProps extends BoxProps, FlexProps {
  children: React.ReactNode;
  containerAs?: "Flex" | "Box";
}

const Container = ({
  children,
  containerAs = "Box",
  ...rest
}: ContainerProps) => {
  return (
    <>
      {containerAs === "Flex" ? (
        <Flex
          height={"inherit"}
          width={"inherit"}
          bgColor={"brand.100"}
          maxH={"inherit"}
          px={6}
          maxW={"inherit"}
          {...rest}
        >
          {children}
        </Flex>
      ) : (
        <Box
          height={"inherit"}
          width={"inherit"}
          bgColor={"brand.100"}
          maxH={"inherit"}
          maxW={"inherit"}
          {...rest}
        >
          {children}
        </Box>
      )}
    </>
  );
};

export default Container;

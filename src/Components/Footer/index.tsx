import { Flex, Text } from "@chakra-ui/react";

const FooterComponent = () => {
  return (
    <Flex justifyContent={"center"} py={4}>
      <Text as={"h6"}>Made with ❤️ in </Text>
      <Text as={"h6"} pl={2} fontWeight={"bold"}>
        भारत
      </Text>
    </Flex>
  );
};
export default FooterComponent;

import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <Flex justifyContent={"center"} py={4} alignItems={"center"}>
      <Image src={"/makwhitelogo.png"} alt="" height={30} width={40} />
      <Text ml={4} as={"h6"}>
        Made with ❤️ in{" "}
      </Text>
      <Text  as={"h6"} pl={2} fontWeight={"bold"}>
        भारत
      </Text>
    </Flex>
  );
};
export default FooterComponent;

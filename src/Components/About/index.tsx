import { Flex, Text } from "@chakra-ui/react";

const AboutComponent = () => {
  return (
    <Flex mt={12} mx={12}>
      <Flex flexDir={"column"}>
        <Text variant={"48-900"}>Who am I?</Text>
        <Text mt={12}>I am an experienced Software Engineer</Text>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default AboutComponent;

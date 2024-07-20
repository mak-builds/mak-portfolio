import { Flex, Text } from "@chakra-ui/react";

const AboutComponent = () => {
  return (
    <Flex mt={12} mx={12}>
      <Flex flexDir={"column"}>
        <Text variant={"48-900"}>Who am I?</Text>
        <Text mt={12}>
          I am an experienced Software Engineer with over 5 years of expertise
          in Flutter, Nodejs and Golang. Throughout my career, I have
          successfully delivered a wide range of projects, leveraging the power
          of Flutter's cross-platform capabilities and Golang's robustness. I've
          led teams and managed large-scale internal projects while delivering a
          diverse array of successful endeavors. With a strong focus on quality
          and efficiency, I have developed mobile applications, server-side
          systems, and APIs that have met the highest industry standards. I
          thrive in dynamic environments and enjoy collaborating with teams to
          tackle complex challenges. I am enthusiastic about applying my skills
          and knowledge to drive innovation and create exceptional software
          solutions. I am enthusiastic about applying my skills and knowledge to
          drive innovation and create exceptional software solutions.
        </Text>
      </Flex>
      <Flex></Flex>
    </Flex>
  );
};

export default AboutComponent;

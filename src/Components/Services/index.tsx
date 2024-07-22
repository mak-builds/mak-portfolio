import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FaReact, FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

const ServicesComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex mx={isMobile ? 0 : 12} my={isMobile ? 12 : 20} flexDir={"column"}>
      <Text
        as={isMobile ? "h2" : "h3"}
        mb={12}
        textAlign={"center"}
        width={"100%"}
      >
        Services I Provide
      </Text>
      <Flex
        justifyContent={"center"}
        gap={10}
        flexWrap={isLaptop ? "wrap" : "nowrap"}
      >
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <FaReact size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Web Application Development
          </Text>
          <Text as={"h6"} mt={4}>
            Our web app service offers a comprehensive solution tailored to meet
            your unique business needs. We specialize in creating responsive,
            user-friendly, and visually stunning web applications that provide a
            seamless experience across all devices. With a focus on cutting-edge
            technology and best practices, we ensure your application stands out
            in the competitive market.
          </Text>
        </Flex>
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <MdDeveloperMode size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Mobile Application Development
          </Text>
          <Text as={"h6"} mt={4}>
            In todays mobile-first world, having a standout mobile application
            is essential. Our mobile application development service is
            dedicated to creating high-performance, feature-rich apps for both
            iOS and Android platforms. We focus on crafting intuitive interfaces
            and seamless user experiences that keep your users engaged and
            satisfied.
          </Text>
        </Flex>
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <FaServer size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Backend Development
          </Text>
          <Text as={"h6"} mt={4}>
            Behind every great application is a powerful backend infrastructure.
            Our backend development service provides the foundation your
            applications need to run smoothly and efficiently. We specialize in
            building robust, scalable, and secure backend systems that can
            handle complex processes and large volumes of data.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ServicesComponent;

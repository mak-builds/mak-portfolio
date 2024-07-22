"use client";

import { techStacks } from "@/utils";
import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiReactjsLine } from "react-icons/ri";
import {
  SiChakraui,
  SiHtml5,
  SiJavascript,
  SiSass,
  SiTypescript,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";

const marqueeVariants = {
  animate: {
    x: ["100%", "-100%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 30,
        ease: "linear",
      },
    },
  },
};

export default function TechStacks() {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box my={20} mx={isMobile ? 0 : 12}>
      <Flex flexDir={"column"}>
        <h2 style={{ textAlign: "center" }}>Technologies I use</h2>
        <Box className="slider" mt={12}>
          <Flex className="slider-items" gap={isMobile ? "50px" : "100px"}>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <SiHtml5 size={40} />
              <Text as={"h6"} pt={2}>
                HTML
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <DiCss3 size={40} />
              <Text as={"h6"} pt={2}>
                CSS
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <SiJavascript size={40} />
              <Text as={"h6"} pt={2}>
                JavaScript
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <SiTypescript size={40} />
              <Text as={"h6"} pt={2}>
                TypeScript
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <RiReactjsLine size={40} />
              <Text as={"h6"} pt={2}>
                ReactJS
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <TbBrandRedux size={40} />
              <Text as={"h6"} pt={2}>
                Redux
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <FaGithub size={40} />
              <Text as={"h6"} pt={2}>
                Github
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <SiChakraui size={40} />
              <Text as={"h6"} pt={2}>
                ChakraUI
              </Text>
            </Flex>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              border={"1px #5d5d5d solid"}
              px={8}
              py={4}
            >
              <SiSass size={40} />
              <Text as={"h6"} pt={2}>
                SASS
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

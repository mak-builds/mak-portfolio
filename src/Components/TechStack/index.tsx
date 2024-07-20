"use client";

import { techStacks } from "@/utils";
import { Box, Flex, Text } from "@chakra-ui/react";
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
  return (
    <Box mt={12} mx={12}>
      <Flex flexDir={"column"}>
        <h1 style={{ textAlign: "center" }}>Technologies I use</h1>
        <div className="slider">
          <div className="slider-items">
            <SiHtml5 size={70} />
            <DiCss3 size={70} />
            <SiJavascript size={70} />
            <SiTypescript size={70} />
            <RiReactjsLine size={70} />
            <TbBrandRedux size={70} />
            <FaGithub size={70} />
            <SiChakraui size={70} />
            <SiSass size={70} />
          </div>
        </div>
      </Flex>
    </Box>
  );
}

"use client";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];

const HeaderComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      py={6}
      px={isMobile ? 6 : 0}
      borderBottom={"1px #5d5d5d  solid"}
    >
      <Flex>
        <Image src={"/makwhitelogo.png"} alt="" height={50} width={50} />
        {/* <Text ml={4} as={"h2"} fontWeight={"900"}>
          mAk
        </Text> */}
      </Flex>
      <Flex gap={8}>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.path}>
            {link.title}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default HeaderComponent;

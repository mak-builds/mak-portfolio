"use client";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
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
  {
    title: "Contact",
    path: "#contact",
  },
];

const HeaderComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      py={2}
      px={isMobile ? 6 : 0}
      borderBottom={"1px #5d5d5d  solid"}
    >
      <Text as={"h2"} fontWeight={"900"}>
        mAk
      </Text>
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

"use client";
import { Flex, Text } from "@chakra-ui/react";
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

const HeaderComponent = () => (
  <Flex
    alignItems={"center"}
    justifyContent={"space-between"}
    py={2}
    borderBottom={"1px #5d5d5d  solid"}
  >
    <Text variant={"48-800"}>mAk</Text>
    <Flex gap={8}>
      {navLinks.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </Flex>
  </Flex>
);

export default HeaderComponent;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Flex, Text, Link, Divider, useMediaQuery } from "@chakra-ui/react";
import AchievementsSection from "@/Components/Achievements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import AboutComponent from "@/Components/About";
import FooterComponent from "@/Components/Footer";
import TechStacks from "@/Components/TechStack";
import ProjectComponent from "@/Components/Projects/indext";
import ServicesComponent from "@/Components/Services";

const HomeConponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex width={"100%"} px={isMobile ? 6 : 12} flexDir={"column"}>
      <Flex
        width={"inherit"}
        py={isMobile ? 10 : 24}
        flexDir={isMobile ? "column" : "row"}
      >
        <motion.div
          style={{ width: "fit-content" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1>
            Hello, I&apos;m <br></br>
            <TypeAnimation
              sequence={[
                "Mayank Verma",
                2000,
                "Software Developer",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="h1"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <Text
            width={isMobile ? "100%" : "70%"}
            as={"h5"}
            mt={isMobile ? 4 : 0}
          >
            Passionate frontend developer, adept in ReactJS, NextJS, dedicated
            to helping clients achieve their digital goals by crafting
            exceptional user experiences with a keen eye for detail and a
            commitment to excellence.
          </Text>
          <Flex gap={4} my={8}>
            <Link
              target="_blank"
              href="https://www.instagram.com/mayank_mak09/"
            >
              <AiFillInstagram size={40} />
            </Link>
            <Link target="_blank" href="https://github.com/mak-builds">
              <FaGithub size={40} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/mayank-verma9601/"
            >
              <FaLinkedin size={40} />
            </Link>
            <Link
              target="_blank"
              href="https://www.upwork.com/freelancers/~01afc24de1b8cbfa49"
            >
              <FaSquareUpwork size={40} />
            </Link>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Flex flexDir={"column"} alignItems={isMobile ? "inherit" : "center"}>
            {!isMobile && (
              <Image
                src="/images/avatar_aigen.png"
                // src="/images/mak.svg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={500}
                height={400}
              />
            )}
            <Flex gap={4} mt={8}>
              <Link
                target="_blank"
                variant={"button"}
                href="https://www.upwork.com/freelancers/~01afc24de1b8cbfa49?viewMode=1"
              >
                HIRE ME
              </Link>
              <Link
                variant={"button"}
                href="mayank_verma_react.pdf"
                target="_blank"
              >
                <span>Download CV</span>
              </Link>
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
      <AchievementsSection />
      <TechStacks />
      <Divider />
      <AboutComponent />
      <Divider />
      <ServicesComponent />
      <Divider />
      <ProjectComponent />
      <FooterComponent />
    </Flex>
  );
};

export default HomeConponent;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Flex, Text, Link } from "@chakra-ui/react";
import AchievementsSection from "@/Components/Achievements";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import AboutComponent from "@/Components/About";
import FooterComponent from "@/Components/Footer";
import TechStacks from "@/Components/TechStack";

const HomeConponent = () => {
  return (
    <Flex width={"100%"} px={12} flexDir={"column"}>
      <Flex width={"inherit"} py={24}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Text variant={"96-900"}>
            Hello, I&apos;m <br></br>
            <TypeAnimation
              sequence={[
                "Mayank verma",
                2000,
                "Software Developer",
                2000,
                "Web Developer",
                2000,
                "UI/UX Designer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Text>
          <Text variant={"22-400"} width={"70%"}>
            A passionate frontend developer based in Indore, India. I specialize
            in building dynamic, user-friendly web applications that help
            businesses succeed online.
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
          <Flex flexDir={"column"} alignItems={"center"}>
            <Image
              src="/images/avatar_aigen.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={400}
            />
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
      <AboutComponent />
      <FooterComponent />
    </Flex>
  );
};

export default HomeConponent;

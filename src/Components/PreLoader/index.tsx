"use client";

import { Flex, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const Preloader = () => {
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <motion.div
        initial={{ y: 100, opacity: 0, rotate: 10 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: -100, opacity: 0, transition: { duration: 0.5 } }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.5,
        }}
      >
        <h2>{"<React />"}</h2>
      </motion.div>
    </Flex>
  );
};

export default Preloader;

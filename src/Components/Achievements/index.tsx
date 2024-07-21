"use client";
import React from "react";
import { Flex, Text, useMediaQuery } from "@chakra-ui/react";

const achievementsList = [
  {
    metric: "Projects",
    value: "5",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1000",
  },
  {
    metric: "Certifications",
    value: "5",
  },
  {
    metric: "Years",
    value: "3",
    postfix: "+",
  },
];

const AchievementsSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Flex
      justifyContent={"space-around"}
      border={"1px #5d5d5d solid"}
      p={4}
      mt={isMobile ? 0 : 12}
      mx={isMobile ? 0 : 12}
    >
      {achievementsList.map((achievement, index) => {
        return (
          <Flex key={index} alignItems={"center"} flexDir={"column"}>
            <h3>
              {achievement.prefix}
              {achievement.value}
              {achievement.postfix}
            </h3>
            <h6>{achievement.metric}</h6>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default AchievementsSection;

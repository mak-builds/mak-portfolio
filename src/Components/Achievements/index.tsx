"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Flex, Text } from "@chakra-ui/react";

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
  return (
    <Flex
      justifyContent={"space-around"}
      border={"1px #5d5d5d solid"}
      p={4}
      mt={12}
      mx={12}
    >
      {achievementsList.map((achievement, index) => {
        return (
          <Flex key={index} alignItems={"center"} flexDir={"column"}>
            <Text variant={"36-900"} height={"fit-content"}>
              {achievement.prefix}
              {achievement.value}
              {achievement.postfix}
            </Text>
            <p>{achievement.metric}</p>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default AchievementsSection;

import {
  Flex,
  List,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import Image from "next/image";

const AboutComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      mx={isMobile ? 0 : 12}
      my={isMobile ? 12 : 20}
      justifyContent={"space-between"}
      id="about"
    >
      {!isLaptop && (
        <Image
          src="/images/mak.svg"
          alt="hero image"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          width={400}
          height={200}
        />
      )}
      <Flex
        flexDir={"column"}
        alignItems={"flex-start"}
        width={isLaptop ? "100%" : "50%"}
      >
        <Text
          as={isMobile ? "h2" : "h3"}
          textAlign={isMobile ? "center" : "left"}
          mb={4}
          w={"100%"}
        >
          Who am I?
        </Text>
        <Text as={"h6"}>
          A passionate frontend developer with over three years of experience
          specialize in ReactJS and NextJS. I am passionate about crafting
          bespoke websites that empower businesses to thrive online. My
          expertise spans HTML, CSS, JavaScript, TypeScript, and creating
          responsive, user-centric designs. Known for my commitment to
          excellence and attention to detail. Whether working on a new feature
          or refining a user interface, I bring creativity and precision to
          every task. Let’s collaborate to bring your digital vision to life and
          create a compelling online presence that stands out in today’s
          competitive market.
        </Text>
      </Flex>
    </Flex>
  );
};

export default AboutComponent;

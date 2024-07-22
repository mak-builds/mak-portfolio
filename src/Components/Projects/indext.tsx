import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { FaBlog, FaReact, FaServer } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdDeveloperMode } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";

const ProjectComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [isLaptop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex
      mx={isMobile ? 0 : 12}
      my={isMobile ? 12 : 20}
      flexDir={"column"}
      id="projects"
    >
      <Text
        as={isMobile ? "h2" : "h3"}
        mb={12}
        textAlign={"center"}
        width={"100%"}
      >
        Projects
      </Text>
      <Flex
        justifyContent={"center"}
        gap={10}
        flexWrap={isLaptop ? "wrap" : "nowrap"}
      >
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <RiAdminFill size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Admin Portal
          </Text>
          <Text as={"h6"} mt={4} wordBreak={"break-all"}>
            Our Admin Portal is a robust web application designed to streamline
            and simplify administrative tasks. It offers comprehensive
            management capabilities, including user account control, data
            analytics, and real-time reporting. With an intuitive interface,
            administrators can effortlessly monitor system activities, manage
            content, and configure settings. The portal is built using modern
            web technologies ensuring high performance and security.
          </Text>
        </Flex>
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <FaBlog size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Blog
          </Text>
          <Text as={"h6"} mt={4} wordBreak={"break-all"}>
            Our Blogging Website is a dynamic platform designed to empower
            writers and content creators. It features an elegant and
            user-friendly interface that makes publishing and managing content a
            breeze. With robust tools for categorization, tagging, and SEO
            optimization, it ensures your posts reach a wider audience.The
            website supports multimedia content, allowing bloggers to enhance
            their posts with images, videos, and more.
          </Text>
        </Flex>
        <Flex
          border={"1px #5d5d5d solid"}
          flexDir={"column"}
          px={4}
          py={8}
          alignItems={"center"}
        >
          <Flex width={"inherit"} mb={8}>
            <ImProfile size={60} />
          </Flex>
          <Text as={"h5"} fontWeight={"bold"}>
            Personal portfolio
          </Text>
          <Text as={"h6"} mt={4} wordBreak={"break-all"}>
            My Personal Portfolio is a sleek and modern web application designed
            to showcase my skills, projects, and professional journey. Featuring
            a clean and responsive design, it provides an engaging user
            experience across all devices. The portfolio includes sections for
            my biography, services, project highlights, and a contact form. Each
            project is detailed with descriptions, images, and links to live
            demos or repositories.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProjectComponent;

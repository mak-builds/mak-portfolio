import { Image, StyleProps } from "@chakra-ui/react";

// import Icon from "Images/mak.heic";
import Icon from "@/Images/mak.jpg";

interface Properties {
  width?: number;
  height?: number;
  styles?: StyleProps;
}

const MakIcon = ({ width = 34, height = 27, styles }: Properties) => {
  return (
    <Image alt={""} src={"@/Images/mak.jpg"} w={width} h={height} {...styles} />
  );
};

export default MakIcon;

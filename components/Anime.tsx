import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import React, { useState } from "react";

type AnimeType = {
  anime: {
    images: {
      jpg: {
        image_url: string;
      };
    };
    title: string;
  };
};

const Anime = ({ anime }: AnimeType) => {
  const [saved, setSaved] = useState(false);

  const saveAnime = () => {
    setSaved(!saved);
  };
  return (
    <Flex
      w={"180px"}
      h={"250px"}
      display={"inline-block"}
      pos={"relative"}
      p={2}
      cursor={"pointer"}
    >
      <Image
        w={"full"}
        h={"full"}
        display={"block"}
        objectFit={"cover"}
        src={anime.images.jpg.image_url}
      />
      <Box
        position={"absolute"}
        top={"0"}
        left={"0"}
        w={"full"}
        h={"full"}
        opacity={0}
        _hover={{ backgroundColor: "rgb(26 32 44 / 0.8)", opacity: 100 }}
        textColor={"white"}
      >
        <Text
          whiteSpace={"normal"}
          fontSize={"xs"}
          fontWeight={"bold"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"full"}
          textAlign={"center"}
        >
          {anime?.title}
        </Text>
        <Icon
          position={"absolute"}
          top={"4"}
          left={"4"}
          textColor={"#ff760e"}
          as={saved ? BsBookmarkFill : BsBookmark}
          onClick={saveAnime}
        />
      </Box>
    </Flex>
  );
};

export default Anime;

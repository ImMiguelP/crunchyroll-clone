import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { BsBookmarkFill, BsBookmark } from "react-icons/bs";
import React, { useState } from "react";
import { useUserAuth } from "../context/AuthContext";
import { arrayUnion, updateDoc } from "firebase/firestore";

type MangaType = {
  manga: {
    images: {
      jpg: {
        image_url: string;
      };
    };
    mal_id: number;
    title: string;
  };
};

const Manga = ({ manga }: MangaType) => {
  const [saved, setSaved] = useState(false);
  const { user, userData, animeRef } = useUserAuth();
  const test = userData?.savedShows?.map(({ id }) => id);
  console.log(test);

  const saveManga = async () => {
    if (user?.email) {
      setSaved(!saved);
      await updateDoc(animeRef, {
        savedMangas: arrayUnion({
          id: manga.mal_id,
          title: manga.title,
          img: manga.images.jpg.image_url,
        }),
      });
    } else {
      alert("Please log in to save a manga");
    }
  };
  return (
    <Flex
      w="180px"
      h="250px"
      display="inline-block"
      pos="relative"
      p={2}
      cursor="pointer"
    >
      <Image
        alt="anime"
        w="full"
        h="full"
        display="block"
        objectFit="cover"
        src={manga.images.jpg.image_url}
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        w="full"
        h="full"
        opacity={0}
        _hover={{ backgroundColor: "rgb(26 32 44 / 0.8)", opacity: 100 }}
        textColor="white"
      >
        <Text
          whiteSpace="normal"
          fontSize="xs"
          fontWeight="bold"
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="full"
          textAlign="center"
        >
          {manga?.title}
        </Text>
        <Icon
          position="absolute"
          top="4"
          left="4"
          textColor="#ff760e"
          as={saved ? BsBookmarkFill : BsBookmark}
          onClick={saveManga}
        />
      </Box>
    </Flex>
  );
};

export default Manga;

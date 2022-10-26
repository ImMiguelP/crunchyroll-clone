import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Topnews = () => {
  const [news, setNews] = useState([]);
  const images = {
    first:
      "https://deadline.com/wp-content/uploads/2022/08/HUNTERxHUNTER_without-logo.jpg",
    second:
      "https://cdn.oneesports.gg/cdn-data/2022/04/DrStone_AnimeWallpaper-1024x576.webp",
    third:
      "https://assets3.thrillist.com/v1/image/2855064/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg",
    fourth:
      "https://cdn.vox-cdn.com/thumbor/I7I0t87KZ-vf_GSWrH118jwl6d0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23437452/The_Spy_x_Family_Anime_Succeeds_Because_of_Its_Characters_.jpg",
  };

  useEffect(() => {
    axios.get("https://kitsu.io/api/edge/trending/anime").then((response) => {
      setNews(response.data.data);
    });
  }, []);
  return (
    <Flex h="770px" border="10px" borderColor="black">
      {/* First news */}
      <Link href={"https://www.crunchyroll.com/"}>
        <Box
          h="100%"
          w="400px"
          bgColor="crunchyroll"
          mr={-7}
          position="relative"
          cursor="pointer"
        >
          <Image
            src={images.first}
            alt=""
            h="100%"
            w="94%"
            objectFit="cover"
            float="right"
          />
          <Box
            position="absolute"
            top="0"
            left="4"
            w="95%"
            h="100%"
            bgColor="rgb(26 32 44 / 0.5)"
            _hover={{
              opacity: 0,
            }}
            textColor="white"
          >
            <Stack h="100%" justify="end">
              <Heading fontSize="24px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Heading>
            </Stack>
          </Box>
        </Box>
      </Link>
      <VStack h="250px" w="100%">
        {/* Second news */}
        <Link href={"https://www.crunchyroll.com/"}>
          <Box
            h="100%"
            w="800px"
            bgColor="crunchyroll"
            position="relative"
            cursor="pointer"
          >
            <Image
              src={images.second}
              alt=""
              h="100%"
              w="98%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              w="98%"
              h="100%"
              bgColor="rgb(26 32 44 / 0.5)"
              _hover={{
                opacity: 0,
              }}
              textColor="white"
            >
              <Stack h="100%" justify="end">
                <Heading fontSize="24px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Heading>
              </Stack>
            </Box>
          </Box>
        </Link>
        {/* Third news */}
        <Link href={"https://www.crunchyroll.com/"}>
          <Box
            h="100%"
            w="800px"
            bgColor="crunchyroll"
            position="relative"
            cursor="pointer"
          >
            <Image
              src={images.third}
              alt=""
              h="100%"
              w="98%"
              objectFit="cover"
            />
            <Box
              position="absolute"
              top="0"
              left="0"
              w="98%"
              h="100%"
              bgColor="rgb(26 32 44 / 0.5)"
              _hover={{
                opacity: 0,
              }}
              textColor="white"
            >
              <Stack h="100%" justify="end">
                <Heading fontSize="24px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Heading>
              </Stack>
            </Box>
          </Box>
        </Link>
        {/* Fourth news */}
        <Link href={"https://www.crunchyroll.com/"}>
          <Box
            h="100%"
            w="800px"
            bgColor="crunchyroll"
            position="relative"
            cursor="pointer"
          >
            <Image
              src={images.fourth}
              alt=""
              h="100%"
              w="98%"
              objectFit="cover"
              cursor="pointer"
            />

            <Box
              position="absolute"
              top="0"
              left="0"
              w="98%"
              h="100%"
              bgColor="rgb(26 32 44 / 0.5)"
              _hover={{
                opacity: 0,
              }}
              textColor="white"
            >
              <Stack h="100%" justify="end">
                <Heading fontSize="24px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Heading>
              </Stack>
            </Box>
          </Box>
        </Link>
      </VStack>
    </Flex>
  );
};

export default Topnews;

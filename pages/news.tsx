import {
  Avatar,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";

import React, { useEffect, useState } from "react";

const News = () => {
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
    <Stack h="100vh" bgColor="#fafafa">
      <Box w="100%" h="950px" bgImage="newsbg.png" mt="10px">
        <Heading color="crunchyroll" pl="50px">
          Latest News
        </Heading>
        <Stack
          align="center"
          justify="center"
          w="100%"
          h="100%"
          border="1px"
          borderColor="red"
        >
          <Grid
            h="750px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(2, 1fr)"
            gap={3}
            w="1000px"
          >
            <GridItem w="300px" rowSpan={3} bg="crunchyroll">
              <Image
                src={images.first}
                h="100%"
                w="95%"
                alt=""
                objectFit="cover"
                float="right"
              />
              <Box
                position="relative"
                top="0"
                left="0"
                w="100%"
                h="full"
                bgColor="rgb(26 32 44 / 0.8)"
                opacity={100}
                _hover={{
                  opacity: 0,
                }}
                textColor="white"
              ></Box>
            </GridItem>
            <GridItem w="900px" h="250px" bg="crunchyroll">
              <Image
                h="100%"
                w="98%"
                src={images.second}
                alt=""
                objectFit="cover"
              />
              <Box
                position="relative"
                top="0"
                left="0"
                w="100%"
                h="100%"
                mt={3}
                bgColor="rgb(26 32 44 / 0.8)"
                opacity={100}
                _hover={{
                  opacity: 0,
                }}
                textColor="white"
              ></Box>
            </GridItem>
            <GridItem h="250px" bg="crunchyroll">
              <Image
                h="100%"
                w="98%"
                src={images.third}
                alt=""
                objectFit="cover"
              />
              <Box
                position="relative"
                top="0"
                left="0"
                w="100%"
                h="100%"
                mt={3}
                bgColor="rgb(26 32 44 / 0.8)"
                opacity={100}
                _hover={{
                  opacity: 0,
                }}
                textColor="white"
              ></Box>
            </GridItem>
            <GridItem h="250px" bg="crunchyroll">
              <Image
                h="100%"
                w="98%"
                src={images.fourth}
                alt=""
                objectFit="cover"
              />
            </GridItem>
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default News;

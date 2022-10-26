import { Box, Flex, Heading, HStack, Image, Stack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const PrevNews = () => {
  const images = [
    "https://cdn.vox-cdn.com/thumbor/23dWY86RxkdF7ZegvfnY8gFjR7s=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19157811/ply0947_fall_reviews_2019_tv_anime.jpg",

    "https://assets-prd.ignimgs.com/2021/09/09/jujutsu-1631147389461.jpg",

    "https://www.cartoonbrew.com/wp-content/uploads/2020/10/demon_slayer_mugen-580x326.jpg",
  ];

  return (
    <Flex h="100%" w="100%" pl="250px" pt={5} pb={20}>
      <Stack>
        {images.map((item, id) => (
          <HStack key={id}>
            <Link href="https://www.crunchyroll.com/">
              <Box h="200px" w="250px" bgColor="crunchyroll" cursor="pointer">
                <Image
                  h="100%"
                  w="95%"
                  src={item}
                  alt=""
                  objectFit="cover"
                  float="right"
                />
              </Box>
            </Link>
            <Box w="400px" h="200px">
              <Heading fontSize="16px" color="#293241" textAlign="start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Heading>
            </Box>
          </HStack>
        ))}
      </Stack>
      <Link href="https://www.crunchyroll.com/">
        <HStack h="600px" w="100%" pr="300px" justify="end" cursor="pointer">
          <Image
            src="https://ramenparados.com/wp-content/uploads/2020/06/The-God-of-High-School-new-poster-CR.jpg"
            alt=""
            h="100%"
          />
        </HStack>
      </Link>
    </Flex>
  );
};

export default PrevNews;

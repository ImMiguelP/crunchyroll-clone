import { Box, Flex, Heading, Image, Stack, VStack } from "@chakra-ui/react";
import Link from "next/link";

const Topnews = () => {
  const images = [
    "https://deadline.com/wp-content/uploads/2022/08/HUNTERxHUNTER_without-logo.jpg",

    "https://cdn.oneesports.gg/cdn-data/2022/04/DrStone_AnimeWallpaper-1024x576.webp",

    "https://assets3.thrillist.com/v1/image/2855064/828x1500/flatten;scale;webp=auto;jpeg_quality=60.jpg",

    "https://cdn.vox-cdn.com/thumbor/I7I0t87KZ-vf_GSWrH118jwl6d0=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/23437452/The_Spy_x_Family_Anime_Succeeds_Because_of_Its_Characters_.jpg",
  ];
  const image = images.shift();

  return (
    <Flex h="670px" border="10px" borderColor="black">
      {/* First news */}
      <Link href="https://www.crunchyroll.com/">
        <Box
          h="100%"
          w="400px"
          bgColor="crunchyroll"
          mr={-7}
          position="relative"
          cursor="pointer"
        >
          <Image
            src={image}
            alt=""
            h="100%"
            w="97%"
            objectFit="cover"
            float="right"
          />
          <Box
            position="absolute"
            top="0"
            left="2"
            w="97%"
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
      <VStack h="218px" w="100%">
        {/* Second news */}
        {images.map((images, id) => (
          <Link key={id} href="https://www.crunchyroll.com/">
            <Box
              h="100%"
              w="800px"
              bgColor="crunchyroll"
              position="relative"
              cursor="pointer"
            >
              <Image src={images} alt="" h="100%" w="99%" objectFit="cover" />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="99%"
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Heading>
                </Stack>
              </Box>
            </Box>
          </Link>
        ))}
      </VStack>
    </Flex>
  );
};

export default Topnews;

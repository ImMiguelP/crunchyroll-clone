import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { updateDoc } from "firebase/firestore";
import { useUserAuth } from "../../context/AuthContext";
import Link from "next/link";

const queue = () => {
  const { userData, animeRef } = useUserAuth();

  const delManga = async (passedId: number) => {
    try {
      const results = userData?.savedMangas.filter(
        (item) => item.id !== passedId
      );
      await updateDoc(animeRef, {
        savedMangas: results,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Flex w="100%">
      <VStack w="100%" mt={10}>
        <Text>{userData?.userName}s Queue</Text>
        <Stack direction="row" w="1000px" justify="center" p={3}>
          <Link href="/queue">
            <Button w="100px">Anime</Button>
          </Link>
          <Button isDisabled w="100px">
            Manga
          </Button>
        </Stack>
        <Divider bgColor="crunchyroll" />
        <Grid pt={10} templateColumns="repeat(6, 1fr)" gap={6}>
          {userData?.savedMangas.map((item, id) => (
            <Box pos="relative" key={id} cursor="pointer">
              <Image alt="" w="150px" h="225px" src={item.img} />
              <Box
                position="absolute"
                top="0"
                left="0"
                w="full"
                h="full"
                opacity={0}
                _hover={{
                  backgroundColor: "rgb(26 32 44 / 0.8)",
                  opacity: 100,
                }}
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
                  {item?.title}
                </Text>
                <Icon
                  position="absolute"
                  top="4"
                  left="4"
                  textColor="#ff760e"
                  as={BsBookmarkFill}
                  onClick={() => delManga(item.id)}
                />
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default queue;

import { Box, Flex, Grid, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../context/AuthContext";
import { BsBookmarkFill } from "react-icons/bs";
import { updateDoc } from "firebase/firestore";

interface savedAnime {
  id: number;
  img: string;
  title: string;
}

const queue = () => {
  const { userData, animeRef } = useUserAuth();

  const delAnime = async (passedId: number) => {
    try {
      const results = userData?.savedShows.filter(
        (item) => item.id !== passedId
      );
      await updateDoc(animeRef, {
        savedShows: results,
      });
    } catch (error) {
      alert(error);
    }
  };

  console.log(userData);
  return (
    <Flex w="100%">
      <VStack w="100%" mt={10}>
        <Text>{userData?.userName}s Queue</Text>
        <Grid templateColumns="repeat(6, 1fr)" gap={6}>
          {userData?.savedShows.map((item, id) => (
            <Box pos="relative" key={id} cursor="pointer">
              <Image alt="" w="150px" src={item.img} />
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
                  onClick={() => delAnime(item.id)}
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

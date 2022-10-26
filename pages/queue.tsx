import { Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../context/AuthContext";

const queue = () => {
  const { userData } = useUserAuth();

  return (
    <Flex w="100%">
      <VStack w="100%" border="1px">
        <Text>{userData?.userName}s List</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Image
            alt=""
            w="150px"
            src="https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
          />
          <Image
            alt=""
            w="150px"
            src="https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
          />
          <Image
            alt=""
            w="150px"
            src="https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
          />
          <Image
            alt=""
            w="150px"
            src="https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
          />
          <Image
            alt=""
            w="150px"
            src="https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
          />
        </Grid>
      </VStack>
    </Flex>
  );
};

export default queue;

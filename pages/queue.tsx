import { Box, Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../context/AuthContext";

const queue = () => {
  const { userData } = useUserAuth();

  console.log(userData);
  return (
    <Flex w="100%">
      <VStack w="100%" border="1px">
        <Text>{userData?.userName}s List</Text>

        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {userData?.savedShows.map((item, id) => (
            <Image key={id} alt="" w="150px" src={item.img} />
          ))}
        </Grid>
      </VStack>
    </Flex>
  );
};

export default queue;

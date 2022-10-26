import { Box, Heading, Stack, Text } from "@chakra-ui/react";

import Topnews from "../components/Topnews";

const News = () => {
  return (
    <Stack h="100vh" bgColor="#fafafa">
      <Box w="100%" h="950px" bgImage="newsbg.png" mt="10px">
        <Heading color="crunchyroll" pl="50px">
          Latest News
        </Heading>
        <Stack align="center" justify="center" w="100%" h="100%">
          <Topnews />
        </Stack>
      </Box>
      <Stack
        h="60px"
        w="300px"
        bgColor="crunchyroll"
        pr={5}
        textAlign="end"
        justifyContent="center"
      >
        <Box>
          <Heading fontSize="24px">Past News</Heading>
        </Box>
      </Stack>
    </Stack>
  );
};

export default News;

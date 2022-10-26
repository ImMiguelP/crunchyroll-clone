import { Heading, Stack } from "@chakra-ui/react";
import PrevNews from "../components/PrevNews";
import Topnews from "../components/Topnews";

const News = () => {
  return (
    <Stack h="100%" bgColor="#fafafa">
      <Stack w="100%" h="850px" bgImage="newsbg.png" mt="10px">
        <Heading color="crunchyroll" pl="50px">
          Latest News
        </Heading>
        <Stack align="center" justify="center" w="100%" h="800px">
          <Topnews />
        </Stack>
      </Stack>
      <Stack
        h="50px"
        w="300px"
        bgColor="crunchyroll"
        pr={5}
        textAlign="end"
        justifyContent="center"
      >
        <Stack>
          <Heading fontSize="24px">Past News</Heading>
        </Stack>
      </Stack>
      <PrevNews />
    </Stack>
  );
};

export default News;

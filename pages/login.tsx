import { Divider, Flex, Hide, Spinner, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import { useUserAuth } from "../context/AuthContext";

const login = () => {
  const { user, loading } = useUserAuth();

  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  if (loading || user)
    return (
      <Flex w="100%" h="100vh" justify="center" align="center">
        <Spinner />
      </Flex>
    );

  return (
    <Flex w="100%" h="100%" p="10" bg={{ base: "#1a202c", lg: "#13161e" }}>
      <Hide below="lg">
        <Stack
          direction="row"
          mx="auto"
          w={{ base: "100%", xl: "90%" }}
          h="600px"
          bgColor="#1a202c"
          color="white"
        >
          <Signup />
          <Divider orientation="vertical" h="85%" />
          <Login />
        </Stack>
      </Hide>
      <Hide above="lg">
        <Stack
          w="100%"
          pl={{ base: "5%", sm: "25%" }}
          pr={{ base: "5%", sm: "25%" }}
          mx="auto"
        >
          <Login />
          <Signup />
        </Stack>
      </Hide>
    </Flex>
  );
};

export default login;

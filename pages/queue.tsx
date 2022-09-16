import { Flex, Grid, Image, Text, VStack } from "@chakra-ui/react";
import { collection, doc, getDoc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { db } from "../public/firebase";

const queue = () => {
  const { user } = UserAuth();
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const testRef = doc(db, "users", `${user?.email}`);
    const test = await getDoc(testRef);
    setUserData(test?.data());
  };

  useEffect(() => {
    getUserData();
  }, []);
  console.log(userData);
  return (
    <Flex w={"100%"}>
      <VStack mx={"500px"} w={"100%"} border={"1px"}>
        <Text>{userData?.userName}'s' List</Text>
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          <Image
            w={"150px"}
            src={
              "https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
            }
          />
          <Image
            w={"150px"}
            src={
              "https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
            }
          />
          <Image
            w={"150px"}
            src={
              "https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
            }
          />
          <Image
            w={"150px"}
            src={
              "https://cdn03.boxcdn.net/sites/default/files/box_default_og_sharing_image/box-social.jpg"
            }
          />
        </Grid>
      </VStack>
    </Flex>
  );
};

export default queue;

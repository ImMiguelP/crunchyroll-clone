import {
  Avatar,
  Flex,
  Hide,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsBookmarkFill } from "react-icons/bs";
import { IoStorefront } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

import React from "react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { UserAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Flex w={"100%"} h={"100%"}>
      <Flex
        px={"5%"}
        justify={"space-between"}
        h={"40px"}
        fontSize={"12px"}
        w={"100%"}
        // boxShadow={"0px 0px 10px #ff760e"}
      >
        <HStack>
          <Link href={"/"}>
            <Image
              cursor={"pointer"}
              src="logo.png"
              boxSize={"40px"}
              objectFit="contain"
            />
          </Link>
          <InputGroup size={"xs"} w={"120px"}>
            <InputLeftElement children={<SearchIcon color="gray.200" />} />
            <Input rounded={"xl"} type="search" placeholder="Search" />
          </InputGroup>
        </HStack>
        <Hide below="lg">
          <HStack gap={"10"} justify={"center"}>
            <Link href={"/shows"}>
              <Text cursor={"pointer"}>Shows</Text>
            </Link>
            <Link href={"mangas"}>
              <Text cursor={"pointer"}>Mangas</Text>
            </Link>
            <Link href={"news"}>
              <Text cursor={"pointer"}>News</Text>
            </Link>
            <Link href={"games"}>
              <Text cursor={"pointer"}>Games</Text>
            </Link>
          </HStack>
        </Hide>
        <HStack gap={"4"} justify="end">
          <Hide below="sm">
            <VStack cursor={"pointer"}>
              <Icon mt={1} mb={-2} boxSize={"12px"} as={IoStorefront} />
              <Text fontSize={"10px"}>Store</Text>
            </VStack>
            <Link href={"/queue"}>
              <VStack cursor={"pointer"}>
                <Icon mt={1.5} mb={-2} boxSize={"12px"} as={BsBookmarkFill} />
                <Text fontSize={"10px"}>Queue</Text>
              </VStack>
            </Link>
          </Hide>
          <Hide above="lg">
            <Icon cursor={"pointer"} boxSize={"12px"} as={HamburgerIcon} />
          </Hide>
          {!user ? (
            <Link href={"/login"}>
              <VStack cursor={"pointer"}>
                <Icon mt={1} mb={-2} boxSize={"14px"} as={FaUserCircle} />
                <Text fontSize={"10px"}>Login</Text>
              </VStack>
            </Link>
          ) : (
            <Menu>
              <Avatar as={MenuButton} size={"xs"} />
              <MenuList>
                <Link href={"/settings"}>
                  <MenuItem>Settings</MenuItem>
                </Link>
                <MenuItem onClick={handleLogout}>Log Out</MenuItem>
              </MenuList>
            </Menu>
          )}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Navbar;

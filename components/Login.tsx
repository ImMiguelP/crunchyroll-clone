import {
  Button,
  FormControl,
  Heading,
  Hide,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { useUserAuth } from "../context/AuthContext";

const Login = () => {
  const form = useRef<HTMLDivElement>(undefined || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn } = useUserAuth();
  const isInvalid = email === "" || password === "";
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  console.log(email, password);

  const handleSubmit = async (e: any) => {
    if (isInvalid === true) {
      alert("fill out form");
    } else {
      e.preventDefault();
      try {
        await logIn(email, password);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Hide below={"lg"}>
        <Stack p={"10"} w={"65%"}>
          <Heading fontSize={"30px"}>Login</Heading>
          <Text fontSize={"12px"} color={"#a1a1a1"}>
            Already have an account? Log in below.
          </Text>
          <FormControl ref={form} onSubmit={handleSubmit}>
            <Text pt={"25px"}>Email</Text>
            <Input onChange={(e) => setEmail(e.target.value)} type={"email"} />
            <Text pt={"25px"}>Password</Text>
            <InputGroup>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Stack pt={"10px"}>
              <Button h={"50px"} bgColor={"#ff760e"} onClick={handleSubmit}>
                Log In
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Hide>
      <Hide above="lg">
        <Heading fontSize={"30px"}>Log In</Heading>
        <Text fontSize={"12px"} color={"#a1a1a1"}>
          Already have an account? Log in below. Or create a new account.
        </Text>
        <FormControl ref={form} onSubmit={handleSubmit}>
          <Text pt={"25px"}>Email</Text>
          <Input onChange={(e) => setEmail(e.target.value)} type={"email"} />
          <Text pt={"25px"}>Password</Text>
          <InputGroup>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              type={show ? "text" : "password"}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Stack pt={"10px"}>
            <Button h={"50px"} bgColor={"#ff760e"} onClick={handleSubmit}>
              Log In
            </Button>
          </Stack>
        </FormControl>
      </Hide>
    </>
  );
};

export default Login;

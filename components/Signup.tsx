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

const Signup = () => {
  const form = useRef<HTMLDivElement>(undefined || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [bday, setBday] = useState("");
  const { signUp } = useUserAuth();
  const isInvalid = username === "" || email === "" || password === "";
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e: any) => {
    if (isInvalid === true) {
      alert("fill out form");
    } else {
      e.preventDefault();
      try {
        await signUp(email, password, username, bday);
        router.push("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <Hide below="lg">
        <Stack p={"10"} w={"100%"}>
          <Heading fontSize={"30px"}>Sign Up for a Free Account</Heading>
          <Text fontSize={"12px"} color={"#a1a1a1"}>
            Please join Crunchyroll! It's only one click away!
          </Text>
          <FormControl ref={form} onSubmit={handleSubmit}>
            <Stack direction={"row"}>
              <Stack w={"50%"}>
                <Text pt={"25px"}>Email Address</Text>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  type={"email"}
                />
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
              </Stack>
              <Stack w={"50%"}>
                <Text pt={"25px"}>User Name</Text>
                <Input onChange={(e) => setUsername(e.target.value)} />
                <Text pt={"25px"}>Birthday</Text>
                <Input
                  type={"date"}
                  onChange={(e) => setBday(e.target.value)}
                />
              </Stack>
            </Stack>
            <Stack pt={"10px"}>
              <Button
                h={"50px"}
                bgColor={"#ff760e"}
                type={"submit"}
                onClick={handleSubmit}
              >
                Create Account
              </Button>
            </Stack>
          </FormControl>
        </Stack>
      </Hide>
      <Hide above="lg">
        <Heading pt={"100px"} fontSize={"30px"}>
          Sign Up for a Free Account
        </Heading>
        <Text fontSize={"12px"} color={"#a1a1a1"}>
          Please join Crunchyroll! It's only one click away!
        </Text>
        <Text pt={"25px"}>Email Address</Text>
        <Input onChange={(e) => setEmail(e.target.value)} />
        <Text pt={"25px"}>User Name</Text>
        <Input onChange={(e) => setUsername(e.target.value)} />
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
        <Text pt={"25px"}>Birthday</Text>
        <Input type={"date"} onChange={(e) => setBday(e.target.value)} />
        <Button h={"50px"} bgColor={"#ff760e"}>
          Create Account
        </Button>
        <Text
          pt={"10px"}
          fontSize={"12px"}
          color={"#7b737e"}
          textAlign={"center"}
        >
          By creating an account you're agreeing to our Terms & Privacy Policy,
          and you confirm that you are at least 16 years old.
        </Text>
      </Hide>
    </>
  );
};

export default Signup;

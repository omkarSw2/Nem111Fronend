import React, { useState } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [is_married, setIs_married] = useState("");
  const handleSubit = () => {
    const data = {
      name,
      email,
      gender,
      password,
      age,
      city,
      is_married,
    };
    axios
      .post(`http://localhost:8080/users/register`, data)
      .then((res) => {
        console.log(res);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Name </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Gender </FormLabel>
              <Input
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Age </FormLabel>
              <Input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>City </FormLabel>
              <Input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Married </FormLabel>
              <Input
                type="text"
                value={is_married}
                onChange={(e) => setIs_married(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={handleSubit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export { SignupPage };

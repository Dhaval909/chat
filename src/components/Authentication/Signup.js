import { VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <VStack spacing={"5px"}>
      <FormControl isRequired>
        <FormLabel>Name </FormLabel>
        <Input placeholder="Enter Your Name" type="text" />
      </FormControl>
    </VStack>
  );
};

export default Signup;

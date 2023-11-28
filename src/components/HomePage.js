import {
  Container,
  Box,
  Text,
  TabPanels,
  TabPanel,
  Tabs,
  Tab,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import Login from "./Authentication/Login";
import Signup from "./Authentication/Signup";

const HomePage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        display={"flex"}
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m={"40px 0 15px 0"}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"xx-large"} fontFamily={"fantasy"}>
          Chats
        </Text>
      </Box>
      <Box p={3} bg={"white"} w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login></Login>
            </TabPanel>
            <TabPanel>
              <Signup></Signup>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;

import React from "react";
import { Box, Flex, HStack, Button, ButtonGroup, Menu } from "@chakra-ui/react";
import SignUp from "./SignUp.jsx";
import LogOut from "./LogOut.jsx";
import UserProfile from "./UserProfile.jsx";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();

  // Render button based on sign up + log out condition
  const DisplayBtn = () => {
    if (isAuthenticated) {
      return (
        <Button colorScheme="teal">
          <LogOut />
        </Button>
      );
    } else {
      return (
        <Button colorScheme="teal">
          <SignUp />
        </Button>
      );
    }
  };

  return (
    <div>
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Box>Eugene Goh's Assignment</Box>
          </HStack>

          <Flex alignItems={"center"}>
            <Menu>
              <ButtonGroup gap="2">
                <DisplayBtn />
              </ButtonGroup>
            </Menu>
          </Flex>
        </Flex>
      </Box>

      <Box p={4}>
        <UserProfile />
      </Box>
    </div>
  );
}

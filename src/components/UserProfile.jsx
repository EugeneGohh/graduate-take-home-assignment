/* eslint-disable react-hooks/rules-of-hooks */
import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Spinner,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // Loading state
  if (isLoading) {
    return (
      <>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </>
    );
  }

  // Display profile data once authenticated
  const Profile = () => {
    if (isAuthenticated) {
      return (
        <>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={user.picture}
              alt={user.name}
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            p={1}
            pt={2}
          >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
              {user.name}
            </Heading>

            <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
              {user.email}
            </Text>
          </Stack>
        </>
      );
    } else {
      return (
        <div>
          <Text fontSize="lg">Sign up to view your profile</Text>
        </div>
      );
    }
  };

  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "540px" }}
        height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Profile />
      </Stack>
    </Center>
  );
}

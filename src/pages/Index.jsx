import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Divider } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          My Blog
        </Heading>
        <Spacer />
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex mt={8} direction={{ base: "column", md: "row" }}>
        {/* Blog Posts Section */}
        <Box flex="3" mr={{ md: 8 }}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="lg">Post Title 1</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis...</Text>
          </Box>
          <Box mb={8} p={4} borderWidth="1px" borderRadius="lg">
            <Heading as="h3" size="lg">Post Title 2</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis...</Text>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="xl" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 1</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 2</Text>
            </Box>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Text>Recent Post 3</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" mt={8} p={4}>
        <Flex align="center" justify="center">
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <FaFacebook />
            </Link>
            <Link href="#" isExternal>
              <FaTwitter />
            </Link>
            <Link href="#" isExternal>
              <FaInstagram />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
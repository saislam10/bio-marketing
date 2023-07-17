import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Box>
      <Header />
      <Box as="main" p={4}>
        <Heading as="h1" size="2xl">About the Authors</Heading>

        <Flex direction={["column", "row"]} mt={10} spacing={8}>
          <Box flex="1">
            <Image borderRadius="full" boxSize="150px" src="/path-to-author1-image.jpg" alt="Author 1"/>
            <Heading as="h2" size="xl" mt={4}>Author 1 Name</Heading>
            <Text mt={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget. Fusce et 
              varius dolor.
            </Text>
          </Box>
          <Box flex="1">
            <Image borderRadius="full" boxSize="150px" src="/path-to-author2-image.jpg" alt="Author 2"/>
            <Heading as="h2" size="xl" mt={4}>Author 2 Name</Heading>
            <Text mt={4}>
              Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
              Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus 
              orci luctus et ultrices.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default AboutPage;
